import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-foreground">
              {t('contact.form.title')}
            </h3>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder={t('contact.form.name')}
                  className="font-inter"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  className="font-inter"
                />
              </div>
              <div>
                <Input
                  placeholder={t('contact.form.company')}
                  className="font-inter"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.form.message')}
                  rows={6}
                  className="font-inter"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter"
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>

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
                    <p className="font-inter text-muted-foreground">info@quriorigins.com</p>
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
                    <p className="font-inter text-muted-foreground">+51 1 234 5678</p>
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
