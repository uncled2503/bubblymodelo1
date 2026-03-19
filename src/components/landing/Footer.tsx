"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logotipo.png";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Slogan */}
          <div>
            <img src={logo} alt="Tika Toys Logo" className="w-40 mb-2" />
            <p className="text-sm text-slate-400">Unleashing a World of Joy!</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">Receba ofertas exclusivas!</p>
            <div className="flex">
              <Input type="email" placeholder="Seu e-mail" className="bg-slate-800 border-slate-700 rounded-r-none focus:ring-teal-500" />
              <Button type="submit" className="bg-teal-500 hover:bg-teal-600 rounded-l-none text-white">Inscrever</Button>
            </div>
          </div>

          {/* Pagamento Seguro */}
          <div>
            <h3 className="font-bold text-white mb-4">Pagamento Seguro</h3>
            <p className="mb-4 text-sm">Aceitamos os principais cartões e PIX.</p>
            <div className="flex items-center gap-3 font-semibold text-sm text-white">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PIX</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tika Toys. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};