const Results = () => {
  const testimonials = [
    {
      metric: '68%',
      title: 'Menos tempo em follow-ups',
      quote: 'Reduzimos o tempo de resposta em 68% e nossa equipe de vendas agora foca em fechar negócios, não em digitar e-mails.',
      author: 'CEO, Empresa Inovadora',
      gradient: 'from-primary to-accent'
    },
    {
      metric: '3x',
      title: 'Mais conversões por e-mail',
      quote: 'Nossa conversão por e-mail subiu de 3% para 11%. A personalização em escala do Atendefy foi um divisor de águas.',
      author: 'Diretor de Marketing, Startup Tech',
      gradient: 'from-accent to-primary-glow'
    },
    {
      metric: '99%',
      title: 'De precisão nos envios',
      quote: 'Eliminamos praticamente todos os erros humanos no envio de propostas e comunicações importantes.',
      author: 'Gerente de Operações, Consultoria Global',
      gradient: 'from-primary-glow to-secondary'
    }
  ];

  return (
    <section id="results" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-56 h-56 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

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