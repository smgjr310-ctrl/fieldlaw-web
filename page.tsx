import { GuideList } from "../../components/GuideList";
import { ModuleHero } from "../../components/ModuleHero";
import { warrantGuides } from "../../lib/data";

export default function WarrantsPage() {
  return (
    <main className="app-shell">
      <ModuleHero
        eyebrow="Search Warrants"
        title="Warrant Guides"
        description="Local warrant drafting prompts for probable cause, nexus, particularity, evidence descriptions, and common mistakes."
      />
      <GuideList guides={warrantGuides} />
    </main>
  );
}
