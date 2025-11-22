import { Image } from "lucide-react";

export const Gallery = () => {
  // Placeholder for gallery images - can be updated later with real photos
  const placeholders = Array(6).fill(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Gallery</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Capturing moments of our journey together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-cream-dark to-muted hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image className="w-16 h-16 text-muted-foreground/30 group-hover:text-accent/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            Photos coming soon - Stay tuned for beautiful memories
          </p>
        </div>
      </div>
    </section>
  );
};
