import { Heart, Users, Sparkles, Calendar } from "lucide-react";

const timelineEvents = [
  {
    icon: Users,
    title: "First Meeting",
    date: "January 2024",
    description:
      "Our families introduced us, and we met for the first time over tea. Nervous smiles and curious hearts.",
  },
  {
    icon: Heart,
    title: "Building Connection",
    date: "March - June 2024",
    description:
      "Through countless conversations, we discovered shared values, dreams, and a growing respect for each other.",
  },
  {
    icon: Sparkles,
    title: "Engagement",
    date: "August 2024",
    description:
      "With our families' blessings and our hearts aligned, we celebrated our engagement surrounded by loved ones.",
  },
  {
    icon: Calendar,
    title: "The Wedding",
    date: "February 2026",
    description:
      "Today we begin our forever, grateful for the journey that brought us here.",
  },
];

export const OurStory = () => {
  return (
    <section
      id="story"
      className="mt-4 py-20 bg-gradient-to-b from-background to-cream-dark"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Story</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
            "An arranged beginning, a chosen forever"
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="elegant-card text-center">
            <p className="text-lg leading-relaxed text-foreground/90">
              Our families blessed us with a year — a year to meet, to
              understand, and to build trust. With every conversation, every
              smile, and every shared dream, we realized this was more than an
              arrangement.
              <br />
              <br />
              <span className="gold-accent">
                We became friends first, then partners in heart and mind.
              </span>
              <br />
              <br />
              Today, we walk together into a new chapter, grateful for the path
              that brought us here and excited for the journey ahead.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent/20 via-accent to-accent/20 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="elegant-card hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-primary">
                          {event.title}
                        </h3>
                        <p className="text-sm text-accent">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">{event.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-[var(--shadow-gold)]"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
