// =============================================
//   VACHANA PLAYGROUND — DESIGN SYSTEM DATA
// =============================================

export type DesignSystemKey = 'tailwind' | 'radix' | 'shadcn' | 'chakra' | 'daisy'
export type RadiusKey = 'small' | 'medium' | 'large' | 'full'
export type ThemeMode = 'light' | 'dark'

export interface NeutralDef {
  key: string
  name: string
  swatch: string
  light: Record<string, string> | null
  dark: Record<string, string> | null
}

export interface PrimaryDef {
  key: string
  name: string
  color: string
  vars: { light: Record<string, string>; dark: Record<string, string> } | null
}

export interface SystemDef {
  label: string
  neutrals: NeutralDef[]
  primaries: PrimaryDef[]
}

export const PURPLE_DEFAULT = {
  light: { '--brand':'#7f56d9','--brand-dark':'#53389E','--brand-gradient-start':'#9E77ED','--brand-gradient-end':'#6941C6','--org-avatar-bg':'#d6bbfb','--org-avatar-text':'#42307d' },
  dark:  { '--brand':'#B692F6','--brand-dark':'#9E77ED','--brand-gradient-start':'#B692F6','--brand-gradient-end':'#9E77ED','--org-avatar-bg':'#42307D','--org-avatar-text':'#D6BBFB' }
}

export const SYSTEMS: Record<DesignSystemKey, SystemDef> = {

  // ── TAILWIND ──────────────────────────────────────────────────────────────
  tailwind: {
    label: 'Tailwind',
    neutrals: [
      { key:'inya',    name:'Inya',    swatch:'#e6e7eb', light:null, dark:null },
      { key:'zinc',    name:'Zinc',    swatch:'#e4e4e7', light:null, dark:null },
      { key:'stone',   name:'Stone',   swatch:'#e7e5e4', light:null, dark:null },
      { key:'neutral', name:'Neutral', swatch:'#e5e5e5', light:null, dark:null },
      { key:'mauve',   name:'Mauve',   swatch:'#e8e4f0', light:null, dark:null },
      { key:'olive',   name:'Olive',   swatch:'#e4e8e0', light:null, dark:null },
      { key:'mist',    name:'Mist',    swatch:'#e2e8f0', light:null, dark:null },
      { key:'taupe',   name:'Taupe',   swatch:'#eae7e2', light:null, dark:null },
    ],
    primaries: [
      { key:'purple', name:'Purple', color:'#7f56d9', vars:null },
      { key:'blue',   name:'Blue',   color:'#2563eb', vars:null },
      { key:'indigo', name:'Indigo', color:'#4f46e5', vars:null },
      { key:'rose',   name:'Rose',   color:'#e11d48', vars:null },
      { key:'orange', name:'Orange', color:'#ea580c', vars:null },
      { key:'teal',   name:'Teal',   color:'#0d9488', vars:null },
      { key:'green',  name:'Green',  color:'#16a34a', vars:null },
    ]
  },

  // ── RADIX UI ──────────────────────────────────────────────────────────────
  radix: {
    label: 'Radix UI',
    neutrals: [
      { key:'radix-gray',  name:'Gray',  swatch:'#f0f0f0',
        light:{ '--bg-body':'#f0f0f0','--bg-surface':'#fcfcfc','--bg-surface-2':'#f9f9f9','--bg-surface-3':'#f5f5f5','--bg-item':'#e8e8e8','--border':'#cecece','--border-soft':'#e0e0e0','--text-primary':'#202020','--text-muted':'#646464','--text-subtle':'#838383','--text-accent':'#9d9d9d','--text-label':'#646464','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#111111','--bg-surface':'#141414','--bg-surface-2':'#1c1c1c','--bg-surface-3':'#222222','--bg-item':'#2a2a2a','--border':'#484848','--border-soft':'#313131','--text-primary':'#eeeeee','--text-muted':'#b4b4b4','--text-subtle':'#7b7b7b','--text-accent':'#6e6e6e','--text-label':'#7b7b7b','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'radix-mauve', name:'Mauve', swatch:'#f2eff3',
        light:{ '--bg-body':'#f2eff3','--bg-surface':'#fdfcfd','--bg-surface-2':'#faf9fb','--bg-surface-3':'#f7f4fb','--bg-item':'#eae7ec','--border':'#d0cdd7','--border-soft':'#e3dfe6','--text-primary':'#211f26','--text-muted':'#65636d','--text-subtle':'#84828e','--text-accent':'#9e9ca7','--text-label':'#65636d','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#161618','--bg-surface':'#1a191e','--bg-surface-2':'#1c1b1f','--bg-surface-3':'#232326','--bg-item':'#28272b','--border':'#3f3f46','--border-soft':'#2e2d31','--text-primary':'#eeeef0','--text-muted':'#b5b2bc','--text-subtle':'#6f6d78','--text-accent':'#62606b','--text-label':'#6f6d78','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'radix-slate', name:'Slate', swatch:'#f0f0f3',
        light:{ '--bg-body':'#f0f0f3','--bg-surface':'#fcfcfd','--bg-surface-2':'#f9f9fb','--bg-surface-3':'#f4f4f8','--bg-item':'#e8e8ec','--border':'#cdced6','--border-soft':'#e0e1e6','--text-primary':'#1c2024','--text-muted':'#60646c','--text-subtle':'#80838d','--text-accent':'#9b9ea7','--text-label':'#60646c','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#111113','--bg-surface':'#15161a','--bg-surface-2':'#18191b','--bg-surface-3':'#212225','--bg-item':'#272a2d','--border':'#43484e','--border-soft':'#2e3135','--text-primary':'#edeef0','--text-muted':'#b0b4ba','--text-subtle':'#777b84','--text-accent':'#696e77','--text-label':'#777b84','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'radix-sage',  name:'Sage',  swatch:'#eef1f0',
        light:{ '--bg-body':'#eef1f0','--bg-surface':'#fbfdfc','--bg-surface-2':'#f7f9f8','--bg-surface-3':'#f3f6f4','--bg-item':'#e6e9e8','--border':'#cbcfcd','--border-soft':'#dfe2e0','--text-primary':'#1a211e','--text-muted':'#5f6563','--text-subtle':'#7c8481','--text-accent':'#96a09d','--text-label':'#5f6563','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#101211','--bg-surface':'#141514','--bg-surface-2':'#171918','--bg-surface-3':'#1e201f','--bg-item':'#252726','--border':'#3e4140','--border-soft':'#2b2d2c','--text-primary':'#eaecec','--text-muted':'#a8adab','--text-subtle':'#6c6e6d','--text-accent':'#5f6160','--text-label':'#6c6e6d','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'radix-sand',  name:'Sand',  swatch:'#f1f0ef',
        light:{ '--bg-body':'#f1f0ef','--bg-surface':'#fdfdfc','--bg-surface-2':'#f9f9f8','--bg-surface-3':'#f5f4f2','--bg-item':'#e9e8e6','--border':'#cfceca','--border-soft':'#e2e1de','--text-primary':'#21201c','--text-muted':'#63635e','--text-subtle':'#82827c','--text-accent':'#9d9d96','--text-label':'#63635e','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#111110','--bg-surface':'#161615','--bg-surface-2':'#191918','--bg-surface-3':'#222221','--bg-item':'#2a2a28','--border':'#494844','--border-soft':'#31312e','--text-primary':'#eeeeec','--text-muted':'#b5b3ad','--text-subtle':'#7c7b74','--text-accent':'#6f6d66','--text-label':'#7c7b74','--hover-bg':'rgba(255,255,255,0.04)' }
      },
    ],
    primaries: [
      { key:'radix-purple', name:'Purple', color:'#7f56d9', vars:PURPLE_DEFAULT },
      { key:'radix-blue',   name:'Blue',   color:'#0090ff',
        vars:{ light:{ '--brand':'#0090ff','--brand-dark':'#0588f0','--brand-gradient-start':'#5eb1ef','--brand-gradient-end':'#0090ff','--org-avatar-bg':'#bfdbfe','--org-avatar-text':'#1e40af' }, dark:{ '--brand':'#47baff','--brand-dark':'#0090ff','--brand-gradient-start':'#47baff','--brand-gradient-end':'#0090ff','--org-avatar-bg':'#113264','--org-avatar-text':'#9ec8ff' } }
      },
      { key:'radix-indigo', name:'Indigo', color:'#3e63dd',
        vars:{ light:{ '--brand':'#3e63dd','--brand-dark':'#3358d4','--brand-gradient-start':'#8da4ef','--brand-gradient-end':'#3e63dd','--org-avatar-bg':'#c7d2fe','--org-avatar-text':'#1f2d5c' }, dark:{ '--brand':'#6e96fb','--brand-dark':'#3e63dd','--brand-gradient-start':'#6e96fb','--brand-gradient-end':'#3e63dd','--org-avatar-bg':'#1f2d5c','--org-avatar-text':'#abbdf9' } }
      },
      { key:'radix-teal',   name:'Teal',   color:'#12a594',
        vars:{ light:{ '--brand':'#12a594','--brand-dark':'#0d9b8a','--brand-gradient-start':'#53b9ab','--brand-gradient-end':'#12a594','--org-avatar-bg':'#99f6e4','--org-avatar-text':'#0d3d38' }, dark:{ '--brand':'#0ac5b3','--brand-dark':'#12a594','--brand-gradient-start':'#0ac5b3','--brand-gradient-end':'#12a594','--org-avatar-bg':'#0d3d38','--org-avatar-text':'#83cdc1' } }
      },
      { key:'radix-green',  name:'Green',  color:'#30a46c',
        vars:{ light:{ '--brand':'#30a46c','--brand-dark':'#2b9a66','--brand-gradient-start':'#5bb98b','--brand-gradient-end':'#30a46c','--org-avatar-bg':'#bbf7d0','--org-avatar-text':'#193b2d' }, dark:{ '--brand':'#3dd68c','--brand-dark':'#30a46c','--brand-gradient-start':'#3dd68c','--brand-gradient-end':'#30a46c','--org-avatar-bg':'#193b2d','--org-avatar-text':'#8eceaa' } }
      },
      { key:'radix-orange', name:'Orange', color:'#f76b15',
        vars:{ light:{ '--brand':'#f76b15','--brand-dark':'#ef5f00','--brand-gradient-start':'#f5ae73','--brand-gradient-end':'#f76b15','--org-avatar-bg':'#fed7aa','--org-avatar-text':'#582d1d' }, dark:{ '--brand':'#ff7e30','--brand-dark':'#f76b15','--brand-gradient-start':'#ff7e30','--brand-gradient-end':'#f76b15','--org-avatar-bg':'#582d1d','--org-avatar-text':'#f5ae73' } }
      },
      { key:'radix-red',    name:'Red',    color:'#e5484d',
        vars:{ light:{ '--brand':'#e5484d','--brand-dark':'#dc3e42','--brand-gradient-start':'#f4a9aa','--brand-gradient-end':'#e5484d','--org-avatar-bg':'#fecdd3','--org-avatar-text':'#641723' }, dark:{ '--brand':'#f26367','--brand-dark':'#e5484d','--brand-gradient-start':'#f26367','--brand-gradient-end':'#e5484d','--org-avatar-bg':'#641723','--org-avatar-text':'#f4a9aa' } }
      },
      { key:'radix-pink',   name:'Pink',   color:'#d6409f',
        vars:{ light:{ '--brand':'#d6409f','--brand-dark':'#cf3897','--brand-gradient-start':'#e7acd0','--brand-gradient-end':'#d6409f','--org-avatar-bg':'#fce7f3','--org-avatar-text':'#651249' }, dark:{ '--brand':'#e85ead','--brand-dark':'#d6409f','--brand-gradient-start':'#e85ead','--brand-gradient-end':'#d6409f','--org-avatar-bg':'#651249','--org-avatar-text':'#e7acd0' } }
      },
    ]
  },

  // ── SHADCN UI ─────────────────────────────────────────────────────────────
  shadcn: {
    label: 'Shadcn UI',
    neutrals: [
      { key:'shadcn-zinc',    name:'Zinc',    swatch:'#fafafa',
        light:{ '--bg-body':'#e4e4e7','--bg-surface':'#fafafa','--bg-surface-2':'#f4f4f5','--bg-surface-3':'#f9f9fb','--bg-item':'#d4d4d8','--border':'#e4e4e7','--border-soft':'#f4f4f5','--text-primary':'#09090b','--text-muted':'#71717a','--text-subtle':'#52525b','--text-accent':'#a1a1aa','--text-label':'#71717a','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#09090b','--bg-surface':'#09090b','--bg-surface-2':'#18181b','--bg-surface-3':'#1c1c1f','--bg-item':'#27272a','--border':'#27272a','--border-soft':'#1c1c1f','--text-primary':'#fafafa','--text-muted':'#a1a1aa','--text-subtle':'#71717a','--text-accent':'#52525b','--text-label':'#71717a','--hover-bg':'rgba(255,255,255,0.05)' }
      },
      { key:'shadcn-slate',   name:'Slate',   swatch:'#f8fafc',
        light:{ '--bg-body':'#e2e8f0','--bg-surface':'#f8fafc','--bg-surface-2':'#f1f5f9','--bg-surface-3':'#f5f8fc','--bg-item':'#e2e8f0','--border':'#e2e8f0','--border-soft':'#f1f5f9','--text-primary':'#020617','--text-muted':'#64748b','--text-subtle':'#475569','--text-accent':'#94a3b8','--text-label':'#64748b','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#020617','--bg-surface':'#0d1117','--bg-surface-2':'#0f172a','--bg-surface-3':'#131e31','--bg-item':'#1e293b','--border':'#1e293b','--border-soft':'#0f172a','--text-primary':'#f8fafc','--text-muted':'#94a3b8','--text-subtle':'#64748b','--text-accent':'#475569','--text-label':'#64748b','--hover-bg':'rgba(255,255,255,0.05)' }
      },
      { key:'shadcn-stone',   name:'Stone',   swatch:'#fafaf9',
        light:{ '--bg-body':'#e7e5e4','--bg-surface':'#fafaf9','--bg-surface-2':'#f5f5f4','--bg-surface-3':'#f9f8f6','--bg-item':'#d6d3d1','--border':'#e7e5e4','--border-soft':'#f5f5f4','--text-primary':'#1c1917','--text-muted':'#78716c','--text-subtle':'#57534e','--text-accent':'#a8a29e','--text-label':'#78716c','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#0c0a09','--bg-surface':'#0c0a09','--bg-surface-2':'#1c1917','--bg-surface-3':'#201e1b','--bg-item':'#292524','--border':'#292524','--border-soft':'#1c1917','--text-primary':'#fafaf9','--text-muted':'#a8a29e','--text-subtle':'#78716c','--text-accent':'#57534e','--text-label':'#78716c','--hover-bg':'rgba(255,255,255,0.05)' }
      },
      { key:'shadcn-gray',    name:'Gray',    swatch:'#f9fafb',
        light:{ '--bg-body':'#e5e7eb','--bg-surface':'#f9fafb','--bg-surface-2':'#f3f4f6','--bg-surface-3':'#f7f8fa','--bg-item':'#e5e7eb','--border':'#e5e7eb','--border-soft':'#f3f4f6','--text-primary':'#030712','--text-muted':'#6b7280','--text-subtle':'#4b5563','--text-accent':'#9ca3af','--text-label':'#6b7280','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#030712','--bg-surface':'#0a0d14','--bg-surface-2':'#111827','--bg-surface-3':'#161e2e','--bg-item':'#1f2937','--border':'#1f2937','--border-soft':'#111827','--text-primary':'#f9fafb','--text-muted':'#9ca3af','--text-subtle':'#6b7280','--text-accent':'#4b5563','--text-label':'#6b7280','--hover-bg':'rgba(255,255,255,0.05)' }
      },
      { key:'shadcn-neutral', name:'Neutral', swatch:'#fafafa',
        light:{ '--bg-body':'#e5e5e5','--bg-surface':'#fafafa','--bg-surface-2':'#f5f5f5','--bg-surface-3':'#f9f9f9','--bg-item':'#d4d4d4','--border':'#e5e5e5','--border-soft':'#f5f5f5','--text-primary':'#0a0a0a','--text-muted':'#737373','--text-subtle':'#525252','--text-accent':'#a3a3a3','--text-label':'#737373','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#0a0a0a','--bg-surface':'#0a0a0a','--bg-surface-2':'#171717','--bg-surface-3':'#1c1c1c','--bg-item':'#262626','--border':'#262626','--border-soft':'#171717','--text-primary':'#fafafa','--text-muted':'#a3a3a3','--text-subtle':'#737373','--text-accent':'#525252','--text-label':'#737373','--hover-bg':'rgba(255,255,255,0.05)' }
      },
    ],
    primaries: [
      { key:'shadcn-purple', name:'Purple', color:'#7f56d9', vars:PURPLE_DEFAULT },
      { key:'shadcn-violet', name:'Violet', color:'#8b5cf6',
        vars:{ light:{ '--brand':'#8b5cf6','--brand-dark':'#7c3aed','--brand-gradient-start':'#a78bfa','--brand-gradient-end':'#8b5cf6','--org-avatar-bg':'#ede9fe','--org-avatar-text':'#4c1d95' }, dark:{ '--brand':'#a78bfa','--brand-dark':'#8b5cf6','--brand-gradient-start':'#c4b5fd','--brand-gradient-end':'#a78bfa','--org-avatar-bg':'#4c1d95','--org-avatar-text':'#ddd6fe' } }
      },
      { key:'shadcn-blue',   name:'Blue',   color:'#3b82f6',
        vars:{ light:{ '--brand':'#3b82f6','--brand-dark':'#2563eb','--brand-gradient-start':'#93c5fd','--brand-gradient-end':'#3b82f6','--org-avatar-bg':'#dbeafe','--org-avatar-text':'#1e3a8a' }, dark:{ '--brand':'#60a5fa','--brand-dark':'#3b82f6','--brand-gradient-start':'#93c5fd','--brand-gradient-end':'#60a5fa','--org-avatar-bg':'#1e3a8a','--org-avatar-text':'#bfdbfe' } }
      },
      { key:'shadcn-indigo', name:'Indigo', color:'#6366f1',
        vars:{ light:{ '--brand':'#6366f1','--brand-dark':'#4f46e5','--brand-gradient-start':'#a5b4fc','--brand-gradient-end':'#6366f1','--org-avatar-bg':'#e0e7ff','--org-avatar-text':'#312e81' }, dark:{ '--brand':'#818cf8','--brand-dark':'#6366f1','--brand-gradient-start':'#a5b4fc','--brand-gradient-end':'#818cf8','--org-avatar-bg':'#312e81','--org-avatar-text':'#c7d2fe' } }
      },
      { key:'shadcn-rose',   name:'Rose',   color:'#f43f5e',
        vars:{ light:{ '--brand':'#f43f5e','--brand-dark':'#e11d48','--brand-gradient-start':'#fda4af','--brand-gradient-end':'#f43f5e','--org-avatar-bg':'#ffe4e6','--org-avatar-text':'#881337' }, dark:{ '--brand':'#fb7185','--brand-dark':'#f43f5e','--brand-gradient-start':'#fda4af','--brand-gradient-end':'#fb7185','--org-avatar-bg':'#881337','--org-avatar-text':'#fecdd3' } }
      },
      { key:'shadcn-orange', name:'Orange', color:'#f97316',
        vars:{ light:{ '--brand':'#f97316','--brand-dark':'#ea580c','--brand-gradient-start':'#fdba74','--brand-gradient-end':'#f97316','--org-avatar-bg':'#ffedd5','--org-avatar-text':'#7c2d12' }, dark:{ '--brand':'#fb923c','--brand-dark':'#f97316','--brand-gradient-start':'#fdba74','--brand-gradient-end':'#fb923c','--org-avatar-bg':'#7c2d12','--org-avatar-text':'#fed7aa' } }
      },
      { key:'shadcn-green',  name:'Green',  color:'#22c55e',
        vars:{ light:{ '--brand':'#22c55e','--brand-dark':'#16a34a','--brand-gradient-start':'#86efac','--brand-gradient-end':'#22c55e','--org-avatar-bg':'#dcfce7','--org-avatar-text':'#14532d' }, dark:{ '--brand':'#4ade80','--brand-dark':'#22c55e','--brand-gradient-start':'#86efac','--brand-gradient-end':'#4ade80','--org-avatar-bg':'#14532d','--org-avatar-text':'#bbf7d0' } }
      },
      { key:'shadcn-teal',   name:'Teal',   color:'#14b8a6',
        vars:{ light:{ '--brand':'#14b8a6','--brand-dark':'#0d9488','--brand-gradient-start':'#5eead4','--brand-gradient-end':'#14b8a6','--org-avatar-bg':'#ccfbf1','--org-avatar-text':'#134e4a' }, dark:{ '--brand':'#2dd4bf','--brand-dark':'#14b8a6','--brand-gradient-start':'#5eead4','--brand-gradient-end':'#2dd4bf','--org-avatar-bg':'#134e4a','--org-avatar-text':'#99f6e4' } }
      },
    ]
  },

  // ── CHAKRA UI ─────────────────────────────────────────────────────────────
  chakra: {
    label: 'Chakra UI',
    neutrals: [
      { key:'chakra-gray', name:'Gray', swatch:'#EDF2F7',
        light:{ '--bg-body':'#E2E8F0','--bg-surface':'#F7FAFC','--bg-surface-2':'#EDF2F7','--bg-surface-3':'#F0F4F8','--bg-item':'#CBD5E0','--border':'#CBD5E0','--border-soft':'#E2E8F0','--text-primary':'#1A202C','--text-muted':'#4A5568','--text-subtle':'#718096','--text-accent':'#A0AEC0','--text-label':'#718096','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#171923','--bg-surface':'#1A202C','--bg-surface-2':'#2D3748','--bg-surface-3':'#232936','--bg-item':'#3A4A5E','--border':'#4A5568','--border-soft':'#2D3748','--text-primary':'#F7FAFC','--text-muted':'#A0AEC0','--text-subtle':'#718096','--text-accent':'#4A5568','--text-label':'#718096','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'chakra-warm', name:'Warm', swatch:'#FEF9E8',
        light:{ '--bg-body':'#FEF3C7','--bg-surface':'#FFFDF7','--bg-surface-2':'#FEF9E8','--bg-surface-3':'#FEF5D2','--bg-item':'#FDE68A','--border':'#F6D860','--border-soft':'#FEF0BE','--text-primary':'#1C1407','--text-muted':'#92400e','--text-subtle':'#b45309','--text-accent':'#D4A04A','--text-label':'#92400e','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#1A1207','--bg-surface':'#201708','--bg-surface-2':'#2D2210','--bg-surface-3':'#251D0D','--bg-item':'#3B2E16','--border':'#5C4820','--border-soft':'#3B2E16','--text-primary':'#FFFBE6','--text-muted':'#D4A04A','--text-subtle':'#9B7A34','--text-accent':'#7B5E2A','--text-label':'#9B7A34','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'chakra-cool', name:'Cool', swatch:'#EBF8FF',
        light:{ '--bg-body':'#BEE3F8','--bg-surface':'#F7FDFF','--bg-surface-2':'#EBF8FF','--bg-surface-3':'#F0FAFB','--bg-item':'#90CDF4','--border':'#63B3ED','--border-soft':'#BEE3F8','--text-primary':'#1A365D','--text-muted':'#2B6CB0','--text-subtle':'#4299E1','--text-accent':'#63B3ED','--text-label':'#2B6CB0','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#0A1628','--bg-surface':'#0F1E35','--bg-surface-2':'#172442','--bg-surface-3':'#131C30','--bg-item':'#1E2D4D','--border':'#2A4365','--border-soft':'#1E2D4D','--text-primary':'#EBF8FF','--text-muted':'#90CDF4','--text-subtle':'#4299E1','--text-accent':'#2B6CB0','--text-label':'#4299E1','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'chakra-green', name:'Green', swatch:'#F0FFF4',
        light:{ '--bg-body':'#C6F6D5','--bg-surface':'#F0FFF4','--bg-surface-2':'#E6FFEE','--bg-surface-3':'#ECFFF3','--bg-item':'#9AE6B4','--border':'#68D391','--border-soft':'#C6F6D5','--text-primary':'#1C4532','--text-muted':'#276749','--text-subtle':'#38A169','--text-accent':'#68D391','--text-label':'#276749','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#0B1F14','--bg-surface':'#0F2A1A','--bg-surface-2':'#163A24','--bg-surface-3':'#122E1D','--bg-item':'#1E4A30','--border':'#276749','--border-soft':'#1E4A30','--text-primary':'#F0FFF4','--text-muted':'#9AE6B4','--text-subtle':'#68D391','--text-accent':'#48BB78','--text-label':'#68D391','--hover-bg':'rgba(255,255,255,0.04)' }
      },
    ],
    primaries: [
      { key:'chakra-purple', name:'Purple', color:'#7f56d9', vars:PURPLE_DEFAULT },
      { key:'chakra-blue',   name:'Blue',   color:'#3182CE',
        vars:{ light:{ '--brand':'#3182CE','--brand-dark':'#2B6CB0','--brand-gradient-start':'#63B3ED','--brand-gradient-end':'#3182CE','--org-avatar-bg':'#BEE3F8','--org-avatar-text':'#2A4365' }, dark:{ '--brand':'#63B3ED','--brand-dark':'#4299E1','--brand-gradient-start':'#90CDF4','--brand-gradient-end':'#63B3ED','--org-avatar-bg':'#2A4365','--org-avatar-text':'#BEE3F8' } }
      },
      { key:'chakra-teal',   name:'Teal',   color:'#319795',
        vars:{ light:{ '--brand':'#319795','--brand-dark':'#2C7A7B','--brand-gradient-start':'#4FD1C5','--brand-gradient-end':'#319795','--org-avatar-bg':'#B2F5EA','--org-avatar-text':'#234E52' }, dark:{ '--brand':'#4FD1C5','--brand-dark':'#38B2AC','--brand-gradient-start':'#81E6D9','--brand-gradient-end':'#4FD1C5','--org-avatar-bg':'#234E52','--org-avatar-text':'#B2F5EA' } }
      },
      { key:'chakra-green',  name:'Green',  color:'#38A169',
        vars:{ light:{ '--brand':'#38A169','--brand-dark':'#2F855A','--brand-gradient-start':'#68D391','--brand-gradient-end':'#38A169','--org-avatar-bg':'#C6F6D5','--org-avatar-text':'#1C4532' }, dark:{ '--brand':'#68D391','--brand-dark':'#48BB78','--brand-gradient-start':'#9AE6B4','--brand-gradient-end':'#68D391','--org-avatar-bg':'#1C4532','--org-avatar-text':'#C6F6D5' } }
      },
      { key:'chakra-orange', name:'Orange', color:'#DD6B20',
        vars:{ light:{ '--brand':'#DD6B20','--brand-dark':'#C05621','--brand-gradient-start':'#F6AD55','--brand-gradient-end':'#DD6B20','--org-avatar-bg':'#FEEBC8','--org-avatar-text':'#7B341E' }, dark:{ '--brand':'#F6AD55','--brand-dark':'#ED8936','--brand-gradient-start':'#FBD38D','--brand-gradient-end':'#F6AD55','--org-avatar-bg':'#7B341E','--org-avatar-text':'#FEEBC8' } }
      },
      { key:'chakra-red',    name:'Red',    color:'#E53E3E',
        vars:{ light:{ '--brand':'#E53E3E','--brand-dark':'#C53030','--brand-gradient-start':'#FC8181','--brand-gradient-end':'#E53E3E','--org-avatar-bg':'#FED7D7','--org-avatar-text':'#822727' }, dark:{ '--brand':'#FC8181','--brand-dark':'#F56565','--brand-gradient-start':'#FEB2B2','--brand-gradient-end':'#FC8181','--org-avatar-bg':'#822727','--org-avatar-text':'#FED7D7' } }
      },
      { key:'chakra-pink',   name:'Pink',   color:'#D53F8C',
        vars:{ light:{ '--brand':'#D53F8C','--brand-dark':'#B83280','--brand-gradient-start':'#F687B3','--brand-gradient-end':'#D53F8C','--org-avatar-bg':'#FED7E2','--org-avatar-text':'#702459' }, dark:{ '--brand':'#F687B3','--brand-dark':'#ED64A6','--brand-gradient-start':'#FBB6CE','--brand-gradient-end':'#F687B3','--org-avatar-bg':'#702459','--org-avatar-text':'#FED7E2' } }
      },
      { key:'chakra-cyan',   name:'Cyan',   color:'#00B5D8',
        vars:{ light:{ '--brand':'#00B5D8','--brand-dark':'#00A3C4','--brand-gradient-start':'#76E4F7','--brand-gradient-end':'#00B5D8','--org-avatar-bg':'#C4F1F9','--org-avatar-text':'#065666' }, dark:{ '--brand':'#76E4F7','--brand-dark':'#0BC5EA','--brand-gradient-start':'#C4F1F9','--brand-gradient-end':'#76E4F7','--org-avatar-bg':'#065666','--org-avatar-text':'#C4F1F9' } }
      },
    ]
  },

  // ── DAISY UI ──────────────────────────────────────────────────────────────
  daisy: {
    label: 'DaisyUI',
    neutrals: [
      { key:'daisy-light',   name:'Light',   swatch:'#F2F2F2',
        light:{ '--bg-body':'#E5E6E6','--bg-surface':'#FFFFFF','--bg-surface-2':'#F2F2F2','--bg-surface-3':'#F8F8F8','--bg-item':'#D9D9D9','--border':'#D1D5DB','--border-soft':'#E5E6E6','--text-primary':'#1F2937','--text-muted':'#6B7280','--text-subtle':'#9CA3AF','--text-accent':'#D1D5DB','--text-label':'#6B7280','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#15191E','--bg-surface':'#1D232A','--bg-surface-2':'#191E24','--bg-surface-3':'#20262E','--bg-item':'#2A323C','--border':'#2A323C','--border-soft':'#191E24','--text-primary':'#A6ADBB','--text-muted':'#6B7280','--text-subtle':'#4B5563','--text-accent':'#374151','--text-label':'#4B5563','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'daisy-nord',    name:'Nord',    swatch:'#ECEFF4',
        light:{ '--bg-body':'#D8DEE9','--bg-surface':'#ECEFF4','--bg-surface-2':'#E5E9F0','--bg-surface-3':'#EEF2F7','--bg-item':'#D8DEE9','--border':'#BEC6D4','--border-soft':'#D8DEE9','--text-primary':'#2E3440','--text-muted':'#4C566A','--text-subtle':'#616E86','--text-accent':'#8892A4','--text-label':'#4C566A','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#242933','--bg-surface':'#2E3440','--bg-surface-2':'#3B4252','--bg-surface-3':'#343B4A','--bg-item':'#434C5E','--border':'#4C566A','--border-soft':'#3B4252','--text-primary':'#D8DEE9','--text-muted':'#8892A4','--text-subtle':'#4C566A','--text-accent':'#3B4252','--text-label':'#616E86','--hover-bg':'rgba(255,255,255,0.04)' }
      },
      { key:'daisy-dracula', name:'Dracula', swatch:'#282A36',
        light:{ '--bg-body':'#E8E9EF','--bg-surface':'#F8F8FC','--bg-surface-2':'#F0F0F8','--bg-surface-3':'#F4F4FA','--bg-item':'#D9DAE8','--border':'#C5C6D8','--border-soft':'#E0E0ED','--text-primary':'#282A36','--text-muted':'#6272A4','--text-subtle':'#8892BF','--text-accent':'#BDBFD4','--text-label':'#6272A4','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#1E1F29','--bg-surface':'#282A36','--bg-surface-2':'#32344A','--bg-surface-3':'#2C2E3E','--bg-item':'#414558','--border':'#44475A','--border-soft':'#32344A','--text-primary':'#F8F8F2','--text-muted':'#6272A4','--text-subtle':'#44475A','--text-accent':'#343646','--text-label':'#6272A4','--hover-bg':'rgba(255,255,255,0.06)' }
      },
      { key:'daisy-cupcake', name:'Cupcake', swatch:'#FAF7F5',
        light:{ '--bg-body':'#F0ECE8','--bg-surface':'#FAF7F5','--bg-surface-2':'#F3EEEA','--bg-surface-3':'#F7F4F1','--bg-item':'#E5DFD9','--border':'#D6CEC6','--border-soft':'#EDE7E1','--text-primary':'#291334','--text-muted':'#7B5B7D','--text-subtle':'#9E85A0','--text-accent':'#C4AECB','--text-label':'#7B5B7D','--hover-bg':'rgba(0,0,0,0.04)' },
        dark: { '--bg-body':'#1A0D20','--bg-surface':'#221329','--bg-surface-2':'#2E1C36','--bg-surface-3':'#271730','--bg-item':'#3A2547','--border':'#4A3259','--border-soft':'#2E1C36','--text-primary':'#F8D7FF','--text-muted':'#C9A0D8','--text-subtle':'#8A607A','--text-accent':'#5C3D70','--text-label':'#8A607A','--hover-bg':'rgba(255,255,255,0.04)' }
      },
    ],
    primaries: [
      { key:'daisy-purple',  name:'Purple',  color:'#7f56d9', vars:PURPLE_DEFAULT },
      { key:'daisy-pink',    name:'Pink',    color:'#EF9FBC',
        vars:{ light:{ '--brand':'#EF9FBC','--brand-dark':'#D6809A','--brand-gradient-start':'#F7CFE0','--brand-gradient-end':'#EF9FBC','--org-avatar-bg':'#FCE7F3','--org-avatar-text':'#831843' }, dark:{ '--brand':'#EF9FBC','--brand-dark':'#D6809A','--brand-gradient-start':'#F7CFE0','--brand-gradient-end':'#EF9FBC','--org-avatar-bg':'#831843','--org-avatar-text':'#FBCFE8' } }
      },
      { key:'daisy-cyan',    name:'Cyan',    color:'#65C3C8',
        vars:{ light:{ '--brand':'#65C3C8','--brand-dark':'#4FADB2','--brand-gradient-start':'#A5E0E3','--brand-gradient-end':'#65C3C8','--org-avatar-bg':'#CDFAFA','--org-avatar-text':'#164E63' }, dark:{ '--brand':'#65C3C8','--brand-dark':'#4FADB2','--brand-gradient-start':'#A5E0E3','--brand-gradient-end':'#65C3C8','--org-avatar-bg':'#164E63','--org-avatar-text':'#A5F3FC' } }
      },
      { key:'daisy-nordic',  name:'Nordic',  color:'#5E81AC',
        vars:{ light:{ '--brand':'#5E81AC','--brand-dark':'#4C6F99','--brand-gradient-start':'#81A1C1','--brand-gradient-end':'#5E81AC','--org-avatar-bg':'#BEE3F8','--org-avatar-text':'#1E3A8A' }, dark:{ '--brand':'#88C0D0','--brand-dark':'#81A1C1','--brand-gradient-start':'#A8D4E0','--brand-gradient-end':'#88C0D0','--org-avatar-bg':'#1E3A8A','--org-avatar-text':'#BFDBFE' } }
      },
      { key:'daisy-amber',   name:'Amber',   color:'#EEAF3A',
        vars:{ light:{ '--brand':'#EEAF3A','--brand-dark':'#D4952C','--brand-gradient-start':'#F7D08A','--brand-gradient-end':'#EEAF3A','--org-avatar-bg':'#FEF3C7','--org-avatar-text':'#92400E' }, dark:{ '--brand':'#EEAF3A','--brand-dark':'#D4952C','--brand-gradient-start':'#F7D08A','--brand-gradient-end':'#EEAF3A','--org-avatar-bg':'#92400E','--org-avatar-text':'#FDE68A' } }
      },
      { key:'daisy-emerald', name:'Emerald', color:'#66CC8A',
        vars:{ light:{ '--brand':'#66CC8A','--brand-dark':'#4DB874','--brand-gradient-start':'#A7E9BC','--brand-gradient-end':'#66CC8A','--org-avatar-bg':'#D1FAE5','--org-avatar-text':'#064E3B' }, dark:{ '--brand':'#66CC8A','--brand-dark':'#4DB874','--brand-gradient-start':'#A7E9BC','--brand-gradient-end':'#66CC8A','--org-avatar-bg':'#064E3B','--org-avatar-text':'#A7F3D0' } }
      },
      { key:'daisy-fuchsia', name:'Fuchsia', color:'#FF79C6',
        vars:{ light:{ '--brand':'#D946EF','--brand-dark':'#C026D3','--brand-gradient-start':'#E879F9','--brand-gradient-end':'#D946EF','--org-avatar-bg':'#FAE8FF','--org-avatar-text':'#701A75' }, dark:{ '--brand':'#FF79C6','--brand-dark':'#E065B0','--brand-gradient-start':'#FFB8E1','--brand-gradient-end':'#FF79C6','--org-avatar-bg':'#831843','--org-avatar-text':'#FBCFE8' } }
      },
    ]
  },
}

export const ALL_VAR_KEYS = [
  '--bg-body','--bg-surface','--bg-surface-2','--bg-surface-3','--bg-item',
  '--border','--border-soft',
  '--text-primary','--text-muted','--text-subtle','--text-accent','--text-label',
  '--hover-bg','--brand','--brand-dark','--brand-gradient-start','--brand-gradient-end',
  '--brand-btn','--brand-btn-dark',
  '--org-avatar-bg','--org-avatar-text'
]

export const RADIUS_KEYS: RadiusKey[] = ['small','medium','large','full']
export const RADIUS_LABELS = ['S','M','L','∞']

export const fontPrimaryMap: Record<string, string> = {
  'aspekta':       "'Aspekta', serif",
  'fraunces':      "'Fraunces', serif",
  'geist':         "'Geist', sans-serif",
  'hk-grotesk':    "'HK Grotesk', sans-serif",
  'spline-sans':   "'Spline Sans', sans-serif",
  'hedvig':        "'Hedvig Letters Serif', serif",
  'switzer':       "'Switzer', sans-serif",
}

export const fontSecondaryMap: Record<string, string> = {
  'google-sans':   "'Google Sans', sans-serif",
  'inter':         "'Inter', sans-serif",
  'geist':         "'Geist', sans-serif",
  'hk-grotesk':    "'HK Grotesk', sans-serif",
  'readex-pro':    "'Readex Pro', sans-serif",
  'inter-tight':   "'Inter Tight', sans-serif",
  'satoshi':       "'Satoshi', sans-serif",
}

export const fontLabelMap: Record<string, string> = {
  'azeret':      "'Azeret Mono', monospace",
  'chivo':       "'Chivo Mono', monospace",
  'reddit':      "'Reddit Mono', monospace",
  'jetbrains':   "'JetBrains Mono', monospace",
  'instrument':  "'Instrument Sans', sans-serif",
  'space-mono':  "'Space Mono', monospace",
  'fira-code':   "'Fira Code', monospace",
  'ibm-plex':    "'IBM Plex Mono', monospace",
}

export const RAINBOW = 'conic-gradient(from 0deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)'
