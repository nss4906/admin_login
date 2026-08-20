# AI Apparel Production Studio

AI Apparel Production Studio is a standalone SaaS platform for fashion brands, e-commerce sellers, and print-on-demand (POD) creators. It converts flat apparel images into studio-quality fashion photoshoots, multi-shot asset packs, and realistic product mockups while preserving artwork logos, garment silhouettes, colors, and model identities.

---

## 🌟 Key Features

- **AI Apparel Intelligence**: Automatically analyzes clothing orientation (Front, Back, Side, Detail), garment category, fit, primary color, and graphic placement.
- **3-Column Virtual Studio**:
  - **Left Panel**: Local image upload, garment & model reference management, identity lock toggles, and smart extraction.
  - **Center Canvas**: Interactive photoshoot preview, live generation progress pipeline, and before/after visual inspection.
  - **Right Panel**: One-click AI Art Director concepts (Minimal E-com, Streetwear, Outdoor), camera & lighting controls, asset pack selection, and fidelity controls.
- **E-Commerce & Social Asset Packs**: One-click generation for Single Shoots, Essential E-com Packs (4 shots), Plus Commercial Packs (6 shots), Social Media Packs (4 cuts), and Full Brand Suites (8 assets).
- **Product Truth & Identity Locking**: Garment Identity Lock and Model Identity Lock ensure exact color matching, artwork preservation, and consistent model physique across campaign shots.
- **Mockup Mode Studio**: Easily render generated photoshoot assets onto heavyweight T-shirts, streetwear hoodies, boxy sweatshirts, or linen shirts with customizable apparel colorways.
- **Admin & Billing System**: Integrated credit system with Razorpay subscription checkout, credit top-ups, and admin usage analytics.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI & Styling**: React 18, Tailwind CSS, Lucide React
- **Language**: TypeScript
- **Backend / Database**: Supabase (Auth, PostgreSQL DB, Storage)
- **Billing**: Razorpay Subscriptions & One-time Payments
- **AI Engine**: Abstracted AI Orchestrator Layer with Flux/Replicate & Gemini integration options

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### 3. Run Core Verification Tests

```bash
npx tsx src/__tests__/run-test.ts
```

### 4. Build for Production

```bash
npm run build
```

---

## 📁 Repository Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── admin/            # Admin control panel & usage analytics
│   ├── billing/          # Subscription plans & credit top-ups
│   ├── campaigns/        # Brand campaign management
│   ├── dashboard/        # Main user dashboard
│   ├── generations/      # Historical generation logs & downloads
│   ├── mockup/           # Interactive Mockup Studio
│   ├── presets/          # Saved photography & lighting presets
│   ├── projects/         # Apparel project workspace
│   ├── studio/           # 3-Column Virtual Studio
│   ├── globals.css       # Global styles & studio color theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components & Studio Panels
├── lib/                  # Services & API utilities
│   ├── services/         # Smart Apparel, Credit, Razorpay, AI Orchestrator services
│   ├── schema.sql        # Database schema for Supabase
│   └── supabase.ts       # Supabase client setup
├── types/                # TypeScript type definitions
└── __tests__/            # Verification & unit tests
```

---

## 📄 License

MIT
