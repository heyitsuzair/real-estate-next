import "../styles/globals.css";
import "../styles/Hero.css";
import "../styles/Card.css";
import "../styles/Scrollbar.css";
import "../styles/SlickDots.css";
import "../styles/Toast.css";
import type { AppProps } from "next/app";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import PreFooter from "../components/common/PreFooter";
import Footer from "../components/common/Footer";
import ProgressBar from "../components/common/ProgressBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactToastifyContainer from "../components/common/ReactToastifyContainer";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    //eslint-disable-next-line
  }, [router.query]);

  return (
    <>
      <ReactToastifyContainer />
      <ProgressBar progress={progress} />
      {!router.pathname.includes("/dashboard") && (
        <>
          <Topbar />
          <Navbar />
        </>
      )}

      <Component {...pageProps} />
      {!router.pathname.includes("/dashboard") && (
        <>
          <PreFooter />
          <Footer />
        </>
      )}
    </>
  );
}
