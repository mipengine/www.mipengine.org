
set +e

# 移除原zip包
echo "------zip to v2-----"

if [ -s newMIP2.zip ]; then
    rm -r newMIP2.zip
fi

# 压缩
cd v2

if [ $? -ne 0 ]; then
  echo "docs not found"
  exit 1
fi

zip -r -q ../newMIP2.zip ./*

cd ..

echo "------上传bos-----"
#上传
baidubce bos --put-object newMIP2.zip bos://mip-doc/mipengine-org/docs/

set -e
