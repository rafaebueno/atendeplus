import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleStartNow = () => {
    // Redirecionar para o fluxo de autenticação
    window.location.href = '/login';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="text-center slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
            <span className="gradient-text">Automatize e-mails</span>
            <br />
            <span className="text-foreground">como se fossem</span>
            <br />
            <span className="gradient-text">escritos à mão</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            O AtendePlus personaliza suas campanhas de marketing, nutrição de leads 
            e follow-ups em escala, economizando seu tempo e 
            <span className="text-accent font-semibold"> aumentando suas conversões</span>
          </p>

          <div className="mb-12 sm:mb-16 px-4">
            <Button 
              onClick={handleStartNow}
              className="btn-futuristic text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 glow-pulse w-full sm:w-auto"
              size="lg"
            >
              <span className="hidden sm:inline">Experimente grátis por 14 dias</span>
              <span className="sm:hidden">Teste grátis 14 dias</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;