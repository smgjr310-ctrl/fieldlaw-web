"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allSearchText, chargeGroups, charges, disclaimer, duiSfstChecklist, reportGuides, warrantGuides } from "../lib/data";
import { ChecklistPanel } from "./ChecklistPanel";

const allFilter = "All";

export function FieldLawShell() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(allFilter);
  const categories = useMemo(() => [allFilter, ...chargeGroups.map((group) => group.title)], []);
  const visibleCharges = useMemo(() => {
    const q = query.trim().toLowerCase();
    return charges.filter((charge) => {
      const matchesFilter = filter === allFilter || charge.categories.includes(filter);
      return matchesFilter && (!q || allSearchText(charge).includes(q));
    });
  }, [filter, query]);

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

      <section className="panel search-panel" id="utah-state-code">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Utah State Code</p>
            <h2>Common offenses with code sections, elements, checklists, enhancements, and related charges.</h2>
          </div>
        </div>
        <input
          className="search-input"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search charge, code, category, element, checklist item..."
          value={query}
        />
        <div className="chip-row" role="list">
          {categories.map((category) => (
            <button className={category === filter ? "chip active" : "chip"} key={category} onClick={() => setFilter(category)} type="button">
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="charge-grid" aria-label="Charge results">
        {visibleCharges.map((charge) => (
          <Link className="charge-card" href={`/charges/${charge.id}`} key={charge.id}>
            <div className="card-meta">
              <span>{charge.categories[0]}</span>
              <span>{charge.codeSection}</span>
            </div>
            <h3>{charge.title}</h3>
            <p>{charge.synopsis}</p>
            <div className="mini-tags">
              {charge.categories.slice(1, 4).map((category) => <span key={category}>{category}</span>)}
            </div>
          </Link>
        ))}
      </section>

      <section className="panel" id="dui-sfst">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">DUI / SFST</p>
            <h2>{duiSfstChecklist.title}</h2>
          </div>
        </div>
        <ChecklistPanel storageKey="fieldlaw:dui-sfst" sections={[{ title: "DUI / SFST", items: duiSfstChecklist.items }]} />
      </section>

      <GuideCollection id="warrants" eyebrow="Search Warrants" guides={warrantGuides} />
      <GuideCollection id="reports" eyebrow="Report Guides" guides={reportGuides} />

      <section className="panel" id="about">
        <p className="eyebrow">About / Disclaimer</p>
        <h2>FieldLaw</h2>
        <p>FieldLaw is a non-AI, local-first field reference demo for Utah officers. It uses static local content only, with no login, backend, or external API.</p>
        <p className="warning-text">{disclaimer}</p>
      </section>
    </main>
  );
}

function GuideCollection({ id, eyebrow, guides }: { id: string; eyebrow: string; guides: typeof warrantGuides }) {
  return (
    <section className="panel" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="guide-grid">
        {guides.map((guide) => (
          <article className="guide-card" key={guide.id}>
            <span className="guide-category">{guide.category}</span>
            <h3>{guide.title}</h3>
            <p>{guide.purpose}</p>
            {guide.sections.map((section) => (
              <div className="guide-section" key={section.title}>
                <h4>{section.title}</h4>
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
