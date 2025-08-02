import { useState } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignUpForm } from '@/components/auth/SignUpForm';

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Atendefy
          </h1>
          <p className="text-gray-600">
            Configure sua integração Shopify
          </p>
        </div>

        {showSignUp ? (
          <div>
            <SignUpForm />
            <div className="text-center mt-4">
              <button
                onClick={() => setShowSignUp(false)}
                className="text-blue-600 hover:text-blue-500 text-sm"
              >
                Já tem uma conta? Faça login
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Caixa de mensagem informativa */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800 mb-2">
                    Como fazer login
                  </h3>
                  <div className="text-sm text-blue-700 space-y-2">
                    <p><strong>Email:</strong> Use o email da sua compra na Kirvano</p>
                    <p><strong>Senha:</strong> Digite seu CPF seguido de um asterisco (*)</p>
                    <p className="text-xs mt-2">Exemplo: 12345678901*</p>
                  </div>
                </div>
              </div>
            </div>

            <LoginForm />
            <div className="text-center mt-4">
              <button
                onClick={() => setShowSignUp(true)}
                className="text-blue-600 hover:text-blue-500 text-sm"
              >
                Não tem uma conta? Cadastre-se
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 