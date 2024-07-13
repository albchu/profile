import React, {useState} from "react";
import Head from "next/head";
import { NavBar } from "../components/nav-bar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [isChoco, setIsChoco] = useState(false);
  
  const handleColorSchemeChange = (isDarkMode) => {
    setIsChoco(isDarkMode);
  };

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

      <main color-scheme={isChoco ? "choco" : "grape"}>
        {/* <NavBar handleColorSchemeChange={handleColorSchemeChange} /> */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
