export function ModuleHero({ eyebrow, title, description, badge = "Demo Data" }: { eyebrow: string; title: string; description: string; badge?: string }) {
  return (
    <section className="hero compact-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="demo-badge">{badge}</span>
    </section>
  );
}
