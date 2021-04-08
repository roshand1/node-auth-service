const development = {
  awsRegion: 'us-east-1',
  awsSecretsManagerName: 'cyb_workbench_cognito_keys'
};

const production = {
  awsRegion: 'us-east-1',
  awsSecretsManagerName: 'cyb_workbench_cognito_keys'
};

module.exports =
  process.env.NODE_ENV !== 'production'
    ? development
    : production;
