import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FullLogo } from "./logo";
import Link from "next/link";

export const Header = async () => {
  return (
    <header>
      <nav className="p-4" aria-label="Top Navigation">
        <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 text-lg font-semibold md:flex-row md:items-center">
          <div className="flex-1">
            <FullLogo />
          </div>
          <div className="flex flex-row items-center gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <Link href="/applications">Job Applications</Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};
