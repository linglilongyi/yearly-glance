// 文件类型指示，表明这是 CommonJS 模块
// @ts-check

/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

/**
 * 设置 Husky 钩子的初始化脚本
 */
// 确保 .husky 目录存在
const huskyDir = path.join(process.cwd(), ".husky");
if (!fs.existsSync(huskyDir)) {
	fs.mkdirSync(huskyDir, { recursive: true });
}

// 确保 .husky/_ 目录存在
const huskyHelperDir = path.join(huskyDir, "_");
if (!fs.existsSync(huskyHelperDir)) {
	fs.mkdirSync(huskyHelperDir, { recursive: true });
}

// 设置钩子脚本的可执行权限
try {
	const postCommitPath = path.join(huskyDir, "post-commit");
	const huskyShPath = path.join(huskyHelperDir, "husky.sh");

	// 检查操作系统类型并使用适当的方式设置权限
	const isWindows = os.platform() === "win32";

	if (fs.existsSync(postCommitPath)) {
		if (isWindows) {
			// Windows 环境下不需要设置可执行权限
			console.log("Windows 环境中，跳过设置执行权限");
		} else {
			// 非 Windows 环境使用 chmod 命令
			fs.chmodSync(postCommitPath, 0o755);
			console.log("设置 post-commit 钩子的可执行权限成功");
		}
	} else {
		console.error("post-commit 钩子文件不存在");
	}

	if (fs.existsSync(huskyShPath)) {
		if (isWindows) {
			// Windows 环境下不需要设置可执行权限
			console.log("Windows 环境中，跳过设置执行权限");
		} else {
			// 非 Windows 环境使用 chmod 命令
			fs.chmodSync(huskyShPath, 0o755);
			console.log("设置 husky.sh 脚本的可执行权限成功");
		}
	} else {
		console.error("husky.sh 脚本文件不存在");
	}
} catch (error) {
	console.error("设置钩子脚本的可执行权限失败:", error);
}
