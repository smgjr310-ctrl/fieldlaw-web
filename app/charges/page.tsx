import { ChargeBrowser } from "../../components/ChargeBrowser";
import { ModuleHero } from "../../components/ModuleHero";

export default function ChargesPage() {
  return (
    <main className="app-shell">
      <ModuleHero
        eyebrow="Utah State Code"
        title="Charges"
        description="Search by charge name, Utah code, category, element, officer checklist item, evidence item, enhancement, or related charge."
      />
      <ChargeBrowser />
    </main>
  );
}
