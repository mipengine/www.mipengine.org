
set +e

# 移除原zip包
echo "------zip to v2-----"

if [ -s newMIP2.zip ]; then
    rm -r newMIP2.zip
fi

# 压缩
cd v2
zip -r -q ../newMIP2.zip ./*
cd ..

echo "------上传bos-----"
#上传
baidubce bos newMIP2.zip bos://assets/mip2/zip

set -e
