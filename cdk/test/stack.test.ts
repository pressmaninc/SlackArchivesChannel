import { SynthUtils } from '@aws-cdk/assert'
import { App } from '@aws-cdk/core'

import { Stack } from '../lib/stack'

test('stack', () => {
  const app = new App(
    {
      context: {
        SLACK_API_TOKEN: 'xoxp'
      }
    }
  );

  const stack = new Stack(app, 'Stack');
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
