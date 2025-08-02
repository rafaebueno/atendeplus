import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Redirecionar para o fluxo de autenticação
      window.location.href = '/login';
    }
  };

  const handleStartNow = () => {
    // Redirecionar para o fluxo de autenticação
    window.location.href = '/login';
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Pronto para <span className="gradient-text">transformar</span>
            <br />
            sua comunicação?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se a centenas de empresas que já estão economizando tempo e vendendo mais com o Atendefy. 
            <span className="text-accent font-semibold"> Sem necessidade de cartão de crédito.</span>
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="scale-in flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass border-border/30 bg-muted/20 text-foreground placeholder:text-muted-foreground flex-1 h-12 sm:h-14 text-base sm:text-lg px-4 sm:px-6"
            />
            <Button 
              onClick={handleStartNow}
              className="btn-futuristic h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold border-0 whitespace-nowrap w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Iniciar teste gratuito</span>
              <span className="sm:hidden">Teste gratuito</span>
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">14 dias</div>
              <div className="text-sm sm:text-base text-muted-foreground">Teste gratuito</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">0%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Cartão de crédito</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Suporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;