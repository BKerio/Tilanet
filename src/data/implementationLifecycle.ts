import type { LucideIcon } from 'lucide-react';

export type LifecycleStageId =
  | 'diagnostic'
  | 'analysis'
  | 'design'
  | 'development'
  | 'deployment'
  | 'operation';

export type LifecycleStage = {
  id: LifecycleStageId;
  label: string;
  color: string;
  icon: string;
};

export type OpeningBalanceRowId = 'planning' | 'execution' | 'validation';

export type OpeningBalanceTask = {
  text: string;
  stage: Exclude<LifecycleStageId, 'diagnostic' | 'operation'>;
  row: OpeningBalanceRowId;
};

export const lifecycleStages: LifecycleStage[] = [
  { id: 'diagnostic', label: 'Diagnostic', color: '#E74C3C', icon: 'Stethoscope' },
  { id: 'analysis', label: 'Analysis', color: '#F1A142', icon: 'HelpCircle' },
  { id: 'design', label: 'Design', color: '#6AAF50', icon: 'Sparkles' },
  { id: 'development', label: 'Development', color: '#C0392B', icon: 'Cog' },
  { id: 'deployment', label: 'Deployment', color: '#3B7DD8', icon: 'RefreshCw' },
  { id: 'operation', label: 'Operation', color: '#7E57C2', icon: 'Settings' },
];

export const openingBalanceRows: { id: OpeningBalanceRowId; label: string }[] = [
  { id: 'planning', label: 'Planning and design' },
  { id: 'execution', label: 'Execution' },
  { id: 'validation', label: 'Validation' },
];

export const openingBalanceTasks: OpeningBalanceTask[] = [
  { text: 'Master data mapping', stage: 'analysis', row: 'planning' },
  { text: 'Opening balance journal names', stage: 'analysis', row: 'planning' },
  { text: 'Opening balance voucher series', stage: 'analysis', row: 'planning' },
  { text: 'Consider customized fields', stage: 'design', row: 'planning' },
  { text: 'Master data upload preparation', stage: 'development', row: 'planning' },
  { text: 'Data collection sheets preparations', stage: 'development', row: 'planning' },
  { text: 'Accountant fill in data collection sheets', stage: 'deployment', row: 'planning' },
  { text: 'Master data upload', stage: 'deployment', row: 'execution' },
  { text: 'Fixed assets opening balance', stage: 'deployment', row: 'execution' },
  { text: 'Inventory opening balance', stage: 'deployment', row: 'execution' },
  { text: 'Trial balance opening balance', stage: 'deployment', row: 'execution' },
  { text: 'Closing', stage: 'deployment', row: 'validation' },
  { text: 'Ledger and subledger reconciliation', stage: 'deployment', row: 'validation' },
];

export const methodologyIntro =
  'Agile development is our default methodology — an iterative, adaptive approach that maximizes solution value while reducing delivery risk. Customer validation, steering committee oversight, and phased go-lives keep every implementation aligned with business goals from diagnostic through operation.';

export type AgilePhase = {
  name: string;
  description: string;
  color: string;
};

export const agileMethodPhases: AgilePhase[] = [
  { name: 'Scope', description: 'Define project scope and objectives', color: '#9333EA' },
  { name: 'Evaluate', description: 'Assess requirements and feasibility', color: '#F43F5E' },
  { name: 'Define', description: 'Create detailed specifications', color: '#F97316' },
  { name: 'Develop', description: 'Build and iterate on solutions', color: '#3B82F6' },
];

export type LucideIconMap = Record<string, LucideIcon>;
