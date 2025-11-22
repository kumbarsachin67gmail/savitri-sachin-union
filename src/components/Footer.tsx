import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 fill-accent text-accent animate-pulse" />
            <h3 className="font-serif text-3xl font-bold">Savitri & Sachin</h3>
            <Heart className="w-6 h-6 fill-accent text-accent animate-pulse" />
          </div>

          <p className="text-lg italic opacity-90">
            "An arranged beginning, a chosen forever"
          </p>

          <div className="w-24 h-1 bg-accent mx-auto"></div>

          <p className="text-sm opacity-75">
            December 15, 2025 · Mumbai, Maharashtra
          </p>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-60">
              With love and gratitude to all our family and friends
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
