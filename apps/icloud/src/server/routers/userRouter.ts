import { publicProcedure, router } from "../trpc";
import { db } from "@/db";
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
});
