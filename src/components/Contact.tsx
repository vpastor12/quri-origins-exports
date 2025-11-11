import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-foreground">
              {t('contact.info.title')}
            </h3>
            
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold mb-1 text-foreground">{t('contact.info.email')}</h4>
                    <p className="font-inter text-muted-foreground">contact@quriorigins.co.site</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold mb-1 text-foreground">{t('contact.info.phone')}</h4>
                    <p className="font-inter text-muted-foreground">+51 941 478 762</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold mb-1 text-foreground">{t('contact.info.location')}</h4>
                    <p className="font-inter text-muted-foreground">Lima, Peru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6">
              <p className="font-inter text-sm text-muted-foreground">
                {t('contact.info.hours')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
