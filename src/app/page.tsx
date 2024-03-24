import Link from "next/link";
import Navbar from "./_components/navbar";
import Pricing from "./_components/pricing";
import Image from "next/image";

import { getServerAuthSession } from "~/server/auth";
import {
  FeaturesTopWave,
  FeaturesBottomWave,
} from "./_components/wave_separators";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <Navbar session={session} />
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
                  <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
                    <div className="mt-4 w-full px-6 text-xl font-bold text-gray-800">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="mb-5 px-6 text-base text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </div>
                  <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
                    <div className="flex items-center justify-center">
                      <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-cyan-900 px-8 py-4 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                        Action
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
                  <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
                    <div className="mt-4 w-full px-6 text-xl font-bold text-gray-800">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="mb-5 px-6 text-base text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </div>
                  <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
                    <div className="flex items-center justify-center">
                      <button className="ocus:shadow-outline mx-auto my-6 transform rounded-full bg-cyan-900 px-8 py-4 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                        Action
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
                  <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
                    <div className="mt-4 w-full px-6 text-xl font-bold text-gray-800">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="mb-5 px-6 text-base text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </div>
                  <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
                    <div className="flex items-center justify-center">
                      <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-cyan-900 px-8 py-4 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                        Action
                      </button>
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
    </>
  );
}
