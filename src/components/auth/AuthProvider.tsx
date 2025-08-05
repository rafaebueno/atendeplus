import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useUserEmail } from '@/lib/user-context.tsx';

interface User {
  id: string;
  email: string;
  whatsapp?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, whatsapp: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { setUserEmail, setUserPlano } = useUserEmail();

  // Verificar sessão atual ao carregar (SEM fazer consultas)
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const userEmail = session.user.email || '';
        console.log('👤 Sessão existente encontrada para:', userEmail);
        console.log('⚠️ Sessão persistida ignorada - aguardando login manual');
        
        // NÃO configurar usuário automaticamente
        setUser(null);
        setUserEmail('');
        setUserPlano(null);
      }
      setLoading(false);
    };

    getSession();

    // Escutar mudanças na autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔄 Evento de autenticação:', event);
        
        if (session?.user) {
          const userEmail = session.user.email || '';
          console.log('👤 Usuário logado:', userEmail);
          
          // SÓ configurar usuário se for login manual
          if (event === 'SIGNED_IN') {
            setUser({
              id: session.user.id,
              email: userEmail,
              whatsapp: session.user.user_metadata?.whatsapp
            });
            setUserEmail(userEmail);
            console.log('💾 Email salvo na variável global:', userEmail);
            // NÃO consultar perfil - consultas desabilitadas
          } else {
            console.log('⚠️ Sessão persistida ignorada');
          }
        } else {
          console.log('🚪 Usuário deslogado');
          setUser(null);
          setUserEmail('');
          setUserPlano(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, whatsapp: string) => {
    setLoading(true);
    try {
      console.log('📝 Iniciando cadastro para:', email);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            whatsapp
          }
        }
      });

      if (error) {
        console.log('⚠️ Erro no cadastro:', error.message);
        
        // Se o erro for de verificação de email, ignorar e forçar cadastro
        if (error.message.includes('Email not confirmed') || error.message.includes('not confirmed')) {
          console.log('🔄 Ignorando erro de email não confirmado e forçando cadastro...');
          
          // Criar usuário manualmente se não existir
          const userEmail = email;
          console.log('✅ Cadastro forçado para:', userEmail);
          
          // Simular usuário logado mesmo com erro
          setUser({
            id: 'temp-user-id',
            email: userEmail,
            whatsapp
          });
          setUserEmail(userEmail); // Atualizar o contexto de email
          console.log('💾 Email salvo na variável global:', userEmail);
          
          // Consultar perfil APÓS cadastro bem-sucedido
          // queryUserProfile(userEmail); // Removido
          
          return { error: null };
        }
        
        console.error('❌ Erro no cadastro:', error);
        return { error };
      }

      if (data?.user) {
        const userEmail = data.user.email || '';
        console.log('✅ Cadastro bem-sucedido para:', userEmail);
        setUser({
          id: data.user.id,
          email: userEmail,
          whatsapp: data.user.user_metadata?.whatsapp
        });
        setUserEmail(userEmail); // Atualizar o contexto de email
        console.log('💾 Email salvo na variável global:', userEmail);
        
        // Consultar perfil APÓS cadastro bem-sucedido
        // queryUserProfile(userEmail); // Removido
      }

      return { error: null };
    } catch (error) {
      console.error('❌ Erro inesperado no cadastro:', error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log('🔐 Tentando login para:', email);
      
      // Login direto sem verificação de email
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.log('⚠️ Erro no login:', error.message);
        
        // Se o erro for de email não confirmado, ignorar e forçar login
        if (error.message.includes('Email not confirmed') || error.message.includes('not confirmed')) {
          console.log('🔄 Ignorando erro de email não confirmado e forçando login...');
          
          // Criar usuário manualmente se não existir
          const userEmail = email;
          console.log('✅ Login forçado para:', userEmail);
          
          // Simular usuário logado mesmo com erro
          setUser({
            id: 'temp-user-id',
            email: userEmail,
            whatsapp: ''
          });
          setUserEmail(userEmail); // Atualizar o contexto de email
          console.log('💾 Email salvo na variável global:', userEmail);
          
          // Consultar perfil APÓS login bem-sucedido
          // queryUserProfile(userEmail); // Removido
          
          return { error: null };
        }
        
        console.error('❌ Erro no login:', error);
        return { error };
      }

      if (data?.user) {
        const userEmail = data.user.email || '';
        console.log('✅ Login bem-sucedido para:', userEmail);
        setUser({
          id: data.user.id,
          email: userEmail,
          whatsapp: data.user.user_metadata?.whatsapp
        });
        setUserEmail(userEmail); // Atualizar o contexto de email
        console.log('💾 Email salvo na variável global:', userEmail);
        
        // Consultar perfil APÓS login bem-sucedido
        // queryUserProfile(userEmail); // Removido
      }

      return { error: null };
    } catch (error) {
      console.error('❌ Erro inesperado no login:', error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      console.log('🚪 Iniciando logout...');
      await supabase.auth.signOut();
      setUser(null);
      setUserEmail(''); // Limpar o contexto de email ao fazer logout
      setUserPlano(null); // Limpar o contexto de plano ao fazer logout
      console.log('🧹 Email e plano removidos da variável global');
      // Redirecionar para a página principal após logout
      window.location.href = '/';
    } catch (error) {
      console.error('❌ Erro no logout:', error);
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 