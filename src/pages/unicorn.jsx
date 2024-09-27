import React from "react";
import Hero from "../components/unicorn/hero";
import Content from "../components/unicorn/content";
import Footer from "../components/footer";
import SiteData from "../components/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Unicorn Desktop" description="A desktop experience designed to be both modern and fast." />
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
