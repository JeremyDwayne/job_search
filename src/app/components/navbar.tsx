import { FullLogo } from "./logo";
import LoginNav from "./loginNav";
import { getServerAuthSession } from "~/server/auth";

export const Navbar = async () => {
  const sessionData = await getServerAuthSession();

  return (
    <nav className="navbar bg-cyan-900">
      <div className="flex-1">
        <FullLogo />
      </div>
      <LoginNav user={sessionData?.user ? sessionData.user : null} />
    </nav>
  );
};
