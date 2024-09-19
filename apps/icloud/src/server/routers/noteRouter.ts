import { publicProcedure, router } from "../trpc";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { z } from "zod";

export const noteRouter = router({
  getNotes: publicProcedure.query(async () => {
    const result = await db.query.notes.findMany();
    return result!;
  }),
  addNote: publicProcedure
    .input(
      z.object({ title: z.string(), content: z.string(), from: z.number() }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      try {
        await db.insert(notes).values({
          title: input.title,
          userId: input.from,
          content: input.content,
        });
      } catch (err) {
        console.log("Error: ", err);
      }
    }),
});
