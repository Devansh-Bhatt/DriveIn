import { publicProcedure, router } from "../trpc";
import { db } from "@/db";
import { users } from "@/db/schema";
import { z } from "zod";

export const userRouter = router({
  getUser: publicProcedure
    .meta({ openapi: { method: "GET", path: "/user" } })
    .query(async () => {
      try {
        const result = await db.query.users.findMany();
        return result!;
      } catch (err) {
        console.log("Error : ", err);
      }
    }),
  addUser: publicProcedure
    .meta({ openapi: { method: "POST", path: "/user" } })
    .input(z.object({ fullname: z.string(), phone: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      await db.insert(users).values({
        fullName: input.fullname,
        phone: input.phone,
      });
    }),
});
