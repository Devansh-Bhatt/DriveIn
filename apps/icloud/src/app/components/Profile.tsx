import Image from "next/image";
import Link from "next/link";

export default async function ProfileCard({
  user,
}: {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}) {
  return (
    <div className="p-10 bg-slate-200 rounded-3xl h-80 hover:scale-105 overflow-hidden z-10 transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-start bottom-40">
        <Link href={user.image || ""}>
          <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden relative">
            <Image
              src={user.image || ""}
              alt="Profile-image"
              className="object-cover"
              priority={true}
              fill={true}
            />
          </div>
        </Link>
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
