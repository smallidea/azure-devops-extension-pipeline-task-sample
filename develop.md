
## 初始化项目

> 安装node，建议安装node XXXX

> 安装 <a href='https://github.com/microsoft/tfs-cli'>Cross-platform CLI</a>
``` shell
npm i -g tfx-cli

```

> 初始化 <a href='https://docs.npmjs.com/cli/v7/configuring-npm/package-json'>package.json</a>，如果不加y的话将需要输入package中的一些必要的信息，比如包的名称、发布人等等信息
``` shell
npm init -y
```

> 安装包
```
npm install typescript@4.0.2 --save-dev
npm install azure-pipelines-task-lib --save
npm install @types/node --save-dev
npm install @types/q --save-dev
```

> 排除指定的文件
```
echo node_modules > .gitignore
echo **\\dist >> .gitignore
```

## tasks.json 文件配置
TODO

## vss-extension.json 文件配置
TODO


