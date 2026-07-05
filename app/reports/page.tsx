import { GuideList } from "../../components/GuideList";
import { ModuleHero } from "../../components/ModuleHero";
import { reportGuides } from "../../lib/data";

export default function ReportsPage() {
  return (
    <main className="app-shell">
      <ModuleHero
        eyebrow="Report Guides"
        title="Report Writing"
        description="Report sections, missing details, sample outline prompts, and officer review reminders."
      />
      <GuideList guides={reportGuides} />
    </main>
  );
}
