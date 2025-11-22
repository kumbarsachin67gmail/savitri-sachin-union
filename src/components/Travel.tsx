import { Plane, Train, Hotel, Phone } from "lucide-react";

export const Travel = () => {
  return (
    <section id="travel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Travel & Stay</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Plan your journey with ease
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Airport */}
          <div className="elegant-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Plane className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">
              Nearest Airport
            </h3>
            <p className="text-foreground/80 mb-2">
              Chhatrapati Shivaji Maharaj International Airport
            </p>
            <p className="text-sm text-muted-foreground">
              Approximately 25 km from venue
            </p>
          </div>

          {/* Railway */}
          <div className="elegant-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Train className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">
              Railway Station
            </h3>
            <p className="text-foreground/80 mb-2">Mumbai Central Railway Station</p>
            <p className="text-sm text-muted-foreground">
              Approximately 12 km from venue
            </p>
          </div>

          {/* Hotels */}
          <div className="elegant-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Hotel className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">
              Recommended Hotels
            </h3>
            <div className="space-y-1 text-sm">
              <p className="text-foreground/80">Hotel Taj Palace</p>
              <p className="text-foreground/80">Grand Hyatt Mumbai</p>
              <p className="text-foreground/80">The Oberoi Mumbai</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="elegant-card">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-accent" />
              <h3 className="font-serif text-2xl font-bold text-primary">
                Local Contact
              </h3>
            </div>
            <div className="text-center space-y-2">
              <p className="text-foreground/80">
                For any travel assistance or queries, please contact:
              </p>
              <p className="text-lg font-medium text-primary">
                +91 98765 43210
              </p>
              <p className="text-sm text-muted-foreground">
                Available 24/7 during the event days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
