import { router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({});

const server = createHTTPServer({ router: appRouter });
server.listen(3000);
export type AppRouter = typeof appRouter;
