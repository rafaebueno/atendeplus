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
    <section id="comparison" className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 relative">


      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-green-600">Automação</span> vs. <span className="text-white">Humanos</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Veja a diferença que a automação inteligente faz no seu dia a dia
          </p>
        </div>

        <div className="max-w-5xl mx-auto scale-in">
          {/* Redesigned Mobile Layout - Table Style */}
          <div className="block md:hidden">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="px-4 py-3 text-left">
                  <div className="text-sm font-semibold text-gray-700">Critério</div>
                </div>
                <div className="px-4 py-3 text-center">
                  <div className="text-sm font-semibold text-gray-500">Manual</div>
                </div>
                <div className="px-4 py-3 text-center">
                  <div className="text-sm font-semibold text-green-600">Atendefy</div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {comparisonData.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors duration-200">
                    <div className="px-4 py-3 text-left">
                      <div className="text-sm font-medium text-gray-700">{row.criteria}</div>
                    </div>
                    <div className="px-4 py-3 text-center">
                      <div className="text-sm text-gray-600">{row.manual}</div>
                    </div>
                    <div className="px-4 py-3 text-center">
                      <div className="text-sm font-bold text-green-700">{row.automated}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Summary */}
            <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="text-sm font-semibold text-green-700 mb-1">✨ Resultado</div>
                <div className="text-xs text-gray-600">
                  Atendefy supera o atendimento manual em todos os critérios
                </div>
              </div>
            </div>
          </div>

          {/* Desktop table layout - Unchanged */}
          <div className="hidden md:block bg-white/95 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-green-200 shadow-xl">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="text-left">
                <h3 className="text-lg lg:text-xl font-bold text-gray-700">Critério</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold text-gray-500">Manual (Humanos)</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold text-green-600">Atendefy</h3>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-3 lg:space-y-4">
              {comparisonData.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-3 gap-4 lg:gap-6 py-3 lg:py-4 rounded-xl hover:bg-green-50/50 transition-all duration-300 group border border-transparent hover:border-green-200"
                >
                  <div className="text-left font-semibold text-sm lg:text-base text-gray-700 group-hover:text-green-700 transition-colors duration-300">
                    {row.criteria}
                  </div>
                  <div className="text-center text-sm lg:text-base text-gray-600">
                    {row.manual}
                  </div>
                  <div className="text-center font-bold text-sm lg:text-base text-green-700">
                    {row.automated}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-green-400 to-green-600 blur-sm opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;