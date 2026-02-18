import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BagusGo - Optimasi Rute Terbaik",
  description: "Aplikasi optimasi rute pengiriman untuk efisiensi bisnis Anda.",
  verification: {
    google: "VrVnlx4rgsiaIMU6OemTKl4joA00gBjixNWj7OlYprg",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
