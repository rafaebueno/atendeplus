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
            AtendePlus
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