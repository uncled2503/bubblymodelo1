"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import images
import mulher1 from "@/assets/testimonials/mulher1.jpg";
import homem1 from "@/assets/testimonials/homem1.jpg";
import mulher2 from "@/assets/testimonials/mulher2.jpg";
import homem2 from "@/assets/testimonials/homem2.jpg";
import mulher3 from "@/assets/testimonials/mulher3.jpg";
import homem3 from "@/assets/testimonials/homem3.jpg";
import mulher4 from "@/assets/testimonials/mulher4.jpg";
import homem4 from "@/assets/testimonials/homem4.jpg";

const TestimonialCard = ({ name, text, image }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
    <div className="flex items-center mb-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src={image} alt={name} className="object-cover" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <p className="font-bold text-slate-900">{name}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-slate-700 text-sm">"{text}"</p>
  </div>
);

export const Testimonials = () => {
  const testimonials = [
    { name: "Juliana S.", text: "Meu filho não queria mais sair da água 😂 Finalmente paz na hora do banho, ele amou a surpresa!", image: mulher1 },
    { name: "Marcos P.", text: "Produto incrível! Acabou a briga pra ir pro chuveiro. Agora ele vai correndo. Vale cada centavo!", image: homem1 },
    { name: "Carla M.", text: "Comprei sem muita fé, mas me surpreendi. A qualidade é ótima e os brinquedos são uma gracinha. Recomendo!", image: mulher2 },
    { name: "Ricardo L.", text: "Ótima ideia para presentear. É criativo, divertido e as crianças ficam super felizes com as surpresas.", image: homem2 },
    { name: "Sofia R.", text: "Minha sobrinha amou o presente! A caixa é linda e as bombas de banho são muito cheirosas. Sucesso total!", image: mulher3 },
    { name: "Lucas A.", text: "Produto excelente. Não irrita a pele e deixa um cheirinho delicioso. Recomendo demais.", image: homem3 },
    { name: "Fernanda C.", text: "Nunca pensei que diria isso, mas meu filho agora pede para tomar banho! Mágico!", image: mulher4 },
    { name: "Gabriel T.", text: "O kit é incrível e o cheirinho é maravilhoso. O banho virou um momento de tranquilidade aqui em casa.", image: homem4 },
  ];

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10" data-aos="fade-up">O que os pais estão dizendo:</h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="basis-1/2 md:basis-1/3 p-4">
                  <TestimonialCard {...t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};