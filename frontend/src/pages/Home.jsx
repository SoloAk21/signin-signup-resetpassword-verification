import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/home/HeroSection";
import Feature from "../components/home/Feature";
import Team from "../components/home/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Header />
      <div className="flex-1 overflow-auto  no-scrollbar">
        <main>
          <HeroSection />
          <Feature />
          <Team />
        </main>
        <Footer />
      </div>
    </div>
  );
}
