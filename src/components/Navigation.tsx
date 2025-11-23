import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggleButton = () => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={() => {
        console.log("Language toggle clicked!");
        toggleLanguage();
      }}
      style={{
        padding: "6px 12px",
        fontSize: window.innerWidth < 768 ? "11px" : "12px",
        backgroundColor: "hsl(var(--accent) / 0.9)",
        color: "hsl(var(--accent-foreground))",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        fontWeight: "500",
        boxShadow:
          "0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        transition: "all 0.2s ease-in-out",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        pointerEvents: "auto",
        marginRight: "8px",
      }}
      onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <span>🌍</span>
      <span>{t.languageName}</span>
    </button>
  );
};

export const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navCouple, href: "#couple" },
    { label: t.navStory, href: "#story" },
    { label: t.navEvents, href: "#events" },
    { label: t.navGallery, href: "#gallery" },
    { label: t.navTravel, href: "#travel" },
    { label: t.navWishes, href: "#wishes" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-serif text-2xl font-bold text-primary"
          >
            S ❤ S
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggleButton />
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ zIndex: 1000 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in bg-card backdrop-blur-sm rounded-xl shadow-lg mt-2 border">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
