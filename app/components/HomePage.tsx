"use client";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { About } from "./About";
import { CTA } from "./CTA";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />
      <Hero />
      <Services />
      <About />
      <CTA />
    </div>
  );
}
