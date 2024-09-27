import React from "react";
import Hero from "../components/hero";
import Description from "../components/description";
import Content from "../components/content";
import Ecosystem from "../components/ecosystem";
import Quote from "../components/quote";
import Footer from "../components/footer";
import Announcement from "../components/announcement";
import Link from "next/link";
import SiteData from "../components/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Homepage" description="An Ubuntu-based, rolling release distribution, with Pacstall & XFCE at its core." />
      <Hero />
      <Announcement />
      <Description />
      <Ecosystem />
      <Quote />
      <Content />
      <Footer />
    </main>
  );
}
