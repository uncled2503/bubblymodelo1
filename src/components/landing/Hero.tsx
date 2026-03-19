"use client";

import { Button } from "@/components/ui/button";
import { Star, CheckCircle, Flame, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logotipo.png";
import gallery1 from "@/assets/products/gallery-1.png";
import gallery2 from "@/assets/products/gallery-2.png";
import gallery3 from "@/assets/products/gallery-3.png";
import gallery4 from "@/assets/products/gallery-4.png";

export const Hero = () => {
  const [viewers, setViewers] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const productImages = [gallery4, gallery1, gallery2, gallery3];
  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <section className="w-full bg-blue-50 py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <img src={logo} alt="Tika Toys Logo" className="mx-auto mb-8 w-64 md:w-80" data-aos="fade-down" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4" data-aos="fade-down" data-aos-delay="100">
          Seu filho ODEIA tomar banho? <br /> Isso vai mudar <span className="text-blue-600">HOJE</span>.
        </h1>

        {/* Product Image Gallery */}
        <div className="my-8 max-w-2xl mx-auto" data-aos="zoom-in-up">
          <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden mb-4 border">
            <img src={mainImage} alt="Imagem principal do produto BubblyBuddies" className="w-full h-full object-contain p-2" />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`aspect-square bg-white rounded-md overflow-hidden border-2 transition-all duration-200 ${mainImage === image ? 'border-blue-600 ring-2 ring-blue-300' : 'border-slate-200 hover:border-blue-400'}`}
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={`Miniatura do produto ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-6" data-aos="fade-up">
          Transforme o banho em diversão instantânea com uma surpresa mágica dentro de cada bomba 💥
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
          </div>
          <span className="font-semibold text-slate-800">4.8 (+1.500 avaliações)</span>
        </div>

        <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="200">
            <p className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-full">
                Mais de 3.742 pedidos só essa semana
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 text-left" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            <span className="font-medium text-slate-800">Crianças pedem pra tomar banho</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            <span className="font-medium text-slate-800">Revela brinquedo surpresa</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            <span className="font-medium text-slate-800">Zero estresse para os pais</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <Button size="lg" className="w-full md:w-auto h-14 text-xl font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg animate-pulse">
            QUERO TRANSFORMAR O BANHO AGORA
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto h-12 text-lg border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700">
            COMPRAR COM DESCONTO
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Flame className="text-red-500" size={18} />
            <span><span className="font-bold">{viewers}</span> pessoas vendo agora</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-red-500" size={18} />
            <span>⏳ Oferta termina em breve</span>
          </div>
        </div>
      </div>
    </section>
  );
};