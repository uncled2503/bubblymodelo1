"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold text-blue-600">ESPERE!</DialogTitle>
          <DialogDescription className="text-lg text-slate-700 mt-2">
            Ganhe <span className="font-bold text-orange-500">10% DE DESCONTO EXTRA</span> no seu primeiro pedido.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-xl font-bold">Use o cupom: <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">DIVERSAO10</span></p>
        </div>
        <Button onClick={() => setIsOpen(false)} size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg">
          COPIAR E FECHAR
        </Button>
      </DialogContent>
    </Dialog>
  );
};