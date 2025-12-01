import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Amina Hassan",
    rating: 5,
    comment: "Best coffee in town! The atmosphere is perfect for meetings and the staff is incredibly friendly. Highly recommend the caramel latte!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "John Mwamba",
    rating: 5,
    comment: "Amazing food and great service. The avocado toast is my favorite! ClockTowerCafe has become my go-to spot for breakfast.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Sarah Kimaro",
    rating: 4,
    comment: "Love the cozy ambiance and the menu variety. The smoothies are fresh and delicious. Perfect place to relax and work.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Mollel",
    rating: 5,
    comment: "Exceptional quality! Every dish is prepared with care. The chocolate cake is heavenly. Will definitely come back!",
    date: "2 days ago"
  },
  {
    id: 5,
    name: "Grace Nditi",
    rating: 5,
    comment: "The best café experience I've had! Great coffee, delicious pastries, and wonderful service. Love the Food of the Day special!",
    date: "1 week ago"
  }
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">What People Say About Us</h2>
          <p className="text-lg text-muted-foreground">Don't just take our word for it</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="overflow-hidden shadow-custom-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground text-center mb-6 leading-relaxed min-h-[120px] flex items-center justify-center">
                "{reviews[currentIndex].comment}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-lg text-foreground">{reviews[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{reviews[currentIndex].date}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground"
            >
              ←
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
