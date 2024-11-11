import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import SubledditItem from "./subleddit-item";
import AuthButton from "@/components/auth-button";
import { getAllCommunities } from "@/utils/supabase/api";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subledditData = await getAllCommunities();

  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center bg-gray-50">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 hidden">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Next.js Supabase Starter</Link>
                    <div className="flex items-center gap-2">
                      <DeployButton />
                    </div>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>

              <div className="flex flex-row w-full">
                <div className="flex-1 min-h-vh bg-gray-100">
                  <div className="flex flex-col max-w-3xl p-12 mx-auto">
                    {children}
                  </div>
                </div>
                <div className="basis-1/4 min-h-screen bg-gray-300 p-12">
                  <Link href="/" className="mb-12 text-red-900 font-bold">home</Link>
                  <AuthButton />
                  <h2 className="font-semibold mb-8 mt-12">
                    other leddits
                  </h2>
                  <div className="flex flex-col gap-2">
                    {
                      subledditData && subledditData.map((s) => <SubledditItem subleddit={s} />)
                    }
                  </div>
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
