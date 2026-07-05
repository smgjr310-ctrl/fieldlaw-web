import { ModuleHero } from "../../components/ModuleHero";
import { disclaimer } from "../../lib/data";

export default function AboutPage() {
  return (
    <main className="app-shell">
      <ModuleHero
        eyebrow="About"
        title="FieldLaw"
        description="A mobile-first, dark-mode field reference demo for Utah officers."
      />
      <section className="panel about-copy">
        <h2>Reference Tool Only</h2>
        <p>{disclaimer}</p>
        <p>
          FieldLaw Web uses local static data only. It does not use AI, a backend, login, external APIs, or remote legal data.
        </p>
        <p>
          Legal content in this demo is placeholder/reference content for presentation and workflow testing. Verify current Utah Code,
          case law, prosecutor guidance, and agency policy before relying on any charge, element, classification, enhancement, or procedure.
        </p>
      </section>
    </main>
  );
}
