import { publicProcedure, router } from "../trpc";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const noteRouter = router({
  getNotes: publicProcedure
    .meta({ openapi: { method: "GET", path: "/notes" } })
    .input(z.object({ userId: z.string() }))
    .query(async (opts) => {
      const { input } = opts;
      const result = await db
        .select()
        .from(notes)
        .where(eq(notes.userId, input.userId));
      return result!;
    }),
  addNote: publicProcedure
    .meta({ openapi: { method: "POST", path: "/notes" } })
    .input(
      z.object({ title: z.string(), content: z.string(), from: z.string() }),
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
  updateNote: publicProcedure
    .input(
      z.object({ title: z.string(), content: z.string(), from: z.string() }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const datum = new Date();
      try {
        await db
          .update(notes)
          .set({
            title: input.title,
            content: input.content,
            lastUpdated: datum,
          })
          .where(eq(notes.id, input.from));
      } catch (err) {
        console.log("Error : ", err);
      }
    }),
});
