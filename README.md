# Jablu.in, An E-commerce Web Application

This is a web application built with [Next.js](https://nextjs.org/), a popular React framework for building single page applications. The application is designed to provide a seamless e-commerce experience.

## Features

- Product listing with detailed view
- Shopping cart functionality
- User authentication
- Dark mode support

## Technologies Used

- Next.js
- NextAuth.js
- Hasura
- GraphQL
- Tailwind CSS
- POSTGRESQL
- TypeScript
- Vercel
- Many More

## Getting Started

To get a local copy up and running, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/Exlaso/jablu-e-commerce.git
cd jablu-e-commerce
```
2. Install the dependencies:
```bash
bun install
```
3. Create a `.env.local` file in the root directory and add the following environment variables:
```env
  NEXTAUTH_URL=
  NEXTAUTH_SECRET=
  Hasura_Secret=
  Hasura_URL=
  JWT_KEY=
  UPLOADTHING_SECRET=
  UPLOADTHING_APP_ID=
  RESEND_KEY=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  NEXT_PUBLIC_HASURA_GRAPHQL_URL=
  NEXT_PUBLIC_HASURA_GRAPHQL_WS_URL=
  PAYTM_MID=
  PAYTM_URL=
  PAYTM_MERCHANT_KEY=
  CRON_SECRET=
  NEXT_PUBLIC_TG_SECRET=
```

4. Run the development server:
```bash
bun run dev
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. You can start making changes to the code and the server will automatically reload.