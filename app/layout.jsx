import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedContactButton from "./components/FixedContactButton";



export const metadata = {
  title: "Expert Solutions",
  description: "Expert Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Navbar />
         <FixedContactButton />
        <main className="pt-18">{children}</main>
        <Footer />
     
      </body>
    </html>
  );
}
