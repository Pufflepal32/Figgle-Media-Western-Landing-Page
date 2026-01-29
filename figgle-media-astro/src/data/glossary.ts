export interface GlossaryTerm {
  slug: string;
  term: string;
  title: string;
  description: string;
  content: string;
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'what-is-seo',
    term: 'SEO',
    title: 'What is SEO?',
    description: 'Search Engine Optimization (SEO) is the practice of improving your website to increase its visibility in search engines like Google.',
    content: `
## What is SEO?

Search Engine Optimization (SEO) is the practice of improving your website to increase its visibility when people search for products or services related to your business in Google and other search engines.

### Why SEO Matters for Construction Companies

When homeowners need a roofer, plumber, or contractor, they typically start with a Google search. If your website doesn't appear on the first page of results, you're missing out on potential customers who are actively looking for your services.

### Key Components of SEO

**On-Page SEO**: Optimizing individual pages on your website with relevant keywords, quality content, and proper HTML structure.

**Off-Page SEO**: Building authority through backlinks from other reputable websites, citations, and online mentions.

**Technical SEO**: Ensuring your website is fast, mobile-friendly, secure, and easy for search engines to crawl and index.

**Local SEO**: Optimizing for location-based searches like "plumber near me" through Google Business Profile and local citations.

### How Long Does SEO Take?

SEO is a long-term strategy. Most construction companies start seeing meaningful results within 3-6 months, with continued improvement over time.
    `,
    relatedTerms: ['local-seo', 'google-ads', 'content-marketing']
  },
  {
    slug: 'what-is-ppc',
    term: 'PPC',
    title: 'What is PPC?',
    description: 'Pay-Per-Click (PPC) is an advertising model where you pay each time someone clicks on your ad.',
    content: `
## What is PPC?

Pay-Per-Click (PPC) is an online advertising model where advertisers pay a fee each time one of their ads is clicked. It's essentially buying visits to your site rather than earning them organically.

### How PPC Works for Contractors

When someone searches "emergency plumber near me," your ad can appear at the top of Google search results. You only pay when they click on your ad, making it a cost-effective way to reach customers actively searching for your services.

### Benefits of PPC for Construction Companies

**Immediate Visibility**: Unlike SEO, PPC can get you to the top of search results immediately.

**Targeted Reach**: Show ads only to people in your service area searching for your specific services.

**Measurable Results**: Track exactly how many leads and calls your ads generate.

**Budget Control**: Set daily or monthly spending limits and adjust based on performance.

### Google Ads vs. Other Platforms

While Google Ads is the most popular PPC platform, you can also run PPC campaigns on Facebook, Instagram, and Microsoft Bing.
    `,
    relatedTerms: ['google-ads', 'seo', 'conversion-rate']
  },
  {
    slug: 'what-is-local-seo',
    term: 'Local SEO',
    title: 'What is Local SEO?',
    description: 'Local SEO optimizes your online presence to attract customers from local searches like "contractor near me."',
    content: `
## What is Local SEO?

Local SEO is a search engine optimization strategy that helps your business be more visible in local search results on Google and other search engines.

### Why Local SEO is Critical for Construction Companies

Most construction and home service businesses serve a specific geographic area. Local SEO ensures you appear when potential customers in your area search for services you provide.

### Key Local SEO Factors

**Google Business Profile**: Your free business listing on Google that appears in local search results and Google Maps.

**NAP Consistency**: Your Name, Address, and Phone number should be identical across all online directories.

**Local Citations**: Mentions of your business on local directories, industry sites, and review platforms.

**Reviews**: Positive customer reviews significantly impact your local search rankings.

**Local Content**: Creating content relevant to your service area and community.

### The Local Pack

The "Local Pack" is the box of three local business listings that appears at the top of Google search results for local queries. Getting into this pack dramatically increases your visibility.
    `,
    relatedTerms: ['seo', 'google-ads', 'lead-generation']
  },
  {
    slug: 'what-is-content-marketing',
    term: 'Content Marketing',
    title: 'What is Content Marketing?',
    description: 'Content marketing is creating and sharing valuable content to attract and engage your target audience.',
    content: `
## What is Content Marketing?

Content marketing is a strategic approach focused on creating and distributing valuable, relevant content to attract and retain a clearly defined audience — ultimately driving profitable customer action.

### Content Marketing for Construction Companies

For contractors, content marketing means creating helpful resources that answer questions potential customers have, establishing your expertise and building trust before they ever contact you.

### Types of Content That Work

**Blog Posts**: Articles answering common questions like "How much does a roof replacement cost?" or "Signs you need to replace your water heater."

**Before/After Galleries**: Visual proof of your quality work that helps customers envision their own projects.

**How-To Guides**: Educational content that positions you as an expert while providing genuine value.

**Videos**: Project walkthroughs, tips, and behind-the-scenes content that humanizes your brand.

### Benefits of Content Marketing

- Improves SEO by adding fresh, relevant content to your website
- Builds trust and authority with potential customers
- Provides shareable content for social media
- Generates leads long after the content is published
    `,
    relatedTerms: ['seo', 'social-media-marketing', 'lead-generation']
  },
  {
    slug: 'what-is-social-media-marketing',
    term: 'Social Media Marketing',
    title: 'What is Social Media Marketing?',
    description: 'Social media marketing uses platforms like Facebook and Instagram to promote your business and engage with customers.',
    content: `
## What is Social Media Marketing?

Social media marketing is the use of social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic.

### Why Social Media Matters for Contractors

Homeowners spend significant time on social media. Platforms like Facebook and Instagram let you showcase your work, build trust, and stay top-of-mind when they need your services.

### Best Platforms for Construction Companies

**Facebook**: Great for local reach, customer reviews, and community engagement. Facebook Ads offer powerful targeting options.

**Instagram**: Perfect for visual content like project photos, before/after transformations, and behind-the-scenes content.

**YouTube**: Ideal for longer-form content like project walkthroughs, how-to videos, and customer testimonials.

### Content Ideas for Contractors

- Project progress and completion photos
- Before and after transformations
- Customer testimonials and reviews
- Team spotlights and company culture
- Tips and educational content
- Community involvement and local events
    `,
    relatedTerms: ['content-marketing', 'lead-generation', 'conversion-rate']
  },
  {
    slug: 'what-is-google-ads',
    term: 'Google Ads',
    title: 'What is Google Ads?',
    description: 'Google Ads is Google\'s advertising platform that lets you display ads in search results and across the web.',
    content: `
## What is Google Ads?

Google Ads (formerly Google AdWords) is an online advertising platform developed by Google where advertisers bid to display ads, product listings, and video content to web users.

### How Google Ads Works for Contractors

When someone searches for "roof repair near me," you can bid to have your ad appear at the top of the search results. You only pay when someone clicks on your ad.

### Types of Google Ads Campaigns

**Search Ads**: Text ads that appear in Google search results when people search for keywords related to your services.

**Local Services Ads**: Pay-per-lead ads specifically for home service providers that appear at the very top of search results.

**Display Ads**: Visual ads shown across millions of websites in Google's Display Network.

**Video Ads**: Ads that appear on YouTube and across Google's video partners.

### Google Ads vs. SEO

While SEO is a long-term organic strategy, Google Ads provides immediate visibility. Most successful contractors use both for maximum coverage.
    `,
    relatedTerms: ['ppc', 'seo', 'local-seo']
  },
  {
    slug: 'what-is-web-design',
    term: 'Web Design',
    title: 'What is Web Design?',
    description: 'Web design encompasses the visual appearance, layout, and user experience of your website.',
    content: `
## What is Web Design?

Web design refers to the design of websites displayed on the internet. It focuses on the user experience and includes website layout, content production, and graphic design.

### Why Web Design Matters for Contractors

Your website is often the first impression potential customers have of your business. A professional, well-designed website builds trust and converts more visitors into leads.

### Key Elements of Effective Contractor Websites

**Professional Appearance**: Clean design that reflects the quality of your work.

**Mobile Responsiveness**: Over 60% of searches happen on mobile devices. Your site must work perfectly on phones.

**Fast Loading Speed**: Slow websites lose visitors. Speed also affects your Google rankings.

**Clear Calls-to-Action**: Make it easy for visitors to contact you with prominent phone numbers and contact forms.

**Portfolio/Gallery**: Showcase your best work to build trust and demonstrate expertise.

**Service Area Information**: Clearly communicate where you work and what services you offer.

### The Impact of Good Web Design

Contractors with professional websites typically see higher conversion rates, more qualified leads, and the ability to charge premium prices.
    `,
    relatedTerms: ['responsive-design', 'seo', 'conversion-rate']
  },
  {
    slug: 'what-is-responsive-design',
    term: 'Responsive Design',
    title: 'What is Responsive Design?',
    description: 'Responsive design ensures your website looks and works great on all devices, from phones to desktops.',
    content: `
## What is Responsive Design?

Responsive web design is an approach that makes web pages render well on a variety of devices and window sizes, from minimum to maximum display size.

### Why Responsive Design is Essential

Over 60% of web traffic now comes from mobile devices. If your website doesn't work well on phones, you're losing potential customers.

### How Responsive Design Works

Responsive websites automatically adjust their layout based on the screen size:

- **Desktop**: Full-width layouts with multiple columns
- **Tablet**: Simplified layouts with adjusted navigation
- **Mobile**: Single-column layouts with touch-friendly elements

### Google's Mobile-First Indexing

Google now primarily uses the mobile version of your website for indexing and ranking. If your site isn't mobile-friendly, your search rankings will suffer.

### Signs You Need Responsive Design

- Text is too small to read on mobile
- Users have to pinch and zoom to navigate
- Buttons and links are hard to tap
- Images don't fit the screen properly
- Forms are difficult to fill out on mobile
    `,
    relatedTerms: ['web-design', 'seo', 'conversion-rate']
  },
  {
    slug: 'what-is-conversion-rate',
    term: 'Conversion Rate',
    title: 'What is Conversion Rate?',
    description: 'Conversion rate is the percentage of website visitors who take a desired action, like filling out a contact form.',
    content: `
## What is Conversion Rate?

Conversion rate is the percentage of visitors to your website that complete a desired goal (a conversion) out of the total number of visitors.

### What Counts as a Conversion?

For contractors, common conversions include:

- Filling out a contact form
- Calling your phone number
- Requesting a quote
- Scheduling an appointment
- Signing up for a newsletter

### How to Calculate Conversion Rate

Conversion Rate = (Number of Conversions / Total Visitors) × 100

Example: If 1,000 people visit your website and 30 fill out your contact form, your conversion rate is 3%.

### What's a Good Conversion Rate?

For contractor websites, a conversion rate between 2-5% is typical. Top-performing websites can achieve 5-10% or higher.

### Improving Your Conversion Rate

- Clear, prominent calls-to-action
- Fast loading speeds
- Mobile-friendly design
- Trust signals (reviews, certifications, guarantees)
- Easy-to-find contact information
- Compelling offers and messaging
    `,
    relatedTerms: ['lead-generation', 'web-design', 'ppc']
  },
  {
    slug: 'what-is-lead-generation',
    term: 'Lead Generation',
    title: 'What is Lead Generation?',
    description: 'Lead generation is the process of attracting and converting potential customers who are interested in your services.',
    content: `
## What is Lead Generation?

Lead generation is the process of attracting and converting strangers and prospects into someone who has indicated interest in your company's product or service.

### Lead Generation for Contractors

For construction and home service companies, a lead is typically someone who:

- Requests a quote or estimate
- Calls your phone number
- Fills out a contact form
- Schedules a consultation
- Downloads a guide or resource

### Lead Generation Channels

**SEO & Organic Search**: Getting found when people search for your services on Google.

**Paid Advertising**: Google Ads, Facebook Ads, and Local Services Ads.

**Social Media**: Building awareness and driving traffic from social platforms.

**Referrals**: Encouraging happy customers to refer friends and family.

**Direct Mail**: Targeted mailings to specific neighborhoods or demographics.

### Lead Quality vs. Quantity

Not all leads are equal. Focus on generating qualified leads—people who actually need your services, are in your service area, and have the budget for your work.

### Measuring Lead Generation Success

Track metrics like cost-per-lead, lead-to-customer conversion rate, and customer lifetime value to understand the true effectiveness of your marketing.
    `,
    relatedTerms: ['conversion-rate', 'seo', 'ppc']
  }
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(t => t.slug === slug);
}
