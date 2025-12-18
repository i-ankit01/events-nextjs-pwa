import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp() {
  
}

export async function signInWithGoogle() {
  const origin = (await headers()).get("origin");
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider : 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });
  
  if(error){
    redirect("/error")
  }
  else if(data.url){
    return redirect(data.url)
  }
  return null
}
