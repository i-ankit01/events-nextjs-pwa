import Header from "@/components/Header";
import SignIn from "@/components/Signin";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Header/>
      <div>
        <SignIn />
      </div>
      <Link href={"/register"}>Create Account</Link>
    </div>
  );
}
