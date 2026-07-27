# Scoring Rubric — Rating Definitions

Use this rubric for all three layers. The same scale applies to Design Intent principles, Experience Dimensions, and Experience Quality signals.

---

## Rating Scale

### Strong

**Definition:** Consistently exemplary across multiple steps. Could be adopted as a best practice.

**Evidence Threshold:** Evidence from 2+ steps. No contradicting evidence.

**When to Use:** The agent demonstrates this dimension so well that it could serve as a reference example for other teams. The pattern is consistent, not a one-time occurrence.

**Critical Rule Reminder:** A dimension rated Strong MUST have supporting evidence from at least 2 different steps (Rule 2). If evidence comes from only 1 step, the maximum rating is Good — no matter how impressive that single step was.

---

### Good

**Definition:** Meets expectations with minor gaps. Functional and appropriate.

**Evidence Threshold:** Evidence from 1+ steps. Minor issues don't undermine the pattern.

**When to Use:** The dimension works as expected. There may be small improvements possible, but the user's experience is not negatively affected. This is the default "working well" rating.

---

### Needs Work

**Definition:** Noticeable gaps that affect the experience. Not broken, but not good enough.

**Evidence Threshold:** At least 1 step where the dimension fails or is absent when it should be present.

**When to Use:** The user's experience is measurably worse because of this gap. The issue is noticeable during normal use, not just under stress testing. Any dimension rated Needs Work becomes a finding.

---

### Critical

**Definition:** Actively harmful to the experience. Causes trust violations, dead-ends, or user abandonment risk.

**Evidence Threshold:** A clear failure that would cause a real user to lose trust, get stuck, or abandon the workflow.

**When to Use:** This is reserved for serious issues. The agent does something that actively damages the user's ability to complete their task or trust the system. Examples: prompt leakage, silent data loss, irreversible actions without confirmation. Any dimension rated Critical becomes a finding with P0 or P1 priority.

**Automatic Critical:** Prompt/template leakage is always Critical and always P0 (Rule 6).

---

### Not Tested

**Definition:** Cannot be evaluated with available data.

**Evidence Threshold:** The dimension requires data not captured in this evaluation.

**When to Use:** Some dimensions require specific conditions (longitudinal use, cross-device testing, red-team probes) that may not be present in every evaluation. Rate as Not Tested and document what would be needed to evaluate it (Rule 7). Not Tested is not a failing grade — it's an honest acknowledgment of evaluation scope.

**Common Not Tested cases:**
- Adaptive Across Time (requires longitudinal data)
- Modality (if only one input modality was tested)
- Context Preservation across sessions (if only one session was evaluated)
- Verification Behavior (if no verification affordances were available to test)

---

## Conservative-by-Default Policy

When evidence is ambiguous — for instance, one step shows good behavior but another is unclear — always rate conservatively (Rule 5):

- Ambiguous between Strong and Good → rate **Good**
- Ambiguous between Good and Needs Work → rate **Needs Work**
- Ambiguous between Needs Work and Critical → rate **Needs Work** (unless the failure clearly meets the Critical threshold)

The purpose of evaluation is honest assessment, not positive framing. An evaluation that rates everything Strong or Good is not useful. If the evaluator is uncertain, the conservative rating surfaces the uncertainty as a potential area for investigation rather than burying it.

---

## Finding Generation Rules

| Rating | Generates Finding? | Priority Range |
|--------|-------------------|----------------|
| Strong | No (generates Exemplar Pattern instead) | — |
| Good | No | — |
| Needs Work | Yes | P1–P3 depending on dimension weight and impact |
| Critical | Yes | P0–P1 |
| Not Tested | No (but noted in Workflow Coverage Map) | — |

Priority assignment also considers the Agent Type Weight (if using weighted scoring):
- Critical-weight dimension + Critical rating → P0
- Critical-weight dimension + Needs Work rating → P1
- Important-weight dimension + Critical rating → P1
- Important-weight dimension + Needs Work rating → P2
- Contextual-weight dimension + any negative rating → P2 or P3
