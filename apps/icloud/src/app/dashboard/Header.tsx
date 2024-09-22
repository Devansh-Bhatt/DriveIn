import AppleIcon from "@/public/apple-svgrepo-com.svg";
import Image from "next/image";
import AddIcon from "@/public/add-ellipse-svgrepo-com.svg";
import DotsIcon from "@/public/dots-9-svgrepo-com.svg";
import AccountIcon from "@/public/account-svgrepo-com.svg";
import SignoutButton from "../components/SignOutButton";
import { signOut } from "@/auth";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 mb-5 backdrop-blur-lg shadow-lg ">
      <div className="flex justify-between text-white text-md font-bold gap-3 px-5 py-2">
        <div className="flex items-center">
          <Image
            src={AppleIcon}
            alt="AppleIcon"
            className=""
            width={15}
            height={15}
          />
          iCloud
        </div>
        <div className="inline-flex gap-2 items-center">
          <Image
            src={AddIcon}
            alt="AppleIcon"
            className=""
            width={17}
            height={17}
          />
          <Image
            src={DotsIcon}
            alt="AppleIcon"
            className=""
            width={17}
            height={17}
          />
          <Image
            src={AccountIcon}
            alt="AppleIcon"
            className=""
            width={19}
            height={19}
          />
          <SignoutButton
            signOut={async () => {
              "use server";
              await signOut({
                redirectTo: "/api/auth/signin?callbackUrl=/dashboard",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
