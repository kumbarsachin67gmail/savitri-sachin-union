import { User, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

export const Couple = () => {
  const [imageError, setImageError] = useState(false);

  // Image path - add savitri.jpg to public/ folder for the image to display
  // Files in public/ are served as-is and won't cause build errors if missing
  const savitriPhotoPath = "/savitri.jpg";
  return (
    <section id="couple" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">The Couple</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground italic">
            "Two paths chosen by families, one future chosen by hearts"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Savitri */}
          <div className="elegant-card text-center group hover:shadow-[var(--shadow-gold)] transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden ring-4 ring-accent/20 relative">
              <img
                src="/Savitri.png"
                alt="Savitri"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }} // fallback hides img if not found
              />
            </div>

            <h3 className="font-serif text-3xl font-bold text-primary mb-2">
              Savitri
            </h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span>M.Com Graduate</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-accent" />
                <span>Accountant</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-foreground/80 italic">
                "A woman of strength, patience and warmth"
              </p>
            </div>
          </div>

          {/* Sachin */}
          <div className="elegant-card text-center group hover:shadow-[var(--shadow-gold)] transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src="/Sachin.png"
                alt="Sachin"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <h3 className="font-serif text-3xl font-bold text-primary mb-2">
              Sachin
            </h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span>B.E Graduate</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-accent" />
                <span>Software Engineer</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-foreground/80 italic">
                "A man driven by passion, responsibility and care"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
