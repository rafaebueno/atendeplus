import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleStartNow = () => {
    // Redirecionar para o fluxo de autenticação
    window.location.href = '/login';
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Hero Title with better typography */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Automatize
              </span>
              <br />
              <span className="text-white/90">e-mails como se</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                fossem escritos
              </span>
              <br />
              <span className="text-white/90">à mão</span>
            </h1>
          </div>
          
          {/* Enhanced subtitle with better readability */}
          <div className="mb-10 lg:mb-16 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
              O Atendefy personaliza suas campanhas de marketing, nutrição de leads 
              e follow-ups em escala, economizando seu tempo e 
              <span className="text-green-400 font-semibold"> aumentando suas conversões</span>
            </p>
          </div>

          {/* Enhanced CTA section with better visual hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Button 
              onClick={handleStartNow}
              className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold text-lg lg:text-xl px-10 lg:px-16 py-4 lg:py-6 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              size="lg"
            >
              <span className="hidden sm:inline">🚀 Experimente grátis por 14 dias</span>
              <span className="sm:hidden">🚀 Teste grátis 14 dias</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Button>
          </div>

          {/* Trust indicators for desktop */}
          <div className="hidden lg:flex items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-700/30">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Setup em 5 minutos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;