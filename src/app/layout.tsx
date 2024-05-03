import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "JobSearch...wtf",
  description: "Take the bs out of your search!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="cupcake">
        <body className={`font-sans ${inter.variable}`}>
          <Header />
          <TRPCReactProvider>
            <main className="m-8 flex min-h-screen flex-col items-center bg-white">
              {children}
            </main>
          </TRPCReactProvider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
