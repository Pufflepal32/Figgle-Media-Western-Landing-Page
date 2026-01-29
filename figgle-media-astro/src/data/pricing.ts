export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface IndustryPricing {
  slug: string;
  title: string;
  tagline: string;
  packages: PricingPackage[];
}

export interface ServicePricing {
  slug: string;
  title: string;
  packages: PricingPackage[];
}

// Base packages with western-themed names
export const basePackages: PricingPackage[] = [
  {
    name: 'The Homesteader',
    price: '$1,000',
    description: 'Perfect for new businesses staking their claim',
    features: [
      'Professional website design',
      'Basic SEO setup',
      'Mobile responsive',
      'Google Business Profile optimization',
      'Contact form integration',
      '30-day support'
    ],
    ctaText: 'Stake Your Claim'
  },
  {
    name: 'The Trailblazer',
    price: '$2,500',
    description: 'Blaze a path to more customers',
    features: [
      'Everything in The Homesteader',
      'Local lead generation system',
      'Advanced SEO optimization',
      'Citation building (20+ directories)',
      'Review generation setup',
      'Monthly performance reports',
      '60-day support'
    ],
    popular: true,
    ctaText: 'Blaze Your Trail'
  },
  {
    name: 'The Ranch Hand',
    price: '$5,000',
    description: 'Full crew working your digital spread',
    features: [
      'Everything in The Trailblazer',
      'Content marketing (4 posts/month)',
      'Social media management',
      'Google Ads setup & management',
      'Conversion tracking',
      'Competitor analysis',
      'Weekly strategy calls',
      '90-day support'
    ],
    ctaText: 'Hire the Crew'
  },
  {
    name: 'The Cattle Baron',
    price: '$10,000+',
    description: 'Dominate the entire territory',
    features: [
      'Everything in The Ranch Hand',
      'Multi-location marketing',
      'Advanced paid advertising',
      'Video production',
      'Reputation management',
      'Custom integrations',
      'Dedicated account manager',
      'Unlimited support'
    ],
    ctaText: 'Claim Your Empire'
  }
];

// Service-specific pricing packages
export const servicePricing: ServicePricing[] = [
  {
    slug: 'seo',
    title: 'SEO Services',
    packages: [
      {
        name: 'Local SEO Starter',
        price: '$500/mo',
        description: 'Get found in your local market',
        features: [
          'Google Business Profile optimization',
          'Local keyword research',
          'On-page SEO for 5 pages',
          'Citation building (10 directories)',
          'Monthly ranking report'
        ],
        ctaText: 'Start Ranking'
      },
      {
        name: 'Regional Domination',
        price: '$1,000/mo',
        description: 'Expand your search presence',
        features: [
          'Everything in Local SEO Starter',
          'On-page SEO for 15 pages',
          'Content optimization',
          'Link building (5 quality links/month)',
          'Citation building (25 directories)',
          'Competitor monitoring',
          'Bi-weekly strategy calls'
        ],
        popular: true,
        ctaText: 'Dominate Your Region'
      },
      {
        name: 'Market Leader',
        price: '$2,000/mo',
        description: 'Become the #1 choice in your market',
        features: [
          'Everything in Regional Domination',
          'Unlimited page optimization',
          'Content creation (2 blog posts/month)',
          'Advanced link building',
          'Technical SEO audits',
          'Schema markup implementation',
          'Weekly strategy calls',
          'Dedicated SEO specialist'
        ],
        ctaText: 'Lead Your Market'
      }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Design & Development',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'A professional website to stake your claim online',
        features: [
          '5-page custom website',
          'Mobile responsive design',
          'Contact form',
          'Basic SEO setup',
          'Google Analytics integration',
          '30-day support'
        ],
        ctaText: 'Build My Site'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'A conversion-focused website that generates leads',
        features: [
          '10-page custom website',
          'Advanced lead capture forms',
          'Service area pages',
          'Portfolio/gallery section',
          'Blog setup',
          'Speed optimization',
          '60-day support'
        ],
        popular: true,
        ctaText: 'Build My Site'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'A complete digital presence for serious businesses',
        features: [
          '20+ page custom website',
          'Custom functionality',
          'CRM integration',
          'Online booking system',
          'Client portal',
          'Advanced analytics',
          '90-day support'
        ],
        ctaText: 'Build My Site'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Enterprise solution for multi-location businesses',
        features: [
          'Unlimited pages',
          'Multi-location support',
          'Custom integrations',
          'E-commerce capabilities',
          'Advanced security',
          'Priority support',
          'Ongoing maintenance included'
        ],
        ctaText: 'Build My Empire'
      }
    ]
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    packages: [
      {
        name: 'Quick Draw',
        price: '$500/mo + ad spend',
        description: 'Fast results with targeted ads',
        features: [
          'Campaign setup & optimization',
          'Keyword research',
          'Ad copywriting',
          'Conversion tracking',
          'Monthly performance report',
          'Up to $2,000 ad spend management'
        ],
        ctaText: 'Start Advertising'
      },
      {
        name: 'Sharpshooter',
        price: '$1,000/mo + ad spend',
        description: 'Precision targeting for better ROI',
        features: [
          'Everything in Quick Draw',
          'A/B ad testing',
          'Landing page optimization',
          'Remarketing campaigns',
          'Competitor analysis',
          'Bi-weekly optimization',
          'Up to $5,000 ad spend management'
        ],
        popular: true,
        ctaText: 'Start Advertising'
      },
      {
        name: 'Full Arsenal',
        price: '$2,000/mo + ad spend',
        description: 'Complete advertising domination',
        features: [
          'Everything in Sharpshooter',
          'Display advertising',
          'YouTube ads',
          'Local Service Ads management',
          'Advanced audience targeting',
          'Weekly optimization',
          'Unlimited ad spend management'
        ],
        ctaText: 'Unleash the Arsenal'
      }
    ]
  },
  {
    slug: 'bing-ads',
    title: 'Bing Ads',
    packages: [
      {
        name: 'Scout',
        price: '$400/mo + ad spend',
        description: 'Tap into the Microsoft network',
        features: [
          'Campaign setup & optimization',
          'Import from Google Ads',
          'Keyword targeting',
          'Ad copywriting',
          'Monthly performance report',
          'Up to $1,500 ad spend management'
        ],
        ctaText: 'Start Advertising'
      },
      {
        name: 'Ranger',
        price: '$750/mo + ad spend',
        description: 'Expand your reach across platforms',
        features: [
          'Everything in Scout',
          'LinkedIn audience targeting',
          'A/B testing',
          'Remarketing campaigns',
          'Bi-weekly optimization',
          'Up to $3,000 ad spend management'
        ],
        popular: true,
        ctaText: 'Start Advertising'
      },
      {
        name: 'Marshal',
        price: '$1,500/mo + ad spend',
        description: 'Full Microsoft Advertising mastery',
        features: [
          'Everything in Ranger',
          'Cross-platform optimization',
          'Audience network ads',
          'Advanced bid strategies',
          'Weekly optimization',
          'Unlimited ad spend management'
        ],
        ctaText: 'Start Advertising'
      }
    ]
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    packages: [
      {
        name: 'Campfire',
        price: '$500/mo',
        description: 'Build your brand presence',
        features: [
          'Profile optimization (2 platforms)',
          '8 posts per month',
          'Basic community management',
          'Content calendar',
          'Monthly analytics report'
        ],
        ctaText: 'Start Posting'
      },
      {
        name: 'Town Square',
        price: '$1,000/mo',
        description: 'Engage and grow your audience',
        features: [
          'Profile optimization (3 platforms)',
          '16 posts per month',
          'Community management',
          'Story/Reel content',
          'Hashtag strategy',
          'Engagement campaigns',
          'Bi-weekly reporting'
        ],
        popular: true,
        ctaText: 'Grow My Brand'
      },
      {
        name: 'Main Street',
        price: '$2,000/mo',
        description: 'Full social media domination',
        features: [
          'All platforms managed',
          '30+ posts per month',
          'Video content creation',
          'Paid social campaigns',
          'Influencer outreach',
          'Reputation monitoring',
          'Weekly reporting & calls'
        ],
        ctaText: 'Dominate Social'
      }
    ]
  },
  {
    slug: 'review-reharvesting',
    title: 'Review Reharvesting',
    packages: [
      {
        name: 'Reputation Starter',
        price: '$300/mo',
        description: 'Start collecting more reviews',
        features: [
          'Review request automation',
          'Google & Facebook focus',
          'Review monitoring',
          'Response templates',
          'Monthly review report'
        ],
        ctaText: 'Get More Reviews'
      },
      {
        name: 'Reputation Builder',
        price: '$600/mo',
        description: 'Build a 5-star reputation',
        features: [
          'Everything in Reputation Starter',
          'Multi-platform monitoring',
          'Custom review funnels',
          'Negative review alerts',
          'Response management',
          'Review widget for website',
          'Competitor review tracking'
        ],
        popular: true,
        ctaText: 'Build My Reputation'
      },
      {
        name: 'Reputation Master',
        price: '$1,000/mo',
        description: 'Complete reputation management',
        features: [
          'Everything in Reputation Builder',
          'Crisis response planning',
          'Review generation campaigns',
          'Video testimonial collection',
          'Reputation marketing',
          'Weekly reporting',
          'Dedicated manager'
        ],
        ctaText: 'Master My Reputation'
      }
    ]
  }
];

// Industry-specific pricing with tailored copy
export const industryPricing: IndustryPricing[] = [
  {
    slug: 'roofers',
    title: 'Roofing Companies',
    tagline: 'Get your roofing website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new roofing companies staking their claim',
        features: [
          'Professional roofing website',
          'Storm damage landing pages',
          'Before/after gallery setup',
          'Google Business Profile optimization',
          'Basic SEO for roofing keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more roofing leads',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Service area pages for all locations',
          'Review generation for roofing',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your roofing marketing',
        features: [
          'Everything in The Trailblazer',
          'Roofing content marketing',
          'Google Ads for roofers',
          'Storm chaser campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your roofing market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-territory expansion',
          'Commercial roofing campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'hvac',
    title: 'HVAC Companies',
    tagline: 'Get your HVAC website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new HVAC companies staking their claim',
        features: [
          'Professional HVAC website',
          'Emergency service pages',
          'Seasonal service landing pages',
          'Google Business Profile optimization',
          'Basic SEO for HVAC keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more HVAC calls',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          '24/7 emergency service promotion',
          'Maintenance agreement marketing',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your HVAC marketing',
        features: [
          'Everything in The Trailblazer',
          'HVAC content marketing',
          'Google Ads for HVAC',
          'Seasonal campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your HVAC market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-location marketing',
          'Commercial HVAC campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Companies',
    tagline: 'Get your plumbing website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new plumbing companies staking their claim',
        features: [
          'Professional plumbing website',
          'Emergency plumber pages',
          'Service-specific landing pages',
          'Google Business Profile optimization',
          'Basic SEO for plumbing keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more plumbing leads',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          '24/7 emergency service promotion',
          'Drain & sewer marketing',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your plumbing marketing',
        features: [
          'Everything in The Trailblazer',
          'Plumbing content marketing',
          'Google Ads for plumbers',
          'Water heater campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your plumbing market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-location marketing',
          'Commercial plumbing campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'electrical',
    title: 'Electrical Contractors',
    tagline: 'Get your electrical website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new electricians staking their claim',
        features: [
          'Professional electrician website',
          'Emergency electrical pages',
          'License & certification showcase',
          'Google Business Profile optimization',
          'Basic SEO for electrical keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more electrical leads',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Residential & commercial pages',
          'Smart home service marketing',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your electrical marketing',
        features: [
          'Everything in The Trailblazer',
          'Electrical content marketing',
          'Google Ads for electricians',
          'Panel upgrade campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your electrical market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-location marketing',
          'Commercial electrical campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'general-contractors',
    title: 'General Contractors',
    tagline: 'Get your construction website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new GCs staking their claim',
        features: [
          'Professional contractor website',
          'Project portfolio gallery',
          'Service area pages',
          'Google Business Profile optimization',
          'Basic SEO for contractor keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more construction projects',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Commercial & residential pages',
          'Project showcase system',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your contractor marketing',
        features: [
          'Everything in The Trailblazer',
          'Construction content marketing',
          'Google Ads for contractors',
          'Project type campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your construction market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-location marketing',
          'Commercial project campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'remodeling',
    title: 'Remodeling Contractors',
    tagline: 'Get your remodeling website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new remodelers staking their claim',
        features: [
          'Professional remodeling website',
          'Before/after transformation gallery',
          'Kitchen & bath landing pages',
          'Google Business Profile optimization',
          'Basic SEO for remodeling keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more renovation projects',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Room-specific service pages',
          'Project showcase system',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your remodeling marketing',
        features: [
          'Everything in The Trailblazer',
          'Remodeling content marketing',
          'Google Ads for remodelers',
          'Design inspiration campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your remodeling market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-territory expansion',
          'Luxury renovation campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'landscapers',
    title: 'Landscaping Companies',
    tagline: 'Get your landscaping website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new landscapers staking their claim',
        features: [
          'Professional landscaping website',
          'Project photo gallery',
          'Seasonal service pages',
          'Google Business Profile optimization',
          'Basic SEO for landscaping keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more landscaping clients',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Lawn care vs design services pages',
          'Recurring service marketing',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your landscaping marketing',
        features: [
          'Everything in The Trailblazer',
          'Landscaping content marketing',
          'Google Ads for landscapers',
          'Seasonal campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your landscaping market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-territory expansion',
          'Commercial landscaping campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'hardscapers',
    title: 'Hardscaping Contractors',
    tagline: 'Get your hardscaping website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new hardscapers staking their claim',
        features: [
          'Professional hardscaping website',
          'Patio & outdoor living gallery',
          'Service-specific pages',
          'Google Business Profile optimization',
          'Basic SEO for hardscaping keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more hardscaping projects',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Outdoor kitchen marketing',
          'Fire pit & patio campaigns',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your hardscaping marketing',
        features: [
          'Everything in The Trailblazer',
          'Hardscaping content marketing',
          'Google Ads for hardscapers',
          'Design inspiration campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your hardscaping market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-territory expansion',
          'Luxury outdoor living campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  },
  {
    slug: 'concrete',
    title: 'Concrete Contractors',
    tagline: 'Get your concrete website ranking #1',
    packages: [
      {
        name: 'The Homesteader',
        price: '$1,000',
        description: 'Perfect for new concrete contractors staking their claim',
        features: [
          'Professional concrete website',
          'Decorative concrete gallery',
          'Service-specific pages',
          'Google Business Profile optimization',
          'Basic SEO for concrete keywords',
          '30-day support'
        ],
        ctaText: 'Stake Your Claim'
      },
      {
        name: 'The Trailblazer',
        price: '$2,500',
        description: 'Blaze a path to more concrete projects',
        features: [
          'Everything in The Homesteader',
          'Local lead generation system',
          'Residential & commercial pages',
          'Decorative concrete marketing',
          'Citation building (20+ directories)',
          'Monthly performance reports'
        ],
        popular: true,
        ctaText: 'Blaze Your Trail'
      },
      {
        name: 'The Ranch Hand',
        price: '$5,000',
        description: 'Full crew working your concrete marketing',
        features: [
          'Everything in The Trailblazer',
          'Concrete content marketing',
          'Google Ads for concrete',
          'Foundation & driveway campaigns',
          'Social media management',
          'Competitor analysis',
          'Weekly strategy calls'
        ],
        ctaText: 'Hire the Crew'
      },
      {
        name: 'The Cattle Baron',
        price: '$10,000+',
        description: 'Dominate your concrete market',
        features: [
          'Everything in The Ranch Hand',
          'Multi-territory expansion',
          'Commercial concrete campaigns',
          'Video production',
          'Advanced reputation management',
          'Dedicated account manager',
          'Unlimited support'
        ],
        ctaText: 'Claim Your Empire'
      }
    ]
  }
];

// Helper functions
export function getServicePricing(slug: string): ServicePricing | undefined {
  return servicePricing.find(s => s.slug === slug);
}

export function getIndustryPricing(slug: string): IndustryPricing | undefined {
  return industryPricing.find(i => i.slug === slug);
}
