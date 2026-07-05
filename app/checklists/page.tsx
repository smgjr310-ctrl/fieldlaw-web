import { ChargeBrowser } from "../../components/ChargeBrowser";
import { ModuleHero } from "../../components/ModuleHero";

export default function ChecklistsPage() {
  return (
    <main className="app-shell">
      <ModuleHero
        eyebrow="Interactive Checklists"
        title="Charge Checklists"
        description="Choose a charge to work through elements, officer checklist, evidence checklist, enhancements, notes, and resettable local progress."
      />
      <ChargeBrowser checklistMode />
    </main>
  );
}
