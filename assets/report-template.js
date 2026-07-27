/**
 * Agent Experience Evaluation — Report Template (Structural Guide)
 *
 * This file is a reference for generating the final .docx evaluation report.
 * When generating the report in Phase 4, read the docx skill at
 * /mnt/skills/public/docx/SKILL.md for the latest docx-js patterns and
 * validation steps. Then adapt this structural template with actual evaluation data.
 *
 * Usage: Copy this template, populate data objects, run with Node.js.
 *   node report-template.js
 *
 * Dependencies: npm install -g docx
 */

const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageBreak
} = require("docx");

// ============================================================
// DATA — Replace these with actual evaluation data
// ============================================================

const reportMeta = {
  agentName: "[Agent Name]",
  agentType: "[Conversational / Data / Workflow / Insight]",
  date: new Date().toISOString().split("T")[0],
  evaluator: "[Evaluator Name]",
  scoring: "[Weighted by agent type / Equal-weighted]",
  scope: "[Full workflow / Partial]",
  inputMethod: "[Chrome plugin / URL fetch / Screenshot / Text paste]",
  stepsCount: 0,
};

// Steps captured during Phase 1
const steps = [
  // { number: 1, name: "Initial Query", position: "Step 1 of 7 — Onboarding",
  //   screen: "...", observations: "...", linkedFindings: ["F1"] }
];

// Scorecard data from Phase 2
const layer1Scores = [
  // { principle: "Connect, Don't Collapse", rating: "Good", evidence: [...], assessment: "..." }
];

const layer2Scores = [
  // { pillar: "User Query", dimension: "Levels of Expression", rating: "Good",
  //   weight: "Critical", evidence: [...], assessment: "..." }
];

const layer3Scores = [
  // { group: "Trust", signal: "Accuracy", rating: "Good", evidence: [...], assessment: "..." }
];

// Findings from Phase 3
const findings = [
  // { id: "F1", priority: "P0", title: "...", steps: [...], dimensions: [...],
  //   whatHappened: "...", fixPath: "..." }
];

const exemplars = [
  // { name: "...", dimension: "...", steps: [...], whatWorks: "...", adoptionGuidance: "..." }
];

const finesseObservations = [
  // { step: 1, observation: "..." }
];

// ============================================================
// DOCUMENT CONSTRUCTION
// ============================================================

function buildReport() {
  const doc = new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal",
          quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: "270559" },
          paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal",
          quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: "3c4458" },
          paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 }
        },
        {
          id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal",
          quickFormat: true,
          run: { size: 24, bold: true, font: "Arial", color: "3c4458" },
          paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 }
        },
      ]
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [{
            level: 0, format: LevelFormat.BULLET, text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }]
        },
        {
          reference: "numbers",
          levels: [{
            level: 0, format: LevelFormat.DECIMAL, text: "%1.",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }]
        },
      ]
    },
    sections: [
      // --- Title Page ---
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
          }
        },
        children: [
          new Paragraph({ spacing: { before: 4000 }, children: [] }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({
              text: "Agent Experience Evaluation Report",
              bold: true, size: 48, font: "Arial", color: "270559"
            })]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 400 },
            children: [new TextRun({
              text: `${reportMeta.agentName} — ${reportMeta.agentType}`,
              size: 28, font: "Arial", color: "3c4458"
            })]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 200 },
            children: [new TextRun({
              text: `${reportMeta.date} | ${reportMeta.scoring} | ${reportMeta.stepsCount} Steps`,
              size: 22, font: "Arial", color: "666666"
            })]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 100 },
            children: [new TextRun({
              text: `Evaluator: ${reportMeta.evaluator}`,
              size: 22, font: "Arial", color: "666666"
            })]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 100 },
            children: [new TextRun({
              text: "Agent UX Evaluation Framework v1.0",
              size: 20, font: "Arial", color: "999999"
            })]
          }),
        ]
      },

      // --- Main Content ---
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
          }
        },
        children: [
          // Section 1: Executive Summary
          heading1("Executive Summary"),
          para("[Replace with 3–5 paragraph executive summary]"),
          heading2("Rating Distribution"),
          para("[Insert rating distribution table here]"),

          // Section 2: Step Reference Index
          pageBreak(),
          heading1("Step Reference Index"),
          para("[Insert step reference table mapping each step to workflow position, screen description, key observations, and linked findings]"),

          // Section 3: Workflow Coverage Map
          pageBreak(),
          heading1("Workflow Coverage Map"),
          para("[Insert workflow coverage table showing evaluated vs. not-evaluated phases]"),

          // Section 4: Finding Cross-Reference Table
          heading1("Finding Cross-Reference Table"),
          para("[Insert finding cross-reference table: finding ID → steps → phases → dimensions]"),

          // Section 5: Layer 1 Scorecard
          pageBreak(),
          heading1("Layer 1 Scorecard — Design Intent"),
          para("[For each of the 4 principles: name, rating, evidence with step references, assessment]"),

          // Section 6: Layer 2 Scorecard
          pageBreak(),
          heading1("Layer 2 Scorecard — Experience Dimensions"),
          heading2("Pillar 1: User Query"),
          para("[Score each of the 7 User Query dimensions]"),
          heading2("Pillar 2: Explainability"),
          para("[Score each of the 6 Explainability dimensions]"),
          heading2("Pillar 3: User Control"),
          para("[Score each of the 4 User Control dimensions]"),
          heading2("Pillar 4: Mental Model & Expectations"),
          para("[Score each of the 4 Mental Model dimensions]"),

          // Section 7: Layer 3 Scorecard
          pageBreak(),
          heading1("Layer 3 Scorecard — Experience Quality"),
          heading2("Trust"),
          para("[Score each of the 5 Trust signals]"),
          heading2("Momentum"),
          para("[Score each of the 5 Momentum signals]"),
          heading2("Sentiment"),
          para("[Score each of the 4 Sentiment signals]"),

          // Section 8: Critical Findings & Fix Paths
          pageBreak(),
          heading1("Critical Findings & Fix Paths"),
          para("[For each finding: ID, priority, title, steps, dimensions, what happened, fix path]"),

          // Section 9: Exemplar Patterns
          pageBreak(),
          heading1("Exemplar Patterns"),
          para("[For each Strong-rated dimension: pattern name, steps, what works, adoption guidance]"),

          // Section 10: UI/UX Finesse Observations
          heading1("UI/UX Finesse Observations"),
          para("[Step-referenced craft-level observations about visual design, interaction patterns, micro-copy]"),

          // Section 11: Priority Matrix
          pageBreak(),
          heading1("Priority Matrix"),
          para("[Summary table: P0–P3 with finding counts, IDs, and recommended timelines]"),
        ]
      }
    ]
  });

  return doc;
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function heading1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
}

function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
}

function heading3(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(text)] });
}

function para(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 22 })]
  });
}

function boldPara(label, value) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, size: 22 }),
      new TextRun({ text: value, size: 22 })
    ]
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

/**
 * Creates a rating badge with color coding.
 * Strong = green, Good = blue, Needs Work = orange, Critical = red, Not Tested = gray
 */
function ratingColor(rating) {
  const colors = {
    "Strong": "2E7D32",
    "Good": "1565C0",
    "Needs Work": "E65100",
    "Critical": "C62828",
    "Not Tested": "757575"
  };
  return colors[rating] || "000000";
}

function ratingRun(rating) {
  return new TextRun({
    text: rating,
    bold: true,
    color: ratingColor(rating),
    size: 22
  });
}

// ============================================================
// GENERATE
// ============================================================

async function main() {
  const doc = buildReport();
  const buffer = await Packer.toBuffer(doc);
  const outputPath = process.argv[2] || "/mnt/user-data/outputs/agent-eval-report.docx";
  fs.writeFileSync(outputPath, buffer);
  console.log(`Report written to ${outputPath}`);
}

main().catch(console.error);
