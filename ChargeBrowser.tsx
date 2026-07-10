"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allSearchText, chargeGroups, charges } from "../lib/data";

const allFilter = "All";

export function ChargeBrowser({ checklistMode = false }: { checklistMode?: boolean }) {
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
    <>
      <section className="panel search-panel" id="utah-state-code">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Utah State Code</p>
            <h2>Common offenses with code sections, elements, checklists, enhancements, and related charges.</h2>
          </div>
          <span className="count-pill">{visibleCharges.length}</span>
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
            <p className="workflow-note">{checklistMode ? "Open for interactive elements, officer checklist, evidence checklist, enhancements, and notes." : "Open for detail page and interactive checklist."}</p>
            <div className="mini-tags">
              {charge.categories.slice(1, 4).map((category) => <span key={category}>{category}</span>)}
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
