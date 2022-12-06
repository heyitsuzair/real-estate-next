import "../styles/globals.css";
import "../styles/Hero.css";
import "../styles/Card.css";
import type { AppProps } from "next/app";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
