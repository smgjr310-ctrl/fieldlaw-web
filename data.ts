import type { Charge, ChargeGroup, Guide } from "./types";

export const disclaimer = "Reference tool only. Verify with current Utah Code and agency policy.";

export const charges: Charge[] = [
  {
    id: "simple-possession-schedule-i-ii",
    title: "Simple Possession - Schedule I or II",
    codeSection: "58-37-8(2)(b)(ii)",
    categories: ["Drug Charges", "Possession", "Controlled Substances"],
    classification: "Class A misdemeanor placeholder; verify current Utah Code.",
    enhancement: "Possible felony enhancement for qualifying prior convictions or listed circumstances; verify current Utah Code.",
    synopsis: "Possession of a Schedule I or II controlled substance without lawful authorization.",
    elements: ["Knowing or intentional possession.", "Substance is Schedule I or II.", "No valid prescription or lawful authorization.", "Facts support actual, constructive, or joint possession."],
    officerChecklist: ["Identify suspected substance.", "Document location and access.", "Document dominion or control facts.", "Check prescription or lawful authorization.", "Check prior convictions and enhancement locations.", "Document field test if completed and send evidence to lab when required."],
    evidenceChecklist: ["Photos of substance and packaging.", "Field test or presumptive result if completed.", "Body camera footage.", "Statements.", "Evidence booking and chain of custody.", "Lab submission or agency-required testing documentation."],
    enhancementChecklist: ["Prior qualifying convictions checked.", "Drug-free zone checked.", "Correctional facility checked.", "Plea in abeyance history checked if applicable."],
    relatedCharges: ["Drug Paraphernalia", "Possession with Intent", "Obstruction of Justice", "Restricted Person"],
    officerNotes: ["Many booking decisions require presumptive results documented in the affidavit.", "Separate observed facts from conclusions."]
  },
  {
    id: "simple-possession-schedule-iii-iv-v-marijuana",
    title: "Simple Possession - Schedule III, IV, V, or Marijuana",
    codeSection: "58-37-8(2)(d)",
    categories: ["Drug Charges", "Possession", "Marijuana"],
    classification: "Class B misdemeanor placeholder; verify current Utah Code.",
    enhancement: "Possible enhancement for repeat offenses; verify current Utah Code.",
    synopsis: "Possession of Schedule III, IV, V, or marijuana without lawful authorization.",
    elements: ["Knowing or intentional possession.", "Substance is Schedule III, IV, V, or marijuana.", "No lawful authorization.", "Possession can be actual, constructive, or joint."],
    officerChecklist: ["Identify substance.", "Document where found.", "Document possession, control, or access.", "Check medical cannabis or prescription status.", "Document field test if completed and send evidence to lab when required."],
    evidenceChecklist: ["Photos.", "Packaging.", "Field test if completed.", "Statements.", "Evidence booking.", "Lab submission or agency-required testing documentation."],
    enhancementChecklist: ["Repeat offense checked.", "Drug-free zone checked.", "Correctional facility checked."],
    relatedCharges: ["Drug Paraphernalia", "Possession with Intent", "Obstruction of Justice"],
    officerNotes: ["Verify marijuana-specific provisions and agency policy."]
  },
  {
    id: "possession-with-intent-schedule-i-ii",
    title: "Possession with Intent to Distribute - Schedule I or II",
    codeSection: "58-37-8(1)(b)(i)",
    categories: ["Drug Charges", "Distribution", "Possession with Intent"],
    classification: "2nd degree felony placeholder; verify current Utah Code.",
    enhancement: "Possible 1st degree felony enhancement; verify current Utah Code.",
    synopsis: "Possession of Schedule I or II substance with facts indicating intent to distribute.",
    elements: ["Knowing or intentional possession.", "Substance is Schedule I or II.", "Intent to distribute, sell, transfer, or provide.", "Intent supported by facts beyond personal use."],
    officerChecklist: ["Document quantity.", "Document packaging style.", "Look for scales, baggies, ledgers, cash, phones, weapons.", "Document statements suggesting sales.", "Consider phone, vehicle, or residence warrant when appropriate.", "Field test if completed and send suspected controlled substances to lab when required."],
    evidenceChecklist: ["Photos of drugs and packaging.", "Scales or baggies.", "Cash or pay/owe sheets.", "Phone evidence noted.", "Buyer/witness statements.", "Evidence booking and lab submission."],
    enhancementChecklist: ["Prior distribution history checked.", "Drug-free zone checked.", "Weapon or restricted person issue checked."],
    relatedCharges: ["Simple Possession", "Paraphernalia", "Restricted Person", "Obstruction"],
    officerNotes: ["Explain why facts show distribution rather than personal use."]
  },
  {
    id: "possession-of-paraphernalia",
    title: "Possession of Drug Paraphernalia",
    codeSection: "58-37a-5",
    categories: ["Drug Charges", "Paraphernalia"],
    classification: "Misdemeanor placeholder; verify current Utah Code.",
    synopsis: "Possession of items used or intended for controlled substance use, storage, or distribution.",
    elements: ["Person possessed item.", "Item qualifies as drug paraphernalia.", "Facts show use or intended use connected to controlled substances."],
    officerChecklist: ["Describe item and location.", "Document residue or drug context.", "Photograph item.", "Document statements or surrounding facts."],
    evidenceChecklist: ["Photos.", "Residue observations.", "Associated drugs or packaging.", "Evidence booking."],
    enhancementChecklist: ["Distribution of paraphernalia considered if facts support it."],
    relatedCharges: ["Simple Possession", "Possession with Intent"],
    officerNotes: ["Tie the item to facts, not just appearance."]
  },
  {
    id: "category-i-restricted-person",
    title: "Category I Restricted Person - Firearm/Dangerous Weapon",
    codeSection: "76-10-503",
    categories: ["Weapons / Restricted Person", "Weapons"],
    classification: "Felony placeholder; verify current Utah Code.",
    synopsis: "Restricted person possession, purchase, transfer, or control of firearm or dangerous weapon.",
    elements: ["Person possessed or controlled firearm/dangerous weapon.", "Person qualifies as Category I restricted person.", "Connection to weapon is documented."],
    officerChecklist: ["Confirm restricted status.", "Document weapon type and location.", "Document possession/control facts.", "Photograph and safely secure weapon."],
    evidenceChecklist: ["Weapon photos.", "Serial number.", "Restriction source documentation.", "Statements and body camera."],
    enhancementChecklist: ["Check drug-related or offense-specific enhancements."],
    relatedCharges: ["Category II Restricted Person", "Possession with Intent", "Obstruction"],
    officerNotes: ["Verify status through reliable records before filing." ]
  },
  {
    id: "category-ii-restricted-person",
    title: "Category II Restricted Person - Firearm/Dangerous Weapon",
    codeSection: "76-10-503",
    categories: ["Weapons / Restricted Person", "Weapons"],
    classification: "Felony placeholder; verify current Utah Code.",
    synopsis: "Restricted person possession or control of firearm or dangerous weapon under Category II status.",
    elements: ["Possession or control of firearm/dangerous weapon.", "Category II restriction applies.", "Facts connect suspect to weapon."],
    officerChecklist: ["Confirm restriction.", "Document access/control.", "Secure and photograph weapon.", "Document statements."],
    evidenceChecklist: ["Weapon evidence.", "Restriction documentation.", "Body camera.", "Statements."],
    enhancementChecklist: ["Check related drug or violent offense context."],
    relatedCharges: ["Category I Restricted Person", "Obstruction"],
    officerNotes: ["Document how the person knew or had access where relevant." ]
  },
  {
    id: "assault",
    title: "Assault",
    codeSection: "76-5-102",
    categories: ["Assault / Person Crimes", "Assault"],
    classification: "Misdemeanor placeholder; verify current Utah Code.",
    synopsis: "Attempt, threat with apparent ability, or act causing bodily injury or creating substantial risk.",
    elements: ["Unlawful force or violence, attempted force, or threat.", "Intent, knowledge, or recklessness as applicable.", "Victim and injury/risk facts documented."],
    officerChecklist: ["Document victim statement.", "Photograph injuries.", "Identify witnesses.", "Document suspect statements and demeanor.", "Check domestic violence relationship."],
    evidenceChecklist: ["Photos.", "Medical records if available.", "911/body camera.", "Witness statements."],
    enhancementChecklist: ["DV relationship checked.", "Protected victim checked.", "Prior convictions checked."],
    relatedCharges: ["Enhanced Assault", "Aggravated Assault", "Domestic Violence Enhancement"],
    officerNotes: ["Be specific about pain, injury, threat, and ability." ]
  },
  {
    id: "aggravated-assault-dangerous-weapon",
    title: "Aggravated Assault - Dangerous Weapon / Strangulation / Serious Injury Risk",
    codeSection: "76-5-103",
    categories: ["Assault / Person Crimes", "Aggravated Assault"],
    classification: "Felony placeholder; verify current Utah Code.",
    synopsis: "Assault involving dangerous weapon, strangulation, or conduct creating serious bodily injury risk.",
    elements: ["Assault occurred.", "Dangerous weapon, strangulation, serious injury, or qualifying risk factor present.", "Facts support mental state and victim impact."],
    officerChecklist: ["Describe weapon or strangulation facts.", "Photograph injuries and scene.", "Document medical treatment.", "Preserve 911/body camera/witness statements."],
    evidenceChecklist: ["Weapon photos/evidence.", "Injury photos.", "Medical documentation.", "Statements."],
    enhancementChecklist: ["DV checked.", "LEO/protected victim checked.", "Serious bodily injury level checked."],
    relatedCharges: ["Assault", "Threat of Violence", "DV Enhancement"],
    officerNotes: ["Capture exact conduct and why it created elevated risk." ]
  },
  {
    id: "protective-order-violation",
    title: "Protective Order Violation",
    codeSection: "76-5-108",
    categories: ["Domestic Violence / Protective Orders", "Protective Orders"],
    classification: "Misdemeanor/felony placeholder; verify current Utah Code.",
    synopsis: "Violation of a valid protective order or qualifying court order.",
    elements: ["Valid order existed.", "Person had notice or service.", "Conduct violated a specific provision.", "Date/time/location documented."],
    officerChecklist: ["Confirm order status.", "Confirm service/notice.", "Quote violated provision.", "Document contact or prohibited conduct."],
    evidenceChecklist: ["Order copy.", "Dispatch/CAD.", "Messages/calls/photos.", "Victim/witness statements."],
    enhancementChecklist: ["Prior violations checked.", "DV facts checked.", "New assault/threat charges checked."],
    relatedCharges: ["Stalking", "Harassment", "Assault", "Threat of Violence"],
    officerNotes: ["Include order number and exact violated term." ]
  },
  {
    id: "interference-with-peace-officer",
    title: "Interference with Peace Officer",
    codeSection: "76-8-305",
    categories: ["Interference / Obstruction", "Officer Safety"],
    classification: "Misdemeanor placeholder; verify current Utah Code.",
    synopsis: "Interfering with a peace officer performing official duties.",
    elements: ["Officer was performing official duties.", "Person knew or should know officer status.", "Person interfered, resisted, or failed to comply as defined by statute."],
    officerChecklist: ["Document lawful duty being performed.", "Quote commands given.", "Describe interference conduct.", "Document warnings and safety issues."],
    evidenceChecklist: ["Body camera.", "CAD/radio traffic.", "Witness statements.", "Injury or force documentation."],
    enhancementChecklist: ["Assault on officer checked.", "Failure to stop checked.", "Obstruction checked."],
    relatedCharges: ["Failure to Stop", "Obstruction", "Assault on Peace Officer"],
    officerNotes: ["Avoid conclusions; describe exact conduct and commands." ]
  },
  {
    id: "emergency-reporting-abuse-standard-false-report",
    title: "Emergency Reporting Abuse - Standard False Report",
    codeSection: "76-9-202",
    categories: ["False Reports / Emergency Abuse", "Public Order"],
    classification: "Misdemeanor placeholder; verify current Utah Code.",
    synopsis: "False emergency report causing or attempting to cause emergency response.",
    elements: ["Report was made or caused.", "Report was false or baseless.", "Emergency response or risk resulted.", "Mental state facts documented."],
    officerChecklist: ["Preserve call/audio records.", "Identify caller/source.", "Document response resources.", "Document falsity evidence."],
    evidenceChecklist: ["911 audio/CAD.", "Phone/account records if available.", "Officer reports.", "Witness statements."],
    enhancementChecklist: ["Swatting/high danger checked.", "Weapon/WMD threat checked.", "Injury or evacuation checked."],
    relatedCharges: ["Swatting", "Obstruction", "Threat of Violence"],
    officerNotes: ["Clearly show how the report was false and what response it caused." ]
  }
];

export const chargeGroups: ChargeGroup[] = [
  { id: "drug-charges", title: "Drug Charges", description: "Controlled substance possession, distribution, paraphernalia, and drug-related enhancements.", chargeIds: ["simple-possession-schedule-i-ii", "simple-possession-schedule-iii-iv-v-marijuana", "possession-with-intent-schedule-i-ii", "possession-of-paraphernalia"] },
  { id: "weapons-restricted-person", title: "Weapons / Restricted Person", description: "Restricted person and weapon possession references.", chargeIds: ["category-i-restricted-person", "category-ii-restricted-person"] },
  { id: "assault-person-crimes", title: "Assault / Person Crimes", description: "Assault, aggravated assault, threats, and victim-centered documentation prompts.", chargeIds: ["assault", "aggravated-assault-dangerous-weapon"] },
  { id: "domestic-protective-orders", title: "Domestic Violence / Protective Orders", description: "Protective order and domestic violence-related references.", chargeIds: ["protective-order-violation"] },
  { id: "false-reports-emergency-abuse", title: "False Reports / Emergency Abuse", description: "Emergency reporting abuse and swatting-style false report references.", chargeIds: ["emergency-reporting-abuse-standard-false-report"] },
  { id: "interference-obstruction", title: "Interference / Obstruction", description: "Interference, obstruction, and officer-safety related references.", chargeIds: ["interference-with-peace-officer"] }
];

export const warrantGuides: Guide[] = [
  {
    id: "residence-warrant",
    title: "Residence Warrant",
    category: "Search Warrants",
    purpose: "Prepare a residence warrant with probable cause, nexus, particularity, and evidence descriptions.",
    sections: [
      { title: "Probable Cause Questions", items: ["What offense is being investigated?", "What facts connect the residence to the offense?", "What evidence is expected at the residence?"] },
      { title: "Nexus Checklist", items: ["Current address verified.", "Suspect connection to residence documented.", "Why evidence is likely there now explained."] },
      { title: "Particularity", items: ["Address, structure description, vehicles, outbuildings.", "Specific evidence categories and date ranges."] },
      { title: "Common Mistakes", items: ["Weak nexus.", "Overbroad item list.", "Stale facts."] }
    ]
  },
  {
    id: "vehicle-warrant",
    title: "Vehicle Warrant",
    category: "Search Warrants",
    purpose: "Document the vehicle, probable cause, places to search, and evidence sought.",
    sections: [
      { title: "Questions", items: ["Why is the vehicle connected?", "Where was it found?", "Who had access?"] },
      { title: "Particularity", items: ["Make, model, plate, VIN if available.", "Compartments, containers, digital devices if applicable."] }
    ]
  },
  {
    id: "phone-warrant",
    title: "Phone / Social Media Warrant",
    category: "Digital Warrants",
    purpose: "Guide phone, account, and social media warrant drafting.",
    sections: [
      { title: "Nexus", items: ["Why phone/account likely contains evidence.", "Relevant date range.", "Specific apps, messages, photos, location data, or records sought."] },
      { title: "Common Mistakes", items: ["No date limits.", "No offense-specific nexus.", "Overbroad account data request."] }
    ]
  },
  {
    id: "blood-tracking-financial",
    title: "Blood / Tracking / Financial Records Warrants",
    category: "Special Warrants",
    purpose: "Prompt specialty warrant issues for blood, GPS/tracking, and financial records.",
    sections: [
      { title: "Checklist", items: ["Identify legal authority and time sensitivity.", "Describe evidence expected.", "Limit request to relevant records, devices, or samples."] }
    ]
  }
];

export const reportGuides: Guide[] = [
  {
    id: "drug-possession-report",
    title: "Drug Possession Report",
    category: "Reports",
    purpose: "Report prompts for simple possession and paraphernalia cases.",
    sections: [
      { title: "Required Sections", items: ["Reason for contact.", "Location of substance.", "Possession/control facts.", "Testing and lab/evidence handling."] },
      { title: "Common Missing Details", items: ["No dominion/control facts.", "No prescription check.", "No chain of custody."] }
    ]
  },
  {
    id: "possession-with-intent-report",
    title: "Possession With Intent Report",
    category: "Reports",
    purpose: "Document distribution indicators and why facts exceed personal use.",
    sections: [
      { title: "What to Document", items: ["Quantity.", "Packaging.", "Scales/cash/ledgers/phones.", "Statements or observed transactions."] },
      { title: "Review Checklist", items: ["Distribution facts separated from conclusions.", "Evidence photographed and booked.", "Warrant follow-up noted."] }
    ]
  },
  {
    id: "dui-report",
    title: "DUI Report",
    category: "Reports",
    purpose: "DUI report structure with driving facts, observations, SFSTs, chemical testing, and impairment indicators.",
    sections: [
      { title: "Required Sections", items: ["Vehicle in motion facts.", "Contact observations.", "SFST instructions and clues.", "Chemical test/admonition."] }
    ]
  },
  {
    id: "arrest-affidavit",
    title: "Arrest Affidavit / Supplemental Report",
    category: "Reports",
    purpose: "Affidavit and supplemental report prompts for concise probable cause writing.",
    sections: [
      { title: "Sample Outline", items: ["Who/what/when/where.", "Facts supporting elements.", "Evidence and statements.", "Officer action and booking." ] }
    ]
  }
];

export const duiSfstChecklist = {
  title: "DUI / SFST Checklist",
  items: ["Driving pattern documented.", "Odor, eyes, speech, balance, admissions documented.", "HGN instructions and clues documented.", "Walk-and-turn instructions and clues documented.", "One-leg stand instructions and clues documented.", "Chemical test/admonition documented.", "Body camera and report consistency checked."]
};

export function findCharge(id: string) {
  return charges.find((charge) => charge.id === id);
}

export function allSearchText(charge: Charge) {
  return [charge.title, charge.codeSection, charge.classification, charge.enhancement ?? "", charge.synopsis, ...charge.categories, ...charge.elements, ...charge.officerChecklist, ...charge.evidenceChecklist, ...charge.enhancementChecklist, ...charge.relatedCharges, ...charge.officerNotes].join(" ").toLowerCase();
}
