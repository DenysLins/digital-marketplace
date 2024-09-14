# digital-marketplace

Marketplace for digital products

## Prerequisites

- Node 20+
- Yarn 1.22+

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Then, create a `.env` file in the root of the project with the following content:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_SECRET=
MONGODB_URL=mongodb://localhost:27017
RESEND_API_KEY=
```

Now, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To access the Content Management System (CMS), go to [http://localhost:3000/sell](http://localhost:3000/sell).

## Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide](https://lucide.dev/)
- [Payload CMS](https://payloadcms.com/)
- [Express](https://expressjs.com/)
- [tRPC](https://trpc.io/)
- [Resend](https://resend.io/)
