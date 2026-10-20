# Kadeřnictví Petra

Prezentační web kadeřnictví v Bochoři. Slouží k představení salónu, ceníku, ukázek práce a kontaktů pro rezervaci.

## Technologie

- [Astro](https://astro.build/) 7
- TypeScript
- Tailwind CSS 4
- Node.js 22.12 nebo novější

Obsah viditelný návštěvníkům je v češtině. Texty webu jsou v `src/i18n/cs.json`, ceny v `src/data/pricing/`.

## Struktura projektu

```
src/pages/          stránky (jednostránkový web)
src/layouts/        společné HTML, SEO a scroll animace
src/components/     sekce webu (navigace, hero, ceník, galerie, kontakt, patička)
src/data/           ceník a strukturovaná data
src/i18n/           české texty
src/assets/images/  lokální obrázky optimalizované Astrem
src/styles/         globální styly a design tokeny
public/             favicon, Open Graph obrázek a robots.txt
```

## Příkazy

```bash
npm install
npm run dev
npm run check
npm run lint
npm run format:check
npm run test
npm run build
npm run preview
```

| Příkaz                 | Účel                            |
| ---------------------- | ------------------------------- |
| `npm run dev`          | vývojový server                 |
| `npm run check`        | kontrola Astro a TypeScriptu    |
| `npm run lint`         | ESLint                          |
| `npm run format:check` | kontrola formátování Prettierem |
| `npm run test`         | kontrola struktury ceníku       |
| `npm run build`        | produkční sestavení do `dist/`  |
| `npm run preview`      | náhled produkčního buildu       |

Volitelně lze nastavit `PUBLIC_SITE_URL` na produkční doménu. Pak se do stránek doplní canonical URL, Open Graph metadata a strukturovaná data s absolutními odkazy.
