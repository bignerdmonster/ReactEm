import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
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
      <body>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ReactEm</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
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
