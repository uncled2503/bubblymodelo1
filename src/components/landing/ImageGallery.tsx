"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Waves } from "./Waves";

import video1 from "@/assets/products/video1.gif";
import video2 from "@/assets/products/video2.gif";
import video3 from "@/assets/products/video3.gif";

export const ImageGallery = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    })
  );

  const gifs = [
    { src: video3, alt: "Mãe e filho se divertindo com a bomba de banho" },
    { src: video2, alt: "Criança feliz com a bomba de banho" },
    { src: video1, alt: "Demonstração da bomba de banho na piscina" },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {gifs.map((gif, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 p-2">
                <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
                  <img src={gif.src} alt={gif.alt} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Waves />
    </section>
  );
};