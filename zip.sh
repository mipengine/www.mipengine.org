
set +e

cd `dirname $0`
dir=`pwd`
webpack_bin=$dir/node_modules/webpack/bin/webpack.js
webpack_config=$dir/src/style/webpack.config.js
compiler_entry=$dir/src/index.js

rm -rf api codelabs guide components extensions img assets/img mip docs tmp index.html v2 ui contribute about news

node $webpack_bin --config $webpack_config >> errlog 2>&1

node $compiler_entry >> errlog 2>&1

if [ $? -ne 0 ]; then
  echo "docs build failed"
  exit 1
else
  echo "build successful"
fi

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

set -e
