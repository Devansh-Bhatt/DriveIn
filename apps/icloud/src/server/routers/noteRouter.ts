import { publicProcedure, router } from "../trpc";

export const noteRouter = router({
  hello: publicProcedure.query(() => {
    return {
      message: "Hello World",
    };
  }),
});
