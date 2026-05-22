export type CaseStudy = {
  slug: string;
  image: string;
  category: string;
  title: string;
  date: string;
  tagline: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  results: string[];
  relatedSlugs: string[];
};

export const allCaseStudies: CaseStudy[] = [
  {
    slug: "federal-procurement",
    image: "/images/case-1.png",
    category: "Management Consulting",
    title: "Restructuring a Federal Agency's Procurement Framework Across 12 States",
    date: "March 2025",
    tagline: "Transforming fragmented procurement into a unified, accountable system.",
    metrics: [
      { value: "12", label: "States Covered" },
      { value: "40%", label: "Cost Reduction" },
      { value: "8mo", label: "Delivery Timeline" },
    ],
    challenge:
      "A federal agency operating across 12 states had no standardized procurement process. Each state office ran independent vendor relationships, creating cost duplication, compliance gaps, and accountability failures that had gone unresolved for over a decade.",
    approach: [
      "QTerra conducted a full procurement audit across all 12 state offices, mapping existing vendor relationships, contract structures, and spend patterns.",
      "We designed a unified procurement framework with centralized vendor pre-qualification, standardized contract templates, and a digital spend tracking system.",
      "Implementation was phased across three tranches over eight months, with QTerra embedded teams providing on-the-ground support at each state office during transition.",
    ],
    results: [
      "40% reduction in procurement costs within the first operating cycle",
      "Full compliance alignment with federal procurement regulations",
      "Single vendor registry adopted across all 12 states",
      "Digital procurement dashboard deployed and operational",
    ],
    relatedSlugs: ["corporate-strategy", "performance-dashboard"],
  },
  {
    slug: "blended-finance",
    image: "/images/case-2.png",
    category: "Financial Advisory",
    title: "Mobilizing $40M in Blended Finance for a Regional Infrastructure Project",
    date: "November 2023",
    tagline: "Structuring a fundable deal where others saw only complexity.",
    metrics: [
      { value: "$40M", label: "Capital Mobilized" },
      { value: "6", label: "Funding Partners" },
      { value: "3mo", label: "Close Timeline" },
    ],
    challenge:
      "A regional development authority needed to fund a cross-border infrastructure initiative but lacked the financial structuring expertise to attract private capital alongside public funding. Previous attempts had stalled due to misaligned risk profiles between funders.",
    approach: [
      "QTerra mapped the full funding landscape -- multilateral development banks, impact investors, and government counterparts -- identifying complementary risk appetites across each.",
      "We designed a blended finance structure separating first-loss capital from senior debt tranches, creating a deal that satisfied both public mandate requirements and private return thresholds.",
      "QTerra led investor presentations, managed due diligence coordination, and negotiated term sheets across six funding partners simultaneously.",
    ],
    results: [
      "$40M successfully closed across six funding partners",
      "Deal structured and closed within three months of engagement",
      "First blended finance infrastructure transaction of this scale in the region",
      "Financial model adopted as a template for two subsequent projects",
    ],
    relatedSlugs: ["federal-procurement", "urban-development"],
  },
  {
    slug: "performance-dashboard",
    image: "/images/case-3.png",
    category: "Digital Solutions",
    title: "Building a Real-Time Performance Dashboard for a State Ministry",
    date: "August 2023",
    tagline: "Turning scattered data into one source of decision-making truth.",
    metrics: [
      { value: "14", label: "Departments Connected" },
      { value: "Real-Time", label: "Data Updates" },
      { value: "12wk", label: "Build Timeline" },
    ],
    challenge:
      "A state ministry was making policy decisions based on reports that were weeks old and manually compiled from 14 departments. Leadership had no real-time visibility into program performance, budget utilization, or delivery timelines.",
    approach: [
      "QTerra ran a data architecture sprint to map all existing reporting sources, identify integration points, and define the key performance indicators leadership actually needed.",
      "We built a centralized dashboard connecting all 14 department data feeds via API integrations, with automated data validation and anomaly flagging.",
      "The platform was built on a low-maintenance stack selected specifically for the ministry's internal IT capacity, with a full handover training program.",
    ],
    results: [
      "Real-time visibility across 14 departments achieved for the first time",
      "Manual reporting eliminated -- saving 200+ staff hours per month",
      "Dashboard deployed and adopted within 12 weeks",
      "Three additional ministries requested access within 60 days of launch",
    ],
    relatedSlugs: ["federal-procurement", "workforce-capability"],
  },
  {
    slug: "urban-development",
    image: "/images/case-4.png",
    category: "Project Management",
    title: "Delivering a Multi-Stakeholder Urban Development Program on Schedule",
    date: "May 2023",
    tagline: "Coordinating complexity so delivery never slips.",
    metrics: [
      { value: "11", label: "Stakeholders Managed" },
      { value: "On Time", label: "Program Delivery" },
      { value: "18mo", label: "Program Duration" },
    ],
    challenge:
      "A large-scale urban renewal program involving 11 government, private, and civil society stakeholders was six months behind schedule and at risk of losing donor funding. No single entity had accountability for overall delivery coordination.",
    approach: [
      "QTerra stepped in as the independent program management office, establishing a governance structure that gave each stakeholder clear roles, decision rights, and escalation paths.",
      "We rebuilt the master delivery schedule from the ground up, re-sequencing workstreams to recover lost time without compromising scope.",
      "Weekly cross-stakeholder reporting and a shared project management platform gave all parties real-time visibility and reduced the coordination failures that had caused delays.",
    ],
    results: [
      "Program brought back on schedule within 10 weeks of QTerra engagement",
      "Full delivery completed on time across all 11 stakeholders",
      "Donor funding retained and reporting obligations met",
      "Governance framework adopted for the program's next phase",
    ],
    relatedSlugs: ["blended-finance", "federal-procurement"],
  },
  {
    slug: "workforce-capability",
    image: "/images/case-5.png",
    category: "HR & Talent",
    title: "Designing a Workforce Capability Framework for a National Institution",
    date: "January 2023",
    tagline: "Building the people infrastructure for long-term institutional performance.",
    metrics: [
      { value: "1,200+", label: "Staff Assessed" },
      { value: "8", label: "Capability Tracks" },
      { value: "6mo", label: "Framework Design" },
    ],
    challenge:
      "A national institution with over 1,200 staff had no formal competency framework, no structured career pathways, and high turnover in mid-level roles. HR decisions were inconsistent and disconnected from institutional strategy.",
    approach: [
      "QTerra conducted a full workforce assessment across all departments, mapping existing competencies against the institution's strategic objectives and identifying critical capability gaps.",
      "We designed an eight-track competency framework covering technical, leadership, and operational roles -- each with defined proficiency levels, development pathways, and assessment criteria.",
      "The framework was co-created with internal HR teams and piloted with three departments before full rollout, ensuring ownership and sustainability beyond the engagement.",
    ],
    results: [
      "Competency framework adopted across all 1,200+ staff",
      "Structured career pathways established for the first time across eight tracks",
      "Mid-level turnover reduced by 28% in the 12 months following implementation",
      "Internal promotion rate increased by 35%",
    ],
    relatedSlugs: ["performance-dashboard", "corporate-strategy"],
  },
  {
    slug: "corporate-strategy",
    image: "/images/case-6.png",
    category: "Management Consulting",
    title: "Leading a Corporate Strategy Refresh for a Pan-African Financial Group",
    date: "October 2022",
    tagline: "Resetting direction for a group operating across five markets.",
    metrics: [
      { value: "5", label: "Markets Covered" },
      { value: "3yr", label: "Strategy Horizon" },
      { value: "4mo", label: "Engagement Duration" },
    ],
    challenge:
      "A pan-African financial group operating across five markets had outgrown its founding strategy. Rapid expansion had created operational fragmentation, unclear group-subsidiary relationships, and a leadership team without a shared view of priorities for the next three years.",
    approach: [
      "QTerra facilitated a structured strategy refresh process with the group's executive committee, combining market analysis, competitive positioning, and internal performance diagnostics.",
      "We ran a series of working sessions across four months to surface strategic choices, pressure-test options, and build leadership alignment around a three-year direction.",
      "The final strategy included a portfolio rationalization recommendation, a revised group operating model, and a prioritized initiative roadmap with clear ownership and milestones.",
    ],
    results: [
      "Three-year strategy adopted unanimously by the executive committee",
      "Portfolio rationalization identified $12M in redeployable capital",
      "Group operating model redesigned across five markets",
      "Strategy roadmap in active execution six months post-engagement",
    ],
    relatedSlugs: ["federal-procurement", "workforce-capability"],
  },
];
