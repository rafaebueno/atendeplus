interface UserProfileResponse {
  data: any[];
  error?: any;
  plano?: string;
}

export class UserQueryService {
  private static readonly SUPABASE_URL = 'https://ottbcbxqfutzsistuhru.supabase.co/rest/v1';
  private static readonly API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dGJjYnhxZnV0enNpc3R1aHJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzc2MjMxMSwiZXhwIjoyMDY5MzM4MzExfQ.u5hAqjlJV5vSPus6O8kT8yQFuCgILvBTgTq0rf8Av2M';

  // Função para verificar se a tabela existe
  static async checkTableExists(): Promise<boolean> {
    try {
      console.log('🔍 Verificando se a tabela user_profiles existe...');
      
      const response = await fetch(`${this.SUPABASE_URL}/user_profiles?select=count`, {
        method: 'GET',
        headers: {
          'apikey': this.API_KEY,
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'count=exact'
        }
      });

      if (response.status === 404) {
        console.error('❌ Tabela user_profiles não encontrada (404)');
        return false;
      }

      if (!response.ok) {
        console.error(`❌ Erro ao verificar tabela: ${response.status}`);
        return false;
      }

      console.log('✅ Tabela user_profiles existe');
      return true;
    } catch (error) {
      console.error('❌ Erro ao verificar tabela:', error);
      return false;
    }
  }

  static async queryUserProfile(userEmail: string): Promise<UserProfileResponse> {
    try {
      console.log('🔍 Consultando perfil do usuário:', userEmail);
      
      // Primeiro verificar se a tabela existe
      const tableExists = await this.checkTableExists();
      if (!tableExists) {
        console.error('❌ Tabela user_profiles não existe. Criando tabela...');
        return { data: [], error: 'Tabela não existe' };
      }
      
      const response = await fetch(`${this.SUPABASE_URL}/user_profiles?email=eq.${encodeURIComponent(userEmail)}`, {
        method: 'GET',
        headers: {
          'apikey': this.API_KEY,
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      });

      if (response.status === 404) {
        console.error('❌ Tabela user_profiles não encontrada (404)');
        return { data: [], error: 'Tabela não encontrada' };
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Consulta realizada com sucesso:', data);
      
      // Extrair o campo "plano" do primeiro resultado
      let plano = null;
      if (data && data.length > 0 && data[0].plano) {
        plano = data[0].plano;
        console.log('📋 Plano encontrado:', plano);
      } else {
        console.log('📋 Nenhum plano encontrado para o usuário');
      }
      
      return { data, plano };
    } catch (error) {
      console.error('❌ Erro na consulta ao Supabase:', error);
      return { data: [], error };
    }
  }

  // Função para criar a tabela se não existir
  static async createUserProfilesTable(): Promise<boolean> {
    try {
      console.log('🔧 Tentando criar tabela user_profiles...');
      
      // Usar RPC para criar tabela
      const response = await fetch(`${this.SUPABASE_URL}/rpc/create_user_profiles_table`, {
        method: 'POST',
        headers: {
          'apikey': this.API_KEY,
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });

      if (response.ok) {
        console.log('✅ Tabela user_profiles criada com sucesso');
        return true;
      } else {
        console.error('❌ Erro ao criar tabela:', response.status);
        return false;
      }
    } catch (error) {
      console.error('❌ Erro ao criar tabela:', error);
      return false;
    }
  }
} 