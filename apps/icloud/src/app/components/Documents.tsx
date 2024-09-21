import Image from "next/image";
import PDFImage from "@/app/assets/pdf.svg";
import DriveImage from "@/app/assets/drive.svg";

export default function Documents({
  user,
}: {
  user: {
    id?: string | null;
  };
}) {
  return (
    <div className="col-span-2 bg-white rounded-3xl z-10 h-80 hover:scale-105 overflow-hidden">
      <div className="h-[25%] bg-slate-200 ">
        <div className="flex p-4 items-center">
          <Image
            src={DriveImage}
            alt="pdf"
            className="rounded-lg"
            width={50}
            height={50}
          />
          <div className="ml-3 flex flex-col gap-0 justify-items-start">
            <h1 className="text-xl font-bold">Drive</h1>
            <p className="text-sm">Recents</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 p-2 overflow-hidden  ">
        <div className="flex px-4 items-center text-md hover:bg-slate-100 shadow-sm">
          <Image
            src={PDFImage}
            alt="pdf"
            className="rounded-lg"
            width={30}
            height={30}
          />
          <div className="ml-6">
            <h1 className="text-md">Devu</h1>
            <p className="text-sm text-slate-400">PDF</p>
          </div>
        </div>
        <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
          <div className="max-h-20 max-w-20">
            <Image
              src={PDFImage}
              alt="pdf"
              className="rounded-lg"
              width={30}
              height={30}
            />
          </div>
          <div className="ml-6">
            <h1 className="text-md">Devu</h1>
            <p className="text-sm text-slate-400">PDF</p>
          </div>
        </div>
        <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
          <Image
            src={PDFImage}
            alt="pdf"
            className="rounded-lg"
            width={30}
            height={30}
          />
          <div className="ml-6">
            <h1 className="text-md">Devu</h1>
            <p className="text-sm text-slate-400">PDF</p>
          </div>
        </div>
        <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
          <Image
            src={PDFImage}
            alt="pdf"
            className="rounded-lg"
            width={30}
            height={30}
          />
          <div className="ml-6">
            <h1 className="text-md">Devu</h1>
            <p className="text-sm text-slate-400">PDF</p>
          </div>
        </div>
        <div className="flex px-4 items-center text-xl hover:bg-slate-100 shadow-sm">
          <Image
            src={PDFImage}
            alt="pdf"
            className="rounded-lg"
            width={30}
            height={30}
          />
          <div className="ml-6">
            <h1 className="text-md">Devu</h1>
            <p className="text-sm text-slate-400">PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
