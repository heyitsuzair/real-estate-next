import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Real Estate Site My Muhammad Uzair" />
      </Head>
      <Hero />
    </div>
  );
}
