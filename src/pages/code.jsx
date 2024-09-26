import React from "react";
import Menu from "../components/navbar";
import CodeOfConduct from "../components/code/codeofconduct";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
    return (
      <main>
        <Head>
          <title>Code of Conduct | Rhino Linux</title>
          <meta name="description" content="Ubuntu Based, Rolling Release" />
          <meta name="og:title" content="Rhino Linux" />
          <meta name="og:description" content="Ubuntu Based, Rolling Release" />
        </Head>
        <Menu />
        <CodeOfConduct />
        <Footer />
      </main>
    );
  }
  