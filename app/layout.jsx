import { Manrope } from "next/font/google";
import "@/styles/globals.css";
const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });
export const metadata = {
  title: "advice-generator-next",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
