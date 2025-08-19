import { memo } from 'react';
import { useSlider } from '@/hooks/useSlider';
import { beforeData, afterData, savings } from './ImpactData';

const Impact = memo(() => {
  const {
    currentSlide,
    sliderRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useSlider();

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-green-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 slide-up px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Veja o <span className="text-green-600">Impacto Real</span> nos Números
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto">
            Análise comparativa de um cliente real em um período de 2 meses com o <b>Atendefy</b>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-green-200 shadow-xl scale-in">
            
            {/* Mobile Slider Layout */}
            <div className="block lg:hidden">
              {/* Slider Indicators */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2">
                  <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === 0 ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                  <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                </div>
              </div>

              {/* Slider Container */}
              <div 
                ref={sliderRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* ANTES Slide */}
                <div className="flex-shrink-0 w-full snap-start px-2">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-3 sm:p-4 text-center border border-red-300">
                      <h3 className="font-bold text-base sm:text-lg text-red-700">
                        ANTES DE IMPLEMENTAR
                      </h3>
                      <p className="text-xs sm:text-sm text-red-600 mt-1">(abril - maio/25)</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-2 sm:p-3 text-center border border-green-200">
                      <p className="text-xs sm:text-sm font-semibold text-green-700">
                        Países: Espanha e Estados Unidos
                      </p>
                    </div>

                    <div className="space-y-2">
                      {beforeData.map((item, index) => (
                        <div 
                          key={index}
                          className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-gray-50 border border-gray-200 shadow-sm"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-gray-700">{item.label}</span>
                          <span className="text-xs sm:text-sm text-gray-600">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DEPOIS Slide */}
                <div className="flex-shrink-0 w-full snap-start px-2">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-xl p-3 sm:p-4 text-center border border-green-400 shadow-md">
                      <h3 className="font-bold text-base sm:text-lg text-green-700">
                        DEPOIS DA FERRAMENTA
                      </h3>
                      <p className="text-xs sm:text-sm text-green-600 mt-1">(jun - jul / 25)</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-2 sm:p-3 text-center border border-green-200">
                      <p className="text-xs sm:text-sm font-semibold text-green-700">
                        Países: Espanha e Estados Unidos
                      </p>
                    </div>

                    <div className="space-y-2">
                      {afterData.map((item, index) => (
                        <div 
                          key={index}
                          className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-green-50/50 border border-green-200 shadow-sm"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-gray-700">{item.label}</span>
                          <span className="text-xs sm:text-sm font-bold text-green-700">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Swipe Instructions */}
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500">
                  ← Arraste para ver a diferença →
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8">
              
              {/* ANTES - Desktop */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-4 text-center border border-red-300">
                  <h3 className="font-bold text-lg text-red-700">
                    ANTES DE IMPLEMENTAR
                  </h3>
                  <p className="text-sm text-red-600 mt-1">(abril - maio/25)</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-3 text-center border border-green-200">
                  <p className="text-sm font-semibold text-green-700">
                    Países: Espanha (Espanhol) e Estados Unidos (Inglês)
                  </p>
                </div>

                <div className="space-y-3">
                  {beforeData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300"
                    >
                      <span className="font-semibold text-gray-700">{item.label}</span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEPOIS - Desktop */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-2xl p-4 text-center border border-green-400 shadow-md">
                  <h3 className="font-bold text-lg text-green-700">
                    DEPOIS DA FERRAMENTA
                  </h3>
                  <p className="text-sm text-green-600 mt-1">(jun - jul / 25)</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-3 text-center border border-green-200">
                  <p className="text-sm font-semibold text-green-700">
                    Países: Espanha (Espanhol) e Estados Unidos (Inglês)
                  </p>
                </div>

                <div className="space-y-3">
                  {afterData.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-3 px-4 rounded-xl bg-green-50/50 border border-green-200 hover:bg-green-100 transition-all duration-300"
                    >
                      <span className="font-semibold text-gray-700">{item.label}</span>
                      <span className="font-bold text-green-700">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ECONOMIA - Destaque Principal */}
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-500 max-w-md w-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h4 className="text-center font-bold text-xl sm:text-2xl text-white mb-4 sm:mb-6">
                  💰 ECONOMIA TOTAL
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {savings.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-green-100">{item.label}</span>
                      <span className="text-lg sm:text-xl font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-green-500 mt-4 sm:mt-6 pt-4 sm:pt-6">
                  <div className="flex justify-between text-lg sm:text-2xl font-bold">
                    <span className="text-green-100">Total Mensal:</span>
                    <span className="text-white">R$ 3.360,00</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-green-200 text-sm font-medium">
                    ✨ Economia garantida com Atendefy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Impact.displayName = 'Impact';

export default Impact;