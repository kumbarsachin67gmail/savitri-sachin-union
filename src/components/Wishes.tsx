import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import { toast } from "sonner";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export const Wishes = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Priya & Rahul",
      message: "Wishing you both a lifetime of love and happiness! May your journey together be filled with beautiful moments. ❤️",
      timestamp: "2 days ago",
    },
    {
      name: "Amit Sharma",
      message: "Congratulations on your wedding! May God bless your union with joy, prosperity, and eternal love.",
      timestamp: "5 days ago",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast.error("Please fill in both name and message");
      return;
    }

    const newWish: Wish = {
      name: name.trim(),
      message: message.trim(),
      timestamp: "Just now",
    };

    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
    
    toast.success("Thank you for your beautiful wishes! ❤️");
  };

  return (
    <section id="wishes" className="py-20 bg-gradient-to-b from-cream-dark to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Wishes Wall</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90">
            Send your blessings to Savitri & Sachin
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Wish Form */}
          <div className="elegant-card mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="wish-name" className="text-foreground font-medium">
                  Your Name
                </Label>
                <Input
                  id="wish-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="wish-message" className="text-foreground font-medium">
                  Your Message
                </Label>
                <Textarea
                  id="wish-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your blessings and good wishes..."
                  className="mt-2 min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-maroon-dark text-primary-foreground py-6 rounded-full shadow-[var(--shadow-gold)]"
              >
                <Heart className="w-5 h-5 mr-2" />
                Send Your Wishes
              </Button>
            </form>
          </div>

          {/* Wishes Display */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-primary text-center mb-8">
              Messages from Loved Ones
            </h3>

            {wishes.map((wish, index) => (
              <div
                key={index}
                className="elegant-card hover:shadow-[var(--shadow-gold)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-lg font-semibold text-primary">
                        {wish.name}
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        {wish.timestamp}
                      </span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
