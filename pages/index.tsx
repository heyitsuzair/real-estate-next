import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../components/Topbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Real Estate Site My Muhammad Uzair" />
      </Head>
      <Topbar/>
    </div>
  )
}
