"use client";

import { AnimatedBlobs } from "@/components/blobs";
import { Header } from "@/components/ui/header";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { ServicesSection } from "@/components/services-section";
import { DemoServicesSection } from "@/components/demo-services-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#1F3130" }}>
      <AnimatedGradientBackground />
      <Header />
      <AnimatedBlobs />
      <main className="relative z-20" style={{ marginTop: "100vh" }}>
        <ServicesSection />
        <DemoServicesSection />
        <AboutSection />
        <CTASection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
