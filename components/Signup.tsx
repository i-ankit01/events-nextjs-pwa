"use client";

import { signUp } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleEmailSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const result = await signUp(formData);

      if (result.status == "success") {
        router.push("/login");
      } else {
        console.log(result.status);
        setError(result.status);
      }
    } catch (err) {
      console.error(err);
      setError("some error occured")
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    // Same endpoint can handle both login & signup
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleEmailSignup}
        className="w-full max-w-sm bg-black p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <button
          type="button"
          onClick={handleGoogleSignup}
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
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          name="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          name="password"
          required
        />

        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <Link href={"/login"}>Already have an account ? Login</Link>
      </form>
    </div>
  );
}
