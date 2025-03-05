import type { Metadata } from "next";
import "../styles/globals.scss";
import { Noto_Sans_TC, Roboto, Big_Shoulders_Display } from 'next/font/google';
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

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: "--font-big-shoulders-display",
  subsets: ["latin"],
  weight: ["600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${roboto.variable} ${notoSansTC.variable} ${bigShouldersDisplay.variable} antialiased`}
      >
        <Header />
        <StoreProvider>
          <div className="
            absolute inset-0 h-full w-full bg-color-bg overflow-y-auto
            pb-[53px]
            md:pb-0 md: md:pl-[80px]
          ">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
