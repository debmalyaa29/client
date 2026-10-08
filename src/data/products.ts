export interface Product {
  id: string;
  name: string;
  modelCode: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  threeDType: "destoner" | "sortex" | "husker" | "whitener";
}

export const productsData: Product[] = [
  {
    id: "destoner",
    name: "Precision Gravity Destoner",
    modelCode: "CAT-DS-1200",
    category: "Grain Cleaning & Separation",
    tagline: "High-volume specific gravity stone separation with dual aspiration",
    description: "Engineered for high-throughput separation of heavy foreign impurities—specifically stones, glass, metal fragments, and mud balls—from paddy and brown rice using synchronized vibration and negative pressure aspiration.",
    image: "/images/distoner.png",
    specs: [
      { label: "Capacity (Paddy)", value: "4.0 – 8.0 TPH" },
      { label: "Separation Efficiency", value: "≥ 99.8%" },
      { label: "Motor Power", value: "2.2 kW + 1.5 kW" },
      { label: "Air Requirement", value: "4,500 – 6,000 m³/h" },
      { label: "Screen Angle", value: "Adjustable 7° – 12°" },
    ],
    features: [
      "Precision twin eccentric counterbalanced vibratory drive",
      "Double-deck multi-perforated stainless steel woven sieve",
      "Transparent illuminated aspiration viewing window",
      "Micro-differential pressure air regulator valve",
    ],
    threeDType: "destoner",
  },
  {
    id: "sortex",
    name: "Intelligent Optical CCD Color Sorter",
    modelCode: "CAT-CS-540X",
    category: "Optical Inspection & Grading",
    tagline: "Multi-spectral 5400-pixel RGB optical sorting with microsecond ejection",
    description: "High-precision color sorting platform equipped with industrial CCD high-definition optical lenses and ultra-fast pneumatic magnetic ejectors. Eliminates chalky grains, discolored black points, glass, yellow kernels, and microscopic defects with zero grain damage.",
    image: "/images/sortex.png",
    specs: [
      { label: "Capacity (Polished)", value: "3.5 – 7.0 TPH" },
      { label: "Optical Accuracy", value: "≥ 99.99%" },
      { label: "Sensor Resolution", value: "5400 px Tri-chromatic CCD" },
      { label: "Ejector Life", value: "1.2 Billion Cycles" },
      { label: "Chute Configuration", value: "4 to 7 High-Speed Anodized Chutes" },
    ],
    features: [
      "Custom FPGA high-throughput image processing algorithm",
      "Independent cloud-connected AI shape and defect recognition",
      "Dust-sealed optical enclosure with automatic scraper cleaning",
      "Ultra-low air consumption precision solenoid valves",
    ],
    threeDType: "sortex",
  },
  {
    id: "husker",
    name: "Heavy-Duty Pneumatic Paddy Husker",
    modelCode: "CAT-HK-10P",
    category: "De-husking & Shelling",
    tagline: "Continuous automated roll tensioning with minimal grain breakage",
    description: "Industrial rubber-roll husker equipped with automated pneumatic cylinder pressure control. Automatically engages rubber rolls upon paddy detection and disengages when feed halts, preventing roll burn and optimizing husking efficiency up to 92% on first pass.",
    image: "/images/distoner.png", // fallback image
    specs: [
      { label: "Capacity (Paddy)", value: "5.0 – 10.0 TPH" },
      { label: "Husking Ratio", value: "88% – 93% First Pass" },
      { label: "Broken Ratio Increase", value: "≤ 1.2%" },
      { label: "Roll Specification", value: '10" × 10" High-Durability Rubber' },
      { label: "Drive System", value: "Synchronous Toothed Timing Belt" },
    ],
    features: [
      "Automatic pneumatic sensor roll engagement/disengagement",
      "Low temperature rise rubber roll ventilation design",
      "High-efficiency integral husk aspiration chamber",
      "Digital feed gate micrometric flow controller",
    ],
    threeDType: "husker",
  },
  {
    id: "whitener",
    name: "Vertical Abrasive Rice Whitener",
    modelCode: "CAT-RW-800",
    category: "Bran Removal & Whitening",
    tagline: "Uniform multi-stage friction milling with controlled thermal rise",
    description: "Designed for gentle, high-yield bran removal from brown rice. The vertical shaft layout utilizes gravitational flow coupled with negative-pressure air injection through the main shaft, cooling the milling chamber and ejecting bran powder instantaneously.",
    image: "/images/sortex.png", // fallback image
    specs: [
      { label: "Capacity (Milled Rice)", value: "4.0 – 8.0 TPH" },
      { label: "Bran Extraction Rate", value: "8% – 11% Adjustable" },
      { label: "Chamber Pressure", value: "Negative Air Injected Shaft" },
      { label: "Power Requirement", value: "37 kW – 45 kW" },
      { label: "Milling Cylinder", value: "Carborundum & Emery Stone Segments" },
    ],
    features: [
      "Hollow main shaft negative pressure high-volume air blowing",
      "Independent micro-adjustable resistance weighting device",
      "Quick-change modular sieve frame design",
      "Low temperature milling preventing kernel fissure",
    ],
    threeDType: "whitener",
  },
  {
    id: "polisher",
    name: "Silky Water Mist Rice Polisher",
    modelCode: "CAT-MP-500",
    category: "Polishing & Glazing",
    tagline: "Atomized micro-mist polishing for radiant high-gloss shelf life",
    description: "High-grade water mist polishing unit that atomizes clean water into sub-micron mist particles. Coats each kernel surface with a silky protective luster, removes residual bran dust, and preserves grain freshness during extended storage.",
    image: "/images/distoner.png",
    specs: [
      { label: "Capacity (Rice)", value: "3.0 – 6.0 TPH" },
      { label: "Water Consumption", value: "10 – 25 L/h (Atomized)" },
      { label: "Grain Temperature Rise", value: "≤ 3°C" },
      { label: "Polishing Roller", value: "Multi-Facet Stainless Steel Mirrored" },
      { label: "Air Aspiration", value: "Integrated Bran Separation Fan" },
    ],
    features: [
      "Automatic thermostatic water heating and atomizing nozzle",
      "Stainless steel slotted screen for ultra-long lifespan",
      "Zero bran powder residue on polished grains",
      "Touchscreen water-to-grain proportion automation",
    ],
    threeDType: "whitener",
  },
  {
    id: "grader",
    name: "Rotary Multi-Deck Head Rice Grader",
    modelCode: "CAT-RG-160",
    category: "Grading & Sizing",
    tagline: "High-precision rotary plane sifting for broken grain classification",
    description: "Rotary plane classification sifter utilizing balanced circular motion. Accurately segregates head rice, large brokens, medium brokens, and rice tips through four customizable sieve layers with self-cleaning bouncing balls.",
    image: "/images/sortex.png",
    specs: [
      { label: "Capacity", value: "4.0 – 7.5 TPH" },
      { label: "Grading Grades", value: "4 Distinct Classifications" },
      { label: "Head Rice Purity", value: "≥ 99.2%" },
      { label: "Sieve Cleaning", value: "High-Resilience Food-Grade Rubber Balls" },
      { label: "Motor", value: "1.5 kW Balanced Counterweight" },
    ],
    features: [
      "Dynamic balancing for ultra-quiet vibration-free operation",
      "Totally enclosed dust-tight wooden/metal sieve cases",
      "Quick clamp sieve exchange mechanism",
      "Configurable discharge outlets for all commercial packaging lines",
    ],
    threeDType: "destoner",
  },
];
