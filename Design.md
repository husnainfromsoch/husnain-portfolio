# Elevate

## Mission
Create implementation-ready, token-driven UI guidance for Elevate that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Elevate
- URL: https://elevate-template.framer.website/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Inter Display`, `font.family.stack=Inter Display, Inter Display Placeholder, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=26px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=20px`, `font.size.xl=22px`, `font.size.2xl=24px`, `font.size.3xl=28px`, `font.size.4xl=32px`
- Color palette: `color.text.primary=#0c0407`, `color.surface.base=#000000`, `color.text.tertiary=#0000ee`, `color.text.inverse=#0f0f0f`, `color.surface.muted=#f2f3f1`, `color.surface.raised=#fc362d`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=10px`, `space.4=12px`, `space.5=20px`, `space.6=32px`
- Radius/shadow/motion tokens: `radius.xs=10px`, `radius.sm=40px`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (22), buttons (1), lists (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
