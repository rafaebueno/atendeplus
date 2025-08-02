import emailIcon from '@/assets/email-automation-icon.jpg';
import aiIcon from '@/assets/ai-brain-icon.jpg';
import scheduleIcon from '@/assets/scheduling-icon.jpg';

const Features = () => {
  const features = [
    {
      icon: emailIcon,
      title: 'Personalização em Escala',
      description: 'Envie milhares de e-mails que parecem únicos, usando dados comportamentais para adaptar cada mensagem.',
      gradient: 'from-primary to-accent'
    },
    {
      icon: aiIcon,
      title: 'IA que Adapta a Mensagem',
      description: 'Nossa inteligência artificial analisa o contexto e ajusta o tom da comunicação para maximizar o engajamento.',
      gradient: 'from-accent to-primary-glow'
    },
    {
      icon: scheduleIcon,
      title: 'Agendamento Inteligente',
      description: 'Programe campanhas e follow-ups para serem enviados no momento exato em que terão o maior impacto.',
      gradient: 'from-primary-glow to-secondary'
    }
  ];

  return (
    <section id="features" className="pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-4 sm:mb-6 slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            A solução <span className="gradient-text">inteligente</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma resolve problemas de comunicação com automação poderosa e personalização inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-futuristic group scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon container with gradient background */}
              <div className={`relative w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4 sm:mb-6 mx-auto`}>
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;