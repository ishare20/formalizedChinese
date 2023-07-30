yarn run build2github
distPath="/e/code/BLT/formalizedChinese/build/github/*"

destPath="/e/code/BLT/formalizedChinese/build/formalizedChinese"

echo "复制编译文件夹"
cp -r $distPath $destPath

echo "推送github"

cd $destPath
git add .
git commit -m 'update'
git push origin build:build