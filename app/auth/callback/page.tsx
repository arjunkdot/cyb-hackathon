// pages/auth/callback.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    async function handleAuth() {
      const accessToken = new URLSearchParams(window.location.hash).get(
        "access_token"
      );

      if (accessToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: new URLSearchParams(window.location.hash).get(
            "refresh_token"
          )!,
        });

        if (error) {
          console.error("Error setting session:", error);
        } else {
          router.push("/dashboard");
        }
      } else {
        console.error("No access token found");
        router.push("/login");
      }
    }

    handleAuth();
  }, [router]);

  return (
    <div className="h-[calc(100vh-72px)] flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="mx-auto mb-6 animate-spin"
      />
    </div>
  );
}
