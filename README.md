# Seabuggy
Seabuggy is a Web3 dashboard.

An agile project that is tracked using [Linear](https://linear.app/seabuggy/team/SEA/active)

## Installation

Use [npm](https://www.npmjs.com/) to install Seabuggy.

```bash
npm install
```

## Usage

Start Seabuggy using the following npm command:

```bash
npm run dev
```

## Environment variables

Load the following environment variables for `Seabuggy` into a `.env.local` file <br />
Path: `.env.local`

| Environment Variable  | Description  | Example |
|---|---|---|
| ALCHEMY_API_KEY  | [Alchemy](https://www.alchemy.com/) API Key | e2rw40234iee03 |
| ALCHEMY_URL_HTTPS  | [Alchemy](https://www.alchemy.com/) https without the API Key  | https://eth-goerli.alchemyapi.io/v2/ |
| ALCHEMY_URL_WEBSOCKET  | [Alchemy](https://www.alchemy.com/) websocket without the API Key  | wss://eth-goerli.alchemyapi.io/v2/ |
| USE_FAKE_PORTS | To conserve API calls - set to true to be provided demo information | TRUE

## Deployment

SeaBuggy is a SSR application that utilizes the optimizations of Next.js.  The underlying infrastructure required to host an SSR application on AWS is generated using the npm package `tf-next`

The Terraform plan will utilize your AWS Access Key & AWS Secret Key and they need to be available to your terminal prior to these steps:

```bash
export AWS_ACCESS_KEY_ID=<access_key_id>
export AWS_SECRET_ACCESS_KEY=<secret_access_key>
```

With your AWS credentials now available, build the application for deployment with the following command:

```bash
npm run dev
```

Within `apps/client/terraform` edit the `main.tf` file with your domains configuration inside of the variables section.

Then initialize Terraform to download the necessary modules - this only needs to be performed once:

```bash
terraform init
```

With the necessary modules downloaded and installed, run the next command to see what resources Terraform will generate when this plan is applied:

```bash
terraform plan
```

And finally to create and implement your SSR infrastructure in your AWS account:

```bash
terraform apply
```

Successful application should provide you with the following outputs:

```bash
api_endpoint = "https://<api-id>.execute-api.us-west-2.amazonaws.com"
api_endpoint_access_policy_arn = "arn:aws:iam::123456789012:policy/access-api"
```

The `api_endpoint` is later used by the CLI tool to create new deployments.

With the `api_endpoint_access_policy_arn` AWS policy you can create new users (and assign that policy) that only can use the CLI tool `tf-next` but cannot access other resources inside of your AWS account.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
