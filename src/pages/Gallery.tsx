import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop",
    title: "Café Interior",
    category: "Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop",
    title: "Fresh Coffee",
    category: "Drinks",
  },
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop",
    title: "Coffee Bar",
    category: "Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop",
    title: "Breakfast Plate",
    category: "Food",
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    title: "Cappuccino Art",
    category: "Drinks",
  },
  {
    url: "https://images.unsplash.com/photo-1559496417-e7f25c12cbb7?w=600&h=600&fit=crop",
    title: "Cozy Corner",
    category: "Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    title: "Delicious Meals",
    category: "Food",
  },
  {
    url: "https://images.unsplash.com/photo-1501492029629-702f9d7e8546?w=600&h=600&fit=crop",
    title: "Fresh Pastries",
    category: "Food",
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
    title: "Outdoor Seating",
    category: "Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&h=600&fit=crop",
    title: "Iced Coffee",
    category: "Drinks",
  },
  {
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop",
    title: "Pancake Stack",
    category: "Food",
  },
  {
    url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=600&fit=crop",
    title: "Dining Area",
    category: "Interior",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Take a visual tour of our café, food, and atmosphere
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.url)}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-custom-md hover:shadow-custom-lg transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg mb-1">{image.title}</p>
                    <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
