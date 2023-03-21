#!/bin/bash -xe
#echo prepack for "contracts" package

# cd `dirname $0`
pwd
if git status contracts | grep -v 'nothing to commit'|tee /dev/stderr |grep -q Untracked; then
  exit 1
fi

yarn clean
yarn compile
cd src

rm -rf artifacts types dist

mkdir -p artifacts
cp `find  ../artifacts/contracts -type f | grep -v -E 'Test|dbg|gnosis|bls|IOracle'` artifacts/
npx typechain --target ethers-v5 --out-dir types artifacts/**
rm -rf ../banana-wallet-sdk/src/types
mkdir -p ../banana-wallet-sdk/src/types
cp -r src/types/* ../banana-wallet-sdk/src/types
