import { useUserEmail } from '@/lib/user-context.tsx';

export function UserPlanDisplay() {
  const { userPlano } = useUserEmail();

  // Função para obter a cor e ícone baseado no plano
  const getPlanStyle = (plano: string) => {
    const planLower = plano.toLowerCase();
    
    if (planLower.includes('premium') || planLower.includes('pro')) {
      return {
        bgColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500',
        textColor: 'text-white',
        icon: '⭐',
        label: 'Premium',
        glow: 'shadow-purple-500/50'
      };
    } else if (planLower.includes('basic') || planLower.includes('starter')) {
      return {
        bgColor: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500',
        textColor: 'text-white',
        icon: '🔵',
        label: 'Basic',
        glow: 'shadow-blue-500/50'
      };
    } else if (planLower.includes('enterprise') || planLower.includes('business')) {
      return {
        bgColor: 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500',
        textColor: 'text-white',
        icon: '🏢',
        label: 'Enterprise',
        glow: 'shadow-green-500/50'
      };
    } else {
      return {
        bgColor: 'bg-gradient-to-r from-gray-500 via-slate-500 to-zinc-500',
        textColor: 'text-white',
        icon: '📋',
        label: plano,
        glow: 'shadow-gray-500/50'
      };
    }
  };

  // Se não há plano, mostrar uma mensagem elegante
  if (!userPlano) {
    return (
      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white/70 border border-white/30 backdrop-blur-sm shadow-sm">
        <span className="flex items-center gap-1.5">
          <span className="text-xs">📋</span>
          <span>Sem plano</span>
        </span>
      </div>
    );
  }

  const planStyle = getPlanStyle(userPlano);

  return (
    <div className={`
      ${planStyle.bgColor} 
      ${planStyle.textColor}
      px-3 py-1.5 
      rounded-full 
      text-xs 
      font-semibold 
      shadow-lg 
      transform 
      hover:scale-105 
      hover:shadow-xl
      transition-all 
      duration-300 
      cursor-pointer
      flex items-center gap-1.5
      backdrop-blur-sm
      border border-white/30
      w-fit
      ${planStyle.glow}
      hover:${planStyle.glow}
    `}>
      <span className="text-xs animate-pulse">{planStyle.icon}</span>
      <span className="text-xs font-bold">{planStyle.label}</span>
      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
    </div>
  );
} 