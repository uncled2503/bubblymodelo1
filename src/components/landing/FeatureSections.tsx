"use client";

import image1 from "@/assets/products/gallery-2.png";
import image2 from "@/assets/products/gallery-1.png";

const FeatureSection = ({ title, text, image, imageAlt, reverse = false }) => {
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div className={`flex flex-col ${flexDirection} items-center gap-8 md:gap-16`}>
      <div className="md:w-1/2" data-aos={reverse ? "fade-left" : "fade-right"}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center md:text-left">{title}</h2>
        <p className="text-lg text-slate-700 leading-relaxed">{text}</p>
      </div>
      <div className="md:w-1/2" data-aos={reverse ? "fade-right" : "fade-left"}>
        <img src={image} alt={imageAlt} className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-square" />
      </div>
    </div>
  );
};

export const FeatureSections = () => {
  const features = [
    {
      title: "Hora do Banho, Reinventada",
      text: "Transforme a rotina noturna do seu filho em uma experiência efervescente e colorida que eles mal podem esperar para mergulhar. Nossas Bombas de Banho fazem a hora do banho parecer menos uma tarefa e mais uma recompensa divertida no final do dia!",
      image: image1,
      imageAlt: "Criança se divertindo na banheira com bombas de banho coloridas.",
      reverse: false,
    },
    {
      title: "Uma Surpresa em Cada Mergulho",
      text: "Cada bomba de banho efervesce na água para revelar brinquedos surpresa divertidos que mantêm as crianças curiosas, engajadas e felizes na banheira. Feitas com uma fórmula à base de bicarbonato de sódio, elas também ajudam a deixar a hora do banho fresca, divertida e digna de presente do início ao fim.",
      image: image2,
      imageAlt: "Bombas de banho efervescendo e revelando brinquedos surpresa.",
      reverse: true,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 space-y-16 md:space-y-24">
        {features.map((feature, index) => (
          <FeatureSection key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};