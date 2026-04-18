import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | ArtGallery',
    default: 'ArtGallery'
  },
  description: 'ArtGallery - website mua bán tranh uy tín nhất Việt Nam',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'ArtGallery Company'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className={openSans.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
