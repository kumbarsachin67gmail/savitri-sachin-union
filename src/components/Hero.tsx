import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart, Music, Pause } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroPattern from "@/assets/hero-pattern.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "@/contexts/LanguageContext";

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
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};
const heartVariant = {
  animate: {
    scale: [1, 1.15, 1, 1.1, 1],
    opacity: [0.8, 1, 0.8, 1, 0.8],
    transition: { duration: 1.5, repeat: Infinity },
  },
};

export const Hero = () => {
  const { t } = useLanguage();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    const imagesCount = 25;
    const interval = setInterval(() => {
      if (!isCarouselPaused) {
        setCarouselIndex((prev) => (prev + 1) % imagesCount);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimating(true);
    const id = setTimeout(() => setAnimating(false), 600);
    return () => clearTimeout(id);
  }, [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24"
      onMouseEnter={() => setIsCarouselPaused(true)}
      onMouseLeave={() => setIsCarouselPaused(false)}
    >
      {/* Floating Particles for cinematic effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-20 left-10 text-red-200 opacity-10 text-2xl animate-float-slow">
          💖
        </span>
        <span className="absolute top-40 right-20 text-pink-200 opacity-5 text-xl animate-float-delay-1">
          🌸
        </span>
        <span className="absolute top-60 left-1/3 text-red-100 opacity-10 text-lg animate-float-delay-2">
          💝
        </span>
        <span className="absolute bottom-40 right-10 text-pink-100 opacity-5 text-2xl animate-float-slow">
          🌹
        </span>
        <span className="absolute top-32 left-2/3 text-red-200 opacity-10 text-lg animate-float-delay-1">
          ❤️
        </span>
        <span className="absolute bottom-60 left-16 text-pink-200 opacity-5 text-xl animate-float-delay-2">
          💕
        </span>
        <span className="absolute top-80 right-32 text-red-100 opacity-10 text-2xl animate-float-slow">
          💖
        </span>
      </div>
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
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden">
        {/* MASS Images - Always shown first */}
        <img
          src="/MASS_1854.JPG"
          alt="Mass Image 1854"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 0 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_1894.JPG"
          alt="Mass Image 1894"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 1 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_1943.JPG"
          alt="Mass Image 1943"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 2 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_1982.JPG"
          alt="Mass Image 1982"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 3 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_1987.JPG"
          alt="Mass Image 1987"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 4 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2127.JPG"
          alt="Mass Image 2127"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 5 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2132.JPG"
          alt="Mass Image 2132"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 6 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2137.JPG"
          alt="Mass Image 2137"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 7 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2141.JPG"
          alt="Mass Image 2141"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 8 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2169.JPG"
          alt="Mass Image 2169"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 9 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2201.JPG"
          alt="Mass Image 2201"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 10 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/MASS_2209.JPG"
          alt="Mass Image 2209"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 11 ? "opacity-20" : "opacity-0"
          }`}
        />

        {/* Original Images - Responsive display */}
        <img
          src="/Sachin_3_hero.png"
          alt="Sachin 3 Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 md:block lg:hidden ${
            carouselIndex === 12 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_5_hero.png"
          alt="Sachin 5 Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 md:block lg:hidden ${
            carouselIndex === 13 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_hero.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 md:block lg:hidden ${
            carouselIndex === 14 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_2_hero.png"
          alt="Sachin 2 Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 15 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin_4_hero.png"
          alt="Sachin 4 Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 16 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/Sachin.png"
          alt="Sachin"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 md:block lg:hidden ${
            carouselIndex === 17 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/assets/hero-pattern.jpg"
          alt="Pattern"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 18 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/image.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 19 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/image copy 2.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 20 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/image copy 3.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 21 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/image copy 4.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 lg:hidden ${
            carouselIndex === 22 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/image copy 5.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 23 ? "opacity-20" : "opacity-0"
          }`}
        />
        <img
          src="/image copy 6.png"
          alt="Sachin Hero"
          className={`absolute min-w-full min-h-full object-cover transition-opacity duration-1000 ${
            carouselIndex === 24 ? "opacity-20" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="mt-0 relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <div className="h-8" /> {/* Spacer added above the heading */}
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary flex flex-col items-center gap-0 md:flex-row md:gap-4 md:items-center md:justify-center">
            <motion.span
              className="relative px-4 py-1 rounded-xl bg-transparent"
              variants={nameVariant}
              initial="initial"
              animate="animate"
            >
              Sachin
            </motion.span>
            <motion.span
              className="text-red-400 md:mx-4 drop-shadow-lg float"
              variants={heartVariant}
              animate="animate"
              style={{ display: "inline-block" }}
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
              Savitri
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
            @keyframes pop {
              0% { transform: scale(1); }
              50% { transform: scale(1.08); }
              100% { transform: scale(1); }
            }
            .animate-pop {
              animation: pop 0.6s ease-in-out;
            }
            @keyframes fadeUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .fade-up {
              opacity: 0;
              transform: translateY(30px);
              animation: fadeUp 1s ease forwards;
            }
            .fade-up-delay-1 {
              opacity: 0;
              transform: translateY(30px);
              animation: fadeUp 1s ease forwards;
              animation-delay: 0.2s;
            }
            .fade-up-delay-2 {
              opacity: 0;
              transform: translateY(30px);
              animation: fadeUp 1s ease forwards;
              animation-delay: 0.4s;
            }
            .fade-up-delay-3 {
              opacity: 0;
              transform: translateY(30px);
              animation: fadeUp 1s ease forwards;
              animation-delay: 0.6s;
            }
            @keyframes float {
              0% { transform: translateY(0) }
              50% { transform: translateY(-10px) }
              100% { transform: translateY(0) }
            }
            .float {
              animation: float 3s ease-in-out infinite;
            }
            .animate-float-slow {
              animation: float 6s ease-in-out infinite;
            }
            .animate-float-delay-1 {
              animation: float 6s ease-in-out infinite 1s;
            }
            .animate-float-delay-2 {
              animation: float 6s ease-in-out infinite 2s;
            }
          `}</style>
          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            "
            <Typewriter
              words={[t.heroTagline]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
            />
            "
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
                className={`bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-[var(--shadow-medium)] ${
                  animating ? "animate-pop" : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {item.value}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-full hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-200"
              onClick={() => setOpenDialog(true)}
            >
              {t.viewInvitation}
            </Button>
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border-2 border-accent/30 shadow-[var(--shadow-gold)] ring-2 ring-accent/20 hover:ring-accent/40 transition-all duration-300">
              <div className="space-y-3">
                <p className="text-base font-semibold text-accent">
                  {t.weddingDate}
                </p>
                <p className="text-lg font-bold text-primary">{t.venueName}</p>
                <p className="text-sm text-foreground/90 max-w-xl mx-auto leading-relaxed">
                  {t.venueAddress}
                  <br />
                  {t.venueAddressLine2}
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
                    {t.viewMap}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invitation Modal */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl font-bold text-primary flex items-center justify-center gap-2">
              {t.modalTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground italic">{t.modalSubtitle}</p>
            <div className="bg-accent/10 rounded-lg p-4 border">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-accent" />
              <p className="font-semibold text-accent">{t.weddingDate}</p>
              <p className="text-sm text-muted-foreground">{t.weddingDay}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-accent/30">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="font-bold text-primary">{t.venueName}</p>
              <p className="text-sm text-foreground/90">
                {t.venueAddress}
                <br />
                {t.venueAddressLine2}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{t.storyQuote}</p>
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open(GOOGLE_MAPS_URL, "_blank")}
              >
                <MapPin className="w-4 h-4 mr-2" />
                {t.viewMap}
              </Button>
              <Button
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setOpenDialog(false)}
              >
                {t.close}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
