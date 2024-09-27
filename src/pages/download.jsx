import React from "react";
import Menu from "../components/navbar";
import Selection from "../components/download/selection";
import Footer from "../components/footer";
import SiteData from "../components/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Download" description="Download the latest build of Rhino Linux." />
      <Menu />
      <Selection />
      <Footer />
    </main>
  );
}
