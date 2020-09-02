# Slack Archives Channel
## 概要
参加人数が0人の公開チャンネルを自動削除する。<br>
AWS Lambda(python)上で動作する想定で構築している。

## ローカルでの実行方法
### Dockerfileをbuild
```
docker build -t slack_archives_channel .
```
### 必要ライブラリのインストール
```
docker run -v "$PWD":/var/task slack_archives_channel
```
### ローカル環境での実行
`$token`はSlackから発行されるAPIトークンに置き換える
```
docker run -v "$PWD":/var/task --env SLACK_API_TOKEN=$token lambci/lambda:python3.8 lambda_function.lambda_handler
```

## Lambda関数のビルドパッケージ作成方法
### Dockerfileをbuild
```
docker build -t slack_archives_channel .
```
### 必要ライブラリのインストール、zipファイルの抽出
```
docker run -v "$PWD":/var/task slack_archives_channel
```
`deploy_package.zip`が抽出される。
### Lambdaにアップロード
[本プロジェクトのcdk](./../cdk)を使用することで`deploy_package.zip`をdeployしたLambda関数が作成され、定期実行される。
