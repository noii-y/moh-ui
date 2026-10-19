# MoH_UI (灰墨)

> Aesthetic first aid for AI-built admin dashboards: 45 complete business-page themes, 68 ready-to-use components, 113 AI prompts — plus a set of layout rules that keep the output sane.

AI can make pages that work, but they often look off: titles at random sizes, tables overflowing on mobile, spacing that follows vibes. MoH_UI exists for exactly that. Every theme and component ships with an AI prompt — copy it into Doubao, Cursor, or any other model, and it builds the piece for you. No need to describe the style you want.

It is built on daisyUI 5, plain CSS only — no framework, no build step. Chinese-first, and every asset's source and license is logged.

Live demo site: **https://noii-y.github.io/moh-ui/** · Repo: https://github.com/noii-y/moh-ui

![MoH_UI theme wall: dark glass cards of 45 complete business-page demos](docs/screenshots/themes-wall.png)

---

## What's inside

### ① Rules Assembler — a layout rule set put together for your page

The `rules/` directory holds the actual rules, covering the layout details AIs tend to skip:

- Main rule `mo-rules-zh.md`: font sizes only from 12/13/14/16/20/24px, spacing on an 8px grid, tables must not overflow, controls at least 32px, colors via variables, animations capped at 200ms
- Scenario rules `scenarios/`: dedicated rules for table pages, form pages, and data dashboards (e.g. numeric columns right-aligned, labels bound to form fields, chart empty states)
- 35-item checklist `selfcheck.md`: on top of general layout, adds two groups — overlay keyboards (focus enters, stays trapped in the loop, Esc and outside-click close, focus returns, aria attributes) and touch/mobile (44×44 tappable areas, no overflow at 390px, reduced motion)

The rules page ([site/rules.html](site/rules.html)) is the assembler: pick a page type (general / table / form / dashboard) → pick a theme (45, which brings that theme's visual red lines automatically) → tick the components the page uses → optionally include the checklist. The page assembles a page-specific rule set in real time, one click to copy, paste to your AI. URLs can preset everything, e.g.:

```text
site/rules.html?scene=form&theme=luxury&comps=button,input
```

Each component page's copy-card also has a "matching rules" entry, so you can reverse-look-up the rule set for that component's scenario instead of guessing which category to pick.

![Rules assembler: pick a page type, a theme, and components — it assembles a copyable layout rule set on the fly](docs/screenshots/rules-builder.png)

### ② Theme library — 45 complete business pages, not color swatches

Every theme is a complete business-page demo (a watch flagship store, an esports club, a bakery, a dine-in ordering screen, a command-center dashboard, an OA approval hub...), so you can see what the theme looks like on a real page. Switch with `data-theme`.

The 45 are split into three groups:

| Group | Count | Source | How to use |
| --- | --- | --- | --- |
| Official built-in | 18 | daisyUI official (luxury, silk, caramellatte, cyberpunk, business, coffee, ...) | Variables live in daisyui-themes.css; two CSS lines |
| External collected | 10 | catppuccin, dracula, nord, rose-pine, solarized, tokyo-night, kanagawa, gruvbox, github-light, everforest | Each carries its own tokens.css with original license and attribution preserved |
| MoH originals | 17 | mo-dark, mo-light, mo-classic, mo-gray, mo-pastel, mo-slate, mo-mood, mo-brutal, mo-neon, mo-zhongshi, mo-gov, mo-press, mo-kids, mo-photo, mo-fleet, mo-command, mo-kiosk | Each carries its own tokens.css, marked original |

Official built-in theme (luxury, for example):

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css">
<html data-theme="luxury">
```

MoH original / external theme (mo-dark, for example — just add that theme's tokens.css):

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-dark/tokens.css">
<html data-theme="mo-dark">
```

Every theme is a three-piece set: `demo.html` (full-page case) + `README.md` (Chinese docs) + `moh.json` (provenance metadata); originals and collected themes add a `tokens.css`. Entry: [theme wall](site/themes.html).

Four full pages with very different looks (black-gold watch store, neon esports, dark command dashboard, warm bakery) — all complete business pages, not color swatches:

<img alt="luxury black-gold watch store full page" src="docs/screenshots/theme-luxury.png" width="49%"> <img alt="cyberpunk neon esports club full page" src="docs/screenshots/theme-cyberpunk.png" width="49%">
<img alt="mo-command dark command-center dashboard" src="docs/screenshots/theme-command.png" width="49%"> <img alt="cupcake warm bakery full page" src="docs/screenshots/theme-cupcake.png" width="49%">

### ③ Component library — 68 components you can drop into your project

Each component is a prompt three-piece set: `demo.html` (real working result + Chinese walkthrough) + `README.md` + `moh.json`.

- **63 daisyUI ports** (`components/daisyui/`): buttons, inputs, forms, navigation, data display, modals/toasts, sections, effects — covering the official main forms, class names are the daisyUI official classes
- **5 original enhancements** (`components/`): `chart-card` (ECharts chart, colors read theme variables), `code-block` (highlight.js code block), `date-range` (date-range filter, zero deps), `drag-sort` (drag sorting), `empty` (empty state)

Preferred flow: copy the component page's "AI prompt" and let your AI generate just that block; or copy the finished HTML and paste it. Want the raw code in your own project? Two CSS lines in `<head>`:

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/assets/utilities-patch.css">
```

Entry: [component marketplace](site/components.html).

![Component marketplace: 68 cards with real working results, each with a copyable AI prompt or finished HTML](docs/screenshots/components-grid.png)

### ④ AI prompt distribution — 113 prompts, full-page source included

Every component and theme has an AI prompt page: `ai/<name>.html` (human-readable, one-click copy) and `ai/<name>.md` (plain text, AIs can fetch directly). 113 total (68 components + 45 themes).

- **Component prompts**: real scenario + precise spec + a reference structure of a finished result + the aesthetic rules — no second-guessing for the AI
- **Theme prompts**: besides the reskin steps and visual red lines, the theme's complete demo.html source is embedded. Even a model with no internet access can reproduce the full page 1:1 from the plain text, instead of only swapping a theme color
- **`llms.txt`**: index of the whole library; **`llms-full.txt`**: all prompts concatenated, good for letting an AI understand the library first, then generate in batch

Paste any prompt-page link into Doubao, Cursor, Claude Code, etc. Prompt pages are generated by `scripts/build-ai-pages.mjs`; they do not exist as hand-written files.

### Theme picker — 62 themes to try live

[site/generator.html](site/generator.html) is a data-theme sandbox: beyond the 45 full-page cases, it also has 17 official themes without full-page demos — click a card to reskin in real time, fine-tune the primary color and radius. 62 themes total. Official built-in themes have no tokens files, so their "copy tokens" button is disabled.

---

## How to use it

| Your situation | Use |
| --- | --- |
| Page "works but looks rough" | ① Rules pack — send the whole thing to an AI to fix |
| Want a different style | ② Pick a theme on the wall — AI prompt or `data-theme` |
| Need a table / drawer / chart / empty state | ③ Find one in the marketplace — copy prompt or finished HTML |
| Want an AI to understand the whole library at once | ④ Send it `llms.txt` or `llms-full.txt` |

## Quality checks

| Script | What it checks |
| --- | --- |
| `node scripts/check-attributions.mjs` | Provenance compliance of all 114 moh.json files: unique name, license, source URL, required fields |
| `node scripts/check-site.mjs` | Whether all relative links across the demo site point to real files |
| `node scripts/qa-mobile.mjs <page.html>` | Horizontal overflow in a real 390px iframe (scroll containers exempt by definition) |
| `node scripts/qa-copy.mjs ai/<name>.html` | Simulates an actual "copy AI prompt" click; checks all 7 required sections exist |
