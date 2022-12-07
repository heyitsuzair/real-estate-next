import "../styles/globals.css";
import "../styles/Hero.css";
import "../styles/Card.css";
import "../styles/Scrollbar.css";
import "../styles/SlickDots.css";
import type { AppProps } from "next/app";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import PreFooter from "../components/common/PreFooter";
import Footer from "../components/common/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
      <PreFooter />
      <Footer />
    </>
  );
}
