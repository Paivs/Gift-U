import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { MyProvider } from "@/core/context/context";
import { NotificationProvider } from "@/core/NotificationContext/NotificationContext";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import ThemeProvider from "@/core/ThemeProvider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gift-U",
  description: "Criando presentes de formas diferentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <MyProvider>
            <NotificationProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </NotificationProvider>
          </MyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
