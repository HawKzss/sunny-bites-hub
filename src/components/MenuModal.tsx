import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MenuItem } from "@/data/menuData";
import { ShoppingCart } from "lucide-react";

interface MenuModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ item, isOpen, onClose }: MenuModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleOrder = () => {
    const message = `Hello! I'd like to order:\n\n${quantity}x ${item.name}\nPrice: ${(item.price * quantity).toLocaleString()} TZS\n\nThank you!`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const incrementQuantity = () => setQuantity((prev) => Math.min(prev + 1, 99));
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{item.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Category</span>
              <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Price</span>
              <span className="text-2xl font-bold text-primary">{item.price.toLocaleString()} TZS</span>
            </div>
          </div>

          <p className="text-foreground leading-relaxed">{item.description}</p>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                className="rounded-full"
              >
                -
              </Button>
              <Input
                id="quantity"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                className="w-20 text-center"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                className="rounded-full"
              >
                +
              </Button>
              <div className="flex-1 text-right">
                <span className="text-lg font-semibold text-foreground">
                  Total: <span className="text-primary">{(item.price * quantity).toLocaleString()} TZS</span>
                </span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleOrder}
            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full py-6 text-lg font-semibold"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Order via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
