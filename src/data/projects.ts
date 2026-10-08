export interface ProjectCaseStudy {
  id: string;
  code: string;
  title: string;
  type: string;
  location: string;
  capacity: string;
  scope: string;
  yieldGain: string;
  description: string;
  equipment: string[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "project-01",
    code: "CASE-01",
    title: "High-Capacity Parboiled Rice Milling Complex",
    type: "Complete Turnkey Plant Setup",
    location: "Bardhaman Rice Belt, West Bengal",
    capacity: "12.0 TPH Fully Automated",
    scope: "Civil Layout Engineering, Plant Structural Steelwork, 4-Pass Whitening, Optical Sorter Integration, Central SCADA Control",
    yieldGain: "+3.8% Head Rice Yield",
    description: "Engineering and commissioning of a 12 TPH automated parboiled rice processing facility. Optimized aspiration ducts and energy-efficient vibratory drives lowered specific electrical consumption by 14% while delivering export-grade Minikit and Swarna rice.",
    equipment: [
      "Twin Gravity Destoner CAT-DS-1200",
      "Tri-Pass Vertical Whiteners CAT-RW-800",
      "7-Chute Multi-Spectral CCD Color Sorter",
      "Centralized PLC MCC Control Architecture",
    ],
  },
  {
    id: "project-02",
    code: "CASE-02",
    title: "Aromatic Gobindobhog Precision Processing Line",
    type: "Specialty Grain Milling System",
    location: "Hooghly Agro Hub, West Bengal",
    capacity: "4.5 TPH Gentle Milling Line",
    scope: "Low-Thermal De-husking, Controlled Mist Polishing, Zero-Fracture Pneumatic Conveying",
    yieldGain: "< 0.8% Broken Grain Rate",
    description: "Custom-configured gentle milling line designed specifically for fragile aromatic Gobindobhog paddy. The installation features cold-air assisted de-husking and soft water mist polishing, preserving the natural fragrance and delicate elongated grain integrity.",
    equipment: [
      "Pneumatic Automated Husker CAT-HK-10P",
      "Dual Silky Mist Polisher CAT-MP-500",
      "Rotary Sizing Plane Sifter CAT-RG-160",
      "Ultra-Clean Optical Inspection Enclosure",
    ],
  },
  {
    id: "project-03",
    code: "CASE-03",
    title: "Modern Optical Sorting & Modernization Retrofit",
    type: "Existing Mill Technology Upgrade",
    location: "Birbhum Grain Industrial Zone",
    capacity: "8.0 TPH Retrofit Line",
    scope: "De-bottlenecking Existing Cleaning Circuit, Pre-Destoning Overhaul, 5-Chute Color Sorter Deployment",
    yieldGain: "99.98% Finished Grain Purity",
    description: "Brownfield retrofit replacing dated mechanical separators with Calcutta Agri Tech high-speed optical inspection and heavy gravity destoning. Increased mill operating uptime from 72% to 98% with zero unplanned shutdowns during peak harvest season.",
    equipment: [
      "Intelligent CCD Optical Sorter CAT-CS-540X",
      "Heavy-Duty Pre-Cleaner Drum Scalper",
      "Precision Negative Pressure Aspiration Filter",
    ],
  },
];
