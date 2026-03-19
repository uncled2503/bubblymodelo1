"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OfferCard = ({ title, price, originalPrice, badge, bestValue = false, children }) => (
  <div className={`border-2 rounded-xl p-6 text-center flex flex-col ${bestValue ? 'border-orange-500 scale-105 bg-white shadow-2xl' : 'border-slate-200 bg-white/80'}`}>
    {badge && <Badge className="absolute -top-3 right-4 bg-orange-500 text-white">{badge}</Badge>}
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-4xl font-extrabold text-blue-600 my-4">{price}</p>
    <p className="text-slate-500 line-through mb-4">{originalPrice}</p>
    <div className="text-left mb-6 space-y-2">{children}</div>
    <Button size="lg" className={`w-full mt-auto h-12 text-lg font-bold ${bestValue ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
      Comprar Agora
    </Button>
  </div>
);

export const Offer = () => {
  return (
    <section id="oferta" className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Escolha a Melhor Oferta Para Você</h2>
        <p className="text-lg text-green-600 font-bold mb-10">Economize até 40% hoje!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <OfferCard title="1x Kit Oceano" price="R$ 97" originalPrice="R$ 127">
            <p>✔ 12 Bombas de Banho</p>
            <p>✔ 12 Brinquedos Surpresa</p>
          </OfferCard>
          <OfferCard title="2x Kits Oceano" price="R$ 147" originalPrice="R$ 254" badge="MAIS VENDIDO" bestValue>
            <p>✔ 24 Bombas de Banho</p>
            <p>✔ 24 Brinquedos Surpresa</p>
            <p className="font-bold text-green-600">✔ Leve 2, Pague Menos!</p>
          </OfferCard>
          <OfferCard title="3x Kits Oceano" price="R$ 197" originalPrice="R$ 381" badge="MELHOR OFERTA">
            <p>✔ 36 Bombas de Banho</p>
            <p>✔ 36 Brinquedos Surpresa</p>
            <p className="font-bold text-green-600">✔ Máxima Economia!</p>
          </OfferCard>
        </div>
      </div>
    </section>
  );
};