import { auth } from "@/auth";
import { db } from "@/db";
import { documents, photos } from "@/db/schema";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  PhotoUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const session = await auth();
      return { user: session?.user };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(photos).values({
        link: file.url,
        userId: metadata.user?.id,
      });
    }),
  DocumentUploader: f({
    "application/pdf": { maxFileSize: "4MB" },
  })
    .middleware(async () => {
      const session = await auth();
      return { user: session?.user };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(documents).values({
        link: file.url,
        userId: metadata.user?.id,
        name: file.name,
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
