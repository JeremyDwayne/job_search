import React from "react";
import type { User } from "next-auth";
import Link from "next/link";
import Image from "next/image";

export default function LoginNav({ user }: { user: User | null }) {
  if (!user) {
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
                alt={user?.name ?? ""}
                src={user?.image ?? ""}
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
              <Link href="/api/auth/signout">Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
