import "~/styles/globals.css";

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
          <h1 className="mx-auto text-center text-rose-700 text-obese font-bold hover:underline">First Layout</h1>
        </div>
        {children}
        </body>
    </html>
  );
}
