interface WebhookData {
  shopifyToken: string;
  shopDomain: string;
  emailProvider: string;
  emailUser: string;
  emailPass: string;
  userEmail: string;
  userId: string;
  timestamp: string;
  source: string;
}

export class WebhookService {
  private static readonly WEBHOOK_URL = 'https://n8n.srv912989.hstgr.cloud/webhook/94b8a2d2-4c2d-4d22-b65c-8d3d26c9450a';

  static async sendFormData(formData: any, userEmail: string, userId: string): Promise<void> {
    const webhookData: WebhookData = {
      ...formData,
      userEmail: userEmail || 'Não identificado',
      userId: userId || 'Não identificado',
      timestamp: new Date().toISOString(),
      source: 'atendefy-form'
    };

    const response = await fetch(this.WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro HTTP: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return await response.json();
  }
} 