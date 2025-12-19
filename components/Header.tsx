
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import SignOut from "./SignOut";

export default async function Header() {
  const supabase = await createClient();
  // const {data : {user}} = supabase.auth.getUser()
  return (
    <div className="h-16 w-full flex items-center justify-between p-10">
      <Link href="/">Home</Link>
      <Link href="/private">Private</Link>
      <SignOut/>
    </div>
  );
}
