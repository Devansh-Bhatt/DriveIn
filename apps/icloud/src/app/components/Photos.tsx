import Image from "next/image";
import ApplePhotos from "@/app/assets/photos.svg";

export default function Photos({
  user,
}: {
  user: {
    id?: string | null;
  };
}) {
  return (
    <div className="ml-6 col-span-2 bg-white rounded-3xl z-10 h-80 hover:scale-105 overflow-hidden">
      <div className="flex h-[25%] bg-slate-200 ">
        <div className="flex p-4 justify-items-start">
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
            <p className="text-sm">Library 2 Photos, 2 Videos</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0">
        <Image src={ApplePhotos} alt="test" className="object-cover" />
        <Image src={ApplePhotos} alt="test" className="w-full" />
        <Image src={ApplePhotos} alt="test" className="w-full" />
        <Image src={ApplePhotos} alt="test" className="w-full" />
      </div>
    </div>
  );
}
