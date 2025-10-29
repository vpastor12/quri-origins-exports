import { useTranslation } from "react-i18next";
import logo from "@/assets/quri-logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img src={logo} alt="Quri Origins" className="h-16 w-auto" />
          <p className="font-inter text-secondary-foreground/80 text-center max-w-2xl">
            {t('footer.tagline')}
          </p>
          <div className="border-t border-secondary-foreground/20 pt-6 w-full max-w-2xl">
            <p className="font-inter text-sm text-secondary-foreground/60 text-center">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
