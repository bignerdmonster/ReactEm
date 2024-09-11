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
        <div className="w-full">
          <h1 className="mx-auto text-center text-rose-700 text-obese font-bold hover:underline">tailwind css could only be crafted by the devil himself</h1>
        </div>
        <div className="w-full">
          <button className="btn mx-auto">Button</button>
        </div>
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
