import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("about") },
    { to: "/menu", label: t("menu") },
    { to: "/gallery", label: t("gallery") },
    { to: "/contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-custom-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Coffee className="w-8 h-8 text-primary group-hover:text-primary-dark transition-colors" />
            <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              ClockTowerCafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium transition-colors hover:text-primary relative ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "en" ? "sw" : "en")}
              className="text-foreground hover:text-primary"
              title={language === "en" ? "Swahili" : "English"}
            >
              <Languages className="w-5 h-5" />
              <span className="ml-1 text-xs">{language === "en" ? "SW" : "EN"}</span>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6"
            >
              <a
                href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("orderNow")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="outline"
                onClick={() => setLanguage(language === "en" ? "sw" : "en")}
                className="justify-start"
              >
                <Languages className="w-5 h-5 mr-2" />
                {language === "en" ? "Swahili" : "English"}
              </Button>
              <Button
                asChild
                className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full"
              >
                <a
                  href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("orderNow")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
