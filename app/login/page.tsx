"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient";
import { login } from "./actions";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";
export default function Home() {
  const [firstname, setfName] = useState<string>("");
  const [lastname, setlName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const mySchema = z.object({
        firstname: z.string().min(3),
        lastname: z.string().min(3),
        password: z.string().min(6),
        email: z.string().email().min(5),
      });

      // Validate input against schema
      const { data, error } = mySchema.safeParse({
        firstname,
        lastname,
        password,
        email,
      });

      if (error) {
        setErrors(error.errors);
        throw new Error("Validation error");
      }

      setErrors([]);

      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: firstname,
            last_name: lastname,
          },
        },
      });

      if (signUpError) {
        throw signUpError;
      }
      // Perform signup or signin actions here
    } catch (error) {
      console.error("Validation or submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };
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
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/dashboard");
      }
    }

    checkSession();
  }, [router]);

  const handleLinkedInSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "linkedin_oidc",
      });

      if (error) {
        throw error;
      }
      revalidatePath("/dashboard", "layout");
      redirect("/dashboard");
    } catch (error) {
      console.error("Error signing in with LinkedIn:", error);
    }
  };

  return (
    <main className="">
      <div className="h-screen flex items-center">
        <form
          className="flex flex-col gap-10 p-10 w-1/3 mx-auto justify-center border border-primary-100 rounded-lg shadow-sm"
          method="post"
          //   onSubmit={onSubmit}
        >
          <div className="flex gap-3">
            <label className="block text-sm font-medium text-black dark:text-white">
              First Name <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border-[1.5px] px-5 py-3 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={(e) => setfName(e.target.value)}
              />
              <span className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.path === "firstname")?.message}
              </span>
            </label>
            <label className="block text-sm font-medium text-black dark:text-white">
              Last Name <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border-[1.5px] px-5 py-3 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={(e) => setlName(e.target.value)}
              />
              <span className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.path === "lastname")?.message}
              </span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white">
              Email <span className="text-red-500">*</span>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="w-full rounded-lg border-[1.5px] px-5 py-3 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.path === "email")?.message}
              </span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white">
              Password <span className="text-red-500">*</span>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border-[1.5px] px-5 py-3 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="mt-1 text-xs text-red-500">
                {errors.find((error) => error.path === "password")?.message}
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-blue-600 font-medium text-white disabled:cursor-not-allowed disabled:opacity-30"
              disabled={isLoading}
              formAction={login}
            >
              {isLoading ? "Logging..." : "Login"}
            </button>

            <button
              className="h-10 rounded-md bg-blue-600 font-medium text-white disabled:cursor-not-allowed disabled:opacity-30"
              type="button"
              onClick={handleGoogleSignIn}
            >
              {isLoading ? "Signing in..." : "Sign in with Google"}
            </button>
            <button
              className="h-10 rounded-md bg-blue-600 font-medium text-white disabled:cursor-not-allowed disabled:opacity-30"
              type="button"
              onClick={handleLinkedInSignIn}
            >
              Sign in with LinkedIn
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
