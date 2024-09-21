import { generateOpenApiDocument } from "better-trpc-openapi";

import { appRouter } from ".";

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "tRPC OpenAPI",
  version: "1.0.0",
  baseUrl: "http://localhost:3000",
});
