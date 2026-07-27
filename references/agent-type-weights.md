# Agent Type Dimension Weights

Use this matrix to prioritize which dimensions matter most for a given agent type. Dimensions marked **Critical** must be thoroughly evaluated. Dimensions marked **Important** should be evaluated with moderate depth. Dimensions marked **Contextual** are evaluated only if relevant steps were observed.

This prevents every evaluation from requiring equal depth on all 21 dimensions — different agent types have different experience signatures.

---

## Agent Types

| Type | Description | Examples |
|------|------------|----------|
| **Conversational** | Natural-language Q&A and dialogue-driven agents | Chat-based support assistants, field/rep assistants |
| **Data** | Agents that query, transform, profile, or visualize data | Data profiling agents, pipeline/ETL copilots |
| **Workflow** | Agents that orchestrate multi-step business processes | Approval flows, configuration/setup agents, task orchestrators |
| **Insight** | Agents that generate analysis, recommendations, or reports | Analytics copilots, competitive intelligence agents |

---

## Dimension Priority Matrix

### Pillar 1: User Query

| Dimension | Conversational | Data | Workflow | Insight |
|-----------|---------------|------|----------|---------|
| 1.1 Levels of Expression | Critical | Important | Contextual | Important |
| 1.2 Input Timing | Critical | Important | Important | Contextual |
| 1.3 Modality | Contextual | Contextual | Contextual | Contextual |
| 1.4 User Profile | Important | Important | Critical | Important |
| 1.5 Ambiguity | Critical | Important | Critical | Important |
| 1.6 Contextual Factors | Important | Important | Critical | Contextual |
| 1.7 Safety | Important | Critical | Critical | Important |

### Pillar 2: Explainability

| Dimension | Conversational | Data | Workflow | Insight |
|-----------|---------------|------|----------|---------|
| 2.1 Visibility of Activities | Important | Critical | Critical | Important |
| 2.2 Description of Actions | Important | Critical | Critical | Important |
| 2.3 Transparency of Reasoning | Critical | Critical | Important | Critical |
| 2.4 Preview of Next Steps | Contextual | Important | Critical | Contextual |
| 2.5 Presentation of Plan | Contextual | Important | Critical | Important |
| 2.6 Runtime Status | Contextual | Critical | Critical | Important |

### Pillar 3: User Control

| Dimension | Conversational | Data | Workflow | Insight |
|-----------|---------------|------|----------|---------|
| 3.1 Intervention During Execution | Contextual | Important | Critical | Contextual |
| 3.2 High Impact Scenarios | Important | Critical | Critical | Important |
| 3.3 Intervention on Plan | Contextual | Important | Critical | Contextual |
| 3.4 Agent Error | Critical | Critical | Critical | Critical |

### Pillar 4: Mental Model & Expectations

| Dimension | Conversational | Data | Workflow | Insight |
|-----------|---------------|------|----------|---------|
| 4.1 Agent Capability | Critical | Important | Important | Critical |
| 4.2 UI Context | Important | Important | Critical | Important |
| 4.3 Scope of Agent | Important | Critical | Critical | Important |
| 4.4 Risks | Important | Critical | Critical | Critical |

---

## How to Use This Matrix

1. Identify the agent type during Phase 0: Setup
2. Read this matrix to understand which dimensions are Critical for that type
3. During Phase 1: Step-by-Step Capture, pay special attention to Critical dimensions
4. During Phase 2: Compile Scorecard, weight Critical dimensions more heavily in your overall assessment
5. In the report, note which dimensions were prioritized and why

**Scoring impact:**
- A **Critical** dimension rated Needs Work or Critical → becomes a P0 or P1 finding
- An **Important** dimension rated Needs Work or Critical → becomes a P1 or P2 finding
- A **Contextual** dimension rated Needs Work or Critical → becomes a P2 or P3 finding

**Mixed/hybrid agents:** If an agent spans multiple types (e.g., a workflow agent with conversational input), use the higher priority for each dimension.
