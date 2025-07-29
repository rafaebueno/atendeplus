import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Fecha o menu após navegar
  };

  const handleStartNow = () => {
    // Redirecionar para o fluxo de autenticação
    window.location.href = '/login';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-border/20 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer">
          AtendePlus
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg glass border border-border/30 hover:border-primary/50 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Funcionalidades
          </button>
          <button 
            onClick={() => scrollToSection('comparison')}
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Comparativo
          </button>
          <button 
            onClick={() => scrollToSection('results')}
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Resultados
          </button>
          <button 
            onClick={() => scrollToSection('impact')}
            className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Impacto
          </button>
        </nav>

        {/* CTA Button */}
        <Button 
          onClick={handleStartNow}
          className="hidden sm:block btn-futuristic border-0 text-sm px-4 py-2 sm:px-6 sm:py-3"
        >
          <span className="hidden lg:inline">Começar Agora</span>
          <span className="lg:hidden">Começar</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/20 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/10 transition-all duration-300"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="block w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/10 transition-all duration-300"
            >
              Comparativo
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="block w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/10 transition-all duration-300"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/10 transition-all duration-300"
            >
              Impacto
            </button>
            <Button 
              onClick={handleStartNow}
              className="w-full btn-futuristic border-0 mt-4"
            >
              Começar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;