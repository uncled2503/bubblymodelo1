"use client";

import gallery1 from "@/assets/products/gallery-1.png";
import gallery2 from "@/assets/products/gallery-2.png";
import gallery3 from "@/assets/products/gallery-3.png";
import gallery4 from "@/assets/products/gallery-4.png";

export const ImageGallery = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={gallery1} alt="Kit de Bombas de Banho BubblyBuddies" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={gallery2} alt="Criança feliz brincando no banho" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={gallery4} alt="Bombas de banho com brinquedos surpresa" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
            <img src={gallery3} alt="Dimensões da caixa do produto" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};