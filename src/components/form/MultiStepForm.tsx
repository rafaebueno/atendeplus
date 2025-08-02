import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useAuth } from '@/components/auth/AuthProvider';
import { WebhookService } from '@/lib/webhook-service';

type FormData = {
  shopifyToken: string;
  shopDomain: string;
  emailProvider: string;
  emailUser: string;
  emailPass: string;
  storeName: string;
  ownerName: string;
  reportEmail: string;
  countries: string;
  mainLanguage: string;
};

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [showOutlookMessage, setShowOutlookMessage] = useState(false);
  const { user } = useAuth();

  const methods = useForm<FormData>();
  const { handleSubmit, getValues, watch } = methods;

  // Monitorar o campo emailProvider para mostrar mensagem do Outlook
  const emailProvider = watch('emailProvider');
  
  React.useEffect(() => {
    if (emailProvider && emailProvider.toLowerCase().includes('outlook')) {
      setShowOutlookMessage(true);
    } else {
      setShowOutlookMessage(false);
    }
  }, [emailProvider]);

  const validateStep = (step: number): boolean => {
    const values = getValues();
    
    switch (step) {
      case 1:
        return Boolean(values.shopifyToken?.trim());
      case 2:
        return Boolean(values.shopDomain?.trim());
      case 3:
        // Só validar o passo 3 se estivermos explicitamente no passo 3
        return Boolean(
          values.emailProvider?.trim() &&
          values.emailUser?.trim() &&
          values.emailPass?.trim() &&
          values.storeName?.trim() &&
          values.ownerName?.trim() &&
          values.reportEmail?.trim() &&
          values.countries?.trim() &&
          values.mainLanguage?.trim()
        );
      default:
        return false;
    }
  };

  const nextStep = () => {
    console.log('🔄 Tentando ir para o próximo passo...', { currentStep });
    
    if (validateStep(currentStep)) {
      // Se estamos no passo 2 e todos os campos do passo 3 já estão preenchidos,
      // não permitir ir direto para o envio
      if (currentStep === 2) {
        const values = getValues();
        const step3FieldsComplete = Boolean(
          values.emailProvider?.trim() &&
          values.emailUser?.trim() &&
          values.emailPass?.trim() &&
          values.storeName?.trim() &&
          values.ownerName?.trim() &&
          values.reportEmail?.trim() &&
          values.countries?.trim() &&
          values.mainLanguage?.trim()
        );
        
        console.log('📊 Verificando campos do passo 3:', { step3FieldsComplete, values });
        
        if (step3FieldsComplete) {
          // Se todos os campos do passo 3 já estão preenchidos, 
          // ir para o passo 3 em vez de enviar diretamente
          console.log('✅ Campos do passo 3 já preenchidos, indo para passo 3');
          setCurrentStep(3);
        } else {
          console.log('➡️ Indo para o próximo passo normalmente');
          setCurrentStep(currentStep + 1);
        }
      } else {
        console.log('➡️ Indo para o próximo passo normalmente');
        setCurrentStep(currentStep + 1);
      }
      setValidationError('');
    } else {
      console.log('❌ Validação falhou para o passo:', currentStep);
      setValidationError('Por favor, preencha todos os campos obrigatórios antes de continuar.');
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    console.log('🚀 Iniciando envio do formulário...');
    console.log('📊 Dados do formulário:', data);
    console.log('👤 Usuário:', { email: user?.email, id: user?.id });
    
    try {
      console.log('📡 Enviando dados para o webhook...');
      await WebhookService.sendFormData(data, user?.email || '', user?.id || '');
      console.log('✅ Dados enviados com sucesso para o webhook!');
      setSubmitSuccess(true);
    } catch (error) {
      console.error('❌ Erro ao enviar dados:', error);
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar dados para o webhook');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          {/* Aviso sobre integração da equipe */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">
                Nossa equipe está processando sua integração
              </span>
            </div>
            <p className="text-sm text-blue-700">
              Em alguns minutos o Atendefy já estará atendendo automaticamente seus clientes!
            </p>
          </div>

          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Configuração Concluída!
          </h2>
          <p className="text-gray-600 mb-6">
            Suas configurações foram enviadas com sucesso para o webhook. Você receberá notificações sobre novos pedidos e clientes.
          </p>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setCurrentStep(1);
              methods.reset();
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Configurar Outra Loja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Shopify</span>
          <span>Domínio</span>
          <span>Email</span>
        </div>
      </div>

      {/* Form */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Passo 1: Configurar Shopify</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">
                      Como criar o app Atendefy na Shopify
                    </h4>
                    <div className="text-sm text-blue-700 space-y-3">
                      <div>
                        <p className="font-medium">Passo 1: Acesse sua loja Shopify</p>
                        <p>1. Vá em <strong>Configurações → Apps</strong></p>
                        <p>2. Clique em <strong>"Develops"</strong>, ao lado de "Shopify App Store"</p>
                      </div>
                      <div>
                        <p className="font-medium">Passo 2: Crie um novo App</p>
                        <p>1. No dashboard, clique em <strong>"Apps"</strong></p>
                        <p>2. Clique em <strong>"Create App"</strong></p>
                        <p>3. App name: <strong>"Atendefy"</strong></p>
                      </div>
                      <div>
                        <p className="font-medium">Passo 3: Configure as permissões</p>
                        <p>1. No seu app, vá para <strong>"App credentials"</strong></p>
                        <p>2. Em <strong>"Configure Admin API scopes"</strong></p>
                        <p>3. Adicione as seguintes permissões:</p>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• <strong>Customers</strong>: read_customers, write_customers</li>
                          <li>• <strong>Orders</strong>: read_orders, write_orders</li>
                        </ul>
                        <p>4. Clique em <strong>"Save"</strong></p>
                      </div>
                      <div>
                        <p className="font-medium">Passo 4: Gere o token</p>
                        <p>1. Ainda em <strong>"API credentials"</strong></p>
                        <p>2. Clique em <strong>"Install app"</strong> para instalar o Atendefy na sua loja</p>
                        <p>3. Copie o <strong>"Admin API access token"</strong> (começa com <code className="bg-blue-100 px-1 rounded">shpat_</code>)</p>
                        <p>4. Cole o token no campo abaixo</p>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
                        <div className="flex">
                          <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <p className="ml-2 text-sm text-yellow-800 font-medium">
                            <strong>⚠️ Importante</strong>: Mantenha este token seguro e não o compartilhe!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="shopifyToken" className="block text-sm font-medium text-gray-700">
                    Token do Shopify
                  </label>
                  <input
                    {...methods.register('shopifyToken')}
                    type="text"
                    id="shopifyToken"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="shpat_..."
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Passo 2: Configurar Domínio</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="shopDomain" className="block text-sm font-medium text-gray-700">
                    Domínio da Loja
                  </label>
                  <input
                    {...methods.register('shopDomain')}
                    type="text"
                    id="shopDomain"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="minha-loja.myshopify.com"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Passo 3: Configurar Email e Informações da Loja</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
                    Nome da Loja
                  </label>
                  <input
                    {...methods.register('storeName')}
                    type="text"
                    id="storeName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Ex: Minha Loja Online"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                    Seu Nome (proprietário da loja)
                  </label>
                  <input
                    {...methods.register('ownerName')}
                    type="text"
                    id="ownerName"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Ex: João Silva"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="reportEmail" className="block text-sm font-medium text-gray-700">
                    E-mail para relatórios
                  </label>
                  <input
                    {...methods.register('reportEmail')}
                    type="email"
                    id="reportEmail"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="relatorios@sualoja.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emailProvider" className="block text-sm font-medium text-gray-700">
                    Provedor de Email (Aonde você faz login do seu email)
                  </label>
                  <input
                    {...methods.register('emailProvider')}
                    type="text"
                    id="emailProvider"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Ex: Hostinger, Godaddy, Zoho, "
                    required
                  />
                  {showOutlookMessage && (
                    <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex">
                        <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="ml-2 text-sm text-yellow-800">
                          <strong>⚠️ Aviso:</strong> Um suporte vai te chamar para fazer a integração de maneira completa, o Outlook necessita de uma integração manual.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="emailUser" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    {...methods.register('emailUser')}
                    type="email"
                    id="emailUser"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="contato@sualoja.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emailPass" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <input
                    {...methods.register('emailPass')}
                    type="password"
                    id="emailPass"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Sua senha"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="countries" className="block text-sm font-medium text-gray-700">
                    Países que sua loja atua
                  </label>
                  <input
                    {...methods.register('countries')}
                    type="text"
                    id="countries"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Ex: Espanha, Bélgica, Holanda..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mainLanguage" className="block text-sm font-medium text-gray-700">
                    Língua majoritária
                  </label>
                  <input
                    {...methods.register('mainLanguage')}
                    type="text"
                    id="mainLanguage"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Se for diversas línguas diferentes, use o inglês"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Error Messages */}
          {validationError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-700">{validationError}</p>
            </div>
          )}

          {submitError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Anterior
              </button>
            )}
            
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Configuração'}
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
} 