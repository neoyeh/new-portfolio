import type { Metadata } from "next";
import "../styles/globals.css";
import { Noto_Sans_TC, Roboto } from 'next/font/google';
import StoreProvider from './StoreProvider';
import Header from './layout/Header';

export const metadata: Metadata = {
  title: "Neo Yeh - Portfolio",
  description: "Neo Yeh - Portfolio",
};

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${roboto.variable} ${notoSansTC.variable} antialiased`}
      >
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
