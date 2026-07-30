import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import NoiseOverlay from "../components/NoiseOverlay";
import ScrollProgress from "../components/ScrollProgress";
import ThreeBackground from "../components/ThreeBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hamza Khan | Full-Stack Developer",
    template: "%s | Hamza Khan",
  },
  description:
    "Portfolio of Hamza Khan, a full-stack developer building modern, interactive, and high-performance web applications.",
  keywords: [
    "Hamza Khan",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Hamza Khan" }],
  creator: "Hamza Khan",

  openGraph: {
    title: "Hamza Khan | Full-Stack Developer",
    description:
      "Modern web applications, interactive interfaces, and scalable development.",
    url: "https://hamza-khan-portfolio-zeta.vercel.app",
    siteName: "Hamza Khan Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamza Khan | Full-Stack Developer",
    description:
      "Modern web applications, interactive interfaces, and scalable development.",
  },

  metadataBase: new URL("https://hamza-khan-portfolio-zeta.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NoiseOverlay />
        <ScrollProgress />
        <ThreeBackground />
        {children}
      </body>
    </html>
  );
}
