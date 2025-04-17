// 文件类型注释已移除，使用ESLint禁用规则处理
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const changelogOption = require("./changelog-option");

// 主函数
async function appendLatestCommitToChangelog() {
	try {
		// 1. 获取最新提交的哈希
		const latestCommitHash = execSync("git rev-parse HEAD")
			.toString()
			.trim();

		// 2. 获取上一个版本的标签
		try {
			// 只用于检查是否有标签，不保存标签值
			execSync("git describe --tags --abbrev=0").toString().trim();
		} catch (error) {
			console.log("找不到之前的标签，将使用第一个提交作为起点");
			execSync("git rev-list --max-parents=0 HEAD").toString().trim();
		}

		// 3. 获取最新提交的详细信息
		const commitDetails = execSync(
			`git log ${latestCommitHash} -n 1 --pretty=format:"%H%n%s%n%b"`
		).toString();
		const [hash, subject, ...bodyLines] = commitDetails.split("\n");
		const body = bodyLines.join("\n");

		// 4. 解析提交信息
		const commitPattern = /^(\w+)(?:\(([^)]+)\))?: (.+)$/;
		const match = subject.match(commitPattern);

		if (!match) {
			console.error("提交消息格式不符合约定式提交规范");
			return;
		}

		const [, type, scope, message] = match;

		// 5. 检查是否是 BREAKING CHANGE
		const isBreaking = body.includes("BREAKING CHANGE:");
		let notes = [];

		if (isBreaking) {
			const breakingMatch = body.match(
				/BREAKING CHANGE: ([\s\S]+?)(?:\n\n|$)/
			);
			if (breakingMatch) {
				notes.push({
					title: "BREAKING CHANGE",
					text: breakingMatch[1].trim(),
				});
			}
		}

		// 6. 创建提交对象
		const commit = {
			type,
			scope,
			subject: message,
			hash,
			shortHash: hash.substring(0, 7),
			notes,
		};

		// 7. 转换提交信息
		const transformedCommit = changelogOption.writerOpts.transform(
			commit,
			{}
		);

		if (!transformedCommit) {
			console.log("提交类型不在允许列表中，跳过添加到 CHANGELOG");
			return;
		}

		// 8. 格式化为 CHANGELOG 条目
		let entry = "";

		if (transformedCommit.scope) {
			entry = `* **${transformedCommit.scope}:** ${transformedCommit.subject} ([${transformedCommit.shortHash}](https://github.com/Moyf/yearly-glance/commit/${transformedCommit.hash}))\n`;
		} else {
			entry = `* ${transformedCommit.subject} ([${transformedCommit.shortHash}](https://github.com/Moyf/yearly-glance/commit/${transformedCommit.hash}))\n`;
		}

		// 9. 读取当前的 CHANGELOG
		const changelogPath = path.join(process.cwd(), "CHANGELOG.md");
		const changelogContent = fs.readFileSync(changelogPath, "utf8");

		// 10. 查找正确的位置插入新条目
		const lines = changelogContent.split("\n");
		let sectionIndex = -1;
		let targetTypeIndex = -1;

		// 找到最新版本部分的开始
		for (let i = 0; i < lines.length; i++) {
			if (lines[i].startsWith("# [")) {
				sectionIndex = i;
				break;
			}
		}

		if (sectionIndex === -1) {
			throw new Error("找不到 CHANGELOG 中的版本部分");
		}

		// 在版本部分中找到匹配的类型部分
		for (let i = sectionIndex; i < lines.length; i++) {
			if (lines[i].startsWith("### " + transformedCommit.type)) {
				targetTypeIndex = i;
				break;
			}
			// 如果遇到下一个版本的开始，则停止搜索
			if (i > sectionIndex && lines[i].startsWith("# [")) {
				break;
			}
		}

		// 11. 插入新条目
		if (targetTypeIndex !== -1) {
			// 在类型标题后找到插入位置
			let insertIndex = targetTypeIndex + 1;
			while (insertIndex < lines.length && lines[insertIndex] === "") {
				insertIndex++;
			}
			lines.splice(insertIndex, 0, entry);
		} else {
			// 需要创建新的类型部分
			let insertIndex = sectionIndex + 3; // 版本行后的空行后
			// 查找合适的插入位置
			while (
				insertIndex < lines.length &&
				!lines[insertIndex].startsWith("### ") &&
				!lines[insertIndex].startsWith("# [")
			) {
				insertIndex++;
			}

			lines.splice(
				insertIndex,
				0,
				"",
				`### ${transformedCommit.type}`,
				"",
				entry
			);
		}

		// 12. 写回 CHANGELOG 文件
		fs.writeFileSync(changelogPath, lines.join("\n"));
		console.log("成功将最新提交添加到 CHANGELOG.md");

		// 13. 使用相同的逻辑处理中文 CHANGELOG
		const changelogZhPath = path.join(process.cwd(), "CHANGELOG-zh.md");
		if (fs.existsSync(changelogZhPath)) {
			try {
				// 按需加载中文配置
				const changelogZhOption = require("./changelog-option-zh");
				const transformedCommitZh =
					changelogZhOption.writerOpts.transform(commit, {});

				if (transformedCommitZh) {
					const changelogZhContent = fs.readFileSync(
						changelogZhPath,
						"utf8"
					);
					const linesZh = changelogZhContent.split("\n");
					let sectionIndexZh = -1;
					let targetTypeIndexZh = -1;

					for (let i = 0; i < linesZh.length; i++) {
						if (linesZh[i].startsWith("# [")) {
							sectionIndexZh = i;
							break;
						}
					}

					if (sectionIndexZh === -1) {
						throw new Error("找不到中文 CHANGELOG 中的版本部分");
					}

					for (let i = sectionIndexZh; i < linesZh.length; i++) {
						if (
							linesZh[i].startsWith(
								"### " + transformedCommitZh.type
							)
						) {
							targetTypeIndexZh = i;
							break;
						}
						if (
							i > sectionIndexZh &&
							linesZh[i].startsWith("# [")
						) {
							break;
						}
					}

					let entryZh = "";
					if (transformedCommitZh.scope) {
						entryZh = `* **${transformedCommitZh.scope}:** ${transformedCommitZh.subject} ([${transformedCommitZh.shortHash}](https://github.com/Moyf/yearly-glance/commit/${transformedCommitZh.hash}))\n`;
					} else {
						entryZh = `* ${transformedCommitZh.subject} ([${transformedCommitZh.shortHash}](https://github.com/Moyf/yearly-glance/commit/${transformedCommitZh.hash}))\n`;
					}

					if (targetTypeIndexZh !== -1) {
						let insertIndexZh = targetTypeIndexZh + 1;
						while (
							insertIndexZh < linesZh.length &&
							linesZh[insertIndexZh] === ""
						) {
							insertIndexZh++;
						}
						linesZh.splice(insertIndexZh, 0, entryZh);
					} else {
						let insertIndexZh = sectionIndexZh + 3;
						while (
							insertIndexZh < linesZh.length &&
							!linesZh[insertIndexZh].startsWith("### ") &&
							!linesZh[insertIndexZh].startsWith("# [")
						) {
							insertIndexZh++;
						}

						linesZh.splice(
							insertIndexZh,
							0,
							"",
							`### ${transformedCommitZh.type}`,
							"",
							entryZh
						);
					}

					fs.writeFileSync(changelogZhPath, linesZh.join("\n"));
					console.log("成功将最新提交添加到 CHANGELOG-zh.md");
				}
			} catch (error) {
				console.error("处理中文 CHANGELOG 时出错:", error);
			}
		}
	} catch (error) {
		console.error("添加提交到 CHANGELOG 失败:", error);
	}
}

// 执行主函数
appendLatestCommitToChangelog();
