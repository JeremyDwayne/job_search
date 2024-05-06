import { X, Check } from "lucide-react";
import Pricing from "~/app/_components/pricing";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="container mx-auto flex flex-col items-center px-3">
          <div className="flex-wrap items-start justify-center text-center md:w-1/2">
            <h1 className="text-6xl font-bold">
              Effortlessly manage your job search.
            </h1>
            <p className="my-8 text-lg leading-normal">
              Enabling you to navigate your career with clarity and confidence.
            </p>
          </div>
          <div className="pt-6 text-center">
            <Button
              variant={"outline"}
              className="light-glow border-secondary px-16 text-center"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <section className="glow glass-container mx-auto my-16 w-fit bg-secondary py-8 text-white">
          <div className="container mx-auto flex flex-wrap pb-12 pt-4">
            <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight">
              Features
            </h2>
            <div className="mb-4 w-full">
              <div className="mx-auto my-0 h-1 w-64 rounded-t bg-slate-500 py-0 opacity-25"></div>
            </div>
            <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
              <div className="flex-1 overflow-hidden rounded bg-white shadow">
                <div className="my-5 px-6 text-gray-800">
                  <ul className="flex-1 space-y-2.5 leading-relaxed">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      Track job applications and scheduled interviews
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      Capturing insightful notes and conduct retrospectives
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      Rank companies and offers to help make informed career
                      choices
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      Compare your current company to those you&apos;re
                      interviewing with
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
              <div className="flex-1 overflow-hidden rounded bg-white shadow">
                <div className="my-5 px-6 text-gray-800">
                  <ul className="flex-1 space-y-2.5 leading-relaxed">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      Discover skill gaps to focus your studies for the next
                      interview
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      Eliminate ghosting through automated reminders for
                      proactive follow-ups
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="text-rose-400" />
                      No more manual spreadsheets or digging through email
                      threads
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="text-rose-400" />
                      Stop wasting time on repetitive tasks and focus on landing
                      your dream job
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
      </div>
    </div>
  );
}
