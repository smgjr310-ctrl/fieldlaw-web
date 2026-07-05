"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  storageKey: string;
  sections: Array<{ title: string; items: string[] }>;
};

export function ChecklistPanel({ storageKey, sections }: Props) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as { checked?: Record<string, boolean>; notes?: string };
      setChecked(parsed.checked ?? {});
      setNotes(parsed.notes ?? "");
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, [storageKey]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify({ checked, notes }));
  }, [checked, notes, storageKey]);

  const total = useMemo(() => sections.reduce((sum, section) => sum + section.items.length, 0), [sections]);
  const completed = Object.values(checked).filter(Boolean).length;

  return (
    <div className="checklist-shell">
      <div className="checklist-head">
        <div>
          <p className="eyebrow">Interactive Checklist</p>
          <h3>Field Review</h3>
        </div>
        <span className="count-pill">{completed}/{total}</span>
      </div>

      {sections.map((section, sectionIndex) => (
        <section className="check-section" key={section.title}>
          <h4>{section.title}</h4>
          {section.items.map((item, itemIndex) => {
            const key = `${sectionIndex}:${itemIndex}`;
            return (
              <label className="check-row" key={key}>
                <input
                  checked={Boolean(checked[key])}
                  onChange={() => setChecked((current) => ({ ...current, [key]: !current[key] }))}
                  type="checkbox"
                />
                <span>{item}</span>
              </label>
            );
          })}
        </section>
      ))}

      <label className="notes-box">
        <span>Field Notes</span>
        <textarea
          onChange={(event) => setNotes(event.target.value)}
          placeholder="People, timeline, evidence, follow-up, report reminders..."
          value={notes}
        />
      </label>

      <button className="secondary-action" onClick={() => { setChecked({}); setNotes(""); }} type="button">
        Reset Checklist
      </button>
    </div>
  );
}
