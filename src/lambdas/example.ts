import type { Handler } from "aws-lambda";

export const handler: Handler = async () => {
  console.log("Hello world");
  throw new Error("asdsa");
};
