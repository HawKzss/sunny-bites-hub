import { Coffee, Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            About <span className="text-primary">ClockTowerCafe</span>
          </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              A journey of passion, quality, and community since our beginning
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Where It All Began</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ClockTowerCafe was born from a simple dream: to create a warm, welcoming space where 
                  people could gather over exceptional coffee and delicious food. What started as a 
                  small neighborhood spot has grown into a beloved community hub, but our values 
                  remain the same.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every morning, we source the freshest ingredients and brew the finest coffee to 
                  ensure that every visit to ClockTowerCafe is a memorable experience. Our team is 
                  dedicated to creating not just great food and drinks, but lasting connections 
                  with our community.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-custom-lg">
                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop"
                  alt="Café interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-custom-md border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our ingredients or the care we put into every cup and dish.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-custom-md border border-border text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every item on our menu is crafted with passion and attention to detail that you can taste.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-custom-md border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Focus</h3>
                <p className="text-muted-foreground">
                  We're more than a café – we're a gathering place where friendships are formed and memories are made.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-custom-md border border-border text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  From sourcing to service, we strive for excellence in everything we do for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12 text-center border border-border shadow-custom-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To provide our community with an exceptional café experience through quality products, 
                genuine hospitality, and a warm atmosphere where everyone feels at home. We're committed 
                to sustainability, supporting local suppliers, and creating a positive impact in our 
                neighborhood one cup at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">What People Say About Us</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              See reviews on our home page carousel
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
