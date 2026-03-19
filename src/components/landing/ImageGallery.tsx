"use client";

import * as React from "react";
import { Waves } from "./Waves";
import "./Marquee.css";

import video1 from "@/assets/products/video1.gif";
import video2 from "@/assets/products/video2.gif";
import video3 from "@/assets/products/video3.gif";

export const ImageGallery = () => {
  const gifs = [
    { src: video3, alt: "Mãe e filho se divertindo com a bomba de banho" },
    { src: video2, alt: "Criança feliz com a bomba de banho" },
    { src: video1, alt: "Demonstração da bomba de banho na piscina" },
  ];

  // Duplicamos o array para garantir que o loop seja contínuo e sem falhas
  const extendedGifs = [...gifs, ...gifs];

  return (
    <section className="bg-white" data-aos="fade-up">
      <div className="container mx-auto pt-12 md:pt-20">
        <div className="marquee">
          <div className="marquee-content">
            {extendedGifs.map((gif, index) => (
              <div key={index} className="marquee-item">
                <div className="aspect-square bg-slate-100 rounded-lg shadow-md overflow-hidden">
                  <img src={gif.src} alt={gif.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Waves />
    </section>
  );
};