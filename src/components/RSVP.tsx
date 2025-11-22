import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    events: [] as string[],
    food: "veg",
    message: "",
  });

  const events = [
    "Haldi Ceremony",
    "Mehendi Ceremony",
    "Wedding Ceremony",
    "Reception",
  ];

  const handleEventToggle = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter((e) => e !== event)
        : [...prev.events, event],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.events.length === 0) {
      toast.error("Please select at least one event");
      return;
    }

    // In a real implementation, this would send to a backend
    console.log("RSVP submitted:", formData);
    
    toast.success("Thank you for your RSVP! We look forward to celebrating with you.");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      guests: "1",
      events: [],
      food: "veg",
      message: "",
    });
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-background to-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">RSVP</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 mb-2">
            Your presence means the world to us
          </p>
          <p className="text-muted-foreground italic">
            Please let us know if you can join our celebration
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="elegant-card">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="mt-2"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Your contact number"
                  className="mt-2"
                  required
                />
              </div>

              {/* Number of Guests */}
              <div>
                <Label htmlFor="guests" className="text-foreground font-medium">
                  Number of Guests
                </Label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) =>
                    setFormData({ ...formData, guests: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Events Attending */}
              <div>
                <Label className="text-foreground font-medium mb-3 block">
                  Events Attending *
                </Label>
                <div className="space-y-3">
                  {events.map((event) => (
                    <div key={event} className="flex items-center gap-3">
                      <Checkbox
                        id={event}
                        checked={formData.events.includes(event)}
                        onCheckedChange={() => handleEventToggle(event)}
                      />
                      <Label
                        htmlFor={event}
                        className="text-foreground/80 cursor-pointer"
                      >
                        {event}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food Preference */}
              <div>
                <Label htmlFor="food" className="text-foreground font-medium">
                  Food Preference
                </Label>
                <Select
                  value={formData.food}
                  onValueChange={(value) =>
                    setFormData({ ...formData, food: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veg">Vegetarian</SelectItem>
                    <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-foreground font-medium">
                  Special Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share your wishes or any special requirements"
                  className="mt-2 min-h-24"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-maroon-dark text-primary-foreground py-6 text-lg rounded-full shadow-[var(--shadow-gold)]"
              >
                Submit RSVP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
