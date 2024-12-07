import React from "react";
import Link from "next/link";
import Hero from "../components/index/hero";
import Description from "../components/index/description";
import Content from "../components/index/content";
import Ecosystem from "../components/index/ecosystem";
import Quote from "../components/index/quote";
import Announcement from "../components/index/announcement";
import Footer from "../components/main/footer";
import SiteData from "../components/main/sitedata";
import ImageGallery from "../components/index/ImageGallery";
export default function Home() {
  return (
    <main>
      <SiteData title="Homepage" description="An Ubuntu-based, rolling release distribution, with Pacstall & XFCE at its core." />
      <Hero />
      {/* <Announcement /> */}
      <Description />
      <ImageGallery />
      <Ecosystem />
      <Quote />
      <Content />
      <Footer />
    </main>
  );
}
