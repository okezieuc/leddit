import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Sometype_Mono } from "next/font/google"
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
  title: "Leddit",
  description: "A text-based social media app.",
};

const sometype = Sometype_Mono({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subledditData = await getAllCommunities();

  return (
    <html lang="en" className={sometype.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center bg-gray-50">
            <div className="flex-1 w-full flex flex-col gap-8 items-center px-8 py-8">
              <div className="hidden">
                <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
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
              </div>

              <div className="w-full">
                <div className="flex flex-row items-center">
                  <div className="flex-1 font-bold text-lg">
                    <Link href="/">
                      leddit
                    </Link>
                  </div>
                  <div className="flex flex-row gap-12 bg-amber-100 px-4 py-2 border border-black rounded-lg">
                    <div>
                      @username
                    </div>
                    <div>
                      <AuthButton />
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex gap-8 flex-row w-full">
                <div className="flex-1 bg-gray-100">
                  <div className="flex flex-col max-w-3xl p-12 mx-auto">
                    {children}
                  </div>
                </div>
                <div className="basis-1/4">
                  <div className="bg-yellow-400 p-12 rounded-lg border border-black">
                    <h2 className="font-semibold mb-8">
                      other ledditssss
                    </h2>
                    <div className="flex flex-col gap-4">
                      {
                        subledditData && subledditData.map((s) => <SubledditItem subleddit={s} />)
                      }
                    </div>
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
