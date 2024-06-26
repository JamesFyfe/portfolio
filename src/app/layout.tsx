import "~/styles/globals.css";

import { Inter } from "next/font/google";
import BackgroundScene from "../solarSystem/backgroundScene";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "James Fyfe's Portfolio",
  description: "James Fyfe's Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundScene />
        <div className={`font-sans ${inter.variable}`}>{children}</div>
      </body>
    </html>
  );
}
