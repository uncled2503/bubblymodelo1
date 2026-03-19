"use client";

import { Button } from "@/components/ui/button";
import { Star, CheckCircle, Flame, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [viewers, setViewers] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-blue-50 py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Seu filho ODEIA tomar banho? <br /> Isso vai mudar <span className="text-blue-600">HOJE</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-6">
          Transforme o banho em diversão instantânea com uma surpresa mágica dentro de cada bomba 💥
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
          </div>
          <span className="font-semibold text-slate-800">4.8 (+1.500 avaliações)</span>
        </div>

        <div className="flex justify-center mb-8">
            <p className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-full">
                Mais de 3.742 pedidos só essa semana
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 text-left">
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

        <div className="flex flex-col items-center gap-4">
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