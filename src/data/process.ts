export interface MillingStep {
  stepNumber: string;
  id: string;
  title: string;
  machine: string;
  inputGrain: string;
  outputGrain: string;
  description: string;
  keyMetric: string;
  metricLabel: string;
}

export const millingStepsData: MillingStep[] = [
  {
    stepNumber: "01",
    id: "paddy",
    title: "Raw Paddy Infeed",
    machine: "Intake Elevator & Pre-Cleaner Drum",
    inputGrain: "Harvested Field Paddy (14% - 18% Moisture)",
    outputGrain: "Homogenized Flow Paddy",
    description: "Harvested raw paddy is delivered into heavy-duty dump hoppers. A slow-speed bucket elevator transfers the grain through magnetic separators and scalper screens to remove straw, twine, and oversized field debris.",
    keyMetric: "100%",
    metricLabel: "Initial Harvest Bulk",
  },
  {
    stepNumber: "02",
    id: "cleaning",
    title: "High-Efficiency De-stoning",
    machine: "Gravity Destoner CAT-DS-1200",
    inputGrain: "Pre-Cleaned Raw Paddy with Impurities",
    outputGrain: "Pure De-stoned Paddy",
    description: "Multi-deck inclined vibrating screens fluidize the grain bed via negative aspiration. High-density stones, gravel, and metal sink to the deck surface and discharge upward, while light paddy floats downward.",
    keyMetric: "99.8%",
    metricLabel: "Inorganic Matter Removal",
  },
  {
    stepNumber: "03",
    id: "husking",
    title: "Pneumatic De-husking",
    machine: "Pneumatic Rubber Roll Husker",
    inputGrain: "Cleaned Dry Paddy Kernels",
    outputGrain: "Brown Rice + Husk By-Product",
    description: "Paddy passes through counter-rotating differential rubber rollers under precise pneumatic cylinder pressure. The shear friction cracks and strips the outer husk, followed by pneumatic aspiration separating husk from brown rice.",
    keyMetric: "90% - 93%",
    metricLabel: "Single-Pass Shelling Efficiency",
  },
  {
    stepNumber: "04",
    id: "separation",
    title: "Paddy & Brown Rice Separation",
    machine: "Multi-Tray Gravity Paddy Separator",
    inputGrain: "Mixed Brown Rice and Unhusked Kernels",
    outputGrain: "100% Pure Brown Rice Stream",
    description: "Leveraging subtle differences in specific gravity, elasticity, and surface friction, stainless steel zig-zag trays isolate unhusked paddy and route it back to the husker while pure brown rice advances forward.",
    keyMetric: "100%",
    metricLabel: "Brown Rice Separation Purity",
  },
  {
    stepNumber: "05",
    id: "whitening",
    title: "Vertical Abrasive Whitening",
    machine: "Multi-Pass Vertical Whitener CAT-RW-800",
    inputGrain: "Pure Brown Rice Kernels",
    outputGrain: "White Milled Rice + Nutritional Bran",
    description: "Brown rice flows vertically through carborundum emery stones. Counter-directed air blowing cools the grain and evacuates the nutrient-rich bran layer cleanly with minimum kernel cracking.",
    keyMetric: "< 1.5%",
    metricLabel: "Breakage Rate During Milling",
  },
  {
    stepNumber: "06",
    id: "polishing",
    title: "Silky Water Mist Polishing",
    machine: "Silky Mist Polisher CAT-MP-500",
    inputGrain: "Milled White Rice with Residual Dust",
    outputGrain: "Crystal Translucent Glazed Rice",
    description: "Atomized sub-micron water mist is injected into the polishing cylinder. Friction rollers gently glaze the starch outer surface, giving the rice a lustrous finish, extended storage shelf life, and zero dust residue.",
    keyMetric: "+40%",
    metricLabel: "Shelf-Life Stability Gain",
  },
  {
    stepNumber: "07",
    id: "grading",
    title: "Multi-Deck Rotary Sizing",
    machine: "Rotary Head Rice Grader CAT-RG-160",
    inputGrain: "Polished Mixed Head & Broken Rice",
    outputGrain: "Classified Head Rice, Brokens, & Tips",
    description: "High-precision rotary plane sifters separate head rice (whole grain), large brokens, small brokens, and rice points across four calibrated screen decks with self-cleaning food-grade rubber balls.",
    keyMetric: "99.2%",
    metricLabel: "Head Rice Purity Index",
  },
  {
    stepNumber: "08",
    id: "sorting",
    title: "AI Optical CCD Color Sorting",
    machine: "Optical CCD Color Sorter CAT-CS-540X",
    inputGrain: "Uniformly Graded Head Rice",
    outputGrain: "Export-Grade Flawless Finished Rice",
    description: "High-speed vibratory chutes channel grains in single-file cascades past dual-view 5400-pixel RGB cameras. Ultra-fast magnetic ejector nozzles blast away chalky grains, discolored black spots, and foreign flecks in milliseconds.",
    keyMetric: "99.99%",
    metricLabel: "Final Export Quality Purity",
  },
];
