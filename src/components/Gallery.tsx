import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Gallery images from public folder
  const galleryImages = [
    // "/MASS_1843.JPG",
    "/MASS_1854.JPG",
    "/MASS_1894.JPG",
    "/MASS_1943.JPG",
    "/MASS_1982.JPG",
    "/MASS_1987.JPG",
    "/MASS_2127.JPG",
    "/MASS_2132.JPG",
    "/MASS_2137.JPG",
    "/MASS_2141.JPG",
    "/MASS_2169.JPG",
    "/MASS_2201.JPG",
    "/MASS_2209.JPG",
    "/MASS_2236.JPG",
    "/MASS_2237.JPG",
    "/MASS_2259.JPG",
    "/MASS_2277.JPG",
    "/MASS_2281.JPG",
    "/MASS_2282.JPG",
    "/MASS_2283.JPG",
    "/MASS_2314.JPG",
    "/MASS_2337.JPG",
    "/MASS_2343.JPG",
    "/MASS_2413.JPG",
    "/MASS_2453.JPG",
    "/MASS_2493.JPG",
    "/MASS_2498.JPG",
    "/MASS_2558.JPG",

    "/image.png",
    "/image copy 2.png",
    "/image copy 3.png",
    "/image copy 4.png",
    "/image copy 5.png",
    "/image copy 6.png",
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="gallery" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Gallery</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Capturing moments of our journey together
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="max-w-4xl mx-auto"
          plugins={[Autoplay({ delay: 3000 })]}
        >
          {/* Dots Navigation */}
          <div className="flex justify-center mb-4 space-x-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index + 1 === current
                    ? "bg-accent"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <CarouselContent>
            {galleryImages.map((imageSrc, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-cream-dark to-muted hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 cursor-pointer group mx-auto max-w-md">
                  <img
                    src={imageSrc}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            Celebrating our love story through these special moments
          </p>
        </div>
      </div>
    </section>
  );
};
