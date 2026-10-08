export interface BusinessConfig {
  name: string;
  tagline: string;
  subheadline: string;
  founder: {
    name: string;
    role: string;
    photo: string;
    bio: string;
    quote: string;
  };
  contact: {
    address: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    email: string;
    phone: string;
    whatsapp: string;
    workingHours: string;
  };
  stats: {
    label: string;
    value: string;
    unit?: string;
  }[];
}

export const businessData: BusinessConfig = {
  name: "Calcutta Agri Tech",
  tagline: "Engineering the Future of Rice Milling",
  subheadline: "Precision grain processing machinery, high-yield optical sorting, and turnkey industrial rice mill solutions.",
  founder: {
    name: "Debabrata Dey",
    role: "Founder & Chief Industrial Engineer",
    photo: "/images/founder_pic.png",
    bio: "With over two decades of hands-on industrial expertise, Debabrata Dey has spearheaded the modernization of rice milling infrastructure across Eastern India. His engineering philosophy centers on maximizing whole-grain recovery, optimizing thermal and electrical efficiency, and delivering zero-compromise machinery reliability.",
    quote: "True industrial capability isn't just about moving steel. It is about understanding the physics of every single grain of paddy and engineering machines that preserve its value.",
  },
  contact: {
    address: "Sodepur, B.T. Road Industrial Corridor",
    city: "Kolkata",
    pincode: "700113",
    state: "West Bengal",
    country: "India",
    email: "inquiries@calcuttaagritech.com",
    phone: "+91 98301 23456",
    whatsapp: "+919830123456",
    workingHours: "Monday – Saturday: 09:30 AM – 07:00 PM IST",
  },
  stats: [
    { label: "Turnkey Plant Capacity", value: "2 – 20", unit: "TPH" },
    { label: "Grain Recovery Index", value: "99.4%", unit: "Yield" },
    { label: "Engineering Heritage", value: "20+", unit: "Years" },
    { label: "Field Service Response", value: "< 24", unit: "Hours" },
  ],
};
