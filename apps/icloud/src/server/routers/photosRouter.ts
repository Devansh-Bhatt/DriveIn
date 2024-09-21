import { publicProcedure, router } from "../trpc";
import { db } from "@/db";
import { photos } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const PhotosRouter = router({
  getPhotos: publicProcedure
    .meta({ openapi: { method: "GET", path: "/notes" } })
    .input(z.object({ userId: z.string() }))
    .query(async (opts) => {
      const { input } = opts;
      const result = await db
        .select()
        .from(photos)
        .where(eq(photos.userId, input.userId));
      return result!;
    }),
});
