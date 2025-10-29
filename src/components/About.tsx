import { Leaf, Mountain, Award } from "lucide-react";

const highlights = [
  {
    icon: Mountain,
    title: "Geographic Diversity",
    description: "From coastal valleys to Andean highlands and Amazon rainforest, Peru offers unique growing conditions.",
  },
  {
    icon: Leaf,
    title: "Biodiversity Capital",
    description: "Home to incredible agricultural biodiversity with thousands of native crop varieties.",
  },
  {
    icon: Award,
    title: "Global Recognition",
    description: "Peruvian products consistently win international awards for quality and sustainability.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-secondary-foreground">
            Why Peru?
          </h2>
          <p className="font-inter text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            A global agricultural powerhouse with centuries of farming tradition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block p-4 bg-primary/20 rounded-full">
                <highlight.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-secondary-foreground">
                {highlight.title}
              </h3>
              <p className="font-inter text-secondary-foreground/70">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-lg text-secondary-foreground/80">
            Peru is one of the world's most important origins for organic and specialty agricultural products. 
            With its diverse climates, rich soil, and commitment to sustainable farming practices, Peru produces 
            some of the planet's most sought-after crops for discerning international markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
