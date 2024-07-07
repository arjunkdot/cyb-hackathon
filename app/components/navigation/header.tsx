import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineNotifications } from "react-icons/md";
import Notification from "../notification/Notification";

function Header() {
  return (
    <div className="navbar bg-base-100 p-0 border border-b border-slate-200">
      <div className="container">
        <div className="flex-1">
          <Link href={`/`} className="btn btn-ghost text-xl px-0">
            <Image src="/logo.svg" alt="logo" width={36} height={36} />
          </Link>
        </div>
        <div className="flex gap-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <MdOutlineNotifications className="text-2xl" />
                <span className="badge badge-sm indicator-item">2</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 min-w-[200px] shadow"
            >
              <Notification />
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={`/talent/user`} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
