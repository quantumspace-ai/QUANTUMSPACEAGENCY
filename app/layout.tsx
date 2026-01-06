import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "QuantumSpace",
  description: "Budujemy strony, sklepy i aplikacje webowe."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={sora.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-white relative">
          <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(15,23,42,0.05),transparent_55%)]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
