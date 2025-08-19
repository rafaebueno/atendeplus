// Mock permanente do Supabase - Sistema completo de autenticação simulada
// Funcionalidades: Login, Cadastro, Sessões, Storage local, Logs detalhados

interface MockUser {
  id: string;
  email?: string;
  user_metadata?: any;
}

interface MockSession {
  user: MockUser;
}

interface MockAuthResponse {
  data: {
    user: MockUser | null;
    session: MockSession | null;
  };
  error: any;
}

// Sistema de persistência local
class MockStorage {
  private storageKey = 'atendefy-mock-auth';

  saveUser(user: MockUser | null) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
    } catch (e) {
      console.warn('📦 Mock: Não foi possível salvar no localStorage');
    }
  }

  loadUser(): MockUser | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn('📦 Mock: Não foi possível carregar do localStorage');
      return null;
    }
  }

  clearUser() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (e) {
      console.warn('📦 Mock: Não foi possível limpar localStorage');
    }
  }
}

class MockSupabaseClient {
  private storage = new MockStorage();
  private currentUser: MockUser | null = null;

  constructor() {
    // Carregar usuário salvo na inicialização
    this.currentUser = this.storage.loadUser();
    if (this.currentUser) {
      console.log('👤 Mock: Usuário carregado do localStorage:', this.currentUser.email);
    }
  }

  auth = {
    getSession: async (): Promise<{ data: { session: MockSession | null } }> => {
      console.log('🔍 Mock: getSession chamado');
      const session = this.currentUser ? { user: this.currentUser } : null;
      return { data: { session } };
    },

    signInWithPassword: async (credentials: { email: string; password: string }): Promise<MockAuthResponse> => {
      console.log('🔐 Mock: signInWithPassword chamado para:', credentials.email);
      
      // Simular validação de credenciais (aceita qualquer senha)
      await new Promise(resolve => setTimeout(resolve, 500)); // Simular delay da rede
      
      const mockUser: MockUser = {
        id: 'mock-user-' + Date.now(),
        email: credentials.email,
        user_metadata: {}
      };

      // Salvar usuário
      this.currentUser = mockUser;
      this.storage.saveUser(mockUser);
      
      console.log('✅ Mock: Login bem-sucedido para:', credentials.email);

      return {
        data: {
          user: mockUser,
          session: { user: mockUser }
        },
        error: null
      };
    },

    signUp: async (credentials: { email: string; password: string; options?: any }): Promise<MockAuthResponse> => {
      console.log('📝 Mock: signUp chamado para:', credentials.email);
      
      // Simular delay de cadastro
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockUser: MockUser = {
        id: 'mock-user-' + Date.now(),
        email: credentials.email,
        user_metadata: credentials.options?.data || {}
      };

      // Salvar usuário
      this.currentUser = mockUser;
      this.storage.saveUser(mockUser);
      
      console.log('✅ Mock: Cadastro bem-sucedido para:', credentials.email);

      return {
        data: {
          user: mockUser,
          session: { user: mockUser }
        },
        error: null
      };
    },

    signOut: async () => {
      console.log('🚪 Mock: signOut chamado');
      
      // Limpar usuário atual
      this.currentUser = null;
      this.storage.clearUser();
      
      console.log('✅ Mock: Logout realizado com sucesso');
      return { error: null };
    },

    onAuthStateChange: (callback: (event: string, session: MockSession | null) => void) => {
      console.log('👂 Mock: onAuthStateChange configurado');
      
      // Simular mudança de estado após 100ms
      setTimeout(() => {
        callback('SIGNED_OUT', null);
      }, 100);

      // Retornar subscription mock
      return {
        data: {
          subscription: {
            unsubscribe: () => {
              console.log('🔌 Mock: onAuthStateChange desconectado');
            }
          }
        }
      };
    }
  };

  // Mock de outras funcionalidades se necessário
  from = (table: string) => {
    console.log(`📊 Mock: Query em tabela ${table}`);
    return {
      select: () => ({
        data: [],
        error: null
      }),
      insert: () => ({
        data: [],
        error: null
      }),
      update: () => ({
        data: [],
        error: null
      }),
      delete: () => ({
        data: [],
        error: null
      })
    };
  };
}

// Função para criar cliente mock
export const createClient = (url: string, key: string, options?: any) => {
  console.log('🏗️ Mock: Criando cliente Supabase mock');
  console.log('📍 URL:', url);
  console.log('🔑 Key existe:', !!key);
  console.log('⚙️ Options:', options);
  
  return new MockSupabaseClient();
};

// Export do cliente mock
export const supabase = createClient('mock://supabase', 'mock-key', {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  }
});
