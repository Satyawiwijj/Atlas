export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  included: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    title: "Websites",
    summary: "Marketing sites and web apps built with a point of view, not a template.",
    description:
      "From a landing page to a full product site, we design and build for your business specifically — real typography, a restrained palette, and performance/accessibility baked in from day one, not bolted on after launch.",
    included: [
      "Marketing & product sites",
      "Web apps and dashboards",
      "Design systems your team can extend",
    ],
  },
  {
    slug: "automation-agents",
    title: "Automation & AI Agents",
    summary: "Workflows and agentic software that take real work off your plate.",
    description:
      "We build the automations and AI agents that handle the repetitive, error-prone parts of running a business — from internal tooling to customer-facing agents — using the same current tools we build our own products with.",
    included: [
      "Workflow & process automation",
      "Custom AI agents",
      "Integrations across your existing stack",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    summary: "Bespoke tools built for exactly how your team works.",
    description:
      "When off-the-shelf software doesn't fit, we build the internal tool, integration, or product feature that does — scoped tightly, shipped fast, and built to be maintained.",
    included: [
      "Internal tools",
      "Third-party integrations",
      "Product feature builds",
    ],
  },
];

export type CaseStudyType = "real" | "in-progress" | "concept";

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  serviceSlugs: string[];
  type: CaseStudyType;
  featured?: boolean;
  stats?: { label: string; value: string }[];
  techStack?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "Our first product.",
    description:
      "Atlas tells B2B companies who to contact, why they're likely to buy, and what to say to them — a ranked, evidence-backed judgment, not another lead list. Every recommendation traces back to the evidence behind it by design: if we can't show our work, it doesn't ship.",
    serviceSlugs: ["websites", "automation-agents", "custom-software"],
    type: "in-progress",
    featured: true,
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
  },
  {
    slug: "meridian-dashboard",
    name: "Meridian Analytics",
    tagline: "Real-time ops dashboard — what we can build.",
    description:
      "A real-time dashboard that pulls from three data sources and updates every 30 seconds — replacing manual Excel reports. This is the kind of internal tooling we build for operations teams.",
    serviceSlugs: ["websites", "custom-software"],
    type: "concept",
    techStack: ["React", "Node.js", "WebSocket", "Tailwind"],
  },
  {
    slug: "beacon-crm",
    name: "Beacon CRM",
    tagline: "Custom CRM — what we can build.",
    description:
      "Off-the-shelf CRMs were either too complex or too simple. We build lightweight, opinionated tools that track client relationships, deal stages, and follow-ups without the bloat. This is the type of custom software we deliver.",
    serviceSlugs: ["custom-software", "automation-agents"],
    type: "concept",
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
  },
];
