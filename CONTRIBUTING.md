# Contributing

This framework is opinionated by design, but it's not meant to be static. If you're using it to evaluate real agents, you'll find gaps faster than I will.

## Ways to contribute

**New or refined dimensions.** If you find a recurring agent UX problem that doesn't map cleanly to any of the 21 dimensions, open an issue describing the pattern and which pillar it seems closest to. Include a concrete example if you can — a specific step, screenshot, or interaction that shows the gap.

**Agent type archetypes.** The current agent-type weighting matrix covers four archetypes (Conversational, Data, Workflow, Insight). If you're evaluating an agent type that doesn't fit well into any of these, open an issue with the agent's characteristics and which dimensions felt over- or under-weighted for it.

**Scoring rubric edge cases.** If you hit a scoring situation the rubric doesn't clearly resolve, open an issue with the specific scenario. These are useful even without a proposed fix — ambiguous cases are how the rubric improves.

**Corrections.** Typos, broken references between files, unclear instructions in `SKILL.md` — all welcome as direct pull requests.

## What I'd rather you not do

- Please don't submit changes that loosen Rule 5 (conservative scoring by default) or Rule 6 (prompt/template leakage as automatic P0). These exist specifically to prevent the framework from flattering what it measures.
- Please don't add industry-specific weighting or terminology into the core reference files. Domain-specific guidance belongs in a fork or an additional reference file, not in the base framework, since the goal is for this to generalize across industries.

## Process

Open an issue first for anything beyond a small fix, so we can talk through the direction before you put in the work on a PR. For direct fixes (typos, broken links, clarity edits), a PR on its own is fine.
