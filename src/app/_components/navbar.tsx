import { type Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <div className="navbar bg-cyan-900">
      <div className="flex-1">
        <Link href="/" className="text-xl font-extrabold text-white">
          JOBSEARCH.<i className="text-pink-500">wtf</i>
        </Link>
      </div>
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
    </div>
  );
}
