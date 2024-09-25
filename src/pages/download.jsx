import React from "react";
import Menu from "../components/navbar";
import Selection from "../components/download/selection";
import Footer from "../components/footer";
export const metadata = {
  title: 'Download | Rhino Linux',
  description: 'Ubuntu Based, Rolling Release',
}

export default function Home() {
  return (
    <main>
      <Menu />
      <Selection />
      <Footer />
    </main>
  );
}
