import { Checkmark, PaperAirplane } from "./svgIcons";

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
          <div className="text-base-content-secondary mx-auto max-w-md">
            Streamline the entire process and enable yourself to navigate your
            career with clarity and confidence.
          </div>
        </div>
        <div className="relative mb-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          <div className="relative w-full max-w-lg">
            <div className="relative z-10 flex h-full flex-col gap-5 rounded-lg bg-base-200 p-8 lg:gap-8">
              <div className="flex flex-wrap gap-2">
                <div className="mb-[4px] flex flex-col justify-end text-lg ">
                  <p className="relative">
                    <span className="absolute inset-x-0 top-[53%] h-[1.5px] bg-base-content"></span>
                    <span className="text-base-content/80">$19</span>
                  </p>
                </div>
                <p className="text-5xl font-extrabold tracking-tight">$9.99</p>
                <div className="mb-[4px] flex flex-col justify-end">
                  <p className="text-xs font-semibold uppercase text-base-content/60">
                    USD/month
                  </p>
                </div>
              </div>
              <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                <li className="flex items-center gap-2">
                  <Checkmark />
                  <span>Access to all features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Checkmark />
                  <span>Pay as you go, cancel when you land your job!</span>
                </li>
              </ul>
              <div className="space-y-2">
                <a
                  className="group btn btn-primary btn-block "
                  href="https://stripe.com/"
                >
                  Get JobSearch
                  <PaperAirplane />
                </a>
                <p className=" text-base-content-secondary relative text-center text-sm font-medium">
                  Billed monthly,{" "}
                  <span className="underline">cancel anytime</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-lg">
            <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
              <span className="badge whitespace-nowrap border-0 bg-primary text-xs font-medium text-primary-content">
                LIFETIME ACCESS
              </span>
            </div>
            <div className="absolute -inset-[1px] z-10 rounded-[9px] bg-primary"></div>
            <div className="relative z-10 flex h-full flex-col gap-5 rounded-lg bg-base-200 p-8 lg:gap-8">
              <div className="flex flex-wrap gap-2">
                <div className="mb-[4px] flex flex-col justify-end text-lg ">
                  <p className="relative">
                    <span className="absolute inset-x-0 top-[53%] h-[1.5px] bg-base-content"></span>
                    <span className="text-base-content/80">$199</span>
                  </p>
                </div>
                <p className="text-5xl font-extrabold tracking-tight">$99</p>
                <div className="mb-[4px] flex flex-col justify-end">
                  <p className="text-xs font-semibold uppercase text-base-content/60">
                    USD
                  </p>
                </div>
              </div>
              <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                <li className="flex items-center gap-2">
                  <Checkmark />
                  <span>Access to all current and future features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Checkmark />
                  <span>
                    <span className="bg-primary/40 px-1">Lifetime</span> access
                    with a no recurring fees
                  </span>
                </li>
              </ul>
              <div className="space-y-2">
                <a
                  className="group btn btn-primary btn-block "
                  href="https://stripe.com/"
                >
                  Get JobSearch
                  <PaperAirplane />
                </a>
                <p className=" text-base-content-secondary relative text-center text-sm font-medium">
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
