# Slack Archives Channel
Slack上に存在する参加人数が0人のパブリックチャンネルを自動で削除する。<br>
AWS上で定期実行可能な仕組み作成しているが、ローカルでも実行可能である。

## 前提
Slackの以下APIを使用する。
* conversations.list
* conversations.archive

上記APIを使用するため、Tokenに対し以下Scopeが承認されている必要がある。
* channels:read
* channels:write 

## lambda関数の作成、ローカル実行
[lambdaディレクトリ](./lambda)参照

## AWSへのdeploy
[lambdaディレクトリ](./cdk)ディレクトリ参照

## AWS構成図
[diagramsディレクトリ](./diagrams)ディレクトリ参照
