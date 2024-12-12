import Link from "next/link";

export function Course() {
  return (
    <Link href="/videos">
      <button className="border-2 dark:border-white hover:bg-accentDark md:px-6 p-3 md:p-4 border-black w-40 md:w-60 min-w-fit text-sm !shadow-[5px_5px_1px_1px_#000000]">
        checkout tutorials
      </button>
    </Link>
  );
}
