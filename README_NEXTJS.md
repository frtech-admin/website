# FR Tech Ltd. - Next.js Website

## Quick Start

### Development

```bash
npm run dev
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

### Pages (App Router)

- `/` - Home page with hero, services overview, about section
- `/services` - Full services listing with detailed descriptions
- `/about` - About company, mission, and team members
- `/portfolio` - Portfolio of completed projects
- `/contact` - Contact form and business information

### Components

All reusable components are located in `app/components/`:

- `Header.tsx` - Navigation header with mobile menu
- `Hero.tsx` - Hero section with CTA
- `Services.tsx` - Services grid on home page
- `About.tsx` - About section on home page
- `CTA.tsx` - Call-to-action section
- `HomePage.tsx` - Home page composition
- `figma/ImageWithFallback.tsx` - Image component with fallback

### Styling

- **Framework**: Tailwind CSS (v4)
- **Colors**: Dark theme with blue accents (#0a1628, #3b9aff, #60d5ff)
- **Icons**: Lucide React icons
- **Responsive**: Mobile-first design with full responsiveness

## Customization Guide

### Update Company Information

Edit `app/components/Header.tsx`:

```tsx
// Update logo/company name
<span className="text-white text-xl">YOUR COMPANY NAME</span>
```

### Update Contact Information

Edit `app/contact/page.tsx`:

```tsx
// Update email
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

// Update phone
<a href="tel:your-phone-number">
  +8801608911359
</a>
```

### Update Team Members

Edit `app/about/page.tsx`:

```tsx
const teamMembers = [
  {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    image: "image-url",
  },
  // ...
];
```

### Update Portfolio Projects

Edit `app/portfolio/page.tsx`:

```tsx
const projects = [
  {
    title: "Project Name",
    image: "image-url",
    tags: ["tag1", "tag2", "tag3"],
  },
  // ...
];
```

### Update Services

Edit `app/components/Services.tsx` and `app/services/page.tsx`

## Features

✅ Fast performance with Next.js 16 and Turbopack
✅ Fully responsive design for mobile, tablet, desktop
✅ SEO optimized with metadata
✅ Interactive animations and transitions
✅ Contact form with validation
✅ Team showcase with hover effects
✅ Portfolio grid with filtering
✅ Dark theme by default
✅ Smooth page transitions

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Then push to GitHub and connect to Vercel
```

### Self-Hosted

```bash
npm run build
npm start
# Runs on port 3000 by default
```

## Dependencies

### Core

- next 16.0.1
- react 19.2.0
- react-dom 19.2.0

### UI Components

- @radix-ui/\* (accessible UI primitives)
- lucide-react (icons)

### Utilities

- next-themes (dark mode)
- react-hook-form (forms)
- recharts (charts)
- embla-carousel-react (carousels)
- sonner (notifications)
- clsx / tailwind-merge (CSS utilities)

## Performance Optimizations

- Static generation for pages (ISR ready)
- Image optimization with next/image
- CSS-in-JS with Tailwind CSS
- Code splitting and lazy loading
- Optimized font loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 FR Tech Ltd. All rights reserved.

## Support

For questions or support, visit the contact page or email frtechltd@gmail.com
