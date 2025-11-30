import { useState } from "react";
import MenuItemCard from "@/components/MenuItemCard";
import MenuModal from "@/components/MenuModal";
import { menuItems, MenuItem } from "@/data/menuData";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              <span className="text-primary">ClockTowerCafe</span> Menu
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Explore our carefully crafted selection of coffee, food, and treats
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 bg-background/95 backdrop-blur-sm z-40 border-b border-border shadow-custom-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 ${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onClick={() => handleItemClick(item)} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Order?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Place your order via WhatsApp and we'll have it ready for you!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg"
            >
              <a
                href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <MenuModal item={selectedItem} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Menu;
