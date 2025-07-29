import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ottbcbxqfutzsistuhru.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dGJjYnhxZnV0enNpc3R1aHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3NjIzMTEsImV4cCI6MjA2OTMzODMxMX0.qYnTKZWkCh68taDt8aD3qdYBYFwtwdlPrkoDC48vKa4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 