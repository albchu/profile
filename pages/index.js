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
  return <ProfileContent />;
};

export default Home;
