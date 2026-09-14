# Buddha čajovna

Source snapshot **14. 9. 2026** for [Buddha čajovna](https://www.buddhacajovna.cz) — Myslíkova 174/23, Praha 1.

Phase 1: homepage Hybrid 2+1 + Reservations Lite. E-shop checkout, Comgate, SMS and CRM remain out of this delivery.

## Stack

TanStack Start · React · Vite · Tailwind v4

## Run

```bash
npm install
npm run dev
```

Preview: `0.0.0.0:8080`

## Locales

CS · EN · JA (browser detect + cycle in the header)

## Review map

| Path | What |
|---|---|
| `src/routes/index.tsx` | Homepage |
| `src/routes/rezervace.tsx` | Reservation flow + table picker |
| `src/lib/reservations.ts` | Phone normalize, capacity, duplicates |
| `src/routes/smena.tsx` | BUDDHA CONTROL / staff desk |
| `src/lib/board.ts` | Noticeboard seed + RSS source |
| `src/routes/kombini.tsx` | Japanese kombini page |
| `src/routes/wayusa.tsx` | Wayusa page |
| `src/lib/copy.ts` | CS / EN / JA copy |
