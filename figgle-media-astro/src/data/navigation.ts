export interface NavItem {
  label: string;
  href: string;
}

export interface NavItemWithDropdown {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export const navigation = {
  main: [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      dropdown: [
        { label: 'Our Story', href: '/about' },
        { label: 'Our Process', href: '/about#process' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      label: 'Services',
      href: '/services/seo',
      dropdown: [
        { label: 'SEO Services', href: '/services/seo' },
        { label: 'Web Design', href: '/services/web-development' },
        { label: 'Social Media', href: '/services/social-media' },
        { label: 'Google Ads', href: '/services/google-ads' },
        { label: 'Bing Ads', href: '/services/bing-ads' },
        { label: 'Review Reharvesting', href: '/services/review-reharvesting' }
      ]
    },
    { label: 'Pricing', href: '/pricing' },
    {
      label: 'Our Past Work',
      href: '/portfolio',
      dropdown: [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Case Studies', href: '/portfolio#case-studies' },
        { label: 'Industries We Serve', href: '/industries' }
      ]
    },
    { label: 'Blog', href: '/blog' }
  ] as NavItemWithDropdown[],

  services: [
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'Web Design', href: '/services/web-development' },
    { label: 'Social Media', href: '/services/social-media' },
    { label: 'Google Ads', href: '/services/google-ads' },
    { label: 'Bing Ads', href: '/services/bing-ads' },
    { label: 'Review Reharvesting', href: '/services/review-reharvesting' }
  ] as NavItem[],

  industries: [
    { label: 'Roofers', href: '/industries/roofers' },
    { label: 'HVAC', href: '/industries/hvac' },
    { label: 'Plumbers', href: '/industries/plumbing' },
    { label: 'Electricians', href: '/industries/electrical' },
    { label: 'General Contractors', href: '/industries/general-contractors' },
    { label: 'Remodelers', href: '/industries/remodeling' },
    { label: 'Landscapers', href: '/industries/landscapers' },
    { label: 'Hardscapers', href: '/industries/hardscapers' },
    { label: 'Concrete', href: '/industries/concrete' }
  ] as NavItem[],

  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ] as NavItem[]
};
