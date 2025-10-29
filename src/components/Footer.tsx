import logo from "@/assets/quri-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img src={logo} alt="Quri Origins" className="h-16 w-auto" />
          <p className="font-inter text-secondary-foreground/80 text-center max-w-2xl">
            Quri Origins - Connecting the world with Peru's finest agricultural products
          </p>
          <div className="border-t border-secondary-foreground/20 pt-6 w-full max-w-2xl">
            <p className="font-inter text-sm text-secondary-foreground/60 text-center">
              © {new Date().getFullYear()} Quri Origins. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
