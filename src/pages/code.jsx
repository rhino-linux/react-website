import React from "react";
import Menu from "../components/navbar";
import CodeOfConduct from "../components/code/codeofconduct";
import Footer from "../components/footer";
export const metadata = {
  title: 'Code of Conduct | Rhino Linux',
  description: 'Ubuntu Based, Rolling Release',
}

export default function Home() {
    return (
      <main>
        <Menu />
        <CodeOfConduct />
        <Footer />
      </main>
    );
  }
  