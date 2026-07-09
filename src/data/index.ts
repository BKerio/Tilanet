// src/data/index.ts
import { Cpu, Shield, WifiIcon, Code, RouterIcon } from "lucide-react";

// ── Hero images: use public folder (no static import needed) ──────────────────
const HeroImage1 = "/hero-fold.jpg";
const HeroImage2 = "/service-digital.jpg";
const HeroImage3 = "/service-consulting.jpg";
const HeroImage4 = "/service-cloud.jpg";
const HeroImage5 = "/service-security.jpg";

// ── Featured project images ───────────────────────────────────────────────────
const FeaturedImage1 = "/service-consulting.jpg";
const FeaturedImage2 = "/service-security.jpg";
const FeaturedImage3 = "/service-digital.jpg";

// ── Partner logos (src/assets/Partner/) ──────────────────────────────────────
import PartnerAWS           from "@/assets/Partner/aws.svg";
import PartnerCheckPoint    from "@/assets/Partner/checkpoint.svg";
import PartnerCisco         from "@/assets/Partner/cisco.svg";
import PartnerEazzyRent     from "@/assets/Partner/eazzyrent.svg";
import PartnerForcepoint    from "@/assets/Partner/forcepoint.svg";
import PartnerFortinet      from "@/assets/Partner/fortinet.svg";
import PartnerHuawei        from "@/assets/Partner/huawei.svg";
import PartnerWingubox      from "@/assets/Partner/wingubox.svg";
import PartnerXero          from "@/assets/Partner/xero.svg";
import PartnerZoho          from "@/assets/Partner/zoho.svg";
import PartnerEboard        from "@/assets/Partner/eboard.png";
import PartnerMicrosoft365  from "@/assets/Partner/microsoft365.png";
import PartnerOdoo          from "@/assets/Partner/odoo.png";
import PartnerSageIntacct   from "@/assets/Partner/sage-intacct.png";
import PartnerSeamlessHR    from "@/assets/Partner/SeamlessHR.png";

// ── Client logos (src/assets/Client/) ────────────────────────────────────────
import Client489         from "@/assets/Client/489.png";
import ClientAoneKitchen from "@/assets/Client/aonekitchen.png";
import ClientBAStreet    from "@/assets/Client/BA_StreetChild.png";
import ClientDasa        from "@/assets/Client/Dasa.png";
import ClientEldowas     from "@/assets/Client/eldowas.png";
import ClientLarry       from "@/assets/Client/larry.png";
import ClientSoleLuna    from "@/assets/Client/sole_luna.png";
import ClientVns         from "@/assets/Client/vns_logo.png";

// ── Product logos (src/assets/Products/) ─────────────────────────────────────
import ProductDarajaAPI          from "@/assets/Products/darajaAPI.png";
import ProductDynamic365         from "@/assets/Products/dynamic365.png";
import ProductEboard             from "@/assets/Products/eboard.png";
import ProductEtims              from "@/assets/Products/etims.png";
import ProductMicrosoft365       from "@/assets/Products/microsoft365.png";
import ProductMicrosoftDynamic365 from "@/assets/Products/microsoftDynamic365.png";
import ProductOdoo               from "@/assets/Products/odoo.png";
import ProductSageIntacct        from "@/assets/Products/sage-intacct.png";
import ProductSeamlessHR         from "@/assets/Products/SeamlessHR.png";
import ProductTicketing          from "@/assets/Products/ticketing.png";
import ProductWhatsappBot        from "@/assets/Products/whatsapp-bot.png";

// ── Inline SVG placeholder for testimonial logos ──────────────────────────────
const testimonialPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' rx='8' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='28' fill='%239ca3af'%3E✦%3C/text%3E%3C/svg%3E";

// Ecosystem logo placeholders (used in ecosystemCompanies)
const SignVrseLogo        = testimonialPlaceholder;
const PrecisionDronesLogo = testimonialPlaceholder;

// =============================================================================
// PARTNERS LIST
// =============================================================================
export const partnersList = [
  { id: 1,  name: "Microsoft",   logo: PartnerMicrosoft365 },
  { id: 2,  name: "AWS",         logo: PartnerAWS },
  { id: 3,  name: "Cisco",       logo: PartnerCisco },
  { id: 4,  name: "Fortinet",    logo: PartnerFortinet },
  { id: 5,  name: "Huawei",      logo: PartnerHuawei },
  { id: 6,  name: "Check Point", logo: PartnerCheckPoint },
  { id: 7,  name: "Odoo",        logo: PartnerOdoo },
  { id: 8,  name: "Sage Intacct",logo: PartnerSageIntacct },
  { id: 9,  name: "SeamlessHR",  logo: PartnerSeamlessHR },
  { id: 10, name: "eBoard",      logo: PartnerEboard },
  { id: 11, name: "Zoho",        logo: PartnerZoho },
  { id: 12, name: "Xero",        logo: PartnerXero },
  { id: 13, name: "Forcepoint",  logo: PartnerForcepoint },
  { id: 14, name: "EazzyRent",   logo: PartnerEazzyRent },
  { id: 15, name: "Wingubox",    logo: PartnerWingubox },
];

// =============================================================================
// CLIENTS LIST
// =============================================================================
export const clientsList = [
  { id: 1, name: "489 Productions",  logo: Client489,         industry: "Media & Entertainment" },
  { id: 2, name: "Aone Kitchen",     logo: ClientAoneKitchen, industry: "Hospitality" },
  { id: 3, name: "BA Street Child",  logo: ClientBAStreet,    industry: "Non-Profit" },
  { id: 4, name: "DASA",             logo: ClientDasa,        industry: "Logistics" },
  { id: 5, name: "Eldowas",          logo: ClientEldowas,     industry: "Water Services" },
  { id: 6, name: "Larry",            logo: ClientLarry,       industry: "Professional Services" },
  { id: 7, name: "Sole Luna",        logo: ClientSoleLuna,    industry: "Retail" },
  { id: 8, name: "VNS",             logo: ClientVns,          industry: "Technology" },
];

// =============================================================================
// PRODUCTS LIST
// =============================================================================
export const productsList = [
  { id: 1,  name: "Daraja API",            logo: ProductDarajaAPI,           category: "Fintech & Payments" },
  { id: 2,  name: "Dynamics 365",          logo: ProductDynamic365,          category: "ERP" },
  { id: 3,  name: "eBoard",                logo: ProductEboard,              category: "Collaboration" },
  { id: 4,  name: "eTIMS",                 logo: ProductEtims,               category: "Tax Compliance" },
  { id: 5,  name: "Microsoft 365",         logo: ProductMicrosoft365,        category: "Productivity" },
  { id: 6,  name: "Microsoft Dynamics 365",logo: ProductMicrosoftDynamic365, category: "ERP" },
  { id: 7,  name: "Odoo",                  logo: ProductOdoo,                category: "ERP" },
  { id: 8,  name: "Sage Intacct",          logo: ProductSageIntacct,         category: "Finance" },
  { id: 9,  name: "SeamlessHR",            logo: ProductSeamlessHR,          category: "HR Tech" },
  { id: 10, name: "Ticketing",             logo: ProductTicketing,           category: "Operations" },
  { id: 11, name: "WhatsApp Bot",          logo: ProductWhatsappBot,         category: "Communication" },
];

// =============================================================================
// TESTIMONIALS
// =============================================================================
export const testimonials = [
  {
    id: 1,
    name: "Kenya Ports Authority",
    image: testimonialPlaceholder,
    message: "Working with this team exceeded our expectations in every way. Their innovative problem solving, clear communication, and deep industry expertise helped us modernize operations, streamline workflows, and unlock new efficiencies. We now view them as a strategic partner for ongoing success.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kenya Railways Corporation",
    image: testimonialPlaceholder,
    message: "Their dedication to excellence shone through from day one. They listened carefully to our challenges, designed tailored solutions, and executed flawlessly. Thanks to their responsiveness and technical prowess, our rail network's IT infrastructure is now faster, more reliable, and future-ready.",
    rating: 5,
  },
  {
    id: 3,
    name: "Co-operative Bank of Kenya",
    image: testimonialPlaceholder,
    message: "This team delivered outstanding results under tight timelines. Their expert guidance, agile development approach, and proactive support transformed our digital banking platform. Customer satisfaction has soared and internal processes are vastly more efficient.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kenya Power & Lighting Company",
    image: testimonialPlaceholder,
    message: "We engaged them to modernize our billing and grid-management systems, and the impact has been remarkable. Their deep technical expertise, collaborative spirit, and unwavering commitment to quality gave us a robust, scalable solution that serves customers more reliably than ever.",
    rating: 5,
  },
  {
    id: 5,
    name: "Elegance Designers & Printers",
    image: testimonialPlaceholder,
    message: "They tackled our complex print workflow challenges with creativity and precision. Their team designed custom software that seamlessly integrates design approvals, scheduling, and print-run monitoring. Production errors have plummeted and turnaround times have improved dramatically.",
    rating: 5,
  },
  {
    id: 6,
    name: "Vilcom Networks",
    image: testimonialPlaceholder,
    message: "We partnered with them to overhaul our network monitoring and client portal. Their team delivered intuitive dashboards, automated alerting, and robust security features. The result is a more transparent, efficient service that our customers love and trust.",
    rating: 5,
  },
  {
    id: 7,
    name: "Precision Drones",
    image: testimonialPlaceholder,
    message: "Their expertise in IoT and aerial data analytics took our drone operations to the next level. They built a custom flight-planning tool and real-time image-processing pipeline that drastically improved mission efficiency and data accuracy.",
    rating: 5,
  },
  {
    id: 8,
    name: "SignVrse",
    image: testimonialPlaceholder,
    message: "From initial consultation through deployment, their professionalism and design sensibility impressed us. They delivered an interactive signage platform with powerful remote management features and rich analytics.",
    rating: 5,
  },
  {
    id: 9,
    name: "Salaries & Remuneration Commission",
    image: testimonialPlaceholder,
    message: "They modernized our compensation-management system with meticulous attention to data integrity and user experience. The new platform streamlines salary benchmarking, approvals, and reporting, delivering greater transparency and faster decision cycles.",
    rating: 5,
  },
  {
    id: 10,
    name: "Indonesian Embassy",
    image: testimonialPlaceholder,
    message: "Their team created a secure, multilingual events and visa-processing portal for our diplomatic mission. They handled sensitive data with the utmost professionalism and compliance.",
    rating: 5,
  },
  {
    id: 11,
    name: "Health Strat",
    image: testimonialPlaceholder,
    message: "Working with them elevated our telehealth platform's reliability and user engagement. They implemented seamless video-consultation features, secure patient records, and real-time analytics dashboards.",
    rating: 5,
  },
  {
    id: 12,
    name: "Africa For Sustainability Initiative",
    image: testimonialPlaceholder,
    message: "Their custom sustainability-reporting tool has transformed how we measure and showcase our impact across multiple projects. With intuitive graphs, automated data feeds, and robust export options, our stakeholder communications are now clearer and fully auditable.",
    rating: 5,
  },
  {
    id: 13,
    name: "Kenya School for Monetary Studies",
    image: testimonialPlaceholder,
    message: "They designed an e-learning platform tailored to our advanced finance curriculum. Features like interactive case studies, secure assessments, and real-time instructor feedback have enhanced student engagement and learning outcomes.",
    rating: 5,
  },
  {
    id: 14,
    name: "Presbyterian Church of East Africa",
    image: testimonialPlaceholder,
    message: "Their thoughtful approach to community-engagement technology helped us create a mobile app for congregation management and outreach. With prayer requests, event calendars, and donation tracking, our members feel more connected than ever.",
    rating: 5,
  },
  {
    id: 15,
    name: "Kenya Society For The Blind",
    image: testimonialPlaceholder,
    message: "They delivered an accessible information portal optimized for screen readers, audio navigation, and large-print options. Their focus on universal design principles ensures that our visually impaired members can easily access resources, events, and support services.",
    rating: 5,
  },
];

// =============================================================================
// SERVICES
// =============================================================================
export const services = [
  {
    title: "Applications, Databases & Software Development",
    subtitle: "Custom Software Solutions",
    icon: Code,
    path: "/Applications",
    image: "https://img.freepik.com/premium-photo/curios-it-engineer-standing-middle-working-data-center-server-room_488220-873.jpg?w=900",
    description: "Your challenges demand more than code; you require bespoke digital artistry. We engineer cutting-edge applications and databases that don't just solve problems; they redefine industries. From AI-driven analytics to mission-critical databases, our solutions are precision-tuned to your ambitions.",
    highlights: [
      "Custom software development",
      "Database design & management",
      "Web & mobile application development",
      "API integration & development",
      "Cloud-native application development",
    ],
  },
  {
    title: "Networking Solutions",
    subtitle: "Networking & Connectivity",
    icon: WifiIcon,
    path: "/Networking",
    image: "https://img.freepik.com/free-photo/network-switch-with-cables_1137-6.jpg?w=900",
    description: "Your empire spans continents. Our selection of zero-latency networking fabric from reliable OEMs will ensure every user, whether in the boardroom or halfway across the globe, to operate like they're at the heart of your infrastructure.",
    highlights: [
      "Sensor network deployment",
      "Edge computing architecture",
      "Predictive maintenance systems",
      "Fleet management solutions",
      "Smart facility integration",
    ],
  },
  {
    title: "Cyber Security & Data Loss Prevention",
    subtitle: "Advanced Threat Protection",
    icon: Shield,
    path: "/Cybersecurity",
    image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148364032.jpg?w=996",
    description: "In a world of wolves, we are your war machines. Our cybersecurity suite isn't just a shield — it's an AI-powered sentinel that hunts threats before they breathe. From quantum-resistant encryption to behavior-based anomaly detection, we guard your data with a brutality that leaves no room for error.",
    highlights: [
      "Real-time threat detection & response",
      "Compliance management",
      "Security awareness training",
      "Penetration testing & audits",
      "Incident response planning",
    ],
  },
  {
    title: "Enterprise Resource Planning",
    subtitle: "ERP & Business Process Automation",
    icon: Code,
    path: "/Enterprisesolutions",
    image: "https://img.freepik.com/premium-photo/enterprise-resource-management-erp-software-system-business-resources-plan_31965-6467.jpg?w=996",
    description: "Your business isn't just processes — it's a battlefield of ambition. Our AI-driven Enterprise Resource Planning systems don't just streamline workflows; they orchestrate empires.",
    highlights: [
      "Sensor network deployment",
      "Edge computing architecture",
      "Predictive maintenance systems",
      "Fleet management solutions",
      "Smart facility integration",
    ],
  },
  {
    title: "Software & Hardware Infrastructure",
    subtitle: "Infrastructure",
    icon: Cpu,
    path: "/Infrastructure",
    image: "https://img.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?w=996",
    description: "We understand that behind every revolution lies infrastructure engineered to perfection. Our carefully selected and optimized high-availability compute and storage platforms are the silent titans of your success.",
    highlights: [
      "Full-stack cloud migration services",
      "Multi-cloud management & optimization",
      "Disaster recovery planning",
      "Cost management & optimization",
      "Kubernetes & container orchestration",
    ],
  },
  {
    title: "IoT Solutions & Smart eCooking Platform",
    subtitle: "Connected Device Ecosystems",
    icon: RouterIcon,
    path: "/iot",
    image: "https://img.freepik.com/premium-photo/electronic-circuit-board-with-microchips-processors-generative-ai_97167-1721.jpg?w=900",
    description: "Connect your physical world with industrial-grade IoT intelligence. We design, deploy, and scale intelligent device ecosystems — from smart eCooking systems to smart grid telemetry.",
    highlights: [
      "Smart eCooking platform deployment",
      "Real-time telemetry & granular data access",
      "PAYGo integration & remote device control",
      "Fault & tamper detection infrastructure",
      "Industrial-grade micro-controllers & firmware",
    ],
  },
];

// =============================================================================
// INTERFACES
// =============================================================================
export interface ProjectResult {
  value: number;
  unit: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  results: ProjectResult[];
  path: string;
}

export interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string;
  path?: string;
  linkText?: string;
}

// =============================================================================
// PROJECTS
// =============================================================================
export const projectsList: Project[] = [
  {
    id: 1,
    category: "Infrastructure",
    title: "Kenya Ports Authority – ICT Modernization",
    description: "Led the modernization of Kenya Ports Authority's IT infrastructure, implementing robust hardware systems and secure networking to enhance operational efficiency and communication across port facilities.",
    challenge: "The Authority faced challenges with outdated hardware, frequent system downtimes, and limited inter-departmental communication due to legacy infrastructure and minimal disaster recovery capabilities.",
    solution: "We upgraded the data center with modern servers, implemented a secure LAN/WAN architecture, deployed enterprise-grade firewalls, and set up backup and disaster recovery solutions.",
    technologies: ["Dell PowerEdge Servers", "Cisco Switches & Firewalls", "Fiber Optic Backbone", "HP ProDesk Workstations", "VMware vSphere", "Windows Server 2022", "Structured Cabling Systems"],
    highlights: ["Established a redundant and secure network backbone", "Centralized IT resources through server virtualization", "Enhanced system uptime with proactive monitoring tools", "Improved user support with standardized hardware deployments"],
    results: [
      { value: 99.9, unit: "%", description: "Network uptime after deployment" },
      { value: 80,   unit: "%", description: "Reduction in hardware-related incidents" },
      { value: 50,   unit: "%", description: "Faster internal communication and data access" },
      { value: 3,    unit: "x", description: "Increase in overall IT capacity and performance" },
    ],
    path: "/casestudy1",
  },
  {
    id: 2,
    category: "Infrastructure",
    title: "Kenya Railways Corporation – ICT Systems Revamp",
    description: "Partnered with Kenya Railways Corporation to overhaul their outdated ICT infrastructure, enhancing communication systems, hardware reliability, and centralized operations across regional stations.",
    challenge: "Kenya Railways relied on legacy systems that suffered frequent hardware failures, lacked secure connectivity between offices, and could not support modern enterprise software.",
    solution: "We executed a structured ICT infrastructure upgrade including installation of industrial-grade servers, network backbone modernization, high-speed internet connectivity, surveillance systems, and reliable power backup solutions.",
    technologies: ["Lenovo ThinkSystem Servers", "Fortinet Network Firewalls", "Fiber Optic Backbone", "Access Control & CCTV Systems", "Enterprise Wi-Fi (Ubiquiti/Aruba)", "Smart Power Backup & UPS Systems"],
    highlights: ["Established secure, high-speed LAN/WAN across stations", "Minimized hardware downtime through industrial-grade replacements", "Enabled centralized user and asset management", "Improved data security and system resilience"],
    results: [
      { value: 85, unit: "%", description: "Increase in system reliability" },
      { value: 60, unit: "%", description: "Reduction in network-related delays" },
      { value: 50, unit: "%", description: "Boost in internal communication efficiency" },
    ],
    path: "/casestudy1",
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Nairobi Metropolitan Services – Digital Health Platform",
    description: "Developed a comprehensive, secure telehealth platform to modernize service delivery for Nairobi Metropolitan Services (NMS), enhancing patient experience and operational efficiency.",
    challenge: "NMS faced fragmented health systems with no centralized data sharing, delays in patient care coordination, and limited remote service capabilities.",
    solution: "We engineered a full-stack digital platform connecting patients, providers, and health centers via real-time communication tools. Core features included online ticketing, live monitoring, fleet and asset tracking, and integrated electronic health records.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "Twilio Video", "AWS (EC2, Shield, RDS)", "Docker"],
    highlights: ["Secure real-time video consultations and appointment scheduling", "Integrated EHR and patient data synchronization", "Live dashboards for Command & Control visibility", "Fleet and asset management with geolocation tracking", "Role-based access control and end-to-end encryption"],
    results: [
      { value: 98, unit: "%", description: "Patient satisfaction rate reported" },
      { value: 50, unit: "%", description: "Reduction in missed appointments" },
      { value: 70, unit: "%", description: "Increase in remote healthcare access" },
      { value: 65, unit: "%", description: "Improved operational decision-making speed" },
    ],
    path: "/projects/nms-digital-health",
  },
  {
    id: 4,
    category: "Finance",
    title: "DFID Project – BioSIM Supply Chain Finance Platform",
    description: "Developed an intelligent financial and operational planning system to optimize supply chain performance, align business objectives, and automate sales invoicing for the confectionery industry.",
    challenge: "The project required a dynamic platform capable of aligning strategic, financial, commercial, and operational goals across supply chains in the confectionery sector.",
    solution: "We implemented a centralized planning system that integrates cross-functional inputs to generate short-, mid-, and long-term supply forecasts.",
    technologies: ["Power BI", "Python", "Microsoft Dynamics 365", "Azure SQL Database", "SAP FICO", "Excel Macros"],
    highlights: ["Integrated financial planning and supply chain alignment", "Automated sales invoicing across channels", "Real-time inventory and demand-supply visibility", "Improved planning accuracy through data-driven insights"],
    results: [
      { value: 80, unit: "%", description: "Reduction in supply-demand mismatches" },
      { value: 65, unit: "%", description: "Increase in invoicing efficiency" },
      { value: 40, unit: "%", description: "Decrease in inventory holding costs" },
      { value: 90, unit: "%", description: "Alignment between financial and operational KPIs" },
    ],
    path: "/projects/finance-biosim",
  },
  {
    id: 5,
    category: "Cybersecurity",
    title: "Salaries & Remuneration Commission – Data Protection and Cybersecurity Platform",
    description: "Implemented a government-grade cybersecurity framework to safeguard sensitive payroll data, ensure regulatory compliance, and mitigate risks associated with insider threats and external breaches.",
    challenge: "SRC faced growing cybersecurity threats targeting sensitive salary structures, payroll data, and internal communications.",
    solution: "We developed and deployed a secure digital infrastructure focused on Data Loss Prevention (DLP), identity and access management (IAM), and continuous monitoring.",
    technologies: ["Microsoft Defender for Endpoint", "Fortinet DLP", "Zecurion DLP", "AWS KMS", "SIEM", "OAuth 2.0 / SAML", "Zero Trust Network Access (ZTNA)"],
    highlights: ["Implemented real-time DLP and access control across endpoints", "Encrypted sensitive payroll and personnel records", "Automated threat detection and mitigation system", "Role-based access management and policy enforcement"],
    results: [
      { value: 100, unit: "%", description: "Regulatory compliance with Kenya's Data Protection Act" },
      { value: 75,  unit: "%", description: "Reduction in potential data breach vectors" },
      { value: 60,  unit: "%", description: "Decrease in internal data access violations" },
      { value: 90,  unit: "%", description: "Improved visibility into cybersecurity posture" },
    ],
    path: "/casestudy2",
  },
];

// =============================================================================
// SUCCESS STORIES
// =============================================================================
export const successStories: SuccessStory[] = [
  { id: 1, category: "FinTech",      title: "Automating Financial Reporting",    description: "Built an automated system for a financial institution to generate complex regulatory reports, significantly reducing manual effort and error rates.", path: "/projects/fintech-reporting", linkText: "Learn More" },
  { id: 2, category: "Education",    title: "Developing a Remote Learning Portal", description: "Created a robust and interactive online learning platform for a university, facilitating virtual classes, assignment submission, and progress tracking.", path: "/projects/education-portal", linkText: "View Details" },
  { id: 3, category: "Real Estate",  title: "Launching a Property Management App", description: "Designed and developed a mobile application simplifying property listing, tenant communication, and maintenance request management.", path: "/projects/realestate-app" },
  { id: 4, category: "Manufacturing", title: "Implementing an IoT Monitoring Solution", description: "Deployed an IoT solution to monitor factory equipment in real-time, enabling predictive maintenance and optimizing production efficiency." },
  { id: 5, category: "Non-Profit",   title: "Building a Donor Management System",  description: "Created a custom CRM to streamline donor relations, manage campaigns, and track contributions effectively for a large non-profit organization." },
  { id: 6, category: "Legal Tech",   title: "Developing Case Management Software",  description: "Engineered a secure web application for law firms to manage cases, documents, deadlines, and client communication in a single platform." },
];

// =============================================================================
// FEATURED PROJECTS
// =============================================================================
export const featuredProjects = [
  { image: FeaturedImage1, category: "Infrastructure",       title: "Enterprise Hardware & Software Infrastructure",          description: "Protect networks, applications, and data by identifying vulnerabilities, preventing breaches, encrypting sensitive information.", path: "/casestudy1" },
  { image: FeaturedImage2, category: "Cybersecurity",        title: "Cyber Security & Data Loss Prevention",                  description: "Establishes secure, scalable, resilient IT environments by integrating robust servers, storage, networking, and virtualization.", path: "/casestudy2" },
  { image: FeaturedImage3, category: "AI & Machine Learning", title: "Predictive & Generative Artificial Intelligence",        description: "Leverages machine learning algorithms to analyze large-scale historical data, forecast trends, and autonomously generate insights.", path: "/casestudy3" },
];

// =============================================================================
// HERO SLIDES
// =============================================================================
export const heroSlides = [
  { id: 1, title: "Powering Africa's Digital Future",         subtitle: "Leading technology experts delivering transformative solutions across East Africa",      image: HeroImage1 },
  { id: 2, title: "Technology Built For Growth",              subtitle: "Smart scalable solutions helping organizations innovate expand and thrive",               image: HeroImage2 },
  { id: 3, title: "Advancing Silicon Savannah Innovation",    subtitle: "Harnessing computing power supporting Africa's fast growing digital economy",             image: HeroImage3 },
  { id: 4, title: "Trusted Technology Industry Experts",      subtitle: "Over a decade delivering reliable innovative enterprise technology solutions",            image: HeroImage4 },
  {
    id: 5,
    title: "Certified Global Quality Standards",
    subtitle: "Commitment to international quality security compliance and service excellence",
    image: HeroImage5,
    overrideLink2: { text: "Explore Our ISO Certifications", to: "/isoCertification" },
  },
];

// =============================================================================
// ECOSYSTEM COMPANIES
// =============================================================================
export interface EcosystemCompany {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  learnMoreUrl: string;
  themeColor: string;
}

export const ecosystemCompanies: EcosystemCompany[] = [
  {
    name: "SignVrse",
    logo: SignVrseLogo,
    tagline: "Bridging Communication for the Deaf",
    description: "SignVrse leverages AI-powered 3D avatars to bridge the communication gap for the global deaf community, enabling seamless, real-time translation between sign language and spoken or written language.",
    websiteUrl: "https://signvrse.com",
    learnMoreUrl: "/signvrse",
    themeColor: "#3b82f6",
  },
  {
    name: "Precision Drones",
    logo: PrecisionDronesLogo,
    tagline: "Aerial Intelligence for Modern Enterprises",
    description: "Precision Drones delivers advanced drone solutions for mapping, surveying, and real-time data analytics, empowering organizations with actionable aerial insights across agriculture, infrastructure, and security sectors.",
    websiteUrl: "https://www.precisiondrones.africa",
    learnMoreUrl: "/precision-drones",
    themeColor: "#f59e42",
  },
];

// =============================================================================
// CARD HOVER VARIANT
// =============================================================================
export const cardHoverVariant = {
  rest: {
    y: 0,
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
    scale: 1,
  },
  hover: {
    y: -8,
    boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};