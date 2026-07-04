# ⌨️ Typathon — Typing Practice Game

A clean, minimal typing game built with Angular 14 and TypeScript. Random practice text is generated on every round, and each character you type is graded live — correct, incorrect, or pending — so you see exactly where you slip.

**Play it:** https://syedzainalishah.github.io/Typathon/

## Features

- **Live per-character feedback** — every keystroke is compared against the target text in real time and color-coded
- **Fresh text every round** — random paragraphs generated with Faker.js, so you never memorize the test
- **One-click restart** — new text, cleared input, instant next round
- **Zero-friction UI** — no signup, no settings, just type

## Tech Stack

- Angular 14 (CLI project) + TypeScript
- Faker.js for text generation
- Plain CSS for the character-state styling (correct / incorrect / pending)
- Deployed via GitHub Pages from `docs/`

## Development

```bash
npm install
ng serve        # http://localhost:4200
ng build        # production build
```

## Possible Next Steps

WPM and accuracy scoring, difficulty levels (word length / punctuation), and a results history — the component structure keeps these straightforward to add.

---

Built by [@SyedZainAliShah](https://github.com/SyedZainAliShah)
