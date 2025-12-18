import Link from "next/link";

export default function Header() {
  return (
    <div className="h-16 w-full flex items-center justify-between p-10">
      <Link href="/">Home</Link>
      <Link href="/private">Private</Link>
    </div>
  );
}
