import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Header, Banner } from '../components'

const Home: NextPage = () => {
  const HeaderLogo = () => (
    <Image src="/mediumLogo.svg" alt="Medium Logo" width={24} height={24} />
  )

  const BannerLogo = () => (
    <Image src="/bannerLogo.svg" alt="Medium Logo" width={256} height={256} />
  )

  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header logo={HeaderLogo()}></Header>
      <main>
        <Banner
          header={'Medium is a place to write, read, and connect'}
          subtext={
            "It's easy and free to post your thinking on any topic and connect with millions of readers"
          }
          logo={BannerLogo()}
        />
        {/*Posts*/}
      </main>
    </div>
  )
}

export default Home
