import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import quinoaImage from "@/assets/quinoa.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import cacaoImage from "@/assets/cacao.jpg";

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      nameKey: "products.quinoa.name",
      image: quinoaImage,
      descriptionKey: "products.quinoa.description",
    },
    {
      nameKey: "products.coffee.name",
      image: coffeeImage,
      descriptionKey: "products.coffee.description",
    },
    {
      nameKey: "products.cacao.name",
      image: cacaoImage,
      descriptionKey: "products.cacao.description",
    },
  ];
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('products.title')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                  {t(product.nameKey)}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {t(product.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-inter text-muted-foreground">
            {t('products.other')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
