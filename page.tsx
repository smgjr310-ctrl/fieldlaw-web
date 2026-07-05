import Link from "next/link";
import { charges, disclaimer, reportGuides, warrantGuides } from "../lib/data";

const modules = [
  {
    href: "/charges",
    title: "Utah State Code",
    label: `${charges.length} charges`,
    description: "Common offenses with code sections, elements, checklists, enhancements, and related charges."
  },
  {
    href: "/checklists",
    title: "Interactive Checklists",
    label: "Field workflow",
    description: "Open charge detail pages for elements, officer checklist, evidence checklist, enhancements, and notes."
  },
  {
    href: "/warrants",
    title: "Search Warrants",
    label: `${warrantGuides.length} guides`,
    description: "Residence, vehicle, phone/social media, blood, tracking, and records warrant prompts."
  },
  {
    href: "/reports",
    title: "Report Guides",
    label: `${reportGuides.length} guides`,
    description: "Drug, DUI, affidavit, supplemental, and report-writing structure prompts."
  },
  {
    href: "/dui",
    title: "DUI / SFST",
    label: "Checklist",
    description: "Driving pattern, observations, SFST, chemical test, and report consistency prompts."
  },
  {
    href: "/about",
    title: "About / Disclaimer",
    label: "Reference only",
    description: "No AI, no login, no backend, no external APIs. Static local demo content only."
  }
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">FieldLaw</p>
          <h1>Utah Field Reference</h1>
          <p>{disclaimer}</p>
        </div>
        <span className="demo-badge">Demo Data</span>
      </section>

      <section className="dashboard-grid" aria-label="FieldLaw modules">
        {modules.map((module) => (
          <Link className="module-card" href={module.href} key={module.href}>
            <span className="guide-category">{module.label}</span>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
