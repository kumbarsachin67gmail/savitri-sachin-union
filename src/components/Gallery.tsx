export const Gallery = () => {
  // Gallery images from public folder
  const galleryImages = [
    "/image.png",
    "/image copy 2.png",
    "/image copy 3.png",
    "/image copy 4.png",
    "/image copy 5.png",
    "/image copy 6.png",
  ];

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
          {galleryImages.map((imageSrc, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-gradient-to-br from-cream-dark to-muted hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <img
                src={imageSrc}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            Celebrating our love story through these special moments
          </p>
        </div>
      </div>
    </section>
  );
};
