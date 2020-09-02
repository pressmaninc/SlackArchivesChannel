import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as events from '@aws-cdk/aws-events';
import * as eventsTargets from '@aws-cdk/aws-events-targets';
import * as path from 'path';

export class Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'slack_archives_channel', {
      runtime: lambda.Runtime.PYTHON_3_8,
      // lambdaディレクトリ内にあるzipファイルをデプロイ対象とする
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/deploy_package.zip')),
      handler: 'lambda_function.lambda_handler',
      timeout: cdk.Duration.seconds(60),
      environment: {
        // SLACKのAPI TOKENはlambdaの定数に持たせる
        SLACK_API_TOKEN: this.node.tryGetContext("SLACK_API_TOKEN")
      }
    });

    // 毎週月曜、日本時刻で9時に発火する
    new events.Rule(this, "SlackArchivesChannelScheduleEvent", {
      // 注意：GMTで指定
      schedule: events.Schedule.cron({
        minute: "0",
        hour: "0",
        weekDay: "MON"
      }),
      targets: [new eventsTargets.LambdaFunction(fn)]
    });
  }
}
