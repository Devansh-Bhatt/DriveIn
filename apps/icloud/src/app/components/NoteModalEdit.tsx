import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { trpc } from "../trpc/client";

export default function Note_Modal_Edit({
  user,
  meta,
  onclose,
}: {
  user: {
    id?: string | null;
  };
  meta: {
    title?: string | null;
    content?: string | null;
    id?: string | null;
  };
  onclose: () => void;
}) {
  const from = meta.id!;
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState<string>(meta.title!);
  const [content, setContent] = useState<string>(meta.content!);
  const getNotes = trpc.note.getNotes.useQuery({ userId: user.id! });
  const updateNote = trpc.note.updateNote.useMutation({
    onSettled: () => {
      getNotes.refetch();
    },
  });
  function close() {
    setIsOpen(false);
    onclose();
  }

  function handleAddNote() {
    updateNote.mutate({ title, content, from });
    close();
  }
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none"
        onClose={() => {}}
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
                  className="rounded-lg w-max p-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <h3>Content</h3>
                <textarea
                  className="rounded-lg p-2"
                  rows={5}
                  cols={20}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleAddNote}
                >
                  Save
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => {
                    close();
                  }}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
