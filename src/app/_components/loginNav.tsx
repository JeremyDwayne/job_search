import React from "react";
import { type Session } from "next-auth";
import Link from "next/link";
import Image from "next/image";

export default function LoginNav({ session }: { session: Session | null }) {
  if (!session) {
    return (
      <Link href="/api/auth/signin" className="btn btn-primary">
        Login
      </Link>
    );
  } else {
    return (
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            aria-label="profile-button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-slate-100 p-2 shadow"
          >
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
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                {session ? "Sign out" : "Sign in"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
