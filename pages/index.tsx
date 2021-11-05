import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Alliance</title>
        <meta name="description" content="Arbitrum NFT Alliance" />
        <link rel="icon" href="/nft.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the NFT Alliance
        </h1>

        <p className={styles.description}>
          Coming Soon
        </p>

      </main>

     
    </div>
  )
}

export default Home
