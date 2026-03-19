"use client";

import { Button } from "@/components/ui/button";

export const FinalCta = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Não Perca Essa Chance Única!</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Transforme a hora do banho de um momento de estresse em pura alegria e diversão para seu filho.
        </p>
        <Button size="lg" className="h-16 text-2xl font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg animate-pulse">
          QUERO APROVEITAR AGORA
        </Button>
        <p className="mt-4 font-semibold">Últimas unidades com preço promocional!</p>
      </div>
    </section>
  );
};