# AtendePlus

Sistema de automação de atendimento para lojas Shopify com integração de email.

## 🚀 Funcionalidades

- **Autenticação**: Sistema completo de login/cadastro com Supabase
- **Configuração Shopify**: Integração com API do Shopify
- **Automação de Email**: Configuração de provedores de email
- **Webhook**: Envio automático de dados para processamento

## 🛠️ Tecnologias

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + Shadcn/ui
- **Autenticação**: Supabase
- **Formulários**: React Hook Form
- **Roteamento**: React Router DOM

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🔧 Configuração

1. **Variáveis de Ambiente** (opcional):
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

2. **Acesse**: http://localhost:8080

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── auth/          # Autenticação
│   ├── form/          # Formulários
│   └── ui/            # Componentes UI
├── lib/
│   ├── supabase.ts    # Cliente Supabase
│   └── webhook-service.ts # Serviço de webhook
├── pages/
│   ├── Index.tsx      # Página principal
│   ├── Login.tsx      # Login/Cadastro
│   └── Config.tsx     # Configuração
└── App.tsx            # Aplicação principal
```

## 🔄 Fluxo da Aplicação

1. **Página Principal** → Landing page com botões de ação
2. **Login/Cadastro** → Autenticação do usuário
3. **Configuração** → Formulário multi-step para integração
4. **Webhook** → Envio dos dados para processamento

## 📝 Licença

MIT
