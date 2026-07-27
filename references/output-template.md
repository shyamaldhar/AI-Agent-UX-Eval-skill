# Output Template — Evaluation Report Structure

This template defines the structure and format for the final `.docx` evaluation report. Every section listed here is required unless marked optional.

---

## Report Metadata

```
Title:        Agent Experience Evaluation Report
Subtitle:     [Agent Name] — [Agent Type, if using weighted scoring]
Date:         [Evaluation date]
Evaluator:    [Name/role if provided]
Framework:    Agent UX Evaluation Framework v1.0
Scoring:      [Weighted by agent type / Equal-weighted]
Scope:        [Full workflow / Partial — specify which phases]
Input Method: [Chrome plugin / URL fetch / Screenshot / Text paste]
Steps Captured: [N]
```

---

## Section 1: Executive Summary

A 3–5 paragraph overview including:

- Agent name, type, and evaluation context
- Total steps evaluated and workflow scope
- Rating distribution summary (count of Strong, Good, Needs Work, Critical, Not Tested across all three layers)
- Top 3 critical findings (ID + one-line summary)
- Top exemplar pattern (if any rated Strong)
- Overall assessment: one sentence capturing the agent's current state

**Rating Distribution Table:**

| Rating | Layer 1 | Layer 2 | Layer 3 | Total |
|--------|---------|---------|---------|-------|
| Strong | N | N | N | N |
| Good | N | N | N | N |
| Needs Work | N | N | N | N |
| Critical | N | N | N | N |
| Not Tested | N | N | N | N |

---

## Section 2: Step Reference Index

A numbered table mapping every captured step to its workflow context and linked findings.

| Step | Descriptive Name | Workflow Position | Screen Description | Key Observations | Linked Findings |
|------|-----------------|-------------------|-------------------|-----------------|----------------|
| 1 | [e.g., Initial Query] | Step 1 of 7 — Onboarding | [What was visible on screen] | [Notable UX observations] | F1, F3 |
| 2 | [e.g., Data Upload] | Step 2 of 7 — Data Ingestion | [...] | [...] | — |
| ... | ... | ... | ... | ... | ... |

Every step MUST appear in this index. Steps with no linked findings show "—" in the last column.

---

## Section 3: Workflow Coverage Map

A visual or tabular representation of which workflow phases were evaluated.

| Workflow Phase | Steps Evaluated | Coverage |
|---------------|----------------|----------|
| [e.g., Onboarding] | Steps 1–2 | Full |
| [e.g., Data Ingestion] | Steps 3–5 | Full |
| [e.g., Analysis Configuration] | — | Not Evaluated |
| [e.g., Output Review] | Steps 6–7 | Partial |

Note any phases that were not evaluated and what would be needed to evaluate them.

---

## Section 4: Finding Cross-Reference Table

Maps each finding to the steps and workflow phases where it was observed.

| Finding | Priority | Steps | Workflow Phases | Dimensions Affected |
|---------|----------|-------|----------------|-------------------|
| F1 | P0 | 3, 5, 7 | Data Ingestion, Output Review | 2.3 Transparency, T3 Process Adherence |
| F2 | P1 | 4 | Data Ingestion | 3.2 High Impact Scenarios |
| ... | ... | ... | ... | ... |

---

## Section 5: Layer 1 Scorecard — Design Intent

For each of the 4 principles:

**[Principle Name]** — Rating: **[Strong/Good/Needs Work/Critical/Not Tested]**

Evidence:
- Step [N]: [What was observed, connecting to the principle]
- Step [N]: [Additional evidence]

Assessment: [2–3 sentences explaining the rating, referencing healthy/unhealthy signals from the framework]

---

## Section 6: Layer 2 Scorecard — Experience Dimensions

Organized by pillar. For each of the 21 dimensions:

**[Pillar Name] > [Dimension Name]** — Rating: **[Rating]** [Weight: Critical/Important/Contextual if using weighted scoring]

Core Question: [From framework]

Evidence:
- Step [N]: [Observation]
- Step [N]: [Observation] (if applicable)

Assessment: [1–2 sentences]

If Not Tested: explain what data would be needed.

---

## Section 7: Layer 3 Scorecard — Experience Quality

Organized by signal group (Trust, Momentum, Sentiment). For each of the 14 signals:

**[Group] > [Signal Name]** — Rating: **[Rating]**

Evidence:
- Step [N]: [Observation]

Assessment: [1–2 sentences]

---

## Section 8: Critical Findings & Fix Paths

For each finding (ordered by priority, then by finding ID):

### F[N] [P[N]] — [Title]

**Steps:** [Step numbers with workflow positions]

**Dimensions Affected:** [List]

**What Happened:**
[Evidence paragraph — specific, citing exact step observations. No generic statements.]

**Fix Path:**
[Concrete, actionable recommendations. If a fix cannot be proposed, state: "Fix path requires engineering investigation — [describe what needs to be investigated]."]

---

## Section 9: Exemplar Patterns

For each dimension rated Strong:

### Exemplar: [Pattern Name]

**Dimension:** [Which dimension]
**Steps:** [Where observed]

**What Works:**
[Description of the pattern and why it's effective]

**Adoption Guidance:**
[How this pattern could be applied to other parts of the agent or other agents]

---

## Section 10: UI/UX Finesse Observations

Craft-level notes that don't rise to the level of findings but are worth documenting. These are specific, step-referenced observations about visual design, interaction patterns, micro-copy, transitions, and polish.

Format as a bulleted list, each item referencing a specific step:
- Step [N]: [Observation about UI craft]

---

## Section 11: Priority Matrix

Summary table for implementation planning.

| Priority | Count | Findings | Recommended Timeline |
|----------|-------|----------|---------------------|
| P0 — Ship Blocker | N | F1, F5 | Before next release |
| P1 — High Impact | N | F2, F3 | Next sprint |
| P2 — Quality Lift | N | F4, F7 | Next quarter |
| P3 — Polish | N | F6 | Backlog |

---

## Formatting Notes

- Use consistent heading hierarchy: H1 for report title, H2 for sections, H3 for findings/scorecards
- Tables should have clear headers and consistent alignment
- Finding IDs (F1, F2...) and Priority badges (P0, P1...) should be bold
- Step references should use the format: "Step N: [Descriptive Name]"
- The report should be self-contained — a reader should be able to understand every finding without referring to external documents
