import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useUserEmail } from '@/lib/user-context.tsx';
import { UserPlanDisplay } from '@/components/UserPlanDisplay';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userEmail, userPlano } = useUserEmail();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Fecha o menu após navegar
  };

  const handleStartNow = () => {
    // Redirecionar para o fluxo de autenticação
    window.location.href = '/login';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-black border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Esquerda no mobile, centralizado no desktop */}
          <div className="flex-1 flex justify-start">
            <div className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer">
              Atendefy
            </div>
          </div>

          {/* User Info - Só aparece se o usuário estiver logado */}
          {userEmail && (
            <div className="hidden md:flex items-center gap-3">
              <div className="flex flex-col items-start gap-2 px-4 py-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
                  <span className="text-sm text-white/90 font-medium truncate max-w-[140px]">
                    {userEmail}
                  </span>
                </div>
                <UserPlanDisplay />
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-600/50 hover:border-green-500/50 transition-colors duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Comparativo
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Impacto
            </button>
          </nav>

          {/* CTA Button - Apenas Desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <Button 
              onClick={handleStartNow}
              className="btn-futuristic border-0 text-sm px-4 py-2 sm:px-6 sm:py-3"
            >
              <span className="hidden lg:inline">Começar Agora</span>
              <span className="lg:hidden">Começar</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800/50">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {/* User Info Mobile */}
            {userEmail && (
              <div className="flex flex-col items-start gap-3 p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
                  <span className="text-sm text-white/90 font-medium truncate">
                    {userEmail}
                  </span>
                </div>
                <UserPlanDisplay />
              </div>
            )}
            
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              Comparativo
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-300"
            >
              Impacto
            </button>
            
            {/* CTA Button - Apenas Mobile */}
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