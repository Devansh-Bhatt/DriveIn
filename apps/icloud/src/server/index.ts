import { noteRouter } from "./routers/noteRouter";
import { userRouter } from "./routers/userRouter";
import { PhotosRouter } from "./routers/photosRouter";
import { router } from "./trpc";
import { DocumentRouter } from "./routers/documentRouter";

export const appRouter = router({
  note: noteRouter,
  user: userRouter,
  photos: PhotosRouter,
  documents: DocumentRouter,
});

export type AppRouter = typeof appRouter;
