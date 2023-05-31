import {
  LambdaClient,
  GetFunctionCommand,
  ListFunctionsCommand,
} from "@aws-sdk/client-lambda";

const listLamdbaFunctions = async () => {
  const client = new LambdaClient({ region: "us-east-1" });
  const command = new ListFunctionsCommand({});
  const list = await client.send(command);
};
