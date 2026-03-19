import { useEffect } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ImageGallery } from "@/components/landing/ImageGallery";
import { Offer } from "@/components/landing/Offer";
import { PainSolution } from "@/components/landing/PainSolution";
import { Demonstration } from "@/components/landing/Demonstration";
import { Testimonials } from "@/components/landing/Testimonials";
import { Scarcity } from "@/components/landing/Scarcity";
import { Guarantee } from "@/components/landing/Guarantee";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { FloatingButton } from "@/components/landing/FloatingButton";
import { NotificationPopup } from "@/components/landing/NotificationPopup";
import { DiscountModal } from "@/components/landing/DiscountModal";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white text-slate-800 antialiased overflow-x-hidden">
      <Header />
      <main className="pt-12"> {/* Padding to offset fixed header */}
        <Hero />
        <ImageGallery />
        <Offer />
        <PainSolution />
        <Demonstration />
        <Testimonials />
        <Scarcity />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <FloatingButton />
      <NotificationPopup />
      <DiscountModal />
      <MadeWithDyad />
    </div>
  );
};

export default Index;