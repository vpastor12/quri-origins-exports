import { Card, CardContent } from "@/components/ui/card";
import quinoaImage from "@/assets/quinoa.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import cacaoImage from "@/assets/cacao.jpg";

const products = [
  {
    name: "Quinoa",
    image: quinoaImage,
    description: "Premium organic quinoa in white, red, and black varieties from high-altitude Andean farms.",
  },
  {
    name: "Coffee",
    image: coffeeImage,
    description: "Specialty-grade Arabica coffee beans from sustainable Peruvian plantations.",
  },
  {
    name: "Cacao",
    image: cacaoImage,
    description: "Fine-flavor cacao beans from the Amazon region, prized by chocolatiers worldwide.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Peru's finest agricultural exports, sourced from the Andes to the Amazon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                  {product.name}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-inter text-muted-foreground">
            Also available: Superfoods (maca, lucuma, sacha inchi), native potatoes, asparagus, avocados, and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
