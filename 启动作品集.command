#!/bin/bash
cd "$(dirname "$0")"
echo "正在启动作品集，稍等几秒会自动打开浏览器..."
( sleep 3 && open "http://localhost:5173/" ) &
npm run dev
