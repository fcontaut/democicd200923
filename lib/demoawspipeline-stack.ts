import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //AWS CI-CD Pipeline
    const democicdpipeline = new CodePipeline(this,'demopipeline',
    {
      synth: new ShellStep('Synth', {
        // Use a connection created using AWS console to authenticate to GitHub
        // Other sources are available.
        input: CodePipelineSource.gitHub('fcontaut/democicd200923', 'main'),
        commands: [
          'npm ci',
          'nmp run build',
          'npx cdk synth',
        ],
      })
    })
  }
}
