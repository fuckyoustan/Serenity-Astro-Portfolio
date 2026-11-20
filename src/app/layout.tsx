import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Stan | Android Module Developer",
  description:
    "Magisk and KernelSU modules for Android rendering, thermal, network, and battery performance. Portfolio of Stan, a self-taught developer from Indonesia.",
  keywords: [
    "Magisk",
    "KernelSU",
    "Android",
    "Performance",
    "Portfolio",
  ],
  authors: [{ name: "Stan" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Stan | Android Module Developer",
    description:
      "Magisk and KernelSU modules for Android rendering, thermal, network, and battery performance.",
    siteName: "Stan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plexMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
