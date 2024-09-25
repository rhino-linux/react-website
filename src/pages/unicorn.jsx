import React from "react";
import Hero from "../components/unicorn/hero";
import Content from "../components/unicorn/content";
import Footer from "../components/footer";
export const metadata = {
  title: 'Unicorn Desktop | Rhino Linux',
  description: 'Ubuntu Based, Rolling Release',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
