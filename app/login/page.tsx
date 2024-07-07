"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { redirect, useRouter } from "next/navigation";
import GoogleButton from "./../components/general/GoogleButton";
import Image from "next/image";
export default function Home() {
  const [errors, setErrors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // const onSubmit = async (e: any) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  // };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`, // Your OAuth callback URL
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    async function checkSession() {
      setIsLoading(true);
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/dashboard");
      }
      setIsLoading(false);
    }

    checkSession();
  }, [router]);

  return (
    <main className="bg-gray-50">
      <div className="h-[calc(100vh-72px)] flex items-center justify-center container">
        {!isLoading ? (
          <div className="bg-white p-8 rounded border border-gray-300 max-w-[420px]">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="mx-auto mb-6"
            />
            <h1 className="text-xl font-bold mb-1 text-center">
              Get started with PixaJobs
            </h1>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Use your existing Google account to sign in.
            </p>
            <GoogleButton onClick={handleGoogleSignIn} />
            <p className="text-xs text-gray-500 mt-6 text-center">
              By clicking continue, you agree to PixaJobs Terms of Service and
              Privacy Policy. Google and the Google logo are trademarks of
              Google.
            </p>
          </div>
        ) : (
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="mx-auto mb-6 animate-spin "
          />
        )}
      </div>
    </main>
  );
}
