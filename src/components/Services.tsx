import { ShieldCheck, Globe, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Export Trading",
    description: "Seamless facilitation of agricultural exports from Peru to global markets with full compliance and documentation support.",
  },
  {
    icon: Users,
    title: "Brokerage Services",
    description: "Connecting buyers and suppliers with trusted relationships and deep market knowledge across the Peruvian agricultural sector.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous quality control and certification processes ensuring premium products meet international standards.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Strategic insights and market analysis to optimize your supply chain and maximize trading opportunities.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for international agricultural trade
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
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {service.description}
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
