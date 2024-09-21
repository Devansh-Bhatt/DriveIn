// import http from "http";
// import { createOpenApiHttpHandler } from "better-trpc-openapi";

// import { appRouter } from ".";

// const server = http.createServer(
//   createOpenApiHttpHandler({
//     router: appRouter,
//     createContext,
//     responseMeta: () => ({
//       headers: {
//         "x-api-version": "1.0.0",
//       },
//     }),
//     onError: ({ error :}) => {
//       console.error("Error occurred:", error);
//     },
//     maxBodySize: 1024 * 1024,
//   }
// );

// server.listen(3002);
