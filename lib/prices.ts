// ═══════════════════════════════════════════════════
// PRICE CATALOG — single source of truth
// Used by API route (server) — never trust frontend
// ═══════════════════════════════════════════════════

export const PRICES: Record<string, { inr: number; usd: number }> = {
  "smartAccountGrid":                            { inr: 12400, usd: 149 },
  "Salesforce AI Assistant Chat":                { inr: 14900, usd: 179 },
  "Customer Case Management Dashboard":          { inr: 12400, usd: 149 },
  "AI Lead Scoring & Prioritization Board":      { inr: 14900, usd: 179 },
  "Revenue Operations Management Hub":           { inr: 16600, usd: 199 },
  "Smart Document Generation & E-Signature Manager": { inr: 14900, usd: 179 },
  "Customer 360 Interaction Timeline":           { inr: 12400, usd: 149 },
  "Account Detail Page":                         { inr: 12400, usd: 149 },
  "Premium Account Creation Wizard":             { inr: 16600, usd: 199 },
  "Case 360° View — SupportHub":                 { inr: 19900, usd: 239 },
  "Partner Self-Registration Portal":            { inr: 19900, usd: 239 },
  "DataBridge Import & Mapping Engine":          { inr: 16600, usd: 199 },
};

// Fallback price if product not found
export const DEFAULT_PRICE = { inr: 12400, usd: 149 };
