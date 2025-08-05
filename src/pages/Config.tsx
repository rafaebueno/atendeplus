import { useAuth } from '@/components/auth/AuthProvider';
import { useUserEmail } from '@/lib/user-context';
import { MultiStepForm } from '@/components/form/MultiStepForm';

const Config = () => {
  const { user, signOut, loading } = useAuth();
  const { userPlano } = useUserEmail();

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Acesso Negado
          </h2>
          <p className="text-gray-600 mb-4">
            Você precisa estar logado para acessar esta página.
          </p>
                      <a
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Fazer Login
            </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Atendefy
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Plano: {userPlano || 'Básico'}
              </span>
              <button
                onClick={signOut}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Configurar Integração Shopify
          </h2>
          <p className="text-lg text-gray-600">
            Siga os passos abaixo para configurar sua integração e começar a receber notificações.
          </p>
        </div>

        <MultiStepForm />
      </div>
    </div>
  );
};

export default Config; 