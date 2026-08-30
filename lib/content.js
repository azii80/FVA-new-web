/**
 * Single source of truth for every piece of copy and data on the page.
 * Sections render from these arrays — no repeated markup.
 */

export const brand = {
  name: "FrontVA",
  tagline: "Create once. Automate the rest.",
  description:
    "Content systems for brands — powered by AI, workflows, distribution and creative strategy.",
  email: "hello@frontva.com",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ---------------------------------- Hero --------------------------------- */

export const engineInputs = [
  { label: "Podcast", icon: "Mic" },
  { label: "YouTube video", icon: "Youtube" },
  { label: "Product", icon: "Package" },
  { label: "Founder idea", icon: "Lightbulb" },
];

export const engineOutputs = [
  { label: "Shorts", icon: "Clapperboard", stat: "12x" },
  { label: "Reels", icon: "Film", stat: "8x" },
  { label: "Carousels", icon: "LayoutGrid", stat: "6x" },
  { label: "YouTube", icon: "Youtube", stat: "2x" },
  { label: "Social posts", icon: "MessageSquare", stat: "20x" },
  { label: "Blogs", icon: "FileText", stat: "4x" },
];

/* ----------------------------- Automation layer --------------------------- */

export const automationSteps = [
  { label: "Trigger", icon: "Zap" },
  { label: "Plan", icon: "CalendarRange" },
  { label: "AI Assistant", icon: "Sparkles" },
  { label: "Review", icon: "CheckCheck" },
  { label: "Publish", icon: "Send" },
  { label: "Analyze", icon: "BarChart3" },
  { label: "Sync", icon: "RefreshCw" },
];

/* --------------------------------- Process -------------------------------- */

export const processSteps = [
  { num: "01", title: "Idea", icon: "Lightbulb", note: "Signal, not noise." },
  { num: "02", title: "Create", icon: "Clapperboard", note: "Studio quality." },
  { num: "03", title: "Repurpose", icon: "Layers", note: "One becomes many." },
  { num: "04", title: "Automate", icon: "Workflow", note: "Hands off." },
  { num: "05", title: "Distribute", icon: "Share2", note: "Everywhere at once." },
];

/* -------------------------------- Services -------------------------------- */

export const services = [
  {
    id: "create",
    title: "Create",
    text: "High-quality content, faster.",
    icon: "Clapperboard",
    visual: "editor",
  },
  {
    id: "repurpose",
    title: "Repurpose",
    text: "One asset. Endless formats.",
    icon: "Layers",
    visual: "split",
  },
  {
    id: "distribute",
    title: "Distribute",
    text: "Every platform. Every audience.",
    icon: "Share2",
    visual: "network",
  },
  {
    id: "automate",
    title: "Automate",
    text: "Workflows that run for you.",
    icon: "Workflow",
    visual: "nodes",
  },
];

/* -------------------------------- Portfolio ------------------------------- */

export const portfolioFilters = ["All", "Video", "Shorts", "Social", "Strategy"];

export const portfolioItems = [
  {
    id: "podcast-shorts",
    title: "Podcast → 15 Shorts",
    category: "Shorts",
    stat: "3.2M views",
    kind: "clips",
    span: "wide",
  },
  {
    id: "youtube-strategy",
    title: "YouTube Strategy",
    category: "Strategy",
    stat: "+180% watch time",
    kind: "chart",
    span: "tall",
  },
  {
    id: "saas-launch",
    title: "SaaS Launch Campaign",
    category: "Strategy",
    stat: "42 assets in 9 days",
    kind: "campaign",
    span: "normal",
  },
  {
    id: "product-demo",
    title: "Product Demo Video",
    category: "Video",
    stat: "2:14 avg. hold",
    kind: "player",
    span: "normal",
  },
  {
    id: "instagram-reels",
    title: "Instagram Reels",
    category: "Shorts",
    stat: "94% retention",
    kind: "reels",
    span: "normal",
  },
  {
    id: "social-management",
    title: "Social Media Management",
    category: "Social",
    stat: "120 posts / mo",
    kind: "grid",
    span: "wide",
  },
];

/* --------------------------- Automation outcomes -------------------------- */

export const automationOutcomes = [
  {
    id: "clips",
    title: "Auto Clip Workflows",
    text: "One long video. Many short ones.",
    icon: "Scissors",
    visual: "clips",
  },
  {
    id: "schedule",
    title: "Scheduled Publishing",
    text: "The calendar posts itself.",
    icon: "CalendarCheck",
    visual: "calendar",
  },
  {
    id: "leads",
    title: "Lead Capture",
    text: "Attention becomes pipeline.",
    icon: "UserPlus",
    visual: "leads",
  },
  {
    id: "analytics",
    title: "Analytics Reports",
    text: "What worked, every week.",
    icon: "TrendingUp",
    visual: "analytics",
  },
];

/* ------------------------------- Testimonial ------------------------------ */

export const testimonial = {
  quote:
    "FrontVA became our entire content engine. We focus on our business, they handle everything else.",
  name: "Maya Ellison",
  role: "Head of Growth, Northwind",
  initials: "ME",
};

/* --------------------------------- Footer --------------------------------- */

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "Linkedin" },
  { label: "X", href: "https://x.com/", icon: "X" },
];
