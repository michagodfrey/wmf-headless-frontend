# Women's Mentoring Foundation Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS. This is a headless frontend that integrates with an existing WordPress CMS to display dynamic content.

## Features

- **Modern Design**: Clean, professional design with accessibility in mind
- **WordPress Integration**: Dynamic content from WordPress CMS (blog posts, pages, media)
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 14 App Router and static generation
- **SEO Friendly**: Built with search engine optimization in mind

## WordPress Integration

This frontend connects to your existing WordPress site via the WordPress REST API to display:

- **Blog Posts**: Dynamic blog listing and individual post pages
- **Featured Images**: Automatic display of WordPress featured images
- **Content**: Real-time content from your WordPress CMS
- **Media**: Integration with WordPress media library

### Setup WordPress Integration

1. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

2. Replace `your-wordpress-site.com` with your actual WordPress site URL

3. Ensure your WordPress site has the REST API enabled (enabled by default in modern WordPress)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
# Edit .env.local with your WordPress API URL
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```bash
src/
├── app/                    # Next.js 14 App Router pages
│   ├── blog/              # Blog listing and individual posts
│   ├── about/             # About pages
│   ├── programs/          # Program pages
│   └── ...
├── components/            # Reusable React components
│   ├── layout/           # Header, Footer, etc.
│   ├── sections/         # Page sections
│   └── ui/              # UI components
├── lib/                  # Utility functions
│   └── wordpress.ts     # WordPress API integration
└── types/               # TypeScript type definitions
    └── wordpress.ts     # WordPress API types
```

## WordPress API Integration

The site uses the WordPress REST API to fetch content:

- **Posts**: `getPosts()` - Fetch blog posts with pagination
- **Individual Post**: `getPost(slug)` - Fetch specific post by slug
- **Pages**: `getPages()` - Fetch WordPress pages
- **Categories**: `getCategories()` - Fetch post categories

All API calls include:

- Automatic revalidation (1 hour cache)
- Featured media embedding
- Error handling
- TypeScript support

## Demo Features

To demonstrate the WordPress integration to decision makers:

1. **Dynamic Blog**: Shows real posts from your WordPress site
2. **Featured Posts**: Homepage displays latest blog posts
3. **Real Content**: All content comes from your existing WordPress CMS
4. **Media Integration**: Featured images from WordPress media library

## Deployment

The site can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

[Add your license information here]
