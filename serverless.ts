import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'swapi-weather',
  plugins: ['serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    region: 'us-east-2',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      DYNAMODB_TABLE: 'Fusionados',
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:PutItem',
              'dynamodb:GetItem',
              'dynamodb:Scan',
              'dynamodb:Query',
              'dynamodb:UpdateItem',
              'dynamodb:DeleteItem',
            ],
            Resource: {
              'Fn::GetAtt': ['FusionadosTable', 'Arn'],
            },
          },
        ],
      },
    },
  },
  functions: {
    fusionados: {
      handler: 'src/handlers/fusionados.fusionados',
      events: [{ http: { path: 'fusionados', method: 'get' } }],
      timeout: 30,
    },
    almacenar: {
      handler: 'src/handlers/almacenar.almacenar',
      events: [{ http: { path: 'almacenar', method: 'post' } }],
    },
    historial: {
      handler: 'src/handlers/historial.historial',
      events: [{ http: { path: 'historial', method: 'get' } }],
    },
  },
  resources: {
    Resources: {
      FusionadosTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'Fusionados',
          AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
          KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
          BillingMode: 'PAY_PER_REQUEST',
        },
      },
    },
  },
};

export default serverlessConfiguration;
