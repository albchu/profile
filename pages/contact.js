import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { ProfileContent } from "../components/profile-content";

// I believe this is all I need for serverside generation.
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Hey! It's Albert</title>
        <meta
          name="description"
          content="This is both my resume and portfolio at the same time like an all-in-one shampoo and body wash."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProfileContent />
      </main>
    </>
  );
};

export default Home;
