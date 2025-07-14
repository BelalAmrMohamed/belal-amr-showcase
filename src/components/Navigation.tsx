import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const navItems = [
    { href: "/", label: language === "en" ? "Home" : "الرئيسية" },
    { href: "/portfolio", label: language === "en" ? "Portfolio" : "الأعمال" },
    { href: "/about", label: language === "en" ? "About" : "نبذة عني" },
    { href: "/blog", label: language === "en" ? "Blog" : "المدونة" },
    { href: "/contact", label: language === "en" ? "Contact" : "تواصل" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "ar" : "en");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Belal Amr
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === "en" ? "عربي" : "English"}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              {language === "en" ? "Download CV" : "تحميل السيرة الذاتية"}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button
                    variant="ghost"
                    onClick={toggleLanguage}
                    className="w-full justify-start mb-2"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "en" ? "عربي" : "English"}
                  </Button>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    {language === "en" ? "Download CV" : "تحميل السيرة الذاتية"}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;