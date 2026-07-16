export type SolutionProduct = {
  name: string;
  logo: string;
};

export type SolutionCategory = {
  category: string;
  icon: string;
  items: SolutionProduct[];
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Office & Institutional Supplies', href: '/services' },
      { label: 'Motor Vehicle Accessories & Spares', href: '/services' },
      { label: 'Specialised Supply Contracts', href: '/services' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Process', href: '/process' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact Us', href: '/contact' },
];

export type CoreService = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
  href: string;
};

export const services: CoreService[] = [
  {
    id: 'office-institutional',
    title: 'General Office & Institutional Supplies',
    description: 'Everyday office essentials and specialised institutional supplies — from stationery and IT equipment to PPE, uniforms, and cleaning materials.',
    features: [
      'General office stationery',
      'Computers, printers, and IT accessories',
      'Electrical and electronic items',
      'Safety gears and personal protective equipment (PPE)',
      'Company and institutional uniforms',
      'Supply and delivery of cleaning detergents and materials',
    ],
    image: '/service-procurement.jpg',
    icon: 'Package',
    href: '/services',
  },
  {
    id: 'motor-vehicle',
    title: 'Motor Vehicle Accessories & Spares',
    description: 'Reliable sourcing and delivery of motor vehicle batteries, tyres, spare parts, and general accessories for fleets and individual clients.',
    features: [
      'Motor vehicle batteries',
      'Tyres',
      'Spare parts',
      'General motor vehicle accessories',
    ],
    image: '/hero-kenya-trucks.jpg',
    icon: 'Car',
    href: '/services',
  },
  {
    id: 'specialised-contracts',
    title: 'Specialised Supply Contracts',
    description: 'Tailored supply and delivery contracts for parastatals, private companies, and government institutions — with bulk and framework agreements.',
    features: [
      'Tailored supply and delivery contracts',
      'Parastatal and government institution supply',
      'Private company framework agreements',
      'Bulk and framework supply agreements',
      'Timely delivery and dependable after-sales support',
    ],
    image: '/service-contract-supply.jpg',
    icon: 'FileText',
    href: '/services',
  },
];

export const additionalServices: CoreService[] = [];

export const mainServiceTaglines: Record<string, string> = {
  'office-institutional': 'Office & Institutional',
  'motor-vehicle': 'Vehicle Supplies',
  'specialised-contracts': 'Contract Supply',
};

export const additionalServiceTaglines: Record<string, string> = {};

export const whyChooseUs = [
  {
    title: 'Experienced Personnel',
    description: 'Experienced and highly qualified personnel who understand procurement, sourcing, and institutional supply requirements.',
    icon: 'Award',
  },
  {
    title: 'Beyond the Brief',
    description: 'A client-focused, "beyond the brief" approach to service — keeping customer satisfaction at the core of everything we do.',
    icon: 'Heart',
  },
  {
    title: 'One-Stop Supply',
    description: 'A wide range of products and services under one roof, from office essentials to motor vehicle spares and specialised contracts.',
    icon: 'Box',
  },
  {
    title: 'Timely Delivery',
    description: 'Timely delivery and dependable after-sales support — we deliver on our promises, on time, every time.',
    icon: 'Truck',
  },
  {
    title: 'Transparent Pricing',
    description: 'Competitive and transparent pricing with no hidden costs — the right products, at the right price.',
    icon: 'Sliders',
  },
];

export const stats = [
  { value: 30, suffix: '+', label: 'Organizations supplied' },
  { value: 100, suffix: '%', label: 'Repeat customers' },
  { value: 40, suffix: '+', label: 'Successful deliveries' },
  { value: 24, suffix: '/7', label: 'Support availability' },
  { value: 20, suffix: '+', label: 'Team members' },
  { value: 10, suffix: '+', label: 'Supply partners' },
];

export const partners = [
  'ICT Authority',
  'Microsoft',
  'Fortinet',
  'Veeam',
  'Cisco',
  'Odoo',
  'Check Point',
  'SeamlessHR',
  'Forcepoint',
  'Zecurion',
  'Xero',
  'Hewlett Packard Enterprise',
  'AWS',
  'Sage',
  'Huawei',
  'Zoho',
];

export const clients = [
  { name: 'AAR Hospital', industry: 'Healthcare', logo: '/src/assets/Client/AAR.png' },
  { name: '489 Solutions', industry: 'Technology', logo: '/src/assets/Client/489.png' },
  { name: 'BA StreetChild', industry: 'Nonprofit', logo: '/src/assets/Client/BA_StreetChild.png' },
  { name: 'DASA', industry: 'Logistics', logo: '/src/assets/Client/Dasa.png' },
  { name: 'Aone Kitchen', industry: 'Hospitality', logo: '/src/assets/Client/aonekitchen.png' },
  { name: 'BasiGo', industry: 'Technology', logo: '/src/assets/Client/basigo.png' },
  { name: 'Boliba Savings', industry: 'Financial Services', logo: '/src/assets/Client/bolibasavings.png' },
  { name: 'Boresha SACCO', industry: 'Financial Services', logo: '/src/assets/Client/boresha-sacco.png' },
  { name: 'Cake City', industry: 'Retail', logo: '/src/assets/Client/cakecity.png' },
  { name: 'Eldowas', industry: 'Utilities', logo: '/src/assets/Client/eldowas.png' },
  { name: 'Hazina SACCO', industry: 'Financial Services', logo: '/src/assets/Client/hazina-sacco.png' },
  { name: 'Larry Madowo', industry: 'Media', logo: '/src/assets/Client/larry.png' },
  { name: 'Mwalimu National', industry: 'Financial Services', logo: '/src/assets/Client/mwalimu-national.png' },
  { name: 'QONA', industry: 'Fintech', logo: '/src/assets/Client/qona.png' },
  { name: 'RBA', industry: 'Government', logo: '/src/assets/Client/retirement-benefits.png' },
  { name: 'Rolling Cargo', industry: 'Transportation', logo: '/src/assets/Client/rolling-cargo.png' },
  { name: 'Sheria SACCO', industry: 'Financial Services', logo: '/src/assets/Client/sheria-sacco.png' },
  { name: 'Sole Luna', industry: 'Hospitality', logo: '/src/assets/Client/sole_luna.png' },
  { name: 'Steel & Tube', industry: 'Manufacturing', logo: '/src/assets/Client/steelandtube.png' },
  { name: 'Tropekal Brands', industry: 'Consumer Goods', logo: '/src/assets/Client/tropical.png' },
  { name: 'VNS Group', industry: 'Professional Services', logo: '/src/assets/Client/vns_logo.png' },
  { name: 'YD Agency', industry: 'Creative', logo: '/src/assets/Client/yd-agency.png' },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'Tilanet supported our operations with reliable delivery and responsive service across Africa.',
    author: 'James Mwangi',
    title: 'Operations Manager',
    company: 'Bolba SACCO',
    rating: 5,
    message: 'Tilanet supported our operations with reliable delivery and responsive service across Africa.',
    name: 'James Mwangi - Operations Manager, Bolba SACCO',
  },
  {
    id: 'testimonial-2',
    quote: 'Working with Tilanet was seamless. They understood our requirements and delivered beyond expectations with professionalism.',
    author: 'Dr. Sarah Ochieng',
    title: 'Director of Procurement',
    company: 'AAR Hospital',
    rating: 5,
    message: 'Working with Tilanet was seamless. They understood our requirements and delivered beyond expectations with professionalism.',
    name: 'Dr. Sarah Ochieng - Director of Procurement, AAR Hospital',
  },
  {
    id: 'testimonial-3',
    quote: 'The team at Tilanet brings a rare combination of professionalism and deep understanding of the African business landscape. Truly a world-class partner.',
    author: 'Peter Kamau',
    title: 'Head of Supply Chain',
    company: 'Steel & Tube',
    rating: 5,
    message: 'The team at Tilanet brings a rare combination of professionalism and deep understanding of the African business landscape. Truly a world-class partner.',
    name: 'Peter Kamau - Head of Supply Chain, Steel & Tube',
  },
  {
    id: 'testimonial-4',
    quote: 'From RFQ to delivery, Tilanet kept us informed at every step. Their pricing was transparent and their lead times were accurate.',
    author: 'Grace Wanjiru',
    title: 'Finance Director',
    company: 'Hazina SACCO',
    rating: 5,
    message: 'From RFQ to delivery, Tilanet kept us informed at every step. Their pricing was transparent and their lead times were accurate.',
    name: 'Grace Wanjiru - Finance Director, Hazina SACCO',
  },
  {
    id: 'testimonial-5',
    quote: 'We rely on Tilanet for ICT hardware across multiple branches. Orders arrive on time, well-packaged, and exactly as specified.',
    author: 'David Otieno',
    title: 'IT Manager',
    company: 'ICT Authority',
    rating: 5,
    message: 'We rely on Tilanet for ICT hardware across multiple branches. Orders arrive on time, well-packaged, and exactly as specified.',
    name: 'David Otieno - IT Manager, ICT Authority',
  },
  {
    id: 'testimonial-6',
    quote: 'Tilanet handled our bulk office supply contract with consistency we had not found with other vendors. Reorders are effortless.',
    author: 'Amina Hassan',
    title: 'Administration Lead',
    company: 'Mwalimu National SACCO',
    rating: 5,
    message: 'Tilanet handled our bulk office supply contract with consistency we had not found with other vendors. Reorders are effortless.',
    name: 'Amina Hassan - Administration Lead, Mwalimu National SACCO',
  },
  {
    id: 'testimonial-7',
    quote: 'Their after-sales support is what sets them apart. When a warranty issue came up, Tilanet coordinated the replacement without us chasing anyone.',
    author: 'Michael Njoroge',
    title: 'Facilities Manager',
    company: 'Eldowas',
    rating: 5,
    message: 'Their after-sales support is what sets them apart. When a warranty issue came up, Tilanet coordinated the replacement without us chasing anyone.',
    name: 'Michael Njoroge - Facilities Manager, Eldowas',
  },
  {
    id: 'testimonial-8',
    quote: 'Tilanet delivered printers and networking gear to three counties on schedule. Proof of delivery and documentation were always complete.',
    author: 'Faith Akinyi',
    title: 'Project Coordinator',
    company: 'Retirement Benefits Authority',
    rating: 5,
    message: 'Tilanet delivered printers and networking gear to three counties on schedule. Proof of delivery and documentation were always complete.',
    name: 'Faith Akinyi - Project Coordinator, Retirement Benefits Authority',
  },
  {
    id: 'testimonial-9',
    quote: 'As a growing organization, we needed a supplier who could scale with us. Tilanet matched our pace and never compromised on quality.',
    author: 'Samuel Kiprop',
    title: 'CEO',
    company: 'Basigo',
    rating: 5,
    message: 'As a growing organization, we needed a supplier who could scale with us. Tilanet matched our pace and never compromised on quality.',
    name: 'Samuel Kiprop - CEO, Basigo',
  },
];

export const industries = [
  'Banking & Capital Markets',
  'Consumer Goods',
  'Professional Services',
  'Retail',
  'Manufacturing',
  'Telecommunications',
  'Agriculture',
  'Media & Entertainment',
  'Pharmaceuticals',
  'Insurance',
  'Education',
  'Travel & Transportation',
  'Automotive',
  'Healthcare',
  'Energy',
  'Nonprofit',
  'Government',
  'Real Estate',
];

/** Market share breakdown from Dynatrix business profile */
export const industryMarketShare = [
  { name: 'Manufacturing', value: 10, color: '#4472C4' },
  { name: 'Telecommunications', value: 6, color: '#A5A5A5' },
  { name: 'Agriculture', value: 5, color: '#E7A6BD' },
  { name: 'Forestry and Fishing', value: 3, color: '#843C0C' },
  { name: 'Media & Entertainment', value: 4, color: '#7030A0' },
  { name: 'Pharmaceuticals', value: 5, color: '#C00000' },
  { name: 'Insurance', value: 6, color: '#548235' },
  { name: 'Education', value: 5, color: '#801525' },
  { name: 'Travel & Transportation', value: 4, color: '#1F4E79' },
  { name: 'Automotive', value: 7, color: '#5B9BD5' },
  { name: 'Healthcare', value: 5, color: '#9BBB59' },
  { name: 'Energy', value: 6, color: '#7F7F7F' },
  { name: 'Nonprofit', value: 4, color: '#F4B183' },
  { name: 'Government', value: 5, color: '#BF8F00' },
  { name: 'Banking & Capital Markets', value: 9, color: '#9966FF' },
  { name: 'Consumer Goods', value: 6, color: '#FF5050' },
  { name: 'Professional Services', value: 7, color: '#00B050' },
  { name: 'Retail', value: 8, color: '#FFC000' },
];



export const processSteps = [
  {
    number: '01',
    title: 'Request',
    description: 'Share your requirements (items, quantities, locations, and timelines). We clarify specs and confirm what “done” looks like.',
    color: 'teal',
  },
  {
    number: '02',
    title: 'Source',
    description: 'We source from verified vendors, confirm availability and lead times, and share options with transparent pricing.',
    color: 'navy',
  },
  {
    number: '03',
    title: 'Fulfill',
    description: 'We coordinate purchasing, quality checks, and packaging—then schedule delivery to your requested sites.',
    color: 'orange',
  },
  {
    number: '04',
    title: 'Confirm',
    description: 'We provide proof of delivery and confirm everything meets your requirements. Any issues are resolved quickly.',
    color: 'teal',
  },
  {
    number: '05',
    title: 'Support',
    description: 'We handle warranty coordination, replacements, and reorders—so your supply stays consistent over time.',
    color: 'navy',
  },
];



export const coreValues = [
  {
    title: 'Integrity',
    description: 'We conduct our business honestly and transparently.',
    icon: 'Award',
  },
  {
    title: 'Quality',
    description: 'We deliver work that meets the highest standards.',
    icon: 'Star',
  },
  {
    title: 'Customer Focus',
    description: 'Client satisfaction is at the core of everything we do.',
    icon: 'Heart',
  },
  {
    title: 'Teamwork',
    description: 'We collaborate to achieve the best outcomes for our clients.',
    icon: 'Users',
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas to continually improve our services.',
    icon: 'Zap',
  },
  {
    title: 'Reliability',
    description: 'We deliver on our promises, on time, every time.',
    icon: 'CheckCircle',
  },
];

export const companyInfo = {
  name: 'Tila-Net Enterprises Limited',
  shortName: 'Tila-Net',
  tagline: 'The supplier you can always count on.',
  description: 'A duly registered general supply company in Kenya',
  about: 'Tila-Net Enterprises Limited is a duly registered company in Kenya, established to offer a comprehensive range of general supply products and services to individuals, private companies, parastatals, and government institutions. Our offering ranges from everyday office essentials to specialised technical and institutional supplies.',
  aboutExtended: 'We respond to the needs of a dynamic and growing modern economy by delivering high-calibre, customised supply solutions. Our aim is to be a leading general supplier in a highly competitive market, and in achieving this we are appreciated for that "beyond the brief" approach that gives us the credential of keeping customer satisfaction at the core of our company agenda.',
  goal: 'Our goal is to be the supplier our clients can always count on — sourcing the right products, at the right price, and delivering them on time, every time. We treat every order as a commitment, not just a transaction, and measure our success by how reliably we keep that commitment for individuals, businesses, and institutions alike.',
  vision: 'To be the most trusted general supplier in Kenya and the wider East African region, known for reliability, quality, and consistently putting our clients first.',
  mission: 'To be a dependable and efficient supply partner, providing quality products at fair prices without cutting corners. We work closely with each client to understand their needs, respond promptly, and build long-term relationships built on trust, consistency, and honest service.',
  founded: '2021',
  // address: 'Manga House, Ground Floor, Kiambere Road, Upperhill, Nairobi, Kenya',
  // phone: '+254 717 331504',
  email: 'info@tila-net.co.ke',
  website: 'tila-net.co.ke',
  hours: {
    weekday: 'Mon - Fri: 8:00am - 5:00pm',
    saturday: 'Saturday: 9:00am - 1:00pm',
    sunday: 'Sunday & Public Holidays: Closed',
  },
  social: {
    linkedin: 'https://linkedin.com/company/tilanet',
    twitter: 'https://twitter.com/tilanet',
    facebook: 'https://facebook.com/tilanet',
  },
};
