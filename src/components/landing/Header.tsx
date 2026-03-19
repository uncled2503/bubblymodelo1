"use client";

import { Megaphone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-red-600 text-white p-3 text-center text-sm md:text-base font-bold z-50 shadow-lg animate-pulse">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Megaphone size={20} />
        <span>ATENÇÃO: Estoque quase esgotado — últimas unidades disponíveis!</span>
      </div>
    </header>
  );
};