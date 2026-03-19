"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  const faqs = [
    { q: "É seguro para crianças?", a: "Sim! Nossas bombas de banho são feitas com ingredientes 100% naturais, hipoalergênicos e seguros para a pele sensível das crianças. Não mancham a banheira." },
    { q: "Para qual idade é recomendado?", a: "Recomendamos para crianças a partir de 3 anos, devido aos brinquedos pequenos que vêm dentro. A supervisão de um adulto é sempre aconselhada." },
    { q: "Qual o prazo de entrega?", a: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da sua região. Você receberá um código de rastreio para acompanhar seu pedido." },
    { q: "Como funciona a garantia?", a: "Se por qualquer motivo você não ficar satisfeito nos primeiros 30 dias, basta entrar em contato conosco e faremos o reembolso total do valor pago, sem complicações." },
  ];

  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-lg font-semibold text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-base text-slate-700">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};