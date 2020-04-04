#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/gaze9999/youtube-wall.git master:gh-pages
cd -