export const ROUTE_PATHS = {
  HOME: '/',
  POSTER: '/poster',
} as const;

export interface BMCItemGroup {
  groupLabel?: string;
  items: string[];
}

export interface BMCTableRow {
  label: string;
  values: string[];
}

export interface BMCTable {
  headers: string[];
  rows: BMCTableRow[];
  totalsRow?: {
    label: string;
    values: string[];
  };
}

export interface BMCSection {
  id: string;
  title: string;
  emoji: string;
  groups?: BMCItemGroup[];
  table?: BMCTable;
  footer?: string;
}

export const BMC_DATA: BMCSection[] = [
  {
    id: 'key-partners',
    title: 'Key Partners',
    emoji: '🤝',
    groups: [
      {
        groupLabel: 'Technology Providers',
        items: [
          'Cloud infrastructure providers (AWS, Google Cloud) for scalable rendering',
          'AI model trainers and specialized 3D mapping API providers',
          'Cybersecurity firms ensuring user data privacy and compliance',
        ],
      },
      {
        groupLabel: 'Retail & Brands',
        items: [
          'E-commerce platforms (Myntra, Ajio) for seamless API integration',
          'Independent fashion boutiques for acquiring initial diverse clothing data sets',
          'Sustainable fashion labels looking to drastically reduce physical returns',
        ],
      },
      {
        groupLabel: 'Marketing Partners',
        items: [
          'Fashion influencers and lifestyle vloggers for rapid B2C user acquisition',
          'Digital marketing agencies specializing in AR/VR product campaigns',
        ],
      },
    ],
  },
  {
    id: 'key-activities',
    title: 'Key Activities',
    emoji: '⚙️',
    groups: [
      {
        groupLabel: 'R&D and Engineering',
        items: [
          'Developing highly accurate pose detection & segmentation models',
          'Continuous improvement of visual rendering realism',
        ],
      },
      {
        groupLabel: 'Platform Operations',
        items: [
          'Maintaining server infrastructure and scalability',
          'Data pipeline management for clothing metadata',
        ],
      },
      {
        groupLabel: 'Marketing & Sales',
        items: [
          'B2B partnership pitching to e-commerce platforms',
          'Running B2C targeted ad campaigns',
        ],
      },
    ],
  },
  {
    id: 'key-resources',
    title: 'Key Resources',
    emoji: '🧠',
    groups: [
      {
        groupLabel: 'Intellectual',
        items: [
          'Proprietary ML algorithms for virtual try-on',
          'Patented fitting prediction models',
        ],
      },
      {
        groupLabel: 'Infrastructural',
        items: [
          'High-performance GPU cloud computing clusters',
          'Scalable database for image processing',
        ],
      },
      {
        groupLabel: 'Human',
        items: [
          'Expert AI/ML engineers and researchers',
          'Full-stack developers and UI/UX designers',
        ],
      },
      {
        groupLabel: 'Financial',
        items: [
          'Seed capital for R&D phase',
          'Working capital for cloud operations',
        ],
      },
    ],
  },
  {
    id: 'value-proposition',
    title: 'Value Proposition',
    emoji: '💎',
    groups: [
      {
        groupLabel: 'For Shoppers',
        items: [
          'Uniqueness: The only platform offering 99% photorealistic virtual fit in under 2 seconds without requiring manual body measurements.',
          'Eliminates guesswork, drastically saves time, and significantly boosts confidence in online apparel purchases.',
          'Empowers users to experiment with bold new styles risk-free before committing to a purchase.',
        ],
      },
      {
        groupLabel: 'For Retailers',
        items: [
          'Reduces costly return rates by up to 40%, directly protecting profit margins.',
          'Increases average order value (AOV) by providing personalized, high-converting cross-selling recommendations.',
          'Enhances brand loyalty through a cutting-edge, interactive user experience.',
        ],
      },
      {
        groupLabel: 'For The Environment',
        items: [
          'Significantly lowers carbon footprint by reducing the massive reverse logistics chain of returned clothing.',
          'Decreases packaging waste associated with "bracket buying" (buying multiple sizes to return the ones that don\'t fit).',
        ],
      },
    ],
  },
  {
    id: 'customer-relationships',
    title: 'Customer Relationships',
    emoji: '💬',
    groups: [
      {
        groupLabel: 'Self-Service & Automation',
        items: [
          'Instant AI-driven style suggestions based on try-on history.',
          'Automated onboarding guides and tooltips in-app.',
        ],
      },
      {
        groupLabel: 'Specific Practices & Offers',
        items: [
          'Example: "Try 3 outfits, get 10% off your purchase" promotional discounts with partner brands.',
          'Priority VIP customer support for premium B2B retail clients.',
          'Monthly newsletter featuring trending styles uniquely mapped to user body types.',
        ],
      },
    ],
  },
  {
    id: 'channels',
    title: 'Channels',
    emoji: '📡',
    groups: [
      {
        groupLabel: 'B2C',
        items: [
          'Direct iOS/Android Mobile Application',
          'Web-based try-on portal via social media links',
          'Targeted Instagram and Snapchat AR filter ads',
        ],
      },
      {
        groupLabel: 'B2B',
        items: [
          'Seamless API integration directly on partner retailer websites',
          'Tech expos and fashion trade shows for lead generation',
        ],
      },
    ],
  },
  {
    id: 'customer-segments',
    title: 'Customer Segments',
    emoji: '👥',
    groups: [
      {
        groupLabel: 'Primary (B2C)',
        items: [
          'Gen Z & Millennial fashion-conscious online shoppers dealing with sizing anxiety.',
          'Plus-size and petite shoppers who struggle to find accurate visual representations of fit.',
          'Eco-conscious consumers actively trying to reduce their shopping carbon footprint.',
        ],
      },
      {
        groupLabel: 'Secondary (B2B)',
        items: [
          'Mid-to-large tier e-commerce fashion platforms suffering from high return rates and thin margins.',
          'Emerging direct-to-consumer (D2C) clothing brands wanting a competitive tech edge.',
        ],
      },
      {
        groupLabel: 'Additional Segments',
        items: [
          'Independent fashion content creators seeking to showcase outfits virtually to their audience.',
          'Custom tailoring businesses looking to provide digital previews of bespoke garments.',
        ],
      },
    ],
  },
  {
    id: 'cost-structure',
    title: 'Cost Structure',
    emoji: '💸',
    table: {
      headers: ['Costs', 'Year 1', 'Year 2', 'Year 3'],
      rows: [
        { label: 'Office rent (Fixed)', values: ['1,00,000', '5,00,000', '10,00,000'] },
        { label: 'Talent (Fixed)', values: ['12,00,000', '50,00,000', '1,20,00,000'] },
        { label: 'App Dev. (Fixed)', values: ['8,00,000', '15,00,000', '40,00,000'] },
        { label: 'Marketing (Variable)', values: ['3,00,000', '20,00,000', '50,00,000'] },
        { label: 'Cloud & AI (Variable)', values: ['5,00,000', '25,00,000', '75,00,000'] },
      ],
      totalsRow: {
        label: 'Total',
        values: ['29,00,000', '1,15,00,000', '2,95,00,000']
      }
    },
    footer: 'Timeline clearly tracks costs from MVP (Year 1) to scaling (Year 3).'
  },
  {
    id: 'revenue-streams',
    title: 'Revenue Streams',
    emoji: '💰',
    table: {
      headers: ['Year', 'Year 1', 'Year 2', 'Year 3'],
      rows: [
        { label: 'B2B Licensing', values: ['5,00,000', '30,00,000', '1,00,00,000'] },
        { label: 'Subscriptions', values: ['2,00,000', '15,00,000', '50,00,000'] },
        { label: 'Commissions', values: ['1,00,000', '10,00,000', '40,00,000'] },
        { label: 'API Usage', values: ['0', '20,00,000', '80,00,000'] },
        { label: 'Sponsored Ads', values: ['0', '5,00,000', '30,00,000'] },
      ],
      totalsRow: {
        label: 'Net Revenue',
        values: ['8,00,000', '80,00,000', '3,00,00,000']
      }
    },
    footer: 'Expected Break-even Period: 14 Months based on projected API scaling.'
  },
];