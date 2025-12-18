"use client";
import { signIn } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await signIn(formData)

      if(result.status == "success"){
        router.push("/")
      }
      else{
        console.log(result.status)
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Replace with Firebase / NextAuth / Supabase logic
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <form
        onSubmit={handleEmailLogin}
        className="w-full max-w-sm bg-black p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded mb-4 hover:bg-black-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          name="password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <Link href={"/register"}>Create Account</Link>
      </form>
    </div>
  );
}
