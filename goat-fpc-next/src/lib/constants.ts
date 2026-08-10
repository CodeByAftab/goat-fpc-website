export const SITE_CONFIG = {
  name: "Goat Agri Farmer Producer Company Limited",
  shortName: "Goat Agri FPC",
  registrationNo: "U01441CT2026PTC019871",
  cin: "U01441CT2026PTC019871",
  description:
    "A Government of Chhattisgarh initiative under the Farmer Producer Organisation scheme, dedicated to sustainable goat farming and farmer welfare.",
  url: "https://goatfpc.in",
  email: "info@goatagri.in",
  phone: "+91 12345 67890",
  tollFree: "1800-XXX-XXXX",
  address: {
    street: "Raipur, Chhattisgarh",
    city: "Raipur",
    state: "Chhattisgarh",
    pincode: "492001",
    country: "India",
  },
  social: {
    facebook: "https://facebook.com/goatagri",
    instagram: "https://instagram.com/goatagri",
    youtube: "https://youtube.com/goatagri",
    whatsapp: "https://wa.me/911234567890",
    linkedin: "https://linkedin.com/company/goatagri",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/gallery", label: "Gallery & News" },
  { href: "/contact", label: "Contact" },
];

export const STATS = [
  { value: "120+", label: "Registered Shareholders" },
  { value: "1,500+", label: "Associated Farmers" },
  { value: "30,000+", label: "Goats in Network" },
  { value: "Raipur", label: "Chhattisgarh, India" },
];

export const IMPACT_STATS = [
  { value: "120+", label: "Registered Shareholders", icon: "Users" },
  { value: "1,500+", label: "Associated Farmers", icon: "Users" },
  { value: "30,000+", label: "Goats in Network", icon: "Goat" },
  { value: "3", label: "Manure Processing Units", icon: "Leaf" },
  { value: "20 Tonnes", label: "Organic Manure Produced", icon: "Package" },
];

export const SERVICES = [
  {
    title: "Integrated Goat Farming",
    description: "Scientific and sustainable goat farming practices under government guidelines.",
    icon: "Farm",
  },
  {
    title: "Breed Improvement",
    description: "Quality breed supply and genetic enhancement programme.",
    icon: "Dna",
  },
  {
    title: "Veterinary & Vaccination",
    description: "Comprehensive health care and vaccination services for livestock.",
    icon: "Stethoscope",
  },
  {
    title: "Training & Capacity Building",
    description: "Skill development programmes for farmer empowerment.",
    icon: "GraduationCap",
  },
  {
    title: "Value Addition & Processing",
    description: "Goat manure processing and value addition services.",
    icon: "Recycle",
  },
  {
    title: "Ajah Fi Initiative",
    description: "Digital insurance and farmer welfare services.",
    icon: "Shield",
  },
];

export const NEWS = [
  {
    id: 1,
    title: "Training Programme for Goat Farmers",
    description:
      "A comprehensive training programme on integrated goat farming was conducted for 50 farmers under the FPO scheme.",
    date: "02 Aug 2026",
    image: "/images/news/news1.jpg",
  },
  {
    id: 2,
    title: "Vaccination Drive Completed Successfully",
    description:
      "Successfully vaccinated over 5,000 goats across Raipur and nearby blocks under the animal husbandry programme.",
    date: "26 Jul 2026",
    image: "/images/news/news2.jpg",
  },
  {
    id: 3,
    title: "Organic Manure Production Milestone",
    description:
      "Achieved the milestone of 20 tonnes of processed organic manure production.",
    date: "20 Jul 2026",
    image: "/images/news/news3.jpg",
  },
];

export const GALLERY_IMAGES = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/gallery/gallery${i + 1}.jpg`,
  alt: [
    "Goat herd grazing",
    "Goat farming activities",
    "Goats in the field",
    "Goat rearing",
    "Goat kids",
    "Young goats",
    "Goat farming in India",
    "Integrated goat farming",
  ][i],
}));

export const ORG_PROFILE = {
  name: "Goat Agri Farmer Producer Company Limited",
  registrationNo: "U01441CT2026PTC019871",
  dateOfIncorporation: "05-03-2026",
  registeredOffice: "Raipur, Chhattisgarh, India",
  shareholders: "120",
  associatedFarmers: "1,500+",
  goatsInNetwork: "30,000+",
};

export const VISION =
  "To establish a sustainable and profitable goat farming ecosystem that empowers farmers across Chhattisgarh through collective action, scientific practices, and market linkages.";

export const MISSION = [
  "Promote integrated and sustainable goat farming practices as per government guidelines.",
  "Provide quality breed, veterinary care and technical support to farmers.",
  "Strengthen farmer capacity through training and capacity building programmes.",
  "Ensure better market linkages and value addition for enhanced farmer income.",
  "Leverage technology for efficient and transparent operations.",
];

export const ORG_STRUCTURE = {
  board: "Board of Directors",
  managers: [
    "Chief Executive Officer (CEO)",
    "Operations Manager",
    "Finance & Accounts Manager",
    "Marketing & Business Development Manager",
    "Training & Capacity Building Manager",
  ],
  teams: [
    "Farmer Mobilization Team",
    "Veterinary & Field Support Team",
    "Data Management Team",
    "Value Addition & Processing Team",
    "Admin & HR Team",
  ],
};

export const DETAILED_SERVICES = [
  {
    id: "farming",
    title: "INTEGRATED FARMING",
    description: "Scientific Farming Model",
    features: [
      "Integrated Farming Model",
      "Feed & Fodder Management",
      "Farm Planning Support",
      "Productivity Improvement",
    ],
    image: "/images/services/farming.jpg",
  },
  {
    id: "breeding",
    title: "BREED IMPROVEMENT",
    description: "Quality Breed Programme",
    features: [
      "Breed Improvement Programme",
      "Quality Breeding Support",
      "Healthy Breeding Stock",
      "Genetic Enhancement",
    ],
    image: "/images/services/breeding.jpg",
  },
  {
    id: "vaccination",
    title: "VETERINARY CARE",
    description: "Health & Vaccination Services",
    features: [
      "Regular Vaccination Drives",
      "Deworming & Treatment",
      "Disease Prevention",
      "Health Check-up Camps",
    ],
    image: "/images/services/vaccination.jpg",
  },
  {
    id: "training",
    title: "CAPACITY BUILDING",
    description: "Training & Skill Development",
    features: [
      "On-Farm Training Programmes",
      "Skill Development Workshops",
      "Best Practice Sharing",
      "Exposure Visits",
    ],
    image: "/images/services/training.jpg",
  },
  {
    id: "ajah-fi",
    title: "AJAH FI",
    description: "Digital Insurance Services",
    features: [
      "Affordable Insurance Plans",
      "Easy Claim Process",
      "Digital Policy Management",
      "Farmer Security Coverage",
    ],
    image: "/images/services/ajah-fi.jpg",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Farmer First Approach",
    description: "Every initiative is designed with farmers' welfare at the core.",
    icon: "Heart",
  },
  {
    title: "Expert Guidance",
    description: "Backed by experienced professionals and veterinary experts.",
    icon: "Award",
  },
  {
    title: "Proven Track Record",
    description:
      "Trusted by 1,500+ farmers across Chhattisgarh.",
    icon: "CheckCircle",
  },
  {
    title: "Sustainable Development",
    description: "Building a sustainable goat farming ecosystem for future generations.",
    icon: "TrendingUp",
  },
  {
    title: "End-to-End Support",
    description:
      "From farm to market – complete support at every stage.",
    icon: "Handshake",
  },
];

export const MEMBERSHIP_BENEFITS = [
  {
    title: "Enhanced Income",
    description:
      "Access to market linkages and value addition opportunities.",
    icon: "Wallet",
  },
  {
    title: "Expert Support",
    description:
      "Training, veterinary care and technical guidance from experts.",
    icon: "HeartPulse",
  },
  {
    title: "Quality Resources",
    description:
      "Access to quality breeds, feeds, medicines and inputs.",
    icon: "Check",
  },
  {
    title: "Insurance Coverage",
    description: "Ajah Fi digital insurance coverage for your goats.",
    icon: "Umbrella",
  },
  {
    title: "Collective Bargaining",
    description:
      "Stronger bargaining power through collective action.",
    icon: "Users",
  },
  {
    title: "Skill Development",
    description: "Regular training and capacity building programmes.",
    icon: "BarChart",
  },
];

export const ELIGIBILITY_CRITERIA = [
  "Resident of Raipur district or nearby blocks, Chhattisgarh.",
  "Individual small or marginal farmer or goat rearer.",
  "Minimum 5 goats (or as per company norms).",
  "Willingness to follow company guidelines and participate in activities.",
  "Submission of required documents (Aadhaar, Address Proof, Goat Ownership Proof).",
];

export const MEMBERSHIP_PROCESS = [
  {
    step: 1,
    title: "Online Application",
    description: "Submit online application form.",
    icon: "ClipboardList",
  },
  {
    step: 2,
    title: "Document Verification",
    description: "Submit and verify required documents.",
    icon: "FileCheck",
  },
  {
    step: 3,
    title: "Committee Review",
    description: "Application reviewed by the committee.",
    icon: "Users",
  },
  {
    step: 4,
    title: "Fee Payment",
    description: "Pay the annual membership fee.",
    icon: "IndianRupee",
  },
  {
    step: 5,
    title: "Membership Granted",
    description: "Receive membership confirmation.",
    icon: "Handshake",
  },
  {
    step: 6,
    title: "Access Benefits",
    description: "Start availing all membership benefits.",
    icon: "PartyPopper",
  },
];

export const MEMBERSHIP_FEES = {
  individual: { amount: 1000, period: "Year" },
  group: { amount: 500, period: "Year" },
};

export const GALLERY_TABS = ["Photos", "Videos", "Articles", "Events", "Stories"];

export const VIDEOS = [
  {
    title: "Integrated Goat Farming Programme",
    description: "Overview of our integrated farming model.",
    thumbnail: "/images/gallery/gallery1.jpg",
    duration: "2:45",
  },
  {
    title: "Farmer Training Highlights",
    description: "Highlights from recent training programme.",
    thumbnail: "/images/gallery/gallery3.jpg",
    duration: "3:12",
  },
  {
    title: "Vaccination Drive Coverage",
    description: "Documentation of vaccination drive.",
    thumbnail: "/images/gallery/gallery7.jpg",
    duration: "2:08",
  },
  {
    title: "Organic Manure Processing",
    description: "See our manure processing facility.",
    thumbnail: "/images/gallery/gallery2.jpg",
    duration: "2:56",
  },
];

export const ARTICLES = [
  {
    title: "Benefits of Integrated Goat Farming",
    date: "02 Aug 2026",
    description: "Understanding the advantages of integrated goat farming.",
    image: "/images/news/news1.jpg",
  },
  {
    title: "Breed Improvement Programme Results",
    date: "28 Jul 2026",
    description: "Impact of breed improvement on productivity.",
    image: "/images/news/news2.jpg",
  },
  {
    title: "Nutrition Management Guidelines",
    date: "15 Jul 2026",
    description: "Essential nutrition guidelines for goat farmers.",
    image: "/images/news/news3.jpg",
  },
];

export const EVENTS = [
  {
    date: { day: "20", month: "AUG" },
    title: "Farmer Training Programme",
    location: "Raipur, Chhattisgarh",
    time: "10:00 AM - 04:00 PM",
  },
  {
    date: { day: "05", month: "SEP" },
    title: "Vaccination Awareness Camp",
    location: "Dhamtari, Chhattisgarh",
    time: "09:00 AM - 01:00 PM",
  },
  {
    date: { day: "18", month: "SEP" },
    title: "Annual General Meeting",
    location: "Raipur, Chhattisgarh",
    time: "11:00 AM - 05:00 PM",
  },
];

export const SUCCESS_STORIES = [
  {
    name: "Shri Suresh Verma",
    role: "Farmer",
    location: "Raipur, Chhattisgarh",
    quote:
      "Joining Goat Agri FPC has transformed my farming. The training and support have helped me double my income.",
    avatar: "/images/testimonials/1.jpg",
  },
  {
    name: "Smt. Laxmi Bai",
    role: "Farmer",
    location: "Dhamtari, Chhattisgarh",
    quote:
      "The veterinary support and quality breeds have made a significant difference in my goat herd.",
    avatar: "/images/testimonials/2.jpg",
  },
  {
    name: "Shri Mohan Sahu",
    role: "Farmer",
    location: "Baloda Bazar, Chhattisgarh",
    quote:
      "The collective strength of the FPC has provided us with better market prices.",
    avatar: "/images/testimonials/3.jpg",
  },
];

export const CONTACT_INFO = [
  {
    title: "Registered Office",
    icon: "MapPin",
    details: [
      "Goat Agri Farmer Producer Company Limited",
      "Raipur, Chhattisgarh, India",
      "PIN – 492001",
    ],
  },
  {
    title: "Contact Number",
    icon: "Phone",
    details: ["+91 12345 67890", "Toll Free: 1800-XXX-XXXX"],
  },
  {
    title: "Email Address",
    icon: "Mail",
    details: ["info@goatagri.in", "support@goatagri.in"],
  },
  {
    title: "Office Hours",
    icon: "Clock",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export const SOCIAL_LINKS = [
  { name: "Facebook", icon: "Facebook", color: "#1877F2" },
  { name: "Instagram", icon: "Instagram", color: "#E4405F" },
  { name: "YouTube", icon: "Youtube", color: "#FF0000" },
  { name: "WhatsApp", icon: "MessageCircle", color: "#25D366" },
  { name: "LinkedIn", icon: "Linkedin", color: "#0A66C2" },
];
