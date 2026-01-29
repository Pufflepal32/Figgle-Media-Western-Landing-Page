export interface IndustryService {
  slug: string;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  challenges: string[];
  services: IndustryService[];
}

export const industries: Industry[] = [
  {
    slug: 'roofers',
    title: 'Roofing Companies',
    shortTitle: 'Roofers',
    description: 'Digital marketing solutions designed specifically for roofing contractors to generate more leads and grow their business.',
    longDescription: 'The roofing industry is highly competitive, with homeowners often searching online after storm damage or when planning renovations. We help roofing companies stand out in local search results and convert more website visitors into booked jobs.',
    challenges: [
      'Standing out in a crowded local market',
      'Generating leads during off-peak seasons',
      'Building trust with homeowners making major investments',
      'Competing against national lead generation companies',
      'Showcasing quality workmanship online'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Roofers', description: 'Rank higher in "roofing company near me" searches and get found by homeowners needing roof repairs or replacements.' },
      { slug: 'web-design', title: 'Web Design for Roofers', description: 'Professional roofing websites that showcase your work, highlight your credentials, and convert visitors into leads.' },
      { slug: 'social-media', title: 'Social Media for Roofers', description: 'Build your brand and showcase completed projects on Facebook and Instagram to attract more customers.' }
    ]
  },
  {
    slug: 'hvac',
    title: 'HVAC Companies',
    shortTitle: 'HVAC',
    description: 'Marketing strategies for heating and cooling companies to capture emergency calls and seasonal demand.',
    longDescription: 'HVAC companies face unique marketing challenges with seasonal demand fluctuations and emergency service needs. Our marketing strategies help you capture urgent searches while building long-term brand recognition for maintenance contracts.',
    challenges: [
      'Capturing emergency service calls',
      'Managing seasonal demand fluctuations',
      'Promoting maintenance agreements',
      'Competing with large franchise operations',
      'Building 24/7 availability awareness'
    ],
    services: [
      { slug: 'seo', title: 'SEO for HVAC', description: 'Dominate local searches for AC repair, furnace installation, and HVAC maintenance in your service area.' },
      { slug: 'web-design', title: 'Web Design for HVAC', description: 'Fast-loading HVAC websites optimized for mobile users seeking emergency heating and cooling services.' },
      { slug: 'social-media', title: 'Social Media for HVAC', description: 'Stay top-of-mind with homeowners through seasonal content and maintenance reminders on social media.' }
    ]
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Companies',
    shortTitle: 'Plumbers',
    description: 'Get more plumbing leads with marketing that reaches homeowners during emergencies and planned projects.',
    longDescription: 'Plumbers need to be found fast when pipes burst or drains clog. Our marketing strategies ensure your plumbing company shows up at the top of search results when customers need you most, while also promoting your planned service offerings.',
    challenges: [
      'Being found during plumbing emergencies',
      'Differentiating from competitors on price alone',
      'Promoting higher-margin services like repiping',
      'Building trust for residential and commercial clients',
      'Managing online reviews and reputation'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Plumbers', description: 'Rank #1 for emergency plumbing searches and planned services like water heater installation.' },
      { slug: 'web-design', title: 'Web Design for Plumbers', description: 'Plumbing websites with click-to-call functionality, online booking, and service area pages.' },
      { slug: 'social-media', title: 'Social Media for Plumbers', description: 'Educational content and emergency service awareness to build your plumbing brand on social platforms.' }
    ]
  },
  {
    slug: 'electrical',
    title: 'Electrical Contractors',
    shortTitle: 'Electricians',
    description: 'Marketing solutions for electricians to attract residential, commercial, and industrial clients.',
    longDescription: 'Electrical contractors serve diverse markets from residential rewiring to commercial installations. Our marketing strategies help you target the right customers with messaging that builds trust in your expertise and safety record.',
    challenges: [
      'Reaching both residential and commercial markets',
      'Communicating safety and licensing credentials',
      'Competing for new construction projects',
      'Promoting electrical upgrades and smart home services',
      'Standing out from unlicensed competitors'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Electricians', description: 'Get found for electrical services from panel upgrades to commercial wiring in your local area.' },
      { slug: 'web-design', title: 'Web Design for Electricians', description: 'Professional electrical contractor websites that highlight your licenses, certifications, and expertise.' },
      { slug: 'social-media', title: 'Social Media for Electricians', description: 'Build authority and trust by sharing electrical safety tips and showcasing your completed projects.' }
    ]
  },
  {
    slug: 'general-contractors',
    title: 'General Contractors',
    shortTitle: 'General Contractors',
    description: 'Comprehensive marketing for general contractors handling construction, renovation, and project management.',
    longDescription: 'General contractors need marketing that showcases their ability to manage complex projects from start to finish. We help GCs attract quality leads for new construction, major renovations, and commercial projects.',
    challenges: [
      'Showcasing diverse project capabilities',
      'Attracting larger commercial projects',
      'Building trust for major investments',
      'Demonstrating project management expertise',
      'Standing out in competitive bid situations'
    ],
    services: [
      { slug: 'seo', title: 'SEO for General Contractors', description: 'Rank for high-value searches like "home addition contractor" and "commercial construction company."' },
      { slug: 'web-design', title: 'Web Design for General Contractors', description: 'Portfolio-focused websites that showcase your best projects and build credibility with potential clients.' },
      { slug: 'social-media', title: 'Social Media for General Contractors', description: 'Document your projects from groundbreaking to completion, building trust through transparency.' }
    ]
  },
  {
    slug: 'remodeling',
    title: 'Remodeling Contractors',
    shortTitle: 'Remodelers',
    description: 'Marketing that showcases your remodeling transformations and attracts homeowners ready to renovate.',
    longDescription: 'Remodeling contractors thrive on visual proof of their work. Our marketing strategies help you showcase stunning before-and-after transformations that inspire homeowners to start their own renovation projects with your company.',
    challenges: [
      'Showcasing transformation results visually',
      'Attracting homeowners in the research phase',
      'Competing with big-box store services',
      'Building trust for whole-home renovations',
      'Generating leads during slow seasons'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Remodelers', description: 'Get found by homeowners searching for kitchen remodels, bathroom renovations, and home additions.' },
      { slug: 'web-design', title: 'Web Design for Remodelers', description: 'Beautiful gallery websites that showcase your best before-and-after transformations.' },
      { slug: 'social-media', title: 'Social Media for Remodelers', description: 'Share stunning remodel reveals and design inspiration to attract homeowners planning renovations.' }
    ]
  },
  {
    slug: 'landscapers',
    title: 'Landscaping Companies',
    shortTitle: 'Landscapers',
    description: 'Digital marketing to help landscapers grow their customer base and book more projects.',
    longDescription: 'Landscaping companies have unique opportunities to showcase their work through stunning visual content. We help landscapers attract residential and commercial clients looking for lawn care, hardscaping, and landscape design services.',
    challenges: [
      'Seasonal business fluctuations',
      'Differentiating from low-cost competitors',
      'Promoting design services over basic lawn care',
      'Building recurring maintenance contracts',
      'Showcasing work across different seasons'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Landscapers', description: 'Rank for landscaping services from lawn maintenance to custom landscape design in your area.' },
      { slug: 'web-design', title: 'Web Design for Landscapers', description: 'Visual landscaping websites that showcase your outdoor transformations and design capabilities.' },
      { slug: 'social-media', title: 'Social Media for Landscapers', description: 'Share seasonal content and stunning project photos to attract homeowners on Instagram and Facebook.' }
    ]
  },
  {
    slug: 'hardscapers',
    title: 'Hardscaping Contractors',
    shortTitle: 'Hardscapers',
    description: 'Specialized marketing for hardscape contractors doing patios, retaining walls, and outdoor living spaces.',
    longDescription: 'Hardscaping is a premium service that requires marketing focused on craftsmanship and design. We help hardscape contractors attract homeowners looking to invest in patios, outdoor kitchens, fire pits, and retaining walls.',
    challenges: [
      'Educating customers on hardscape value',
      'Showcasing premium craftsmanship',
      'Competing with general landscapers',
      'Attracting higher-budget projects',
      'Demonstrating design expertise'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Hardscapers', description: 'Get found for paver patios, retaining walls, outdoor kitchens, and fire pit installations.' },
      { slug: 'web-design', title: 'Web Design for Hardscapers', description: 'Portfolio websites that highlight your hardscape craftsmanship and outdoor living designs.' },
      { slug: 'social-media', title: 'Social Media for Hardscapers', description: 'Showcase stunning outdoor living spaces and hardscape projects to inspire potential clients.' }
    ]
  },
  {
    slug: 'concrete',
    title: 'Concrete Contractors',
    shortTitle: 'Concrete',
    description: 'Marketing solutions for concrete contractors specializing in driveways, foundations, and decorative concrete.',
    longDescription: 'Concrete contractors need marketing that highlights both their technical expertise and decorative capabilities. We help concrete companies attract leads for foundations, driveways, stamped concrete, and commercial flatwork.',
    challenges: [
      'Showcasing decorative concrete options',
      'Attracting both residential and commercial projects',
      'Competing on quality versus price',
      'Building trust for foundation work',
      'Managing seasonal weather limitations'
    ],
    services: [
      { slug: 'seo', title: 'SEO for Concrete Contractors', description: 'Rank for concrete services from driveway replacement to decorative stamped concrete.' },
      { slug: 'web-design', title: 'Web Design for Concrete Contractors', description: 'Concrete contractor websites showcasing your residential and commercial project capabilities.' },
      { slug: 'social-media', title: 'Social Media for Concrete Contractors', description: 'Share project progress and finished concrete work to build credibility and attract new clients.' }
    ]
  }
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getIndustryService(industrySlug: string, serviceSlug: string): IndustryService | undefined {
  const industry = getIndustry(industrySlug);
  return industry?.services.find(s => s.slug === serviceSlug);
}
