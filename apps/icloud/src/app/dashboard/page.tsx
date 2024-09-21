import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./Header";
import ProfileCard from "../components/Profile";
import Photos from "../components/Photos";
import Documents from "../components/Documents";
import Notes from "../components/Notes";
import BGImage from "@/app/assets/bg.jpg";
import Image from "next/image";

export default async function DashBoard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }
  return (
    <div className="max-h-screen bg-cover bg-no-repeat bg-center">
      <Image src={BGImage} alt="bg-image" fill={true} className="z-0" />
      <Navbar />
      <div className="mx-60 mt-20 grid grid-cols-3 gap-6 items-center max-h-screen">
        <ProfileCard user={session.user} />
        <Photos user={session.user} />
        <Documents user={session.user} />
        <Notes user={session.user} />
      </div>
      <p>{JSON.stringify(session.user)}</p>
    </div>
  );
}
