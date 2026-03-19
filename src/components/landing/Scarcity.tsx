"use client";

import { useEffect, useState } from "react";

export const Scarcity = () => {
  const [units, setUnits] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setUnits(prev => (prev > 5 ? prev - 1 : prev));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-2">ATENÇÃO: RESTAM APENAS {units} UNIDADES DISPONÍVEIS</h2>
        <p className="text-lg font-medium">Devido à alta demanda, nosso estoque pode esgotar a qualquer momento.</p>
      </div>
    </section>
  );
};