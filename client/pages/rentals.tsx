import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Rentals.module.css'
import Navbar from '../components/Navbar'
import Rentalsbody from '../components/RentalsBody'

const Rentals: NextPage = () => {
  return (
    <div className={`${styles.container} font-opensans`}>
      <Head>
        <title>Sequin - Rentals</title>
        <meta name="description" content="Hotel App: CodeByDolapo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.subContainer}> */}
        <Navbar rentals={true} />
        <Rentalsbody />
      {/* </div> */}
    </div>
  )
}

export default Rentals
