import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import "../styles/globals.css";

export const metadata = {
  title: "Gafar Technical Services LLC",
  description:
    "Welcome to Gafar Technical Services LLC, your trusted partner for professional technical services.",
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
