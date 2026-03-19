"use client";

import video1 from "@/assets/products/video1.gif";
import video2 from "@/assets/products/video2.gif";
import video3 from "@/assets/products/video3.gif";

export const ImageGallery = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={video3} alt="Mãe e filho se divertindo com a bomba de banho" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={video2} alt="Criança feliz com a bomba de banho" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={video1} alt="Demonstração da bomba de banho na piscina" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};