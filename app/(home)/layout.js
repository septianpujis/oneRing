import { Playfair } from "next/font/google";
import "../globals.css";

const font = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "The One Ring",
  description: "Tribute to Tolkien's Universe: The One Ring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
