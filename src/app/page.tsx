import { Navbar } from "./_components/Navbar";
import Pricing from "./_components/Pricing";
import Image from "next/image";

import {
  FeaturesTopWave,
  FeaturesBottomWave,
} from "./_components/WaveSeparators";
import Footer from "./_components/Footer";
import { Checkmark, Crossmark } from "./_components/SvgIcons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="w-screen">
            <div className="container mx-auto flex max-w-5xl flex-col flex-wrap items-center px-3 md:flex-row">
              <div className="flex w-full flex-col items-start justify-center text-center text-black md:w-2/5 md:text-left">
                <p className="tracking-loose w-full uppercase">Job Hunting?</p>
                <h1 className="my-4 text-5xl font-bold leading-tight">
                  Effortlessly manage your job search.
                </h1>
                <p className="mb-8 text-2xl leading-normal">
                  Enabling engineers to navigate their career with clarity and
                  confidence.
                </p>
              </div>
              <div className="w-full py-6 text-center md:w-3/5">
                <Image
                  src="/hero.png"
                  alt="hero image"
                  width={613}
                  height={529}
                />
              </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
              <FeaturesTopWave />
            </div>
            <section className="bg-cyan-900 py-8 text-white">
              <div className="container mx-auto flex flex-wrap pb-12 pt-4">
                <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight">
                  Features
                </h2>
                <div className="mb-4 w-full">
                  <div className="mx-auto my-0 h-1 w-64 rounded-t bg-cyan-500 py-0 opacity-25"></div>
                </div>
                <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
                  <div className="flex-1 overflow-hidden rounded bg-white shadow">
                    <div className="my-5 px-6 text-base text-gray-800">
                      <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                        <li className="flex items-center gap-2">
                          <Checkmark />
                          Track job applications and scheduled interviews
                        </li>
                        <li className="flex items-center gap-2">
                          <Checkmark />
                          Capturing insightful notes and conduct retrospectives
                        </li>
                        <li className="flex items-center gap-2">
                          <Checkmark />
                          Rank companies and offers to help make informed career
                          choices
                        </li>
                        <li className="flex items-center gap-2">
                          <Checkmark />
                          Compare your current company to those you&apos;re
                          interviewing with
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
                  <div className="flex-1 overflow-hidden rounded bg-white shadow">
                    <div className="my-5 px-6 text-base text-gray-800">
                      <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                        <li className="flex items-center gap-2">
                          <Checkmark />
                          Discover skill gaps to focus your studies for the next
                          interview
                        </li>
                        <li className="flex items-center gap-2">
                          <Checkmark />
                          Eliminate ghosting through automated reminders for
                          proactive follow-ups
                        </li>
                        <li className="flex items-center gap-2">
                          <Crossmark />
                          No more manual spreadsheets or digging through email
                          threads
                        </li>
                        <li className="flex items-center gap-2">
                          <Crossmark />
                          Stop wasting time on repetitive tasks and focus on
                          landing your dream job
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FeaturesBottomWave />
          </div>
          <Pricing />
        </div>
      </main>
      <Footer />
    </>
  );
}
