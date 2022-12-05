import Head from "next/head";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import SearchProperty from "../components/home/SearchProperty";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Real Estate Site My Muhammad Uzair" />
      </Head>
      <Hero />
      <SearchProperty />
      <About />
    </div>
  );
}
