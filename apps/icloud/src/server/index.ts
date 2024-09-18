import { noteRouter } from "./routers/noteRouter";
import { router } from "./trpc";

export const appRouter = router({
  note: noteRouter,
});
export type AppRouter = typeof appRouter;
