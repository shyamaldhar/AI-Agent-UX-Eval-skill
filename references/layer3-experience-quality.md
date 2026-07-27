# Layer 3: Experience Quality — Evaluation Reference

Three measurement layers operating in parallel: Trust is the foundation, Momentum tracks interaction-level productivity, and Sentiment serves as a diagnostic signal for breakdowns in either.

---

## Table of Contents

1. [Trust (5 Signals)](#trust-can-the-user-rely-on-this-agent)
2. [Momentum (5 Signals)](#momentum-does-the-interaction-move-forward)
3. [Sentiment (4 Signals)](#sentiment-how-is-the-user-feeling)

---

## Trust: Can the User Rely on This Agent?

### T1: Accuracy (Table Stakes)

**What to Measure:** Is the agent's output factually correct and procedurally sound?

**Method:** Automated accuracy benchmarks; ground-truth comparison for data agents.

**Diagnostic Output:** Accuracy rate by task type. Engineering owns this metric.

**Scoring Guidance:** This is the baseline. An agent that produces incorrect outputs cannot score well on trust regardless of other qualities. During evaluation, check outputs against known correct answers where possible.

---

### T2: Perceived Intent

**What to Measure:** Does the user believe the agent is acting in their interest, not just completing a task?

**Method:** Post-interaction survey: "Did the agent seem to understand what mattered here?" LLM-as-judge on intent alignment.

**Diagnostic Output:** Intent alignment score. Themes from misalignment cases.

**Scoring Guidance:** Look for moments where the agent prioritized task completion over user goals. Example: an agent that generates a technically correct report but ignores the user's stated emphasis shows poor intent alignment.

---

### T3: Process Adherence

**What to Measure:** Did the agent follow the expected workflow, not just produce a correct output?

**Method:** PM/UX label agent responses for workflow adherence. Train LLM evaluator on labeled data.

**Diagnostic Output:** Process deviation rate. Categorized deviation types.

**Scoring Guidance:** A correct output arrived at through an unexpected process can erode trust. Users need to understand the path, not just the destination. Look for steps where the agent skipped expected workflow phases or took shortcuts.

---

### T4: Error Resilience

**What to Measure:** When the agent makes a mistake, does trust survive?

**Method:** Track user behavior post-error: retry rate, abandonment rate, audit depth increase.

**Diagnostic Output:** Post-error continuation rate. Recovery-to-abandonment ratio.

**Scoring Guidance:** The question is not "did the agent make errors?" but "when errors occurred, did the agent's handling preserve trust?" Transparent error handling, clear recovery paths, and honest acknowledgment of mistakes all contribute positively.

---

### T5: Verification Behavior

**What to Measure:** How much time do users spend checking agent work?

**Method:** Interaction logs: click-through to sources, audit tool usage, time-on-verification.

**Diagnostic Output:**
- **Healthy:** Moderate, declining verification over time (calibrated trust)
- **Unhealthy:** Zero verification (over-trust) or excessive verification (no trust)

**Scoring Guidance:** During evaluation, observe whether the agent provides verification affordances (links to sources, expandable reasoning, audit trails). An agent that makes verification easy scores better even if users choose not to verify.

---

## Momentum: Does the Interaction Move Forward?

*Evaluated at the thread/session level, not individual responses.*

### M1: Forward Progress

**What to Measure:** Does each turn move the user closer to their goal?

**Method:** Thread-level LLM evaluator with PM/UX-authored prompt encoding experience expectations.

**Diagnostic Output:**
- **Positive:** Goal alignment, actionability, clear next steps
- **Negative:** Repetition, dead ends, circular clarifications

**Scoring Guidance:** Map each turn to progress toward the stated goal. Turns that repeat information, ask redundant questions, or produce no actionable output are momentum killers. The ratio of productive turns to total turns is a key signal.

---

### M2: Context Preservation

**What to Measure:** Does the agent maintain context across turns and across sessions?

**Method:** Context decay test — introduce information early, test recall later in thread.

**Diagnostic Output:** Context retention rate by thread length.

**Scoring Guidance:** Context loss is one of the most common momentum breakers. Look for moments where the agent "forgets" something established earlier in the conversation or requires the user to re-state information.

---

### M3: Handoff Quality

**What to Measure:** When the agent passes work to a human, is the context sufficient to act immediately?

**Method:** Handoff audit — score whether a human reviewer could act without re-gathering information.

**Diagnostic Output:** Handoff completeness score. Time-to-action post-handoff.

**Scoring Guidance:** If the workflow includes handoff points (agent to human, or agent to different system), evaluate whether the receiving party has everything they need. Incomplete handoffs force re-work and break momentum.

---

### M4: Efficiency

**What to Measure:** Does the agent complete tasks without unnecessary or redundant steps?

**Method:** Step count analysis — compare agent path to optimal path. Measure tool re-invocations.

**Diagnostic Output:** Step efficiency ratio. Redundant action count.

**Scoring Guidance:** Count the steps the agent took vs. the minimum steps needed. Redundant tool calls, repeated queries, and unnecessary confirmation loops all reduce efficiency. Some redundancy for safety is acceptable — distinguish safety-motivated confirmation from waste.

---

### M5: Root Cause Diagnosis

**What to Measure:** When momentum breaks, can we identify why?

**Method:** Categorize negative-momentum threads: early handoff, conservative prompt, knowledge conflict, tool failure.

**Diagnostic Output:** Momentum-break taxonomy with frequency distribution.

**Scoring Guidance:** This is a meta-signal. When you observe momentum breaking during evaluation, categorize the cause. Common categories: early handoff (agent gives up too soon), conservative prompting (agent asks too many clarifying questions), knowledge gaps, tool failures, context loss.

---

## Sentiment: How Is the User Feeling?

*Diagnostic layer — not a primary success metric. Sentiment points to problems; Trust and Momentum explain them.*

### S1: Sentiment Trajectory

**What to Measure:** Is the user's emotional state improving, stable, or degrading across the interaction?

**Method:** Thread-level sentiment analysis (LLM evaluator or NLP model) comparing start vs. end of interaction.

**Diagnostic Output:** Trajectory classification: improving / stable / degrading.

**Scoring Guidance:** During evaluation, assess the likely emotional arc. Did the interaction start with a clear goal and end with satisfaction? Or did it start hopeful and end frustrated? The trajectory matters more than any single moment.

---

### S2: Emotional Volatility

**What to Measure:** Is the user's sentiment steady or spiky throughout?

**Method:** Turn-by-turn sentiment scoring. Flag interactions with high variance.

**Diagnostic Output:** Volatility index. Spike-to-resolution correlation.

**Scoring Guidance:** High volatility (alternating frustration and satisfaction) indicates inconsistent agent quality. Look for sharp sentiment drops and whether the agent recovered from them.

---

### S3: Frustration Correlation

**What to Measure:** Do sentiment dips correlate with specific trust or momentum failures?

**Method:** Cross-layer analysis — map sentiment drops to trust violations or momentum breaks.

**Diagnostic Output:** Correlated failure patterns (e.g., "sentiment drops when context is lost").

**Scoring Guidance:** This is the most diagnostic of the sentiment signals. When you identify frustration points, trace them back to specific trust or momentum failures. This creates the cross-layer analysis that makes findings actionable.

---

### S4: Recovery Signal

**What to Measure:** When the user enters frustrated, does the interaction improve their state?

**Method:** Compare entry sentiment to exit sentiment. Flag cases where frustrated users leave satisfied (positive recovery).

**Diagnostic Output:** Recovery rate. Compounding frustration rate.

**Scoring Guidance:** An agent that can recover from a bad start demonstrates resilience. An agent where frustration compounds turn after turn indicates a fundamental experience problem.
