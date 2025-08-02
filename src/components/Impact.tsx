const Impact = () => {
  const beforeData = [
    { label: 'Pedidos', value: '3.748' },
    { label: 'Atendentes humanos', value: '3' },
    { label: 'Custo x Atendente MENSAL', value: 'R$ 3.600,00' },
    { label: 'Chargebacks', value: '65' },
    { label: '% de Chargeback', value: '1,73%' },
    { label: 'Custo Chargeback', value: 'R$ 950,00' }
  ];

  const afterData = [
    { label: 'Pedidos', value: '4.873' },
    { label: 'Atendentes humanos', value: '1 (meio turno)' },
    { label: 'Custo x Atendente MENSAL', value: 'R$ 600,00' },
    { label: 'Chargebacks', value: '59' },
    { label: '% de Chargeback', value: '1,21%' },
    { label: 'Custo Chargeback', value: 'R$ 590,00' }
  ];

  const savings = [
    { label: 'Atendimento', value: 'R$ 3.000,00' },
    { label: 'Chargeback', value: 'R$ 360,00' }
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Veja o <span className="gradient-text">Impacto Real</span> nos Números
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Análise comparativa de um cliente real em um período de 2 meses antes e depois de implementar o Atendefy
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-muted/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/40 scale-in">
            
            {/* Mobile Layout */}
            <div className="block lg:hidden space-y-6">
              
              {/* ANTES - Mobile */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-3 sm:p-4 text-center border border-orange-500/30">
                  <h3 className="font-bold text-base sm:text-lg text-orange-400">
                    ANTES DE IMPLEMENTAR
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-300 mt-1">(abril - maio/25)</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-2 sm:p-3 text-center border border-primary/30">
                  <p className="text-xs sm:text-sm font-semibold text-primary">
                    Países: Espanha e Estados Unidos
                  </p>
                </div>

                <div className="space-y-2">
                  {beforeData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-muted/30 border border-border/30 shadow-sm"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{item.label}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEPOIS - Mobile */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <h3 className="font-bold text-base sm:text-lg text-green-400">
                    DEPOIS DA FERRAMENTA
                  </h3>
                  <p className="text-xs sm:text-sm text-green-300 mt-1">(jun - jul / 25)</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-2 sm:p-3 text-center border border-primary/30">
                  <p className="text-xs sm:text-sm font-semibold text-primary">
                    Países: Espanha e Estados Unidos
                  </p>
                </div>

                <div className="space-y-2">
                  {afterData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-muted/5 border border-border/10"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{item.label}</span>
                      <span className="text-xs sm:text-sm font-bold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8">
              
              {/* ANTES - Desktop */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-4 text-center border border-orange-500/30">
                  <h3 className="font-bold text-lg text-orange-400">
                    ANTES DE IMPLEMENTAR
                  </h3>
                  <p className="text-sm text-orange-300 mt-1">(abril - maio/25)</p>
                </div>
                
                <div className="bg-primary/10 rounded-xl p-3 text-center border border-primary/30">
                  <p className="text-sm font-semibold text-primary">
                    Países: Espanha (Espanhol) e Estados Unidos (Inglês)
                  </p>
                </div>

                <div className="space-y-3">
                  {beforeData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-3 px-4 rounded-xl bg-muted/5 border border-border/10 hover:bg-muted/10 transition-all duration-300"
                    >
                      <span className="font-semibold text-foreground">{item.label}</span>
                      <span className="text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEPOIS - Desktop */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-4 text-center border border-green-500/30">
                  <h3 className="font-bold text-lg text-green-400">
                    DEPOIS DA FERRAMENTA
                  </h3>
                  <p className="text-sm text-green-300 mt-1">(jun - jul / 25)</p>
                </div>
                
                <div className="bg-primary/10 rounded-xl p-3 text-center border border-primary/30">
                  <p className="text-sm font-semibold text-primary">
                    Países: Espanha (Espanhol) e Estados Unidos (Inglês)
                  </p>
                </div>

                <div className="space-y-3">
                  {afterData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-3 px-4 rounded-xl bg-muted/5 border border-border/10 hover:bg-muted/10 transition-all duration-300"
                    >
                      <span className="font-semibold text-foreground">{item.label}</span>
                      <span className="font-bold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ECONOMIA */}
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-accent/30 max-w-sm w-full">
                <h4 className="text-center font-bold text-lg sm:text-xl text-accent mb-3 sm:mb-4">
                  ECONOMIA TOTAL
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {savings.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-sm sm:text-base text-accent-foreground">{item.label}</span>
                      <span className="text-sm sm:text-lg font-bold text-accent">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-accent/30 mt-3 sm:mt-4 pt-3 sm:pt-4">
                  <div className="flex justify-between text-base sm:text-xl font-bold">
                    <span className="text-accent">Total Mensal:</span>
                    <span className="text-accent">R$ 3.360,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;