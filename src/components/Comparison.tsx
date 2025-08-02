const Comparison = () => {
  const comparisonData = [
    { criteria: 'Tempo Gasto', manual: 'Alto', automated: 'Mínimo' },
    { criteria: 'Taxa de Erros', manual: 'Comuns', automated: 'Raros' },
    { criteria: 'Personalização', manual: 'Limitada', automated: 'Avançada' },
    { criteria: 'Custo Operacional', manual: 'Alto', automated: 'Escalável' },
    { criteria: 'Consistência', manual: 'Variável', automated: 'Perfeita' },
    { criteria: 'Disponibilidade', manual: '8h/dia', automated: '24/7' }
  ];

  return (
    <section id="comparison" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Automação</span> vs. <span className="text-muted-foreground">Humanos</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja a diferença que a automação inteligente faz no seu dia a dia
          </p>
        </div>

        <div className="max-w-5xl mx-auto scale-in">
          {/* Mobile card layout */}
          <div className="block md:hidden space-y-4 sm:space-y-6">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-muted/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-border/40">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">{row.criteria}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">Manual</p>
                    <p className="text-sm sm:text-base font-semibold text-muted-foreground">{row.manual}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-primary mb-2">Atendefy</p>
                    <p className="text-sm sm:text-base font-bold text-primary">{row.automated}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table layout */}
          <div className="hidden md:block bg-muted/20 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-border/40 shadow-glow-primary">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="text-left">
                <h3 className="text-lg lg:text-xl font-bold text-foreground">Critério</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold text-muted-foreground">Manual (Humanos)</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold gradient-text">Atendefy</h3>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-3 lg:space-y-4">
              {comparisonData.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-3 gap-4 lg:gap-6 py-3 lg:py-4 rounded-xl hover:bg-muted/10 transition-all duration-300 group"
                >
                  <div className="text-left font-semibold text-sm lg:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                    {row.criteria}
                  </div>
                  <div className="text-center text-sm lg:text-base text-muted-foreground">
                    {row.manual}
                  </div>
                  <div className="text-center font-bold text-sm lg:text-base text-primary">
                    {row.automated}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-primary blur-sm opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;