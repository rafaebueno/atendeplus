import { useUserEmail } from '@/lib/user-context.tsx';
import { UserPlanDisplay } from '@/components/UserPlanDisplay';

export function UserEmailDisplay() {
  const { userEmail, userPlano } = useUserEmail();

  // Log no console sempre que o email mudar
  console.log('📧 Email atual na variável global:', userEmail);
  console.log('📋 Plano atual na variável global:', userPlano);

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        📧 Informações do Usuário Logado
      </h3>
      <div className="space-y-2">
        <p className="text-blue-600">
          <strong>Email:</strong> {userEmail || 'Nenhum usuário logado'}
        </p>
        {userPlano && (
          <div className="flex items-center gap-2">
            <strong className="text-blue-600">Plano:</strong>
            <UserPlanDisplay />
          </div>
        )}
      </div>
      <p className="text-sm text-blue-500 mt-2">
        Abra o console (F12) para ver os logs detalhados
      </p>
    </div>
  );
} 