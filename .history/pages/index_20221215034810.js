import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Trizza blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Home/>

      
    </div>
  )
}
