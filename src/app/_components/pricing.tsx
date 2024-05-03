import Link from "next/link";
import { PaperAirplane } from "./svgIcons";
import { env } from "~/env";
import { buttonVariants } from "~/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full overflow-hidden" id="pricing">
      <div className="px-8">
        <div className="mb-20 flex w-full flex-col text-center">
          <div className="mb-4 ">
            <div className="badge badge-accent animate-pulse whitespace-nowrap">
              ✨ Launch discount — 50% OFF ✨
            </div>
          </div>
          <h2 className="mx-auto mb-8 max-w-3xl text-3xl font-bold tracking-tight lg:text-5xl ">
            Stop missing out on job opportunities
          </h2>
          <div className="mx-auto max-w-md text-slate-700">
            Streamline the entire process and enable yourself to navigate your
            career with clarity and confidence.
          </div>
        </div>
        <div className="relative mb-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          <div className="relative w-full max-w-lg">
            <div className="bg-base-200 relative z-10 flex h-full flex-col gap-5 rounded-lg p-8 lg:gap-8">
              <div className="flex flex-wrap gap-2">
                <div className="mb-[4px] flex flex-col justify-end text-lg ">
                  <p className="relative">
                    <span className="text-slate-500/80 line-through">$19</span>
                  </p>
                </div>
                <p className="text-5xl font-extrabold tracking-tight">$9.99</p>
                <div className="mb-[4px] flex flex-col justify-end">
                  <p className="text-slate-content/60 text-xs font-semibold uppercase">
                    USD/month
                  </p>
                </div>
              </div>
              <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                <li className="flex items-center gap-2">
                  <Check className="text-green-400" />
                  <span>Access to all features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-400" />
                  <span>Pay as you go, cancel when you land your job!</span>
                </li>
              </ul>
              <div className="space-y-2">
                <Link
                  className={`w-full ${buttonVariants({ variant: "default" })}`}
                  href={env.NEXT_PUBLIC_STRIPE_MONTHLY_URL}
                >
                  Get JobSearch
                  <span className="ml-2">
                    <PaperAirplane />
                  </span>
                </Link>
                <p className=" text-slate-content-secondary relative text-center text-sm font-medium">
                  Billed monthly,{" "}
                  <span className="underline">cancel anytime</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-lg">
            <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
              <span className="badge text-primary-content whitespace-nowrap border-0 bg-green-200 text-xs font-medium">
                LIFETIME ACCESS
              </span>
            </div>
            <div className="absolute -inset-[1px] z-10 rounded-[9px] border-2 border-green-200"></div>
            <div className="bg-base-200 relative z-10 flex h-full flex-col gap-5 rounded-lg p-8 lg:gap-8">
              <div className="flex flex-wrap gap-2">
                <div className="mb-[4px] flex flex-col justify-end text-lg ">
                  <p className="relative">
                    <span className="text-slate-500/80 line-through">$199</span>
                  </p>
                </div>
                <p className="text-5xl font-extrabold tracking-tight">$99</p>
                <div className="mb-[4px] flex flex-col justify-end">
                  <p className="text-slate-content/60 text-xs font-semibold uppercase">
                    USD
                  </p>
                </div>
              </div>
              <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                <li className="flex items-center gap-2">
                  <Check className="text-green-400" />
                  <span>Access to all current and future features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-400" />
                  <span>
                    <span className="bg-green-200/60 px-1">Lifetime</span>{" "}
                    access with a no recurring fees
                  </span>
                </li>
              </ul>
              <div className="space-y-2">
                <Link
                  className={`w-full ${buttonVariants({ variant: "default" })}`}
                  href={env.NEXT_PUBLIC_STRIPE_LIFETIME_URL}
                >
                  Get JobSearch
                  <span className="ml-2">
                    <PaperAirplane />
                  </span>
                </Link>
                <p className=" text-slate-content-secondary relative text-center text-sm font-medium">
                  One-time payment, then{" "}
                  <span className="underline">it&apos;s yours forever</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-md space-y-4 md:mt-24 md:space-y-6"></div>
    </section>
  );
}
