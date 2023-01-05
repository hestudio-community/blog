@echo  off
rd /s /q src\.vuepress\dist
rd /s /q src\.vuepress\.temp
pnpm docs:build
