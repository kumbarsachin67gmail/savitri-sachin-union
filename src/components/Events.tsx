import { Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/17.4479344,78.3803275/W63G%2B66Q+Mangala+Karyalaya,+Vijayapur+-+Sindagi+Rd,+Sindagi,+Karnataka+586128/@17.0923445,76.6679637,9z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bc6335e4df0a21f:0x3ad5a3af9a3bd84b!2m2!1d76.2254957!2d16.9021113!3e9?entry=ttu&g_ep=EgoyMDI1MTEyMC4xIKXMDSoASAFQAw%3D%3D";

const events = [
  {
    name: "Wedding Ceremony",
    date: "8th February, 2026",
    time: "10:00 AM",
    venue: "Mangala Karyalaya",
    address:
      "Vijayapur–Sindagi Road, Sindagi, Vijayapur (Bijapur) District, Karnataka – 586128",
    dressCode: "Traditional Formal Attire",
  },
  {
    name: "Engagement",
    date: "August 10, 2024",
    time: "6:00 PM onwards",
    venue: "Mangala Karyalaya",
    address:
      "Vijayapur–Sindagi Road, Sindagi, Vijayapur (Bijapur) District, Karnataka – 586128",
    dressCode: "Traditional Indian Attire",
  },
  {
    name: "Haldi Ceremony",
    date: "February 6, 2026",
    time: "10:00 AM",
    venue: "Mangala Karyalaya",
    address:
      "Vijayapur–Sindagi Road, Sindagi, Vijayapur (Bijapur) District, Karnataka – 586128",
    dressCode: "Yellow/Bright Colors",
  },
  {
    name: "Mehendi Ceremony",
    date: "February 7, 2026",
    time: "3:00 PM",
    venue: "Mangala Karyalaya",
    address:
      "Vijayapur–Sindagi Road, Sindagi, Vijayapur (Bijapur) District, Karnataka – 586128",
    dressCode: "Colorful Indian Wear",
  },
  {
    name: "Reception",
    date: "8th February, 2026",
    time: "7:00 PM onwards",
    venue: "Mangala Karyalaya",
    address:
      "Vijayapur–Sindagi Road, Sindagi, Vijayapur (Bijapur) District, Karnataka – 586128",
    dressCode: "Formal/Semi-Formal",
  },
];

export const Events = () => {
  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-cream-dark to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Wedding Events</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Join us in celebrating our special moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => {
            const isWeddingCeremony = event.name === "Wedding Ceremony";
            return (
              <div
                key={index}
                className={`elegant-card hover:shadow-[var(--shadow-gold)] transition-all duration-300 ${
                  isWeddingCeremony
                    ? "md:col-span-2 lg:col-span-3 ring-4 ring-accent ring-offset-4 ring-offset-background bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent shadow-[var(--shadow-gold)]"
                    : ""
                }`}
              >
                <div className="mb-4">
                  <h3
                    className={`font-serif text-2xl font-bold mb-2 ${
                      isWeddingCeremony ? "text-accent" : "text-primary"
                    }`}
                  >
                    {event.name}
                  </h3>
                  <div
                    className={`w-12 h-1 ${
                      isWeddingCeremony ? "bg-accent h-1.5" : "bg-accent"
                    }`}
                  ></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        {event.date}
                      </p>
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
                      <p className="font-medium text-foreground">
                        {event.venue}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.address}
                      </p>
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
                    onClick={() =>
                      window.open(
                        GOOGLE_MAPS_URL,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
