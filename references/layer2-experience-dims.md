# Layer 2: Experience Dimensions — Evaluation Reference

21 dimensions across 4 pillars. Each dimension has a core evaluation question, recommended method, and metric type. Use the Agent Type Matrix (`agent-type-weights.md`) to prioritize dimensions by agent type if using weighted scoring.

---

## Table of Contents

1. [Pillar 1: User Query (7 Dimensions)](#pillar-1-user-query)
2. [Pillar 2: Explainability (6 Dimensions)](#pillar-2-explainability)
3. [Pillar 3: User Control (4 Dimensions)](#pillar-3-user-control)
4. [Pillar 4: Mental Model & Expectations (4 Dimensions)](#pillar-4-mental-model--expectations)

---

## Pillar 1: User Query

*The Art of Command — How effectively can users translate intent into agent action?*

### 1.1 Levels of Expression

**Core Question:** Can users issue both goal-oriented commands ("book a flight") and instructional commands ("click the back button")?

**Method:** Task completion tests across semantic vs. instructional prompts. Log analysis of command types used.

**Metric Type:** Quantitative — success rate by command type.

**Scoring Guidance:** Evaluate whether the agent handles both high-level intent and low-level instructions. An agent that only understands one mode limits user flexibility.

---

### 1.2 Input Timing

**Core Question:** Does the agent support both single comprehensive queries and conversational turn-taking?

**Method:** Compare task outcomes for single-shot vs. multi-turn interactions. Measure clarification request frequency.

**Metric Type:** Quantitative — turns-to-completion; clarification rate.

**Scoring Guidance:** A good agent should handle both "do everything at once" and "let's work through this step by step" interaction patterns.

---

### 1.3 Modality

**Core Question:** Can users interact via voice, text, or other inputs? Does modality affect quality?

**Method:** Cross-modality comparison — same task, different input. Measure parity in success rate and user satisfaction.

**Metric Type:** Quantitative — success rate per modality.

**Scoring Guidance:** If the agent only supports text, note this but don't penalize unless the use case demands multimodal input. Evaluate quality parity across supported modalities.

---

### 1.4 User Profile

**Core Question:** Does the agent adapt to user familiarity, role, and history?

**Method:** Compare agent behavior for new vs. experienced users. Review personalization signals in agent responses.

**Metric Type:** Behavioral — personalization depth over time.

**Scoring Guidance:** Look for evidence that the agent adjusts complexity, vocabulary, or suggestions based on who is using it. A one-size-fits-all agent may score Needs Work here.

---

### 1.5 Ambiguity

**Core Question:** When a query is ambiguous, does the agent resolve it appropriately based on consequence?

**Method:** Test with deliberately ambiguous prompts. Score: did the agent ask when it should? Did it decide when it could?

**Metric Type:** Qualitative — Divergence Principle adherence.

**Scoring Guidance:** The key insight is consequence-based resolution. Low-consequence ambiguity → agent should decide and proceed. High-consequence ambiguity → agent should ask. An agent that always asks or never asks both score poorly.

---

### 1.6 Contextual Factors

**Core Question:** Does the agent adapt to device, environment, and task state?

**Method:** Cross-device testing. Evaluate context-switching (e.g., mobile to desktop mid-task).

**Metric Type:** Qualitative — context preservation score.

**Scoring Guidance:** If evaluation is single-device, note limitations. Look for evidence of task-state awareness (does the agent know where the user is in the workflow?).

---

### 1.7 Safety

**Core Question:** Does the agent enforce guardrails against misuse, injection, and compliance violations?

**Method:** Red-team testing — adversarial prompts, edge cases, policy boundary probes.

**Metric Type:** Quantitative — violation rate; false positive rate.

**Scoring Guidance:** Any prompt/template leakage is automatically P0 (Critical Rule 6). Safety failures are especially severe in any regulated domain (healthcare, finance, legal) given compliance implications.

---

## Pillar 2: Explainability

*Making the Invisible Visible — Can users understand what the agent is doing and why?*

### 2.1 Visibility of Activities

**Core Question:** Can users see where the agent is acting (distinct cursors, highlighted elements, action logs)?

**Method:** Observational study — can users point to what the agent just did? Post-task recall test.

**Metric Type:** Qualitative — action recall accuracy.

**Scoring Guidance:** The agent's actions should be visible and attributable. If the user can't tell what just changed, visibility is poor.

---

### 2.2 Description of Actions

**Core Question:** Does the agent clearly communicate what steps it is taking and which tools it is invoking?

**Method:** Content audit of agent status messages. User comprehension test — can they describe the step?

**Metric Type:** Qualitative — comprehension rate.

**Scoring Guidance:** Status messages should be specific ("Querying sales database for Q3 accounts") not vague ("Processing your request").

---

### 2.3 Transparency of Reasoning

**Core Question:** Does the agent surface its thought process and knowledge sources at decision points?

**Method:** Decision-point audit — for each fork, was reasoning shown? User trust survey post-interaction.

**Metric Type:** Behavioral — reasoning-shown-at-forks rate.

**Scoring Guidance:** At every point where the agent makes a choice (which data to use, which approach to take), reasoning should be available. It need not be intrusive — expandable sections or "why?" affordances count.

---

### 2.4 Preview of Next Steps

**Core Question:** Does the agent show what it will do before doing it?

**Method:** Measure preview frequency for multi-step tasks. User confidence rating before vs. after preview.

**Metric Type:** Quantitative — preview coverage %.

**Scoring Guidance:** For multi-step tasks, previewing the next action lets users course-correct before execution. Single-step actions don't need preview.

---

### 2.5 Presentation of Plan

**Core Question:** For complex tasks, does the agent present a reviewable plan before execution?

**Method:** Task complexity vs. plan-shown frequency. User edit rate on presented plans.

**Metric Type:** Behavioral — plan utilization rate.

**Scoring Guidance:** Complex, multi-step tasks should have an upfront plan. Simple tasks don't need one. The plan should be editable, not just informational.

---

### 2.6 Runtime Status

**Core Question:** Does the agent communicate progress, duration, and success/failure during execution?

**Method:** Status message audit — coverage, accuracy, timeliness. Compare active-user vs. stepped-away indicators.

**Metric Type:** Quantitative — status coverage; accuracy of estimates.

**Scoring Guidance:** Long-running operations especially need progress indicators. Status should be accurate — a progress bar that stalls at 90% for 5 minutes is worse than no progress bar.

---

## Pillar 3: User Control

*The Safety Valve — Can users intervene, redirect, or recover when needed?*

### 3.1 Intervention During Execution

**Core Question:** Can users pause, redirect, or stop the agent mid-task?

**Method:** Test — issue stop/pause/redirect commands at various points. Measure response time and success.

**Metric Type:** Quantitative — intervention success rate; latency.

**Scoring Guidance:** Users must be able to stop the agent at any point. Lag between "stop" and actual stop is a key quality signal.

---

### 3.2 High Impact Scenarios

**Core Question:** Does the agent require explicit confirmation before irreversible or high-stakes actions?

**Method:** Map all agent actions to risk matrix (monetary × social). Audit — are high-risk actions gated by confirmation?

**Metric Type:** Quantitative — confirmation coverage for high-risk actions.

**Scoring Guidance:** Any action involving data deletion, financial transactions, or external communications should require confirmation. Missing confirmation gates on high-risk actions = Critical.

---

### 3.3 Intervention on Plan

**Core Question:** Can users edit, reorder, or reject steps in a proposed plan before execution?

**Method:** Plan editing test — present plan, ask user to modify. Measure edit affordance discoverability and success.

**Metric Type:** Behavioral — plan edit rate; discoverability score.

**Scoring Guidance:** If the agent presents a plan (dimension 2.5), users should be able to modify it. A plan that can only be accepted or rejected wholesale scores lower than one with granular control.

---

### 3.4 Agent Error

**Core Question:** When the agent fails, can users understand what went wrong and recover?

**Method:** Error injection testing — introduce failures, then measure:
- **Discoverability:** Did the agent surface the error proactively?
- **Recoverability:** Could the user revert or try an alternate path?
- **Trust impact:** Did transparent error handling preserve trust?

**Metric Type:** Qualitative — error recovery success; trust preservation score.

**Scoring Guidance:** The three sub-dimensions (discoverability, recoverability, trust impact) should all be considered. An agent that silently fails is worse than one that fails loudly with a recovery path.

---

## Pillar 4: Mental Model & Expectations

*Setting Boundaries — Do users have an accurate map of what the agent can and cannot do?*

### 4.1 Agent Capability

**Core Question:** Does the user know what task types the agent supports and what its limits are?

**Method:** Capability quiz — after onboarding, can users correctly identify supported vs. unsupported tasks?

**Metric Type:** Quantitative — capability identification accuracy.

**Scoring Guidance:** Good onboarding and in-context capability disclosure both contribute. The user shouldn't have to guess what the agent can do.

---

### 4.2 UI Context

**Core Question:** Does the agent adjust transparency and confirmation based on UI familiarity?

**Method:** Compare agent behavior on familiar vs. unfamiliar interfaces. Measure confirmation frequency and user confidence.

**Metric Type:** Behavioral — trust × familiarity correlation.

**Scoring Guidance:** An agent operating in a well-known UI can be more autonomous. An agent in an unfamiliar UI should provide more confirmation and guidance.

---

### 4.3 Scope of Agent

**Core Question:** Does the user understand the agent's boundaries — which apps, data, and tools it can access?

**Method:** Scope test — ask users to predict whether the agent can perform out-of-scope tasks. Measure misperception rate.

**Metric Type:** Quantitative — scope misperception rate.

**Scoring Guidance:** Users should have an accurate mental model of what systems the agent can and cannot reach. Scope surprises (both "I didn't know it could do that" and "I thought it could do that") are signals of poor scope communication.

---

### 4.4 Risks

**Core Question:** Are privacy, monetary, and data exposure risks made explicit rather than hidden?

**Method:** Risk visibility audit — for each agent action involving sensitive data or money, is the risk surfaced? User awareness survey.

**Metric Type:** Qualitative — risk awareness score.

**Scoring Guidance:** In any regulated or data-sensitive domain, data privacy and compliance risks are especially important. The agent should proactively surface risks, not wait for users to discover them.
