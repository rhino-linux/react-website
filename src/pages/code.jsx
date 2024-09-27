import React from "react";
import Menu from "../components/navbar";
import CodeOfConduct from "../components/code/codeofconduct";
import Footer from "../components/footer";
import SiteData from "../components/sitedata";

export default function Home() {
  return (
    <main>
      <SiteData title="Code of Conduct" description="The Rhino Linux Contributor Code of Conduct." />
      <Menu />
      <CodeOfConduct />
      <Footer />
    </main>
  );
}
  