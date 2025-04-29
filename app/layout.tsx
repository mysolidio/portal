import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";

import "./styles.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500"],
  fallback: ["sans-serif"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Solid | Universal Digital Identity",
  description:
    "Verify once, use anywhere, we provides a global standard for digital identity and data self sovereignty",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} bg-[#F3F5F7]`}>
        {children}
      </body>
    </html>
  );
}
