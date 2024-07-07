"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineNotifications } from "react-icons/md";
import Notification from "../notification/Notification";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<{} | null>(null);
  useEffect(() => {
    async function checkIfLoggedIn() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setLoggedInUser(user);
    }
    checkIfLoggedIn();
  }, [loggedInUser]);

  const handleLogout = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
    }
  };
  return (
    <div className="navbar bg-base-100 p-0 border border-b border-slate-200">
      <div className="container">
        <div className="flex-1">
          <Link href={`/`} className="btn btn-ghost text-xl px-0">
            <Image src="/logo.svg" alt="logo" width={36} height={36} />
          </Link>
        </div>
        <div className="flex gap-1">

          {loggedInUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <MdOutlineNotifications className="text-2xl" />
                  <span className="badge badge-sm indicator-item">2</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 min-w-[200px] shadow">
                <Notification />
              </div>
            </div>
          ) : null}

          {loggedInUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src="/avatar.jpg"
                    width={36}
                    height={36}
                  />
                </div>

              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={(e) => handleLogout(e)}>Logout</a>
                </li>
              </ul>
            </div>

          ) : (
            <button className="btn btn-primary text-white font-bold py-1 px-8">
              Login
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default Header;
