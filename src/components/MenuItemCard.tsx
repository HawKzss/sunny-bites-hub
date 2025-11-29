import { MenuItem } from "@/data/menuData";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuItemCard = ({ item, onClick }: MenuItemCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-1 border-border"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-custom-md">
          ${item.price.toFixed(2)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
