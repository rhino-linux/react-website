import React from "react";
import Hero from "../components/hero";
import Content from "../components/content";
import Ecosystem from "../components/ecosystem";
import Quote from "../components/quote";
import Footer from "../components/footer";
export const metadata = {
  title: 'Rhino Linux',
  description: 'Ubuntu Based, Rolling Release',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Ecosystem />
      <Content />
      <Quote />
      <Footer />
    </main>
  );
}
