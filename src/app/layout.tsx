import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "literally unreactable dude",
  description: "ba zin ga",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href='/'>ReactEm</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href="https://github.com/bignerdmonster/ReactEm">GitHub</a></li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a href='/'>Home</a></li>
            <li><a href='https://bigrat.monster'>page tbd</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        <div className="w-full">
          <h1 className="mx-auto text-center text-rose-700 text-obese font-bold hover:underline">Now THIS is epic!</h1>
        </div>
        
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
