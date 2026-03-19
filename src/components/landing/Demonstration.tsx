"use client";

import demonstrationVideo from "@/assets/videos/demonstration.mp4";

export const Demonstration = () => {
  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4" data-aos="fade-up">A Mágica Acontece em Segundos...</h2>
        <p className="text-lg text-slate-700 mb-8" data-aos="fade-up" data-aos-delay="100">Veja a transformação acontecer diante dos seus olhos!</p>
        <div className="max-w-3xl mx-auto aspect-video rounded-xl shadow-2xl overflow-hidden" data-aos="zoom-in-up">
          <video
            src={demonstrationVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};