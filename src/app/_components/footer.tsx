import Link from "next/link";
import { FullLogo } from "./logo";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 p-8 md:flex-row">
      <div className="flex-1">
        <FullLogo />
        <p className="mt-3 text-sm text-slate-300/80">
          A comprehensive platform empowering software engineers to effortlessly
          manage their job search.{" "}
        </p>
        <p className="mt-3 text-sm text-slate-300/60">
          Copyright © 2024 - All rights reserved
        </p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          <li>
            <Link
              href="#pricing"
              className="inline-flex min-h-11 items-center no-underline hover:text-pink-400 hover:underline"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="mailto:jeremy@jobsearch.wtf"
              className="inline-flex min-h-11 items-center no-underline hover:text-pink-400 hover:underline"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex min-h-11 items-center no-underline hover:text-pink-400 hover:underline"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex min-h-11 items-center no-underline hover:text-pink-400 hover:underline"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              href="https://www.jeremywinterberg.com"
              className="inline-flex min-h-11 items-center no-underline hover:text-pink-400 hover:underline"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="inline-flex min-h-11 items-center no-underline hover:text-pink-400 hover:underline"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </footer>

    /*
    <footer className="bottom-0 mt-10 border-t border-slate-900 p-8 text-white">
      <div className="container mx-auto px-8">
        <div className="flex w-full flex-col py-6 md:flex-row">
          <div className="mb-6 mr-6 flex-1">
            <FullLogo />
            <p className="mt-3 text-sm text-slate-300/80">
              A comprehensive platform empowering software engineers to
              effortlessly manage their job search.{" "}
            </p>
            <p className="mt-3 text-sm text-slate-300/60">
              Copyright © 2024 - All rights reserved
            </p>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                <Link
                  href="#pricing"
                  className="text-gray-200 no-underline hover:text-pink-400 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                <Link
                  href="mailto:jeremy@jobsearch.wtf"
                  className="text-gray-200 no-underline hover:text-pink-400 hover:underline"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                <Link
                  href="#"
                  className="text-gray-200 no-underline hover:text-pink-400 hover:underline"
                >
                  Terms of service
                </Link>
              </li>
              <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                <Link
                  href="#"
                  className="text-gray-200 no-underline hover:text-pink-400 hover:underline"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">More</p>
            <ul className="list-reset mb-6">
              <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                <Link
                  href="https://www.jeremywinterberg.com"
                  className="text-gray-200 no-underline hover:text-pink-400 hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                <Link
                  href="#"
                  className="text-gray-200 no-underline hover:text-pink-400 hover:underline"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    */
  );
};
