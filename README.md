# Emerald Heritage - Luxury Jewelry E-commerce Site

Welcome to the Emerald Heritage project! This is a sophisticated e-commerce website template designed for selling high-end Colombian emerald jewelry. The design philosophy is inspired by the luxury of Hermès and the clean, intuitive user experience of Apple, with a strong emphasis on storytelling and SEO best practices.

## Project Goals

- To create a luxurious and elegant online presence for Emerald Heritage.
- To effectively showcase two initial products: Emerald Stud Earrings and an Emerald Cross Pendant (18k Gold).
- To tell the story of Colombian emeralds, emphasizing tradition, prestige, and protection.
- To build a comprehensive blog section for content marketing and SEO.
- To incorporate a captivating, Porsche-inspired video section on the homepage.
- To ensure the website is responsive and optimized for search engines.

## Key Features

- **Luxurious Design:** Inspired by Hermès and Apple, focusing on minimalism, high-quality visuals, and elegant typography.
- **Story-Driven Content:** Dedicated sections and blog posts to narrate the heritage of Colombian emeralds.
- **Product Showcase:** Detailed product pages for the initial two jewelry pieces, with room for expansion.
- **Blog Platform:** A well-structured blog for articles on history, craftsmanship, and jewelry care.
- **Homepage:**
    - Impactful Hero Section with a placeholder for a dynamic video background.
    - Featured Products section.
    - Story Teaser section linking to the full brand story.
    - Porsche-inspired Video Showcase section.
    - Journal Highlights to promote blog content.
- **Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile devices.
- **SEO Optimized:** Built with SEO best practices in mind, including semantic HTML, meta tags, and structured data opportunities.
- **Modern Tech Stack:** React, Vite, Tailwind CSS, Framer Motion.

## Tech Stack

- **Frontend:** React.js (with Vite for build tooling)
- **Styling:** Tailwind CSS (with custom theme)
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **SEO Management:** React Helmet Async

## Project Structure

```
emerald-heritage/
├── public/
│   ├── assets/
│   │   ├── images/         # Product images, blog images, general site images
│   │   │   ├── products/   # (e.g., earrings_main.jpg, cross_main.jpg, placeholder_product.jpg)
│   │   │   └── blog/       # (e.g., ancient_emeralds.jpg, gold_emeralds.jpg, placeholder_blog.jpg)
│   │   └── videos/         # (e.g., hero_background.mp4 - Placeholder)
│   └── index.html          # Main HTML entry point
├── src/
│   ├── components/
│   │   ├── common/         # Reusable UI components (SEO.jsx, PageTransition.jsx)
│   │   ├── layout/         # Structural components (Header.jsx, Footer.jsx)
│   │   ├── home/           # Components specific to the HomePage (HeroSection.jsx, etc.)
│   │   ├── products/       # Components for product display (ProductCard.jsx)
│   │   └── blog/           # Components for blog display (BlogCard.jsx)
│   ├── contexts/           # (Optional) React context providers
│   ├── hooks/              # Custom React hooks (ScrollToTop.jsx)
│   ├── pages/              # Page-level components (HomePage.jsx, ProductDetailsPage.jsx, etc.)
│   ├── styles/             # Global styles and Tailwind CSS setup (globals.css)
│   ├── App.jsx             # Main application component with routing
│   └── main.jsx            # React application entry point
├── .gitignore
├── index.html              # Root HTML file (symlinked or copied by Vite from public)
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository (if applicable) or download the files.**
2.  **Navigate to the project directory:**
    ```bash
    cd emerald-heritage
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

```bash
npm run dev
# or
# yarn dev
```
This will start the Vite development server, typically at `http://localhost:3000` (or the port specified in `vite.config.js`). The browser should open automatically.

### Building for Production

```bash
npm run build
# or
# yarn build
```
This command compiles the application into static assets in the `dist/` directory, optimized for deployment.

### Previewing the Production Build

After building, you can preview the production version locally:
```bash
npm run preview
# or
# yarn preview
```

## Customization & Content Replacement

This project is a template and requires customization with your specific brand assets and content.

-   **Logo:** 
    -   Replace the text logo in `src/components/layout/Header.jsx` and `Footer.jsx` with your SVG or image logo.
    -   Update the favicon link in `public/index.html` and provide your `logo-icon.svg` in `public/assets/images/`.
-   **Text Content:** 
    -   Review and update all placeholder text in components within `src/pages/` and `src/components/home/` (e.g., Hero headlines, Story section, About page content).
    -   Update product details (names, descriptions, prices, materials, SKUs) in `src/pages/ProductDetailsPage.jsx` and `src/pages/ProductListingPage.jsx` (and `src/components/home/FeaturedProducts.jsx`).
    -   Write and add your blog post content in `src/pages/BlogListingPage.jsx` and `src/pages/BlogPostPage.jsx` (or integrate a CMS).
-   **Images & Videos:**
    -   Replace all placeholder images in `public/assets/images/products/` and `public/assets/images/blog/` with your actual high-quality product and blog imagery.
        -   Ensure product images like `earrings_main.jpg`, `cross_main.jpg` are present or update paths.
        -   Provide `placeholder_product.jpg` and `placeholder_blog.jpg` or update components to handle missing images gracefully.
    -   Replace the placeholder video in `public/assets/videos/` (e.g., `hero_background.mp4`) and update the path in `src/components/home/HeroSection.jsx` if you choose to use a self-hosted video.
    -   Update the video poster image placeholder path if used in `src/components/home/VideoSection.jsx`.
    -   Replace Open Graph and Twitter Card image placeholders (e.g., `og-image.jpg`, `twitter-card-image.jpg`, `og-default.jpg`) in `public/index.html` and `src/components/common/SEO.jsx`.
-   **SEO Meta Tags:**
    -   Update default and page-specific titles, descriptions, and keywords in `public/index.html` and within each page component using the `<SEO>` component.
    -   Replace placeholder URLs (e.g., `https://www.yourwebsite.com/`) in `public/index.html` and `src/components/common/SEO.jsx` with your actual domain.
    -   Add your Twitter handle in `src/components/common/SEO.jsx`.
-   **Contact Information:**
    -   Update email, phone, and address placeholders in `src/pages/ContactPage.jsx` and `src/components/layout/Footer.jsx`.
-   **Links:**
    -   Update social media links in `src/components/layout/Footer.jsx`.
    -   Ensure all placeholder navigation links in `Header.jsx` and `Footer.jsx` lead to correct pages or are updated/removed.

## Deployment

After running `npm run build`, the `dist/` directory will contain the static files ready for deployment to any static hosting provider like Vercel, Netlify, GitHub Pages, AWS S3, etc.

---

This template provides a strong foundation for your luxury emerald jewelry e-commerce site. Remember to replace all placeholders with your unique brand content to bring your vision to life! 