import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/menu", label: "Menu" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
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
          <div className="hidden md:flex items-center gap-8">
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
              asChild
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6"
            >
              <a
                href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
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
                asChild
                className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full"
              >
                <a
                  href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Now
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
