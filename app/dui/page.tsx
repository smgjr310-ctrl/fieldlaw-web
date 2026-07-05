import { ChecklistPanel } from "../../components/ChecklistPanel";
import { ModuleHero } from "../../components/ModuleHero";
import { duiSfstChecklist } from "../../lib/data";

export default function DuiPage() {
  return (
    <main className="app-shell">
      <ModuleHero
        eyebrow="DUI / SFST"
        title={duiSfstChecklist.title}
        description="Driving pattern, contact observations, SFST clues, chemical test/admonition, and report consistency prompts."
      />
      <ChecklistPanel storageKey="fieldlaw:dui-sfst" sections={[{ title: "DUI / SFST", items: duiSfstChecklist.items }]} />
    </main>
  );
}
