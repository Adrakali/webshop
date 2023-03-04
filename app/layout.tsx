import "./globals.css";
import Nav from "./components/Nav";
import CartProvider from "./contexts/CartContext";
import { Poppins } from "@next/font/google";

// const poppins = Poppins({
//   weights: [400, 700],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body /* className={`${poppins.className}`}*/>
        <CartProvider>
          <Nav />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
