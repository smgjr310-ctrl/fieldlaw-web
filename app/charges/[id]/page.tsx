import Link from "next/link";
import { notFound } from "next/navigation";
import { ChecklistPanel } from "../../../components/ChecklistPanel";
import { disclaimer, findCharge, charges } from "../../../lib/data";

export function generateStaticParams() {
  return charges.map((charge) => ({ id: charge.id }));
}

export default async function ChargeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const charge = findCharge(id);
  if (!charge) notFound();

  return (
    <main className="app-shell detail-page">
      <Link className="back-link" href="/charges#utah-state-code">Back to Utah State Code</Link>
      <section className="hero compact-hero">
        <div>
          <p className="eyebrow">{charge.categories[0]}</p>
          <h1>{charge.title}</h1>
          <p>{charge.synopsis}</p>
        </div>
        <span className="code-badge">{charge.codeSection}</span>
      </section>

      <section className="detail-layout">
        <article className="panel detail-main">
          <div className="detail-meta">
            <span>{charge.classification}</span>
            {charge.enhancement ? <span>{charge.enhancement}</span> : null}
          </div>
          <DetailSection title="Elements" items={charge.elements} />
          <DetailSection title="Officer Notes" items={charge.officerNotes} />
          <DetailSection title="Related Charges" items={charge.relatedCharges} />
          <p className="warning-text">{disclaimer}</p>
        </article>

        <ChecklistPanel
          storageKey={`fieldlaw:charge:${charge.id}`}
          sections={[
            { title: "Elements", items: charge.elements },
            { title: "Officer Checklist", items: charge.officerChecklist },
            { title: "Evidence Checklist", items: charge.evidenceChecklist },
            { title: "Enhancement Checklist", items: charge.enhancementChecklist }
          ]}
        />
      </section>
    </main>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
