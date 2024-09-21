import { publicProcedure, router } from "../trpc";
import { db } from "@/db";
import { documents } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const DocumentRouter = router({
  getDocs: publicProcedure
    .meta({ openapi: { method: "GET", path: "/notes" } })
    .input(z.object({ userId: z.string() }))
    .query(async (opts) => {
      const { input } = opts;
      const result = await db
        .select()
        .from(documents)
        .where(eq(documents.userId, input.userId));
      return result!;
    }),
});
