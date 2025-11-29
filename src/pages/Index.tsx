import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { menuItems, getFoodOfTheDay } from "@/data/menuData";
import MenuItemCard from "@/components/MenuItemCard";
import MenuModal from "@/components/MenuModal";
import { MenuItem } from "@/data/menuData";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const foodOfTheDay = getFoodOfTheDay();
  const featuredItems = menuItems.slice(0, 6);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner - Food of the Day */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={foodOfTheDay.image}
            alt={foodOfTheDay.name}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <p className="text-lg mb-2 text-primary-light animate-fade-in">Food of the Day</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {foodOfTheDay.name}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {foodOfTheDay.description}
          </p>
          <Button
            onClick={() => handleItemClick(foodOfTheDay)}
            className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Order Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">Welcome to Sunny Café</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Experience the perfect blend of great coffee, delicious food, and warm hospitality. 
            At Sunny Café, every cup is crafted with passion, and every dish is made with the 
            finest ingredients. Join us for breakfast, lunch, or just a coffee break – we're here 
            to make your day brighter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
            >
              <Link to="/menu">View Full Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
            >
              <a
                href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Menu</h2>
            <p className="text-lg text-muted-foreground">Discover our most popular items</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onClick={() => handleItemClick(item)} />
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-4 text-lg font-semibold"
            >
              <Link to="/menu">
                See All Menu Items <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <MenuModal item={selectedItem} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
