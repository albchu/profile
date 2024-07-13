import React from "react";
import Head from "next/head";
import { NavBar } from "../components/nav-bar";
import { PageTransition } from "../components/page-transition";
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

      <NavBar />
      <main>
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </main>
    </>
  );
}

export default MyApp;
