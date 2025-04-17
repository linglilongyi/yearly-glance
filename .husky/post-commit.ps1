# PowerShell 版本的 post-commit 钩子脚本

Write-Host "正在将最新提交添加到 CHANGELOG..."
npm run changelog:append

# 如果 CHANGELOG 有更新，自动提交这些变更
$HasChanges = git diff --quiet CHANGELOG.md CHANGELOG-zh.md; $ChangesExist = $LASTEXITCODE -ne 0

if ($ChangesExist) {
    Write-Host "CHANGELOG 已更新，提交变更..."
    git add CHANGELOG.md CHANGELOG-zh.md
    git commit --amend --no-edit
} else {
    Write-Host "CHANGELOG 没有变化，跳过..."
} 