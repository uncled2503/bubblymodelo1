"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-40">
      <Button onClick={scrollToOffer} size="lg" className="w-full md:w-auto h-14 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-2xl animate-bounce flex items-center gap-2">
        <ShoppingCart size={24} />
        SIM, QUERO O MEU KIT!
      </Button>
    </div>
  );
};