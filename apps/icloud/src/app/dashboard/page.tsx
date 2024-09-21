import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./Header";
import ProfileCard from "../components/Profile";
import Photos from "../components/Photos";
import Documents from "../components/Documents";
import Notes from "../components/Notes";

export default async function DashBoard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }
  return (
    <div className="min-h-screen bg-icloud bg-center bg-cover overflow-hidden">
      <Navbar />
      <div className="mx-10 lg:mx-40 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <ProfileCard user={session.user} />
        <Photos user={session.user} />
        <Documents user={session.user} />
        <Notes user={session.user} />
      </div>
    </div>
  );
}
