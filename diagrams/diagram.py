from diagrams import Diagram
from diagrams.aws.compute import Lambda
from diagrams.aws.management import Cloudwatch
from diagrams.saas.chat import Slack

with Diagram('人数0人Channelアーカイブbatch'):
	Cloudwatch('CloudwatchEvent\n週1回実行') >> Lambda('Lambda') >> Slack()
