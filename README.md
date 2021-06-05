# serverless-base

Boilerplate for a [serverless framework](https://github.com/serverless/serverless) service.

## About 📖

The project includes a basic serverless framework setup with TypeScript support
as well as linting and formatting configuration.

AWS resources are provisioned using CloudFormation templates located in `resources`
directory.

IAM permissions for lambdas are managed using [`serverless-iam-roles-per-function` plugin](https://github.com/functionalone/serverless-iam-roles-per-function)
by adding role statements to `iam-role-statements` directory.

This is not meant to be a base for an entire project but rather a simple service
within a relatively small project. The template also doesn't make any assumptions
about the kind of service that will be built on top of it. So whether you are
building an api using api gateway or appsync or only doing background processing
you don't need to remove a bunch of stuff you don't need.

## Getting started ⚙️

Create `.env` file by filling the missing values from `.env.template` and run the
following command:

```shell
yarn install
yarn deploy
```

## License ⚖️

[![license](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Contact 🙋‍♂️

- [Personal website](https://aleksac.me)
- <a target="_blank" href="http://twitter.com/aleksa_c_"><img alt='Twitter followers' src="https://img.shields.io/twitter/follow/aleksa_c_.svg?style=social"></a>
- aleksacukovic1@gmail.com
