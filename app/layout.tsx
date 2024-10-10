import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider"
import { Helmet } from 'react-helmet-async';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Retro Camera",
  description: "Enjoy Your Retro Camera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Helmet>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="6a97888e-site-verification" content="436e3227e70bce4bc1ee0056fd2ac55d" />
        <meta name="description" content="Dynamic description for this page" />
        <title>Dynamic Page Title</title>
      </Helmet>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
      </body>
    </html>
  );
}
