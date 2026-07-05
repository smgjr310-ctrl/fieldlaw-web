import type { Guide } from "../lib/types";

export function GuideList({ guides }: { guides: Guide[] }) {
  return (
    <section className="guide-grid">
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
    </section>
  );
}
