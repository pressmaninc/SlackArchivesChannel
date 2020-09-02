import os
from slack import WebClient
from slack.errors import SlackApiError

client = WebClient(token=os.environ['SLACK_API_TOKEN'])

def lambda_handler(event, context):
    for channel in get_channel_list()['channels']:
        # チャンネル参加者が0人で未アーカイブ判定
        if channel['num_members'] == 0 and channel['is_archived'] == False:
            # 削除ログとしてチャンネル名を出力する
            print(channel['name'])
            archives(channel['id'])

# 公開チャンネルを取得
# 1000件以上無い想定
def get_channel_list():
    response = client.conversations_list(
        limit=1000,
        types="public_channel"
    )
    return response

# チャンネルをアーカイブする
def archives(channel_id):
    client.conversations_archive(
        channel=channel_id
    )
