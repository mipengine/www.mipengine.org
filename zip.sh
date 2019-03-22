
set +e

npm run build

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
