import { Users, Globe, HandHeart, Trophy } from 'lucide-react';

export const APP_CONTENT = {
  header: {
    logoMain: "DMO",
    logoSuffix: "Foundation",
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/#about' },
      { label: 'Causes', path: '/#causes' },
      { label: 'Impact', path: '/#impact' },
    ],
    ctaBtn: "Donate Now"
  },
  hero: {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    badge: "Non-Profit Organization",
    titleLine1: "Building a",
    titleHighlight: "Better Future",
    description: "We are dedicated to sustainable development, community empowerment, and providing essential aid where it is needed most. Together, we can create lasting change.",
    primaryBtn: "Make a Donation",
    secondaryBtn: "Our Mission"
  },
  about: {
    badge: "About Our Organization",
    title: "Dedicated to Improving Lives",
    titleHighlight: "Globally",
    intro: "We were established with a singular vision: a world where every individual has the opportunity to thrive. We believe that poverty, lack of education, and healthcare disparity are solvable problems when we work together.",
    description: "Through strategic partnerships, grassroots mobilization, and transparent operations, we deliver high-impact solutions to the world's most pressing challenges.",
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: "98%", label: "Program Efficiency" },
      { value: "100%", label: "Financial Transparency" }
    ]
  },
  statsSection: {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { id: '1', label: 'Lives Impacted', value: '1M+', icon: Users },
      { id: '2', label: 'Countries Served', value: '25+', icon: Globe },
      { id: '3', label: 'Active Volunteers', value: '5,000', icon: HandHeart },
      { id: '4', label: 'Projects Completed', value: '120', icon: Trophy },
    ]
  },
  causes: {
    badge: "Active Campaigns",
    title: "Help Us Make a Difference",
    description: "Choose a cause that resonates with you. Your contribution goes directly to supporting these vital initiatives.",
    items: [
      {
        id: '1',
        title: 'Clean Water Initiative',
        description: 'Implementing sustainable water filtration systems and wells in remote regions to ensure access to safe drinking water for all.',
        image: 'https://images.unsplash.com/photo-1574482620266-993c1b637998?q=80&w=2068&auto=format&fit=crop',
        raised: 12500,
        goal: 30000,
        category: 'Infrastructure'
      },
      {
        id: '2',
        title: 'Child Education Program',
        description: 'Providing textbooks, school supplies, and scholarship opportunities to underprivileged children to foster future leaders.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop',
        raised: 45000,
        goal: 60000,
        category: 'Education'
      },
      {
        id: '3',
        title: 'Emergency Relief Fund',
        description: 'Rapid response team providing food, shelter, and medical assistance to communities affected by natural disasters and conflict.',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop',
        raised: 8900,
        goal: 50000,
        category: 'Humanitarian Aid'
      }
    ]
  },
  testimonials: {
    badge: "Our Community",
    title: "Stories of Impact",
    description: "Listen to the voices of those who make our mission possible—from the beneficiaries we serve to the donors who support us.",
    items: [
      {
        id: 1,
        name: "Maria Rodriguez",
        role: "Community Member",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop",
        quote: "The support we received has transformed our community. We now have access to essential resources we never had before.",
        videoUrl: "#" 
      },
      {
        id: 2,
        name: "James Anderson",
        role: "Monthly Donor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
        quote: "I love knowing exactly where my donation goes. The transparency and impact reports keep me connected to the cause.",
        videoUrl: "#" 
      },
      {
        id: 3,
        name: "Sarah Chen",
        role: "Field Volunteer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop",
        quote: "Working on the ground, I see the smiles and the hope that this organization brings to people every single day.",
        videoUrl: "#" 
      }
    ]
  },
  vision: {
    image: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?q=80&w=2070&auto=format&fit=crop",
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi"
  },
  footer: {
    description: "Restoring hope and dignity to communities worldwide through sustainable development, education, and emergency aid.",
    copyright: `© ${new Date().getFullYear()} DMO Foundation. All rights reserved.`,
    quickLinks: [
      { label: 'About Us', path: '/#about' },
      { label: 'Active Campaigns', path: '/#causes' },
      { label: 'Our Impact', path: '/#impact' },
      { label: 'Donate', path: '/donate' },
      { label: 'Contact', path: '/#contact' },
    ],
    legalLinks: [
        { label: 'Privacy Policy', path: '#' },
        { label: 'Terms of Service', path: '#' }
    ]
  },
  contact: {
    address: {
      line1: "123 Non-Profit Blvd, Suite 100",
      line2: "City, ST 12345"
    },
    phone: "+1 (555) 000-0000",
    email: "contact@foundation.org"
  },
  donatePage: {
    heroImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    title: "Support Our Cause",
    description: "Your generous contribution enables us to provide essential resources to those in need. Every dollar creates impact.",
    benefits: [
        "Your donation directly supports on-the-ground operations and relief efforts.",
        "We maintain full financial transparency with regular impact reports.",
        "Contributions are tax-deductible where applicable by law."
    ]
  }
}