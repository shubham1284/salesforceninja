import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      {/* Background canvas */}
      <div className="bg-canvas">
        <div className="bg-orb orb1" />
        <div className="bg-orb orb2" />
        <div className="bg-orb orb3" />
      </div>
      <div className="bg-grid" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />

        <div className="divider" />

        <Categories />

        <div className="divider" />

        <Products />

        <WhyUs />

        <div className="divider" />

        <About />

        <div className="divider" />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* Scroll animations (client-side) */}
      <ScrollAnimations />
    </>
  );
}
