// Sistema de autenticação mock permanente
// Funcionalidades: Login, Cadastro, Sessões persistentes, Logs detalhados
// Vantagens: Zero dependências externas, funcionamento garantido, deploy simplificado

import { createClient, supabase } from './supabase-mock'

console.log('🚀 Atendefy: Sistema de autenticação mock ativo')

export { supabase } 