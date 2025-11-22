import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero = () => {
  const weddingDate = new Date("2025-12-15T10:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRSVP = () => {
    document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <div className="inline-block mb-4">
            <Calendar className="w-12 h-12 mx-auto text-accent mb-2" />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary">
            Savitri <span className="text-accent">❤</span> Sachin
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            Together with our families, we invite you to celebrate our union
          </p>

          <p className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            "What started as an arrangement became a beautiful journey of companionship."
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              onClick={scrollToRSVP}
              className="bg-primary hover:bg-maroon-dark text-primary-foreground text-lg px-8 py-6 rounded-full shadow-[var(--shadow-gold)]"
            >
              RSVP Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToRSVP}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-full"
            >
              View Invitation
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            December 15, 2025
          </p>
        </div>
      </div>
    </section>
  );
};
