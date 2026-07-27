# Layer 1: Design Intent — Evaluation Reference

Design Intent principles are evaluated qualitatively through design reviews, heuristic walkthroughs, and expert audits. They function as pass/fail criteria during design and as alignment checks during evaluation.

---

## Principle 1: Connect, Don't Collapse

**Core Question:** Does the agent make human expertise, data sources, and team relationships more visible — or does it absorb them?

**Method:** Output audit — trace information back to source. Network analysis — human-to-human interaction pre/post adoption.

**Healthy Signals:**
- Users cite sources, consult colleagues, trace data lineage
- Agent outputs include attribution and provenance
- Team collaboration patterns remain intact or improve

**Unhealthy Signals:**
- Users accept outputs without verification
- Colleague consultation declines after agent adoption
- Data sources are invisible in agent responses

**What to Look For in Steps:**
- Does the agent show where its information comes from?
- Are data sources, models, or teammate contributions attributed?
- Does the agent encourage or discourage human-to-human collaboration?

---

## Principle 2: Accessible Yet Invisible

**Core Question:** Does the agent surface at the right moments and stay out of the way otherwise?

**Method:** Interaction logs — foreground/background transition frequency. User surveys on interruption quality.

**Healthy Signals:**
- Users report timely, relevant nudges
- Low dismissal rate on agent suggestions
- Agent transitions smoothly between active and passive states

**Unhealthy Signals:**
- High notification fatigue; users disable agent or ignore prompts
- Agent is overly present when not needed
- Agent is absent when it could help

**What to Look For in Steps:**
- When does the agent appear? Is it contextually appropriate?
- Does the agent interrupt the user's flow unnecessarily?
- Are there moments where the agent should have surfaced but didn't?

---

## Principle 3: Adaptive Across Time

**Core Question:** Does the agent learn user patterns, leverage historical context, and improve over repeated use?

**Method:** Longitudinal task analysis — does accuracy/relevance improve over sessions? User perception surveys at 30/60/90 days.

**Healthy Signals:**
- Reduced query refinement over time
- Proactive suggestions improve in relevance
- Agent remembers user preferences and context

**Unhealthy Signals:**
- Same errors recur across sessions
- No personalization growth
- Users start from scratch each session

**What to Look For in Steps:**
- Does the agent reference prior interactions or user history?
- Are suggestions becoming more relevant over time?
- Does the agent require the user to re-establish context?

> **Note:** This principle often requires longitudinal data. If evaluating a single session, rate as "Not Tested" unless there is evidence of temporal adaptation within the session (e.g., the agent adapts to user corrections mid-workflow).

---

## Principle 4: Embrace Uncertainty, Establish Trust

**Core Question:** Does the agent communicate confidence levels and surface reasoning at decision points?

**Method:** Confidence calibration audit — compare stated confidence to actual accuracy. UX review of uncertainty communication patterns.

**Healthy Signals:**
- Users understand when to trust vs. verify
- Calibrated reliance — users check high-uncertainty outputs
- Agent clearly communicates what it knows vs. what it's inferring

**Unhealthy Signals:**
- False confidence leads to over-reliance
- Excessive hedging leads to disuse
- No indication of confidence level in agent responses

**What to Look For in Steps:**
- Does the agent indicate confidence in its outputs?
- At decision points, is reasoning surfaced?
- Are there cases where the agent presented uncertain information as fact?
- Are there cases where the agent hedged so much the user couldn't act?
