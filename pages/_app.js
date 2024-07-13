import React from "react";
import Head from "next/head";
import { NavBar } from "../components/nav-bar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
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
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
