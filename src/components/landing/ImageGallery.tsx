"use client";

export const ImageGallery = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-blue-200 rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1580390344375-0523c33792a5?q=80&w=2000&auto=format&fit=crop" alt="Criança feliz no banho" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-blue-200 rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599955963224-a43d1b3515f2?q=80&w=2000&auto=format&fit=crop" alt="Bomba de banho efervescente" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-blue-200 rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599603049138-9b3a8f518134?q=80&w=2000&auto=format&fit=crop" alt="Brinquedo surpresa" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-blue-200 rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560942485-b2a1a6f34a85?q=80&w=2000&auto=format&fit=crop" alt="Outra criança feliz" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};