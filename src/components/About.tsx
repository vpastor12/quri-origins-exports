import { Leaf, Mountain, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Mountain,
      titleKey: "about.diversity.title",
      descriptionKey: "about.diversity.description",
    },
    {
      icon: Leaf,
      titleKey: "about.biodiversity.title",
      descriptionKey: "about.biodiversity.description",
    },
    {
      icon: Award,
      titleKey: "about.recognition.title",
      descriptionKey: "about.recognition.description",
    },
  ];
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-secondary-foreground">
            {t('about.title')}
          </h2>
          <p className="font-inter text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block p-4 bg-primary/20 rounded-full">
                <highlight.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 text-secondary-foreground">
                {t(highlight.titleKey)}
              </h3>
              <p className="font-inter text-secondary-foreground/70">
                {t(highlight.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-lg text-secondary-foreground/80">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
