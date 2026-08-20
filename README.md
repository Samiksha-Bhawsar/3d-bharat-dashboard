# 3D Bharat — Prism Investor Intelligence

A frontend-only Full Stack Developer assignment implementation using Next.js, Redux Toolkit, Recharts, Framer Motion and local JSON datasets.

## What is included

- 72 mock deals and 14 mock investors in JSON
- Promise-based service layer with 300–800ms simulated latency
- Debounced search, multi-filtering, sorting and pagination
- Deal detail route with ROI and risk analysis
- Investor overview and corporate dashboards
- Recommendation scoring utility
- Redux Toolkit state and localStorage persistence
- Loading, empty and service-error states
- Responsive fintech UI
- Persistent dark/light mode
- Three selectable triangular color systems: Tricolor, Aurora and Royal
- Animated 3D Bharat market visual with rotating orbits and floating market nodes

## Architecture

```text
app/                  Next.js routes
components/            Reusable UI, shell and charts
services/              Simulated API/data access
data/                  Local mock datasets
hooks/                 Reusable React hooks
store/                 Redux Toolkit state
utils/                 Recommendation logic
public/                Static assets
```

## Data flow

```text
Page -> UI event -> Service -> JSON mock data
                    |
                    +-> Promise delay
                    +-> filtering / sorting / pagination
                    v
                 UI state
                    v
             charts / cards / lists
```

## Performance strategies

- Debounced explorer search
- useMemo for derived dashboard values
- Responsive Recharts containers
- Route-based Next.js code splitting
- Client-side pagination
- Business logic isolated from presentation
- Local data avoids network dependency

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Production test:

```bash
npm run build
npm start
```

## Assignment alignment

The provided brief requires a Next.js frontend, 50–100 deals, 10–20 investors, simulated service calls, separation of components/services/hooks/utils, investor and corporate dashboards, deal exploration, recommendation scoring, local persistence, Recharts-style visualization, Redux Toolkit, performance optimization and dark-mode support. This repository is structured around those requirements.

## Submission checklist

- Push to GitHub
- Add screenshots or a short screen recording
- Deploy to Vercel
- Add the deployed URL to this README

## Reference direction

The visual language takes broad inspiration from the supplied 3D Bharat reference while presenting a distinct investor-focused interface and an original triangular visual system.
