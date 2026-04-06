// ═══════════════════════════════════════════════════
// PRICE CATALOG — single source of truth
// Used by API route (server) — never trust frontend
// ═══════════════════════════════════════════════════

export const PRICES: Record<string, { inr: number; usd: number }> = {
  smartAccountGrid: { inr: 400, usd: 149 },
  "Salesforce AI Assistant Chat": { inr: 1001, usd: 179 },
  "Customer Case Management Dashboard": { inr: 400, usd: 149 },
  "AI Lead Scoring & Prioritization Board": { inr: 500, usd: 179 },
  "Revenue Operations Management Hub": { inr: 500, usd: 199 },
  "Smart Document Generation & E-Signature Manager": { inr: 200, usd: 179 },
  "Customer 360 Interaction Timeline": { inr: 500, usd: 149 },
  "Account Detail Page": { inr: 500, usd: 149 },
  "Premium Account Creation Wizard": { inr: 500, usd: 199 },
  "Case 360° View — SupportHub": { inr: 500, usd: 239 },
  "Partner Self-Registration Portal": { inr: 300, usd: 239 },
  "DataBridge Import & Mapping Engine": { inr: 500, usd: 199 },
  "Salesforce CRM Dashboard": { inr: 900, usd: 199 },
  "CRM Dashboard": { inr: 300, usd: 49 },
  "Account Summary Dashboard": { inr: 300, usd: 49 },
  "Opportunity Management Hub": { inr: 300, usd: 49 },
};

// Fallback price if product not found
export const DEFAULT_PRICE = { inr: 500, usd: 149 };
