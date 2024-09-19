import { noteRouter } from "./routers/noteRouter";
import { userRouter } from "./routers/userRouter";
import { router } from "./trpc";

export const appRouter = router({
  note: noteRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
