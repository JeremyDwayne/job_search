import "~/styles/globals.css";

import { DM_Sans } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "./_analytics/providers";
import { Toaster } from "~/components/ui/sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "JobSearch...wtf",
  description: "Take the bs out of your search!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={dmSans.variable}>
          <body className="dark bg-[#070815] text-white">
            <div className="grid h-screen grid-rows-[auto,4fr,.5fr]">
              <Header />
              <TRPCReactProvider>
                <main className="mt-8">{children}</main>
              </TRPCReactProvider>
              <Footer />
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
