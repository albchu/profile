import Head from 'next/head'
import AboutMe from '../components/about-me'
import Education from '../components/education'
import Experience from '../components/experience'
import Expertise from '../components/expertise'
import { HeroBanner } from '../components/hero-banner'
import Portfolio from '../components/portfolio'
import styles from '../styles/Home.module.css'

// I believe this is all I need for serverside generation.
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Albert Chuuuuuuu</title>
        <meta name="description" content="This is both my resume and portfolio at the same time like an all-in-one shower wash." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroBanner />

        <div className={styles.contents}>
          <AboutMe />

          <Expertise />

          <Portfolio />

          <Experience />

          <Education />
        </div>

        <div className={styles.footer}>
          <img src="/pineapple.png" />
          <p>You've made it to the end.</p>
          <p>Thanks for visiting!</p>
        </div>
      </main>
    </div>
  )
}
