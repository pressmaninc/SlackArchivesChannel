# Slack Archives Channel CDK
## 概要
[lambdaディレクトリ](../lambda)で作成したデプロイパッケージを元にlambda関数を作成し、AWS上で定期実行される仕組みをデプロイする。

定期実行は毎週月曜日AM9:00(日本時刻)で実行される。

## 前提
AWS CDKを使用してデプロイを行うため
* AWS cliが使用可能
* AWS cdkが利用可能な状態
* `cdk bootstrap`が完了している

## デプロイ方法
### cdk.jsonを作成
`cp cdk.sample.json cdk.json`を実行し、ファイルを作成する。

ファイル内の`SLACK_API_TOKEN`にSlackから取得したAPI TOKENを設定する

### TypeScriptをビルドする
`npm run build` or `npm run watch`でTypeScriptをビルドする。

### AWSにデプロイを行う
`cdk deploy` でAWSにデプロイを行う。<br>
この時、[lambdaディレクトリ内](../lambda)に`deploy_package.zip`が生成済みであること。

### 削除をする場合
`cdk destroy`でデプロイにより作成されたAWS上のリソースを削除する。
