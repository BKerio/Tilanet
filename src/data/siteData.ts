

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
      { label: 'Procurement & Sourcing', href: '/services' },
      { label: 'ICT Hardware Supply', href: '/services' },
      { label: 'Logistics & Delivery', href: '/services' },
      { label: 'Contract & Bulk Supply', href: '/services' },
      { label: 'After‑Sales Support', href: '/services' },
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
    id: 'procurement-sourcing',
    title: 'Procurement & Sourcing',
    description: 'We source and supply essential products with clear pricing, verified vendors, and dependable fulfillment across your locations.',
    features: [
      'Request-for-quote (RFQ) support',
      'Verified supplier & brand sourcing',
      'Competitive pricing and lead times',
      'Purchase order coordination',
      'Quality checks and documentation',
      'Ongoing reorder support',
    ],
    image: '/service-procurement.jpg',
    icon: 'Truck',
    href: '/services',
  },
  {
    id: 'ict-supply',
    title: 'ICT Hardware & Accessories Supply',
    description: 'Procurement and delivery of computers, printers, networking gear, and essential ICT accessories for teams of every size.',
    features: [
      'Laptops, desktops, and monitors',
      'Printers and peripherals',
      'Networking equipment & cabling',
      'UPS, power protection, and spares',
      'Installation coordination (optional)',
    ],
    image: '/service-ict-supply.jpg',
    icon: 'Laptop',
    href: '/services',
  },
  {
    id: 'logistics-delivery',
    title: 'Logistics & Delivery',
    description: 'Reliable delivery coordination with transparent timelines—so your teams get what they need without delays.',
    features: [
      'Delivery scheduling across sites',
      'Last‑mile coordination',
      'Order status visibility',
      'Proof of delivery (POD)',
      'Returns and replacement handling',
    ],
    image: '/service-logistics.jpg',
    icon: 'Truck',
    href: '/services',
  },
  {
    id: 'contract-supply',
    title: 'Contract & Bulk Supply',
    description: 'Framework supply for organizations that need predictable pricing, recurring deliveries, and consistent product standards.',
    features: [
      'Recurring purchase schedules',
      'Standardized product lists',
      'Bulk order planning',
      'SLA-aligned fulfillment',
      'Usage-based replenishment support',
    ],
    image: '/service-contract-supply.jpg',
    icon: 'Settings',
    href: '/services',
  },
  {
    id: 'after-sales',
    title: 'After‑Sales Support',
    description: 'We stay accountable after delivery—supporting warranties, replacements, and vendor follow‑ups when issues arise.',
    features: [
      'Warranty & RMA coordination',
      'Vendor escalation support',
      'Product replacements (where applicable)',
      'Documentation and receipts',
      'Ongoing account support',
    ],
    image: '/service-after-sales.jpg',
    icon: 'Settings',
    href: '/services',
  },
  
];

export const additionalServices: CoreService[] = [];

export const mainServiceTaglines: Record<string, string> = {
  'procurement-sourcing': 'Sourcing & Pricing',
  'ict-supply': 'Equipment Supply',
  'logistics-delivery': 'On‑Time Delivery',
  'contract-supply': 'Recurring Supply',
  'after-sales': 'Warranty Support',
};

export const additionalServiceTaglines: Record<string, string> = {};

export const whyChooseUs = [
  {
    title: 'African Market Expertise',
    description: 'Deep understanding of unique challenges and opportunities across African markets, with decades of experience and industry best practice knowledge.',
    icon: 'Globe',
  },
  {
    title: 'Strategic Partnerships',
    description: 'We value strategic partnerships and work hard to build strong relationships based on trust, collaboration, and a shared commitment to success.',
    icon: 'Handshake',
  },
  {
    title: 'Scalability & Flexibility',
    description: 'Whether a small startup or large corporation, our services scale to fit your needs and adapt as you grow toward your organizational goals.',
    icon: 'TrendingUp',
  },
  {
    title: 'Customized Solutions',
    description: 'We work closely with clients to understand their business objectives and develop solutions that truly help them achieve those objectives.',
    icon: 'Settings',
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
  { name: 'Education', value: 5, color: '#F58220' },
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
    description: 'We uphold transparency, ethics, and accountability in all engagements with clients and partners.',
    icon: 'Award',
  },
  {
    title: 'Customer Centricity',
    description: 'We design solutions tailored to each client\'s specific business needs and long-term objectives.',
    icon: 'Heart',
  },
  {
    title: 'Innovation',
    description: 'We leverage emerging technologies to deliver forward-thinking solutions for complex business problems.',
    icon: 'Zap',
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering high-quality, reliable solutions that exceed client expectations.',
    icon: 'Star',
  },
  {
    title: 'Collaboration',
    description: 'We partner closely with clients to achieve impactful, sustainable outcomes that drive real growth.',
    icon: 'Users',
  },
];

export const companyInfo = {
  name: 'Tila-net Enterprises Limited',
  shortName: 'Tilanet',
  tagline: 'Reliable supply. On‑time delivery.',
  description: 'A supplier company serving organizations across Africa',
  vision: 'To be the preferred supplier partner across Africa, enabling organizations to source what they need reliably, efficiently, and at scale.',
  mission: 'To deliver dependable supply, responsive service, and consistent quality that helps our customers operate smoothly and grow with confidence.',
  founded: '2021',
  address: 'Manga House, Ground Floor, Kiambere Road, Upperhill, Nairobi, Kenya',
  phone: '+254 717 331504',
  email: 'info@moytailimited.co.ke',
  website: 'tilanet.co.ke',
  hours: {
    weekday: 'Mon - Fri: 8:00am - 5:30pm',
    saturday: 'Saturday: 9:00am - 1:00pm',
    sunday: 'Sunday & Public Holidays: Closed',
  },
  social: {
    linkedin: 'https://linkedin.com/company/tilanet',
    twitter: 'https://twitter.com/tilanet',
    facebook: 'https://facebook.com/tilanet',
  },
};
