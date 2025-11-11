import { Lightbulb, Globe, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      titleKey: "services.export.title",
      descriptionKey: "services.export.description",
    },
    {
      icon: Users,
      titleKey: "services.brokerage.title",
      descriptionKey: "services.brokerage.description",
    },
    {
      icon: Lightbulb,
      titleKey: "services.advisory.title",
      descriptionKey: "services.advisory.description",
    },
    {
      icon: TrendingUp,
      titleKey: "services.market.title",
      descriptionKey: "services.market.description",
    },
  ];
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('services.title')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">
                  {t(service.titleKey)}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {t(service.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
