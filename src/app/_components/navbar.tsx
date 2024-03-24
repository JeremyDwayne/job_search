import { type Session } from "next-auth";
import { FullLogo } from "./logo";
import LoginNav from "./loginNav";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav className="navbar bg-cyan-900">
      <div className="flex-1">
        <FullLogo />
      </div>
      <LoginNav session={session} />
    </nav>
  );
}
