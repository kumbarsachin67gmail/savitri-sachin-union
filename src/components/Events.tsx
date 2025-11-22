import { Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    name: "Engagement",
    date: "August 10, 2024",
    time: "6:00 PM onwards",
    venue: "Grand Hall, Mumbai",
    address: "123 Wedding Street, Mumbai, Maharashtra",
    dressCode: "Traditional Indian Attire",
  },
  {
    name: "Haldi Ceremony",
    date: "December 13, 2025",
    time: "10:00 AM",
    venue: "Family Residence",
    address: "456 Celebration Avenue, Mumbai",
    dressCode: "Yellow/Bright Colors",
  },
  {
    name: "Mehendi Ceremony",
    date: "December 14, 2025",
    time: "3:00 PM",
    venue: "Garden Lawn, Hotel Taj",
    address: "Hotel Taj Palace, Mumbai",
    dressCode: "Colorful Indian Wear",
  },
  {
    name: "Wedding Ceremony",
    date: "December 15, 2025",
    time: "10:00 AM",
    venue: "Sacred Temple Hall",
    address: "789 Temple Road, Mumbai",
    dressCode: "Traditional Formal Attire",
  },
  {
    name: "Reception",
    date: "December 15, 2025",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Hotel Taj",
    address: "Hotel Taj Palace, Mumbai",
    dressCode: "Formal/Semi-Formal",
  },
];

export const Events = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-cream-dark to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Wedding Events</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Join us in celebrating our special moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="elegant-card hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                  {event.name}
                </h3>
                <div className="w-12 h-1 bg-accent"></div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground/80">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{event.venue}</p>
                    <p className="text-sm text-muted-foreground">{event.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Dress Code:</span>{" "}
                      {event.dressCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  View on Map
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
