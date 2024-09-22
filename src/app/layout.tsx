import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DrawerAppBar from "@/components/navbar";
import { Box, Container, Toolbar } from "@mui/material";

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
  title: "1 Faz Tudo",
  description: "Ferramentas úteis para o dia a dia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <DrawerAppBar />
        <Container sx={{ pt: 3 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
