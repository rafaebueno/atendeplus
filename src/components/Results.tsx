const Results = () => {
  const testimonials = [
    {
      metric: '48%',
      title: 'Menos chargebacks na loja',
      quote: 'Reduzimos nosso índice de chargebacks em 48%, chegando em 1.4% de chargebacks, o Atendefy, está resolvendo os problemas antes de chegarem a acontecer.',
      author: 'Caio Silva, Dropshipping Brasil',
      gradient: 'from-primary to-accent'
    },
    {
      metric: '4x',
      title: 'Mais rápido para responder',
      quote: 'A média de resposta para os clientes agora é de 5 minutos! Tratando rastreio em tempo real, trocas, cancelamentos, etc. A personalização em escala do Atendefy foi um divisor de águas.',
      author: 'Bernardo Xavier, Dropshipping Global',
      gradient: 'from-accent to-primary-glow'
    },
    {
      metric: '99%',
      title: 'De acertos no envio',
      quote: 'Eliminamos praticamente todos os erros humanos no envio de propostas e comunicações importantes.',
      author: 'Gabriel Bacheti, Dropshipping Global',
      gradient: 'from-primary-glow to-secondary'
    }
  ];

  return (
    <section id="results" className="pt-8 sm:pt-12 lg:pt-16 pb-24 relative">


      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Resultados que <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que empresas como a sua estão alcançando com o Atendefy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-futuristic group scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Metric display */}
              <div className={`text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                {testimonial.metric}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300">
                {testimonial.title}
              </h3>
              
              <blockquote className="text-sm sm:text-base text-muted-foreground italic mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <footer className="text-xs sm:text-sm font-semibold text-accent">
                — {testimonial.author}
              </footer>

              {/* Decorative gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;