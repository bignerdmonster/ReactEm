import "~/styles/globals.css";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Reac",
  description: "ba zin ga",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href='/'>ReactEm</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <SignedOut><SignInButton><p className="text-slate-950 font-bold hover:font-semibold bg-gradient-to-r from-red-700 to-yellow-400">Sign In</p></SignInButton></SignedOut>
              <SignedIn><UserButton></UserButton></SignedIn>
            </li>
            <li><a href="https://github.com/bignerdmonster/ReactEm">GitHub</a></li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
            <li><a href='/'>Home</a></li>
            <li><a href='/sentry-example-page'>Sentry Testing Area</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
      </div>
        <div className="w-full">
          <h1 className="mx-auto text-center text-rose-700 text-obese font-bold hover:underline">ReactEm</h1>
        </div>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
