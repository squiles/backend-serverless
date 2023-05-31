import { test, expect } from "vitest";
import { Lambda } from "aws-sdk";

import "dotenv/config";

const lambda = new Lambda({
  apiVersion: "2015-03-31",
  endpoint: `http://localhost:${process.env.LAMBDA_PORT}`,
  region: "us-east-1",
});

test("http server is up and running", async () => {
  const response = await lambda
    .invoke({
      FunctionName: "backendServerless-dev-api",
      InvocationType: "RequestResponse",
      Payload: JSON.stringify({ data: "foo" }),
    })
    .promise();
  expect(response.StatusCode).toBe(200);
}, 10000);
