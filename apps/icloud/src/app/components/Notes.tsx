"use client";

import Image from "next/image";
import NoteImage from "@/app/assets/notes.svg";
import { trpc } from "../trpc/client";
import Note_Modal_Add from "./NoteModalAdd";
import Note_Modal_Edit from "./NoteModalEdit";
import { useState } from "react";

export default function Notes({
  user,
}: {
  user: {
    id?: string | null;
  };
}) {
  const getNotes = trpc.note.getNotes.useQuery({ userId: user.id! });
  const [selectedNote, setSelectedNote] = useState<{
    title: string;
    content: string;
  } | null>(null);
  function handleNoteClick(title: string, content: string) {
    setSelectedNote({ title, content });
  }
  return (
    <div className="bg-white rounded-3xl h-80 w-80 z-10 hover:scale-105 overflow-y-auto">
      <div className="h-[25%] bg-slate-200 sticky top-0">
        <div className="flex p-4 justify-items-start">
          <Image
            src={NoteImage}
            alt="note-image"
            className="rounded-lg"
            width={50}
            height={50}
          />
          <div className="ml-3">
            <h1 className="text-xl font-bold">Notes</h1>
            <p className="text-sm">All iCloud</p>
          </div>
          <Note_Modal_Add user={user} meta={{ title: "", content: "" }} />
        </div>
      </div>
      {selectedNote ? (
        <Note_Modal_Edit
          user={user}
          meta={{ title: selectedNote.title, content: selectedNote.content }}
        />
      ) : (
        !selectedNote && (
          <div className="grid grid-cols-1 px-2 pt-2 gap-y-2 text-sm">
            {getNotes.data &&
              getNotes.data.map((note) => {
                return (
                  <div
                    key={note.id}
                    className="p-2 flex flex-col shadow-sm hover:bg-slate-100"
                    onClick={() => handleNoteClick(note.title!, note.content!)}
                  >
                    <div>{note.title}</div>
                    <div className="flex">
                      <p className="overflow-x-hidden text-nowrap">
                        {note.lastUpdated?.slice(0, 10)}
                      </p>
                      <p className="ml-4 text-slate-400 overflow-x-hidden text-nowrap">
                        {note.content}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        )
      )}

      {!getNotes.data && <div className="">No Notes</div>}
    </div>
  );
}
