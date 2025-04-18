import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "GTS",
  description: "A simple static website with information about us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
