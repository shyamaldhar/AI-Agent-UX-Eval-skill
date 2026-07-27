# Agent UX Evaluation Framework

A structured framework and Claude Skill for evaluating AI agent experiences — chatbots, copilots, and agentic workflows — with the same rigor a usability audit brings to a traditional interface.

Most UX evaluation methods assume a fixed object: a screen, a flow, a set of affordances you can click through and score. Agents don't hold still. The same agent can behave differently across sessions, recover from an error in three different ways, and build or lose a user's trust cumulatively across a conversation rather than at a single moment you can screenshot. This framework is built for evaluating *behavior over time*, not layout at a moment.

## What's Included

**A three-layer evaluation framework:**

1. **Design Intent** — four principles for grounding an evaluation in what the agent was actually built to do, so it isn't scored against goals it was never meant to meet.
2. **Experience Dimensions** — 21 specific, observable dimensions across four pillars (User Query, Explainability, User Control, Mental Model), each with a core evaluation question, a recommended method, and a metric type.
3. **Experience Quality** — 14 signals across Trust, Momentum, and Sentiment: the outcomes that actually matter to a user, treated as emergent results of the layer beneath rather than something scored directly.

**A Claude Skill** that operationalizes the framework end-to-end: guided step-by-step capture of an agent workflow (via Chrome extension, URL fetch, screenshots, or pasted text), conservative-by-default scoring against all three layers, structured findings with severity ratings and concrete fix paths, and a generated `.docx` evaluation report.

**Optional agent-type weighting.** Different agent archetypes (Conversational, Data, Workflow, Insight) surface different kinds of experience problems. The included priority matrix lets an evaluation weight dimensions accordingly, or run flat and equal-weighted when the agent type doesn't fit neatly into one bucket.

## Why It's Built This Way

A few rules are non-negotiable, on purpose:

- **No finding without a step reference.** "The agent handles errors poorly" isn't a finding; "Step 4 of 7, the agent silently discarded input after a failed save" is.
- **No finding without a fix path.** A finding that ends at "this is a problem" isn't useful to a team under deadline.
- **Conservative scoring by default.** A "Strong" rating requires evidence from at least two separate steps. A framework that rates everything highly isn't measuring anything.
- **Prompt or template leakage is always flagged**, regardless of context, because it's a trust violation by definition.

These rules exist to keep the evaluation honest rather than flattering. An agent is easy to be impressed by, especially when it recovers cleverly from an error it created in the first place — the framework is built to catch that instinct, not indulge it.

## Origin

The three-layer structure synthesizes published research on agent UX evaluation, a layered methodology for measuring experience quality (Trust/Momentum/Sentiment), and Microsoft's published Agent UX Design Principles. None of the three sources alone covered the full picture; together they form the backbone here.

## Quick Start

This is built as a [Claude Skill](https://docs.claude.com/en/docs/build-with-claude/skills) — a folder Claude reads to follow a specific, repeatable workflow.

1. **Get the files.** Clone this repo or download it as a zip.
   ```
   git clone https://github.com/<your-username>/agent-ux-eval.git
   ```
2. **Place it in your skills directory.** Where this is depends on how you're running Claude:
   - **Claude.ai / Claude Code:** copy the `agent-ux-eval` folder into your skills directory (see the [Claude Skills docs](https://docs.claude.com/en/docs/build-with-claude/skills) for the exact path for your setup).
   - **Claude API:** include the folder's contents as part of your skill configuration per the same docs.
3. **Trigger it.** In conversation, ask Claude to evaluate, audit, or score an AI agent, chatbot, or copilot. Claude will read `SKILL.md` and start at Phase 0 — confirming the agent under evaluation, the input method (Chrome extension, URL, screenshots, or pasted text), and whether you want agent-type-weighted or equal-weighted scoring.
4. **Walk through the agent.** Interact with the agent step by step; Claude documents and lightly assesses each step as you go.
5. **Get the report.** Once the walkthrough is done, Claude compiles a scored `.docx` report against all three framework layers, with prioritized findings and fix paths.

See `SKILL.md` for the complete phase-by-phase workflow, and `references/` for the full framework detail behind each layer.

## Contributing

Found a gap in the dimensions, a scoring edge case, or an agent type the weighting matrix doesn't cover well? See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT — see [LICENSE](./LICENSE). Use it, modify it, redistribute it, build on it. Attribution appreciated but not required beyond what MIT already specifies.
