# Women's Mentoring Foundation Website

A modern Next.js frontend for the Women's Mentoring Foundation website, integrating with WordPress as a headless CMS.

<https://womensmentoringfoundation.com/>

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- WordPress REST API

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file with your WordPress API configuration:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://womensmentoringfoundation.com/wp-json/wp/v2
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and WordPress API integration
- `src/types/` - TypeScript type definitions
- `public/` - Static assets

## Features

- Modern, responsive design
- Server-side rendering for better SEO
- WordPress integration for content management
- Optimized performance
- TypeScript for type safety

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
