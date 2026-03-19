"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = ({ name, text, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <Avatar>
        <AvatarImage src={image} alt={name} />
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
    <p className="text-slate-700">"{text}"</p>
  </div>
);

export const Testimonials = () => {
  const testimonials = [
    { name: "Juliana S.", text: "Meu filho não queria mais sair da água 😂 Finalmente paz na hora do banho, ele amou a surpresa!", image: "https://i.pravatar.cc/150?img=1" },
    { name: "Marcos P.", text: "Produto incrível! Acabou a briga pra ir pro chuveiro. Agora ele vai correndo. Vale cada centavo!", image: "https://i.pravatar.cc/150?img=2" },
    { name: "Carla M.", text: "Comprei sem muita fé, mas me surpreendi. A qualidade é ótima e os brinquedos são uma gracinha. Recomendo!", image: "https://i.pravatar.cc/150?img=3" },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-10">O que os pais estão dizendo:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};