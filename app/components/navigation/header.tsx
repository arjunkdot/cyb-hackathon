"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineNotifications } from "react-icons/md";
import Notification from "../notification/Notification";
import { supabase } from "@/lib/supabaseClient";
import useNotifactions from "./../../hooks/useNotifications";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NotificatonType } from "@/types/types";
import { User } from "@supabase/supabase-js";
function Header() {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [notifcations, setNotifications] = useState<NotificatonType[]>([]);
  const { getAllNotifications } = useNotifactions();

  useEffect(() => {
    async function checkIfLoggedIn() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setLoggedInUser(user);

      if (user) {
        const data = await getAllNotifications(user.id);
        if (data) setNotifications(data);
      }
    }
    checkIfLoggedIn();
  }, [getAllNotifications]);

  const handleLogout = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
      setLoggedInUser(null);
    }
  };
  return (
    <div className="navbar bg-base-100 p-0 border border-b border-slate-200">
      <div className="container">
        <div className="flex-1">
          <Link
            href={`/`}
            className="btn btn-ghost text-xl px-0 duration-150 transition-linear hover:bg-transparent hover:scale-105">
            <Image src="/logo.svg" alt="logo" width={36} height={36} />
          </Link>
        </div>
        <div className="flex  items-center gap-1">
          {loggedInUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <MdOutlineNotifications className="text-xl" />
                  {notifcations && (
                    <span className="badge badge-sm indicator-item">
                      {notifcations.length}
                    </span>
                  )}
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 min-w-[200px] shadow">
                {notifcations && <Notification notifications={notifcations} />}
              </div>
            </div>
          ) : null}
          {loggedInUser ? (
            <div className="dropdown dropdown-end">
              <button className="btn btn-sm btn-ghost text-xs font-semibold">
                {loggedInUser.email}
              </button>
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
            <Link
              href="/login"
              className="btn btn-primary text-white font-bold py-1 px-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
