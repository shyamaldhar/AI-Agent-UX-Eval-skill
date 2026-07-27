---
name: agent-ux-eval
description: >
  Evaluate any AI agent experience against the Agent UX Evaluation Framework.
  Use this skill whenever asked to evaluate, assess, audit, score, or review
  an AI agent, chatbot, copilot, or agentic workflow. Also trigger when the
  user mentions "agent evaluation framework", "experience evaluation", "agent
  UX audit", or "score this agent". Supports screenshot-based, Chrome plugin,
  and URL-fetch evaluation methods.
---

# Agent Experience Evaluation Skill

Guides structured AI agent experience evaluations using the Agent UX Evaluation Framework. The framework has three layers: Design Intent (4 principles), Experience Dimensions (21 dimensions across 4 pillars), and Experience Quality (Trust, Momentum, Sentiment signals). This skill walks the evaluator through step-by-step workflow capture, scores each step, and compiles a traceable evaluation report.

---

## Critical Rules (Non-Negotiable)

These rules override any other instruction in this skill. Violating them produces an invalid evaluation.

**Rule 1: Always Produce a Step Reference Index.**
Every evaluation report MUST include a Step Reference Index mapping each evaluated step to its workflow position, screen description, key observations, and linked findings. Without this, the report is untraceable.

**Rule 2: Never Rate "Strong" Without Multi-Step Evidence.**
A dimension rated Strong MUST have supporting evidence from at least 2 different steps. A single good moment does not make a pattern. If evidence comes from only 1 step, the maximum rating is Good.

**Rule 3: Every Finding Must Have a Step Reference.**
No finding may reference a generic "the agent does X." Every finding MUST cite specific step numbers with workflow positions (e.g., "Step 12: Save action rejected, Step 4 of 7 in setup flow"). Findings without step references are rejected.

**Rule 4: Every Finding Must Have a Fix Path.**
No finding may end at "this is a problem." Every finding MUST include a concrete, actionable fix path. If a fix cannot be proposed, state "Fix path requires engineering investigation" rather than omitting it.

**Rule 5: Conservative by Default.**
When evidence is ambiguous, rate conservatively. Prefer Good over Strong, Needs Work over Good. The goal is honest assessment, not positive framing. Inflated ratings help no one.

**Rule 6: Flag Prompt/Template Leakage.**
If any agent output contains visible prompt instructions, template formatting directives, or internal system messages, this is ALWAYS a P0 finding regardless of other context. It is a trust violation by definition.

**Rule 7: Document What You Cannot Evaluate.**
If a dimension cannot be evaluated (e.g., Adaptive Across Time requires longitudinal data), rate it "Not Tested" with an explanation of what would be needed. Never skip dimensions silently.

---

## Agent Type Weighting (Optional)

Every 21-dimension evaluation can optionally be weighted by agent archetype, since different agent types have different experience signatures — a workflow orchestrator and a Q&A chat agent don't need the same depth on the same dimensions.

- **If the agent's type is known or specifiable** (Conversational, Data, Workflow, or Insight — see `references/agent-type-weights.md`): read that file and weight dimensions accordingly.
- **If the agent's type is unclear, mixed, or the evaluator wants a flat pass:** weight all 21 dimensions equally and skip the matrix.

**Mode selection:** Ask the evaluator once during Phase 0 whether they want type-weighted or equal-weighted scoring. Default to equal-weighted if they have no preference.

---

## Evaluation Workflow

### Phase 0: Setup

1. **Identify the agent under evaluation**
   - Agent name, type, domain/context
   - What does the agent do? What's its primary task?
   - Which of the 4 agent archetypes fits best (if using weighted scoring)?

2. **Determine input method** (priority order)
   - Chrome plugin connected? → Use `read_page`, `get_page_text`, `javascript_tool` for DOM capture + screenshots. Tell user: "I'll read the page at each step. Just say 'evaluate' when ready."
   - URL provided, publicly accessible? → Use `web_fetch` for initial state. Tell user: "I fetched the page. For subsequent steps, upload screenshots or paste responses."
   - Neither available? → Screenshot-based walkthrough (user uploads images + one-line descriptions)
   - Fallback → User pastes agent response text + describes interactions

3. **Confirm evaluation scope**
   - Full workflow or partial?
   - Approximate number of steps expected?
   - Evaluator's role (designer, PM, engineer, researcher)?
   - Weighted or equal-weighted scoring (see Agent Type Weighting above)?

4. **Load framework references**:
   - Always read: `references/scoring-rubric.md`
   - Read `references/layer1-design-intent.md` (4 principles)
   - Read `references/layer2-experience-dims.md` (21 dimensions)
   - Read `references/layer3-experience-quality.md` (Trust/Momentum/Sentiment)
   - If using weighted scoring: read `references/agent-type-weights.md`

### Phase 1: Step-by-Step Capture

For each step in the agent workflow:

1. **User acts** — interacts with the agent (enters prompt, uploads file, clicks button)
2. **User signals** — says "evaluate", "next", "done", or uploads screenshot
3. **Claude captures** — reads page state via available method (Chrome/fetch/screenshot)
4. **Claude documents** — log the step:
   - Step number + descriptive name
   - Workflow position (e.g., "Step 3 of 7 — Data Profiling")
   - What was on screen (UI elements, agent response, controls visible)
   - What the user did (input provided)
   - What the agent produced (output, state change)
5. **Claude tags** — identify which framework dimensions are relevant to this step
6. **Claude assesses** — quick per-step evaluation against tagged dimensions
7. **Claude confirms** — brief summary back to user for correction before proceeding

Deliver per-step assessments in-chat during the walkthrough. These do NOT go in the final report file — they are conversational checkpoints.

### Phase 2: Compile Scorecard

After all steps are captured:

**Score Layer 1 — Design Intent (4 principles)**
- Read `references/layer1-design-intent.md` for criteria
- Rate each principle using `references/scoring-rubric.md`
- Cite specific steps as evidence
- Remember Rule 2: Strong requires evidence from 2+ steps

**Score Layer 2 — Experience Dimensions (21 dimensions)**
- Read `references/layer2-experience-dims.md` for core questions per dimension
- If using weighted scoring: read `references/agent-type-weights.md` for priority weighting
- Mark dimensions as "Not Tested" if no relevant steps observed (Rule 7)
- Cite specific steps as evidence

**Score Layer 3 — Experience Quality (14 signals)**
- Read `references/layer3-experience-quality.md` for signal definitions
- Assess Trust (5 signals), Momentum (5 signals), Sentiment (4 signals)
- Cite specific steps as evidence

### Phase 3: Generate Findings

1. **Identify issues** — any dimension rated Needs Work or Critical becomes a finding
2. **Assign Finding IDs** — F1, F2, F3... in priority order
3. **Assign Priority:**
   - P0 = Ship blocker (includes all prompt/template leakage per Rule 6)
   - P1 = High impact
   - P2 = Quality lift
   - P3 = Polish
4. **For each finding, produce:**
   - Finding ID + Priority badge (e.g., "F1 [P0]")
   - Title (concise, descriptive)
   - Step Reference (specific steps with workflow position + screen description)
   - Framework Dimensions affected
   - What happened (evidence from captured steps)
   - Fix path (concrete, actionable — Rule 4)
5. **Identify exemplar patterns** — any pattern rated Strong that could be adopted elsewhere

### Phase 4: Generate Report

1. Read `references/output-template.md` for report structure
2. Read the docx skill at `/mnt/skills/public/docx/SKILL.md` for document creation best practices
3. Generate the evaluation report as a `.docx` file using `assets/report-template.js` as a structural guide

**Report sections** (all required):
- Executive Summary (with rating distribution)
- Step Reference Index (all steps → workflow phases → linked findings)
- Workflow Coverage Map (evaluated vs. not-evaluated phases)
- Finding Cross-Reference Table (finding ID → steps → phases)
- Layer 1 Scorecard (with step references in evidence)
- Layer 2 Scorecard (with step references in evidence)
- Layer 3 Scorecard (with step references in evidence)
- Critical Findings & Fix Paths (prioritized, with step references)
- Exemplar Patterns (with adoption guidance)
- UI/UX Finesse Observations (craft-level notes)
- Priority Matrix (P0–P3 with timelines)

4. Save the report to `/mnt/user-data/outputs/` and present to the user
5. Follow up with a brief in-chat summary of key findings

---

## Reference File Index

| File | When to Read | Content |
|------|-------------|---------|
| `references/layer1-design-intent.md` | Phase 2, Layer 1 scoring | 4 principles with eval questions, healthy/unhealthy signals |
| `references/layer2-experience-dims.md` | Phase 2, Layer 2 scoring | 21 dimensions across 4 pillars, core questions, methods |
| `references/layer3-experience-quality.md` | Phase 2, Layer 3 scoring | Trust (5), Momentum (5), Sentiment (4) signals with methods |
| `references/agent-type-weights.md` | Phase 0 (if using weighted scoring) | Dimension priority matrix per agent type |
| `references/scoring-rubric.md` | Phase 0 + Phase 2 | Rating definitions, evidence thresholds |
| `references/output-template.md` | Phase 4 | Report structure, section formats, finding template |
| `assets/report-template.js` | Phase 4 | Structural guide for docx generation |
