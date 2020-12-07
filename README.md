### Envirorment
* NodeJS v12.17.0 
* NPM v6.14.4

### Setup
1. Clone the repo
2. Get into the directory
3. Run `npm install`

### Run/Build
Execute `npm run dev:watch` to start the server and watch for file changes

To take build execute `npx tsc --build tsconfig.json` and checkout the `./build` directory

### Learn
Head over to [Sequelize](https://sequelize.org/master/manual/typescript.html#usage) to get an understanding of the ORM and its functionalities

## IMPORTANT POINTS
- Email service is not implemented
- Log table is not implemented

NB: This is the first time using `RabbitMQ` we usually use `AWS SQS` and cron polling