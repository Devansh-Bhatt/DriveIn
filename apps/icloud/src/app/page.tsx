"use client";
import { trpc } from "@/app/trpc/client";
export default function Home() {
  const test = trpc.note.hello.useQuery();
  return (
    <div>
      <p>{JSON.stringify(test.data)}</p>
    </div>
  );
}
