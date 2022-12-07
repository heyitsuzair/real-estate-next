import Head from "next/head";
import About from "../components/home/About";
import Counters from "../components/home/Counters";
import FeaturedListings from "../components/home/FeaturedListings";
import Hero from "../components/home/Hero";
import MainFocus from "../components/home/MainFocus";
import OurAminities from "../components/home/OurAminities";
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
      <Counters />
      <MainFocus />
      <FeaturedListings />
      <OurAminities />
    </div>
  );
}
