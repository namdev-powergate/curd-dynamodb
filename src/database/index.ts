import * as AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

const dynamoDB = new AWS.DynamoDB({
  endpoint: process.env.DYNAMO_DB_ENDPOINT,
  region: process.env.DYNAMO_DB_REGION,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient({
  endpoint: process.env.DYNAMO_DB_ENDPOINT,
  region: process.env.DYNAMO_DB_REGION,
});

export { dynamoClient, dynamoDB };
