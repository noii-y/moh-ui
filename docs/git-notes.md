# 本仓库 git 推送备忘（Windows）

## 背景

本机 git 全局配置有一条 URL 重写规则（加速镜像），会把所有 `https://github.com/` 开头地址改写为 `https://ghfast.top/https://github.com/`：

```
url.https://ghfast.top/https://github.com/.insteadof=https://github.com/
```

这条规则对 **clone / fetch（下载）友好**，但 **push（上传）会失败**——镜像不接受 GitHub 认证。

## 推送方法（每次 push 前加一行）

PowerShell：

```powershell
$env:GIT_CONFIG_GLOBAL='NUL'; git push origin master
```

`GIT_CONFIG_GLOBAL='NUL'` 让 git 本次忽略全局配置（只影响本次命令，不改任何配置文件），push 直连 GitHub，走 gh 已配置的凭据（`gh auth login` 已登录 noii-y）。

## 为什么不动全局配置

该规则是你的加速配置，用于日常 clone / fetch 很有用，删除会影响其他 GitHub 操作习惯，故不做修改。若以后想彻底解决，可选方案（到时再议）：

1. 仅保留下载走镜像、上传直连：把全局 `insteadOf` 改为只对 fetch 生效（git 无此精确开关，需用条件 include 或每次 push 加前缀）
2. 改用 SSH 方式 push（配好 SSH key 后不受此规则影响）

## 常用命令速查

```powershell
# 体检（发布门槛 <90 不许发布）
node scripts/check-audit.mjs themes/mo-dark
node scripts/check-audit.mjs themes/mo-light

# 生成清单
node scripts/build-index.mjs

# 提交并推送
git add -A
git commit -m "描述"
$env:GIT_CONFIG_GLOBAL='NUL'; git push origin master
```
