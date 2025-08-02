# Configuração da Tabela user_profiles no Supabase

## ❌ Problema Atual
A aplicação está retornando erro 404 porque a tabela `user_profiles` não existe no Supabase.

## ✅ Solução

### 1. Acesse o Dashboard do Supabase
- Vá para: https://supabase.com/dashboard
- Faça login na sua conta
- Selecione o projeto: `ottbcbxqfutzsistuhru`

### 2. Crie a Tabela user_profiles

#### Opção A: Via SQL Editor
1. Vá para **SQL Editor** no menu lateral
2. Execute o seguinte SQL:

```sql
CREATE TABLE user_profiles (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  plano TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para melhor performance
CREATE INDEX idx_user_profiles_email ON user_profiles(email);

-- Habilitar RLS (Row Level Security)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura
CREATE POLICY "Permitir leitura de user_profiles" ON user_profiles
  FOR SELECT USING (true);

-- Política para permitir inserção
CREATE POLICY "Permitir inserção em user_profiles" ON user_profiles
  FOR INSERT WITH CHECK (true);
```

#### Opção B: Via Interface Gráfica
1. Vá para **Database** > **Tables**
2. Clique em **"New table"**
3. Configure:
   - **Name**: `user_profiles`
   - **Columns**:
     - `id` (int8, primary key, auto-increment)
     - `email` (text, unique, not null)
     - `plano` (text, nullable)
     - `created_at` (timestamptz, default: now())
     - `updated_at` (timestamptz, default: now())

### 3. Verificar a Configuração
Após criar a tabela, a aplicação deve funcionar corretamente. Você verá no console:

```
✅ Tabela user_profiles existe
✅ Consulta realizada com sucesso: []
📋 Plano encontrado: [nome do plano]
```

### 4. Testar
1. Faça login na aplicação
2. Abra o console (F12)
3. Verifique se não há mais erros 404
4. O plano do usuário aparecerá no header

## 🔧 Troubleshooting

### Se ainda houver erro 404:
1. Verifique se a tabela foi criada corretamente
2. Verifique se as políticas RLS estão configuradas
3. Verifique se a API key tem permissões adequadas

### Para inserir dados de teste:
```sql
INSERT INTO user_profiles (email, plano) VALUES ('exemplo@email.com', 'Premium');
INSERT INTO user_profiles (email, plano) VALUES ('teste@email.com', 'Basic');
INSERT INTO user_profiles (email, plano) VALUES ('admin@email.com', 'Enterprise');
```

## 📊 Estrutura da Tabela
```sql
user_profiles:
├── id (SERIAL PRIMARY KEY)
├── email (TEXT UNIQUE NOT NULL)
├── plano (TEXT)
├── created_at (TIMESTAMP WITH TIME ZONE)
└── updated_at (TIMESTAMP WITH TIME ZONE)
```

## 🔗 URL da API
```
https://ottbcbxqfutzsistuhru.supabase.co/rest/v1/user_profiles?email=eq.{email}
```

## 🎨 UX do Plano
O plano do usuário será exibido no header com:
- **Premium**: Gradiente roxo/rosa com estrela ⭐
- **Basic**: Gradiente azul/ciano com círculo 🔵
- **Enterprise**: Gradiente verde/esmeralda com prédio 🏢
- **Outros**: Gradiente cinza com ícone 📋 