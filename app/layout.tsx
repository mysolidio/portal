import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";

import "./styles.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500"],
  fallback: ["sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Solid | Universal Digital Identity",
  description:
    "Verify once, use anywhere, we provides a global standard for digital identity and data self sovereignty",
  icons: {
    icon: [{ url: "/logo_black.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
