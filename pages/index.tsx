import Head from "next/head";
import Hero from "../components/Hero";
import SearchProperty from "../components/SearchProperty";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Real Estate Site My Muhammad Uzair" />
      </Head>
      <Hero />
      <SearchProperty />
    </div>
  );
}
