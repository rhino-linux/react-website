import React from "react";
import Menu from "../components/navbar";
import Mission from "../components/statement/mission";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Mission Statement | Rhino Linux</title>
        <meta name="description" content="Ubuntu Based, Rolling Release" />
        <meta name="og:site_name" content="Rhino Linux" />
        <meta name="og:title" content="Mission Statement" />
        <meta name="og:description" content="Ubuntu Based, Rolling Release" />
        <meta name="darkreader-lock" />
      </Head>
      <Menu />
      <Mission />
      <Footer />
    </main>
  );
}
