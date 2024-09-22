"use client";

export default function SignoutButton({ signOut }: { signOut: () => void }) {
  return (
    <button
      className="bg-white text-red-500 text-sm p-2 border border-red-500 rounded-lg"
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </button>
  );
}
