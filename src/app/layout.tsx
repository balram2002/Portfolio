import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import TransitionPageEffect from './../components/TransitionPageEffect';
import { Analytics } from "@vercel/analytics/next";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export const metadata = {
  title: "Portfolio",
  description: "Balram Dhakad - Portfolio",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {
            `if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`
          }
        </Script>
      </head>
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark`}>
        <TransitionPageEffect>
          {children}
          <Analytics />
        </TransitionPageEffect>
      </body>
    </html>
  );
}
