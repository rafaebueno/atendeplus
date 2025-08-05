interface UserProfileResponse {
  data: any[];
  error?: any;
  plano?: string;
}

export class UserQueryService {
  static async queryUserProfile(userEmail: string): Promise<UserProfileResponse> {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    // Validação de credenciais
    if (!apiKey) {
      console.error('❌ API_KEY não configurada');
      return { data: [], error: 'API_KEY não configurada' };
    }
    
    if (!supabaseUrl) {
      console.error('❌ SUPABASE_URL não configurada');
      return { data: [], error: 'SUPABASE_URL não configurada' };
    }
    
    try {
      console.log('🔍 Consultando perfil para:', userEmail);
      
      const endpoint = `${supabaseUrl}/rest/v1/user_profiles?email=eq.${encodeURIComponent(userEmail)}`;
      console.log('🌐 URL da consulta:', endpoint);
      
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      // Tratamento de erros HTTP
      if (response.status === 404) {
        console.warn('⚠️ Tabela user_profiles não existe no Supabase');
        return { data: [], error: 'Tabela não existe' };
      }
      
      if (response.status === 401 || response.status === 403) {
        console.error('❌ Erro de autenticação:', response.status);
        return { data: [], error: 'Erro de autenticação' };
      }
      
      if (!response.ok) {
        console.error(`❌ Erro HTTP: ${response.status}`);
        return { data: [], error: `HTTP error! status: ${response.status}` };
      }
      
      const data = await response.json();
      console.log('✅ Resposta recebida:', data);
      
      // Extrair plano do primeiro resultado
      const plano = data && data.length > 0 ? data[0].plano : null;
      console.log('📋 Plano encontrado:', plano);
      
      return { 
        data, 
        plano,
        error: null 
      };
    } catch (error) {
      console.error('❌ Erro na consulta ao Supabase:', error);
      return { data: [], error };
    }
  }
} 