
set +e

# npm run build

rm -rf api codelabs guide components extensions img assets/img mip docs tmp index.html v2 ui contribute about news

node node_modules/webpack/bin/webpack.js --config src/style/webpack.config.js

node src/index.js

# 移除原zip包
echo "------zip to v2-----"

if [ -s newMIP2.zip ]; then
    rm -r newMIP2.zip
fi

# 压缩
cd v2
zip -r -q ../newMIP2.zip ./*
cd ..

set -e
