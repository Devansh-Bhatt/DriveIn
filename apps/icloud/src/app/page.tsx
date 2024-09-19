"use client";
import { trpc } from "@/app/trpc/client";
import { useState } from "react";
export default function Home() {
  const getNotes = trpc.note.getNotes.useQuery();
  const addNotes = trpc.note.addNote.useMutation({
    onSettled: () => {
      getNotes.refetch();
    },
  });
  const addUser = trpc.user.addUser.useMutation({
    onSettled: () => {
      getUsers.refetch();
    },
  });
  const getUsers = trpc.user.getUser.useQuery();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [from, setFrom] = useState<number>(1);
  const [fullname, setFullname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  return (
    <div>
      <p>{JSON.stringify(getNotes.data)}</p>
      <p>{JSON.stringify(getUsers.data)}</p>
      <div className="flex flex-col gap-3 max-w-80">
        Title:{" "}
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black"
        />
        Content:{" "}
        <input
          value={content}
          type="text"
          onChange={(e) => setContent(e.target.value)}
          className="border border-black"
        />
        From:{" "}
        <input
          value={from}
          type="text"
          onChange={(e) => setFrom(e.target.valueAsNumber)}
          className="border border-black"
        />
        <button
          className="border border-black"
          onClick={() => addNotes.mutate({ title, content, from })}
        >
          Add Note
        </button>
      </div>
      <div className="flex flex-col gap-3 max-w-80">
        Name:{" "}
        <input
          value={fullname}
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          className="border border-black"
        />
        Phone:{" "}
        <input
          value={phone}
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          className="border border-black"
        />
        <button
          className="border border-black"
          onClick={() => addUser.mutate({ fullname, phone })}
        >
          Add User
        </button>
      </div>
    </div>
  );
}
