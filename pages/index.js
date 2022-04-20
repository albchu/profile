import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import ParallaxContainer from "../components/parallax-container";

// I believe this is all I need for serverside generation.
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Albert Chuuuuuuu</title>
        <meta
          name="description"
          content="This is both my resume and portfolio at the same time like an all-in-one shower wash."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ParallaxContainer />
      </main>
    </div>
  );
};

export default Home;
