"use client";

import Image from "next/image";
import ApplePhotos from "@/public/photos.svg";
import { UploadButton } from "@/utils/uploadthing";
import { trpc } from "../trpc/client";

export default function Photos({
  user,
}: {
  user: {
    id?: string | null;
  };
}) {
  const photos = trpc.photos.getPhotos.useQuery({ userId: user.id! });
  console.log(photos.data);
  return (
    <div className="md:col-span-2 bg-white rounded-3xl z-10 h-80 hover:scale-105 overflow-hidden transition-transform duration-300 ease-in-out">
      <div className="flex h-[25%] bg-slate-200 items-center justify-between p-4">
        <div className="flex items-center ">
          <div className="overflow-hidden relative">
            <Image
              src={ApplePhotos}
              alt="Apple-Photos"
              className="object-cover"
              // fill={true}
              width={50}
              height={50}
              priority={true}
            />
          </div>
          <div className="ml-3 p-0">
            <h1 className="text-xl font-bold">Photos</h1>
            <p className="text-xs text-slate-500">
              Library &bull; 2 Photos, 2 Videos
            </p>
          </div>
        </div>
        <div>
          <UploadButton
            appearance={{
              button:
                "ut-ready:bg-cyan-600 ut-uploading:cursor-not-allowed rounded-lg bg-red-500 bg-none after:bg-orange-400",
            }}
            endpoint="PhotoUploader"
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-0 overflow-y-auto">
        {photos.data ? (
          photos.data.map((photo) => {
            return (
              <Image
                src={photo.link}
                alt="test"
                key={photo.id}
                className="object-cover w-full rounded-lg p-1 h-[7rem]"
                width={100}
                height={100}
                // fill={true}
              />
            );
          })
        ) : (
          <div>No Photos</div>
        )}
      </div>
    </div>
  );
}
