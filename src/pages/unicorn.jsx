import React from "react";
import Hero from "../components/unicorn/hero";
import Content from "../components/unicorn/content";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Unicorn Desktop | Rhino Linux</title>
        <meta name="description" content="Ubuntu Based, Rolling Release" />
        <meta name="og:site_name" content="Rhino Linux" />
        <meta name="og:title" content="Unicorn Desktop" />
        <meta name="og:description" content="Ubuntu Based, Rolling Release" />
        <meta name="darkreader-lock" />
      </Head>
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
