import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-andes.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-background/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
          Premium Peruvian Agriculture
          <br />
          <span className="text-primary">For Global Markets</span>
        </h1>
        <p className="font-inter text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          Expert trader and broker connecting international companies with Peru's finest agricultural products
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter text-lg px-8 py-6"
        >
          Start Exporting Today
        </Button>
      </div>
    </section>
  );
};

export default Hero;
