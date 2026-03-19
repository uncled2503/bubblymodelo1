"use client";

import { ShieldCheck } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-100 p-8 rounded-xl border-2 border-dashed border-slate-300">
          <ShieldCheck className="text-green-500 w-24 h-24 md:w-32 md:h-32 flex-shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Sua Satisfação ou Seu Dinheiro de Volta!</h2>
            <p className="text-lg text-slate-700">
              Teste por <strong>30 dias</strong>. Se você ou seu filho não amarem a transformação na hora do banho, nós devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};