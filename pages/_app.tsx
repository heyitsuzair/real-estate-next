import "../styles/globals.css";
import "../styles/Hero.css";
import type { AppProps } from "next/app";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
