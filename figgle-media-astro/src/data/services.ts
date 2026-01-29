export interface SubService {
  slug: string;
  title: string;
  description: string;
  features: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  subservices: SubService[];
}

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'SEO Services',
    description: 'Dominate search rankings and get found by customers actively searching for your services.',
    longDescription: 'Our SEO services help construction companies climb to the top of Google search results. We use proven strategies tailored specifically for the trades industry to drive qualified leads to your business.',
    icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M32 8c-12 0-24 8-24 24s12 24 24 24 24-8 24-24-12-24-24-24z"/>
      <path d="M24 28l6 6 12-12"/>
    </svg>`,
    features: [
      'Comprehensive keyword research for your trade',
      'On-page optimization for all service pages',
      'Local SEO to dominate your service area',
      'Google Business Profile optimization',
      'Monthly ranking reports and analytics',
      'Competitor analysis and strategy'
    ],
    subservices: [
      {
        slug: 'on-page',
        title: 'On-Page SEO',
        description: 'Optimize your website content, meta tags, and structure to rank higher in search results.',
        features: [
          'Title tag and meta description optimization',
          'Header tag hierarchy optimization',
          'Content optimization for target keywords',
          'Internal linking strategy',
          'Image optimization with alt tags',
          'Schema markup implementation'
        ]
      },
      {
        slug: 'off-page',
        title: 'Off-Page SEO',
        description: 'Build authority and trust through quality backlinks and online mentions.',
        features: [
          'Quality backlink building',
          'Industry directory submissions',
          'Guest posting on relevant sites',
          'Citation building and cleanup',
          'Review generation strategy',
          'Social signals optimization'
        ]
      },
      {
        slug: 'technical',
        title: 'Technical SEO',
        description: 'Ensure your website meets all technical requirements for search engine crawling and indexing.',
        features: [
          'Site speed optimization',
          'Mobile responsiveness audit',
          'XML sitemap creation and submission',
          'Robots.txt optimization',
          'Core Web Vitals improvement',
          'SSL and security implementation'
        ]
      },
      {
        slug: 'local',
        title: 'Local SEO',
        description: 'Dominate local search results and attract customers in your service area.',
        features: [
          'Google Business Profile optimization',
          'Local citation building',
          'Location page optimization',
          'Review management strategy',
          'Local schema markup',
          'Maps ranking improvement'
        ]
      }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Design & Development',
    description: 'Custom websites built to convert visitors into leads and showcase your best work.',
    longDescription: 'We build fast, beautiful websites that work hard for your construction business. Every site is designed to convert visitors into leads while showcasing your craftsmanship and professionalism.',
    icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="8" y="12" width="48" height="40" rx="4"/>
      <path d="M8 24h48"/>
      <circle cx="20" cy="18" r="2" fill="currentColor"/>
      <circle cx="28" cy="18" r="2" fill="currentColor"/>
      <path d="M16 34h20M16 42h12"/>
    </svg>`,
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive on all devices',
      'Fast loading speeds',
      'SEO-friendly structure',
      'Lead capture forms',
      'Portfolio and project galleries'
    ],
    subservices: [
      {
        slug: 'responsive-design',
        title: 'Responsive Web Design',
        description: 'Websites that look and work perfectly on every device, from phones to desktops.',
        features: [
          'Mobile-first design approach',
          'Tablet and desktop optimization',
          'Touch-friendly navigation',
          'Responsive images and media',
          'Cross-browser compatibility',
          'Fast mobile loading times'
        ]
      },
      {
        slug: 'custom-development',
        title: 'Custom Development',
        description: 'Bespoke website solutions built from scratch to meet your specific business needs.',
        features: [
          'Custom functionality development',
          'CMS integration and setup',
          'Third-party integrations',
          'Custom forms and calculators',
          'Booking and scheduling systems',
          'Client portal development'
        ]
      },
      {
        slug: 'technical-solutions',
        title: 'Technical Solutions',
        description: 'Advanced technical implementations to improve performance and functionality.',
        features: [
          'Website speed optimization',
          'Database optimization',
          'Server configuration',
          'Security hardening',
          'Analytics implementation',
          'API integrations'
        ]
      }
    ]
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand presence and connect with customers on the platforms they use most.',
    longDescription: 'Social media is where your next customers are spending their time. We help construction companies build a professional presence, showcase their work, and generate leads through strategic social media marketing.',
    icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="32" cy="32" r="28"/>
      <path d="M32 18v14l10 6"/>
      <path d="M20 8l4 6M44 8l-4 6"/>
    </svg>`,
    features: [
      'Platform strategy and setup',
      'Content creation and scheduling',
      'Community management',
      'Paid advertising campaigns',
      'Performance tracking and reporting',
      'Brand voice development'
    ],
    subservices: [
      {
        slug: 'facebook',
        title: 'Facebook Marketing',
        description: 'Leverage Facebook\'s massive reach to connect with homeowners and property managers.',
        features: [
          'Business page optimization',
          'Content strategy and posting',
          'Facebook Ads management',
          'Audience targeting',
          'Messenger marketing',
          'Review management'
        ]
      },
      {
        slug: 'instagram',
        title: 'Instagram Marketing',
        description: 'Showcase your best work visually and attract clients through stunning project photos.',
        features: [
          'Profile optimization',
          'Visual content strategy',
          'Stories and Reels creation',
          'Hashtag strategy',
          'Instagram Ads',
          'Engagement growth'
        ]
      },
      {
        slug: 'youtube',
        title: 'YouTube Marketing',
        description: 'Create video content that demonstrates your expertise and builds trust with potential clients.',
        features: [
          'Channel setup and optimization',
          'Video content strategy',
          'Video SEO optimization',
          'Thumbnail design',
          'YouTube Ads management',
          'Analytics and reporting'
        ]
      }
    ]
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    description: 'Get your business in front of customers actively searching for your services with targeted pay-per-click advertising.',
    longDescription: 'Google Ads puts your construction business at the top of search results when customers are ready to hire. We create and manage high-converting campaigns that deliver qualified leads while maximizing your advertising budget.',
    icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M32 8l20 12v24l-20 12-20-12V20l20-12z"/>
      <path d="M32 20v24"/>
      <path d="M20 26l12 6 12-6"/>
      <circle cx="32" cy="32" r="6"/>
    </svg>`,
    features: [
      'Search campaign setup and management',
      'Keyword research and bid optimization',
      'Ad copywriting that converts',
      'Landing page optimization',
      'Conversion tracking setup',
      'Monthly performance reporting'
    ],
    subservices: [
      {
        slug: 'search-ads',
        title: 'Search Ads',
        description: 'Appear at the top of Google when customers search for your services.',
        features: [
          'Keyword targeting strategy',
          'Ad copy optimization',
          'Negative keyword management',
          'Bid strategy optimization',
          'Quality score improvement',
          'A/B testing'
        ]
      },
      {
        slug: 'local-service-ads',
        title: 'Local Service Ads',
        description: 'Get the Google Guaranteed badge and appear above regular search ads.',
        features: [
          'Google Guaranteed setup',
          'Profile optimization',
          'Review management',
          'Lead tracking',
          'Budget optimization',
          'Dispute management'
        ]
      }
    ]
  },
  {
    slug: 'bing-ads',
    title: 'Bing Ads',
    description: 'Reach untapped audiences on Microsoft\'s search network with cost-effective PPC campaigns.',
    longDescription: 'Bing Ads (Microsoft Advertising) reaches millions of searchers that Google doesn\'t. With typically lower costs per click and less competition, it\'s a smart addition to your digital marketing strategy for construction companies.',
    icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="12" y="8" width="40" height="48" rx="4"/>
      <path d="M20 20h24"/>
      <path d="M20 28h16"/>
      <path d="M20 36h20"/>
      <circle cx="40" cy="46" r="6"/>
      <path d="M38 46l2 2 4-4"/>
    </svg>`,
    features: [
      'Microsoft Advertising campaign setup',
      'LinkedIn audience targeting',
      'Import from Google Ads',
      'Cost-effective bidding strategies',
      'Cross-platform optimization',
      'Detailed ROI reporting'
    ],
    subservices: [
      {
        slug: 'microsoft-search',
        title: 'Microsoft Search Ads',
        description: 'Reach customers on Bing, Yahoo, and AOL search networks.',
        features: [
          'Campaign structure optimization',
          'Audience targeting',
          'Ad extensions setup',
          'Device bid adjustments',
          'Geographic targeting',
          'Performance monitoring'
        ]
      }
    ]
  },
  {
    slug: 'review-reharvesting',
    title: 'Review Reharvesting',
    description: 'Turn your happy customers into powerful advocates with strategic review generation and management.',
    longDescription: 'Reviews are the new word-of-mouth for construction companies. Our review reharvesting service helps you collect, manage, and leverage customer reviews to build trust and win more jobs.',
    icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M32 8l6 14h14l-11 9 4 15-13-9-13 9 4-15-11-9h14l6-14z"/>
      <circle cx="32" cy="32" r="4"/>
    </svg>`,
    features: [
      'Automated review request system',
      'Multi-platform review management',
      'Negative review response strategy',
      'Review widget for your website',
      'Reputation monitoring',
      'Review analytics and reporting'
    ],
    subservices: [
      {
        slug: 'google-reviews',
        title: 'Google Review Management',
        description: 'Build your Google Business Profile reputation with more 5-star reviews.',
        features: [
          'Automated follow-up sequences',
          'Review request templates',
          'Response management',
          'Review monitoring alerts',
          'Competitor review analysis',
          'Star rating improvement strategy'
        ]
      },
      {
        slug: 'reputation-management',
        title: 'Reputation Management',
        description: 'Monitor and manage your online reputation across all platforms.',
        features: [
          'Multi-platform monitoring',
          'Review aggregation',
          'Sentiment analysis',
          'Crisis response planning',
          'Positive content promotion',
          'Brand mention tracking'
        ]
      }
    ]
  }
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getSubService(serviceSlug: string, subserviceSlug: string): SubService | undefined {
  const service = getService(serviceSlug);
  return service?.subservices.find(s => s.slug === subserviceSlug);
}
