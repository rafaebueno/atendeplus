# 🔗 Integração com Webhook

## ✅ Webhook Implementado

### **URL do Webhook**
```
https://n8n.srv912989.hstgr.cloud/webhook/94b8a2d2-4c2d-4d22-b65c-8d3d26c9450a
```

## 🔧 Arquivos Criados/Modificados

### **1. `src/lib/webhook-service.ts`**
```typescript
export class WebhookService {
  private static readonly WEBHOOK_URL = 'https://n8n.srv912989.hstgr.cloud/webhook/94b8a2d2-4c2d-4d22-b65c-8d3d26c9450a';

  static async sendFormData(formData: any, userEmail: string, userId: string): Promise<void> {
    const webhookData = {
      ...formData,
      userEmail,
      userId,
      timestamp: new Date().toISOString(),
      source: 'atendeplus-form'
    };

    const response = await fetch(this.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
    }
  }
}
```

### **2. `src/components/form/MultiStepForm.tsx`**
- ✅ **Integração**: Usa WebhookService para envio
- ✅ **Dados do Usuário**: Inclui email e ID do usuário logado
- ✅ **Tratamento de Erro**: Exibe erros de envio
- ✅ **Feedback**: Mensagem de sucesso atualizada

## 📊 Dados Enviados ao Webhook

### **Estrutura do Payload**
```json
{
  "shopifyToken": "shpat_...",
  "shopDomain": "minha-loja.myshopify.com",
  "emailProvider": "gmail",
  "emailUser": "seu@email.com",
  "emailPass": "••••••••",
  "userEmail": "usuario@exemplo.com",
  "userId": "user-uuid",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "atendeplus-form"
}
```

### **Campos do Formulário**
- **shopifyToken**: Token de acesso do Shopify
- **shopDomain**: Domínio da loja Shopify
- **emailProvider**: Provedor de email (gmail, outlook, yahoo)
- **emailUser**: Email para notificações
- **emailPass**: Senha do email

### **Metadados do Usuário**
- **userEmail**: Email do usuário logado
- **userId**: ID único do usuário
- **timestamp**: Data/hora do envio
- **source**: Identificador da origem

## 🔄 Fluxo de Envio

### **1. Preenchimento do Formulário**
1. Usuário preenche 3 etapas do formulário
2. Validação em cada etapa
3. Todos os campos obrigatórios preenchidos

### **2. Submissão**
1. Usuário clica em "Finalizar Configuração"
2. Dados são coletados do formulário
3. Email e ID do usuário são adicionados
4. Timestamp é gerado automaticamente

### **3. Envio ao Webhook**
1. POST request para o webhook
2. Content-Type: application/json
3. Payload completo enviado
4. Aguarda resposta do servidor

### **4. Feedback ao Usuário**
1. Se sucesso: Mostra mensagem de confirmação
2. Se erro: Exibe mensagem de erro
3. Loading state durante envio

## 🛡️ Tratamento de Erros

### **Erros de Rede**
- Timeout de conexão
- Servidor indisponível
- Erro de CORS

### **Erros de Resposta**
- HTTP 4xx: Erro do cliente
- HTTP 5xx: Erro do servidor
- Resposta inválida

### **Feedback ao Usuário**
```typescript
catch (error) {
  console.error('Erro ao enviar dados:', error);
  setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar dados para o webhook');
}
```

## 🎯 Casos de Uso

### **Cenário 1: Envio Bem-sucedido**
1. Usuário preenche formulário
2. Dados enviados ao webhook
3. Resposta 200 OK
4. Mensagem de sucesso exibida

### **Cenário 2: Erro de Rede**
1. Usuário preenche formulário
2. Tentativa de envio falha
3. Erro exibido ao usuário
4. Usuário pode tentar novamente

### **Cenário 3: Usuário Não Logado**
1. Dados do formulário enviados
2. userEmail: "Não identificado"
3. userId: "Não identificado"
4. Webhook recebe dados mesmo assim

## ✅ Status Final

- ✅ **Webhook Integrado**: Envio automático de dados
- ✅ **Dados do Usuário**: Email e ID incluídos
- ✅ **Tratamento de Erro**: Feedback adequado
- ✅ **Validação**: Campos obrigatórios verificados
- ✅ **Feedback**: Mensagens de sucesso/erro
- ✅ **Logs**: Console logging para debug

## 🚀 Como Testar

1. **Execute**: `npm run dev`
2. **Acesse**: http://localhost:8080
3. **Faça login** e vá para configuração
4. **Preencha o formulário** completamente
5. **Clique em "Finalizar Configuração"**
6. **Verifique**: Dados enviados ao webhook

## 🎉 Resultado

Agora o sistema **envia dados automaticamente** para o webhook:
- ✅ Formulário completo enviado
- ✅ Email do usuário incluído
- ✅ Timestamp automático
- ✅ Tratamento de erros
- ✅ Feedback ao usuário

**Integração com webhook 100% funcional!** 🔗 