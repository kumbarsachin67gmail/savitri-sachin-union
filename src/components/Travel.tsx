import { Train, Hotel, Phone } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hotel Surabhi */}
          <div className="elegant-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Hotel className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">
              Hotel Surabhi
            </h3>
            <div className="space-y-1 text-sm">
              <p className="text-foreground/80">Chikka-Sindagi, Sindagi</p>
              <p className="text-foreground/80">Karnataka</p>
              <p className="text-sm text-muted-foreground mt-2">
                Restaurant & Lodging available
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/dir/SURABHI+RESTAURANT+%26+LODGING,+Sindagi+-+Kalaburagi+Rd,+Chikka-Sindagi,+Karnataka+586128/W63G%2B66Q,+Vijayapur+-+Sindagi+Rd,+Sindagi,+Karnataka+586128/@16.8956397,76.2047633,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3bc633be191e853d:0x5ebfaec5b6dc1c83!2m2!1d76.2022807!2d16.8847657!1m5!1m1!1s0x3bc6335e4df0a21f:0x3ad5a3af9a3bd84b!2m2!1d76.2254957!2d16.9021113?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
              >
                <span>View on Google Maps</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
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
              <p className="text-lg font-medium text-primary">+91 9481329017</p>
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
