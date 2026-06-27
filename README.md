# fourthwall-terrain

Fourthwall-style creator storefront built with Next.js, Tailwind, and Shopify.

A headless e-commerce frontend — Next.js handles the design and UX, while Shopify powers products, inventory, cart, and checkout behind the scenes via the **Storefront API**.

## Features

- 🛍️ Product listing and detail pages powered by Shopify
- 🛒 Cart synced with Shopify's Cart API
- 💳 Secure checkout via Shopify's hosted checkout
- 🎨 Custom storefront design with Tailwind CSS
- ⚡ Fast, SEO-friendly pages with Next.js App Router

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront) (GraphQL)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- A Shopify store with Storefront API access enabled

### 1. Clone the repo

```bash
git clone https://github.com/your-username/fourthwall-terrain.git
cd fourthwall-terrain
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your Shopify store details:

```bash
cp .env.local.example .env.local
```

```bash
# .env.local
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
SHOPIFY_STOREFRONT_API_VERSION=2025-01
```

> Get these from your Shopify Admin: **Settings → Apps and sales channels → Develop apps** → create a custom app → enable Storefront API → install → copy the Storefront API access token.

### 4. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```
fourthwall-terrain/
├── app/
│   ├── page.js              # Home page
│   ├── products/[handle]/   # Product detail pages
│   └── collections/[handle]/ # Collection listing pages
├── lib/
│   ├── shopify.js           # Storefront API client setup
│   └── queries/             # GraphQL queries
├── public/
├── .env.local.example
└── next.config.mjs
```

## Roadmap

- [ ] Product detail pages
- [ ] Cart drawer + Shopify Cart API integration
- [ ] Checkout redirect flow
- [ ] Search
- [ ] Customer accounts

## License

MIT
