import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";
import { motion } from "framer-motion";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/17.4479344,78.3803275/W63G%2B66Q+Mangala+Karyalaya,+Vijayapur+-+Sindagi+Rd,+Sindagi,+Karnataka+586128/@17.0923445,76.6679637,9z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bc6335e4df0a21f:0x3ad5a3af9a3bd84b!2m2!1d76.2254957!2d16.9021113!3e9?entry=ttu&g_ep=EgoyMDI1MTEyMC4xIKXMDSoASAFQAw%3D%3D";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const weddingDate = new Date("2026-02-08T10:00:00");

// Animation variants
const nameVariant = {
  initial: { opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" as const } }
};
const heartVariant = {
  animate: { scale: [1, 1.15, 1, 1.1, 1], opacity: [0.8, 1, 0.8, 1, 0.8], transition: { duration: 1.5, repeat: Infinity } }
};

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imagesCount = 6;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % imagesCount);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Carousel Images as background - animated one by one */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        {/* Animated carousel using opacity transitions */}
        <img
          src="/Savitri.png"
          alt="Savitri"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 0 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin.png"
          alt="Sachin"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 1 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_hero.png"
          alt="Sachin Hero"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 2 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_2_hero.png"
          alt="Sachin 2 Hero"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 3 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_3_hero.png"
          alt="Sachin 3 Hero"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 4 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/assets/hero-pattern.jpg"
          alt="Pattern"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 5 ? "opacity-10" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <div className="h-8" /> {/* Spacer added above the heading */}
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary flex flex-col items-center gap-0 md:flex-row md:gap-4 md:items-center md:justify-center">
            <motion.span
              className="relative px-4 py-1 rounded-xl bg-transparent"
              variants={nameVariant}
              initial="initial"
              animate="animate"
            >
              Savitri
            </motion.span>
            <motion.span
              className="text-red-400 md:mx-4 drop-shadow-lg"
              variants={heartVariant}
              animate="animate"
              style={{ display: 'inline-block' }}
            >
              ❤
            </motion.span>
            <motion.span
              className="relative px-4 py-1 rounded-xl bg-transparent"
              variants={nameVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Sachin
            </motion.span>
          </h1>
          {/* Custom Animations for Names */}
          <style>{`
            @keyframes heartbeat {
              0%, 100% { transform: scale(1); }
              10%, 30% { transform: scale(1.2); }
              20%, 40% { transform: scale(0.95); }
              50% { transform: scale(1.1); }
              60% { transform: scale(0.98); }
              70% { transform: scale(1.05); }
              80% { transform: scale(1); }
            }
            @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
            }
          `}</style>

          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            Together with our families, we invite you to celebrate our union
          </p>

          <p className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            "What started as an arrangement became a beautiful journey of
            companionship."
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-[var(--shadow-medium)]"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-full"
            >
              View Invitation
            </Button>
          </div>

          <div className="mt-8 max-w-xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border-2 border-accent/30 shadow-[var(--shadow-gold)] ring-2 ring-accent/20 hover:ring-accent/40 transition-all duration-300">
              <div className="space-y-3">
                <p className="text-base font-semibold text-accent">
                  8th February, 2026
                </p>
                <p className="text-lg font-bold text-primary">
                  Mangala Karyalaya
                </p>
                <p className="text-sm text-foreground/90 max-w-xl mx-auto leading-relaxed">
                  Vijayapur–Sindagi Road, Sindagi
                  <br />
                  Vijayapur (Bijapur) District, Karnataka – 586128
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() =>
                      window.open(
                        GOOGLE_MAPS_URL,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View On Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
