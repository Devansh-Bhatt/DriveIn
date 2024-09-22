"use client";

import Image from "next/image";
import PDFImage from "@/public/pdf.svg";
import DriveImage from "@/public/drive.svg";
import { UploadButton } from "@/utils/uploadthing";
import { trpc } from "../trpc/client";

export default function Documents({
  user,
}: {
  user: {
    id?: string | null;
  };
}) {
  const { data: docs, refetch } = trpc.documents.getDocs.useQuery({
    userId: user.id!,
  });
  return (
    <div className="md:col-span-2 bg-white rounded-3xl z-10 h-80 hover:scale-105 overflow-hidden transition-transform duration-300 ease-in-out">
      <div className="h-[25%] bg-slate-200 ">
        <div className="flex p-4 items-center justify-between">
          <div className="flex mb-2">
            <Image
              src={DriveImage}
              alt="pdf"
              className="rounded-lg"
              width={50}
              height={50}
            />
            <div className="ml-3 flex flex-col gap-0 justify-items-start">
              <h1 className="text-xl font-bold">Drive</h1>
              <p className="text-xs text-slate-500">Recents</p>
            </div>
          </div>
          <div>
            <UploadButton
              appearance={{
                button:
                  "ut-ready:bg-cyan-600 ut-uploading:cursor-not-allowed rounded-lg bg-red-500 bg-none after:bg-orange-400",
              }}
              endpoint="DocumentUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                alert("Upload Completed");
                refetch();
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 p-2 overflow-hidden  ">
        {docs ? (
          docs.map((doc) => {
            return (
              <>
                <a onClick={() => window.open(doc.link)}>
                  <div
                    className="flex px-4 items-center text-md hover:bg-slate-100 shadow-sm"
                    key={doc.id}
                  >
                    <Image
                      src={PDFImage}
                      alt="pdf"
                      className="rounded-lg"
                      width={30}
                      height={30}
                    />
                    <div className="ml-6 overflow-x-hidden">
                      <h1 className="text-md overflow-x-hidden text-nowrap">
                        {doc.name}
                      </h1>
                      <p className="text-sm text-slate-400">PDF</p>
                    </div>
                  </div>
                </a>
              </>
            );
          })
        ) : (
          <div>No Docs</div>
        )}
      </div>
    </div>
  );
}
