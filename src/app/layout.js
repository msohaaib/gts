import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import "../styles/globals.css";

export const metadata = {
  title: "GAFAR TECHNICAL SERVICES LLC",
  description: "A simple static website with information about us.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
