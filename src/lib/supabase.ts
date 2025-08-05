import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ottbcbxqfutzsistuhru.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseAnonKey) {
  console.warn('⚠️ VITE_SUPABASE_ANON_KEY não configurada')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,    // ❌ Não renovar tokens
    persistSession: false,      // ❌ Não persistir sessão
    detectSessionInUrl: false,  // ❌ Não detectar sessão
  }
}) 