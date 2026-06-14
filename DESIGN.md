# Design Brief

## Direction

Earthy Hope — NGO homepage that builds trust through warmth, transparency, and generous layout. Earthy green primary signals sustainability and social grounding; warm orange accents drive CTAs with urgency and human connection.

## Tone

Editorial and inviting. A premium NGO aesthetic: clean, spacious, intentional. No corporate coldness, no overwhelming design — the mission speaks louder than the decoration.

## Differentiation

Trust-first layout with impact stats and certification badges in the fold, clear audience segmentation (donors/volunteers/interns), and hero carousel showcasing real volunteer work.

## Color Palette

| Token      | Light OKLCH      | Dark OKLCH        | Role                      |
|----------|-----------------|------------------|---------------------------|
| background | 0.96 0.01 80   | 0.13 0.018 155   | Cream space for breathing |
| foreground | 0.2 0.02 50    | 0.92 0.01 150    | Deep charcoal for text    |
| primary    | 0.55 0.18 150  | 0.72 0.2 155     | Earthy green (trust)      |
| accent     | 0.65 0.22 40   | 0.72 0.2 40      | Warm orange (urgency)     |
| card       | 1.0 0.0 0      | 0.17 0.022 155   | White/dark surface        |
| muted      | 0.93 0.01 80   | 0.21 0.025 155   | Section bg alternate      |
| border     | 0.88 0.015 80  | 0.26 0.022 155   | Subtle dividers           |

## Typography

- Display: Fraunces — hero headlines, project titles, section headings. Warm serif for editorial quality.
- Body: DM Sans — paragraphs, labels, CTAs. Clean sans-serif for readability and modern professional tone.
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Minimal shadow hierarchy: cards use subtle `shadow-sm` or `shadow-md` with light borders, hero carousel full-viewport, section alternation through `bg-muted` every other block. Depth via layers and breathing space, not visual noise.

## Structural Zones

| Zone       | Background       | Border       | Notes                        |
|----------|-----------------|-------------|------------------------------|
| Header     | `bg-card border-b` | Light border | Fixed, nav center, CTAs right |
| Hero       | Image + overlay | None        | Full viewport carousel, text centered |
| Trust Bar  | `bg-background`  | Top/bottom   | Stats + badges, no background |
| Projects   | Alternating      | `border`     | White cards, `bg-muted` rows  |
| Pathways   | `bg-muted/40`    | None        | Three large cards, spacious   |
| Story      | `bg-background`  | None        | Image left, text right       |
| Footer     | `bg-card border-t` | Light border | Dark container for contrast   |

## Spacing & Rhythm

Generous gaps: 3rem (py-12) between major sections, 1.5rem (py-6) between subsections, mobile stacking with no horizontal padding crunch. Whitespace as design element, not empty void.

## Component Patterns

- Buttons: Primary `bg-primary text-primary-foreground rounded-lg`, Secondary `bg-accent text-accent-foreground rounded-lg`, hover scale and shadow lift
- Cards: `rounded-lg` with `border`, subtle shadows, `bg-card` with `border-border`, hover lift on project cards
- Badges: `bg-muted text-muted-foreground rounded-full px-3 py-1`, trust logo containers center-aligned

## Motion

- Entrance: Fade-in on scroll for project cards (Framer Motion), 0.3s ease-out
- Hover: Card lift with `shadow-md`, text `text-primary` accent color
- Decorative: Carousel auto-advance every 5s, manual arrow navigation, smooth fade transitions

## Constraints

- No interactive map (not in scope)
- No blog/stories archive (not in scope)
- All donation/volunteer/intern CTAs link externally
- Mobile-first: hamburger nav below `md` breakpoint
- No dark mode toggle (single light mode for NGO trust aesthetic)

## Signature Detail

Trust bar positioned immediately after hero carousel (above fold on mobile if possible) — impact stats and certification badges signal immediate legitimacy without requiring scroll-and-read trust copy. The card grid alternates `bg-white` and `bg-muted` for rhythm and visual breathing without busy design.
