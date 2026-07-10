export type Charge = {
  id: string;
  title: string;
  codeSection: string;
  categories: string[];
  classification: string;
  enhancement?: string;
  synopsis: string;
  elements: string[];
  officerChecklist: string[];
  evidenceChecklist: string[];
  enhancementChecklist: string[];
  relatedCharges: string[];
  officerNotes: string[];
};

export type ChargeGroup = {
  id: string;
  title: string;
  description: string;
  chargeIds: string[];
};

export type Guide = {
  id: string;
  title: string;
  category: string;
  purpose: string;
  sections: Array<{ title: string; items: string[] }>;
};
