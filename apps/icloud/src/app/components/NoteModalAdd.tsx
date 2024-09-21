import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { trpc } from "../trpc/client";

export default function Note_Modal_Add({
  user,
  meta,
}: {
  user: {
    id?: string | null;
  };
  meta: {
    title?: string | null;
    content?: string | null;
  };
}) {
  const from = user.id!;
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>(meta.title!);
  const [content, setContent] = useState<string>(meta.content!);
  const getNotes = trpc.note.getNotes.useQuery({ userId: user.id! });
  const addNotes = trpc.note.addNote.useMutation({
    onSettled: () => {
      getNotes.refetch();
    },
  });
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function handleAddNote() {
    addNotes.mutate({ title, content, from });
    close();
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 z-10 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Add Note
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 rounded-lg text-black font-bold bg-yellow-300 p-2 mb-1"
              >
                Add Note
              </DialogTitle>
              <div className="flex flex-col gap-2">
                <h3>Title</h3>
                <input
                  type="text"
                  className="rounded-lg w-max"
                  value={meta.title!}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <h3>Content</h3>
                <textarea
                  className="rounded-lg"
                  rows={5}
                  cols={20}
                  value={meta.content!}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleAddNote}
                >
                  Add
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
