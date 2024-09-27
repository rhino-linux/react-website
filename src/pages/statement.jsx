import React from "react";
import Menu from "../components/navbar";
import Mission from "../components/statement/mission";
import Footer from "../components/footer";
import SiteData from "../components/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Mission Statement" description="Creating the go-to, Debian-derived counterpart for Arch." />
      <Menu />
      <Mission />
      <Footer />
    </main>
  );
}
