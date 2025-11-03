# html-css-project
EV Explorer

A zero-JS, fully responsive electric-vehicle showcase built with pure HTML + CSS.
Live Demo: https://J-Hutvecklare.github.io/html-css-project/



📋 Project Description
EV Explorer is a showcase website about electric vehicles, featuring three main pages:
    - Home (index.html) – Presents the history and trends of EV development, including an image gallery and expandable details
    - Brand Introduction (EV Brands.html) – Provides detailed introductions to Tesla, NIO, and BYD
    - User Survey (survey.html) – Collects user preferences and opinions about electric vehicles

This project is entirely built with HTML5 and CSS3, with zero JavaScript dependencies, demonstrating the powerful capabilities of modern CSS.



🎨 Design Decisions
Color System
 -Primary Color: #007bff (Blue)
   -Conveys a sense of technology and trust
   -Used for links, buttons, and focus indicators

 -Text Color: #333333 (Dark Gray)
   -Ensures good readability
   -Meets WCAG AA contrast requirements
 
 -Background Color: #ffffff / #f5f5f5 (White / Light Gray)
   -Provides a comfortable reading experience
   -Light gray background used for cards and sections

 -Footer Background: #312f2f (Dark Gray)
   -Creates visual contrast with main content
   -Defines the footer area clearly

Typography System
 -Font Family: System font stack (sans-serif, system-ui, -apple-system)
   -Uses native system fonts for better performance
   -Ensures consistent appearance across platforms

 -Fluid Typography: Uses the clamp() function extensively
   -Font size: clamp(1rem, 2vw, 2rem) — adjusts dynamically by screen size
   -Spacing: clamp(1rem, 4vw, 2rem) — responsive padding
   -Maintains readability across devices

 -Font Size Range:
   -Mobile: base 1rem
   -Tablet: 1.125rem – 1.5rem
   -Desktop: up to 2rem


Layout Strategy

Mobile-First Design:
 -Base styles for mobile first
 -Enhanced progressively for larger screens using media queries

Layout Techniques:
 -Flexbox: Used for navigation, internal layouts, and galleries
 -CSS Grid: Used for desktop content grid (grid-template-columns: 1fr 300px)

Responsive Breakpoints:
 -768px: Tablet/Desktop switch
   -Header switches to horizontal layout
   -Navigation displayed inline
   -Content uses Grid layout

 -1024px: Large desktop optimization
   -Improves spacing and structure

Container Width:
 -Max width: 1200px
 -Centered with auto margins 



 🔧 CSS Interaction Patterns
This project implements 4 pure CSS interaction patterns (exceeding the minimum of 2 required):

 1. Accordion (<details>/<summary>)
 Location: index.html → tech-specs component

 Features:
 -Click summary to expand/collapse content
 -Custom arrow indicators
 -Smooth transition animation
 -Keyboard accessible (Tab + Enter)
 -Respects prefers-reduced-motion

 2. Hamburger Menu (:checked Checkbox Technique)
 Location: Header navigation on all pages

 Features:
 -Expands/collapses navigation menu on mobile
 -Hamburger icon animates into an “X”
 -Fully CSS-driven (no JavaScript)
 -Accessible via keyboard and screen readers

 3. Scrolling Gallery (CSS Scroll Snap)
 Location: index.html → hero-gallery
 
 Features:
 -Horizontal scrolling EV brand gallery
 -Smooth snap alignment
 -Navigation dots implemented via anchor links
 -Touch support on mobile
 -Hidden scrollbar for clean UI

 4. Animations & Transitions
 Includes:
  -Logo Gradient Animation: 3-color looping gradient
    -Colors: Blue → Red → Green
    -6s infinite cycle

  -Hover Effects:
    -Logo scaling (transform: scale(1.05))
    -Button lift (translateY(-2px))
    -Link color transitions

  -Transitions:
    -Smooth transitions for all interactive elements
    -Implemented via transition property

  -Accessibility:
    -Respects prefers-reduced-motion to disable motion for sensitive users

♿ Accessibility Features
This project follows WCAG 2.1 AA standards:

✅ Skip Link
  -<a href="#main-content">Main content</a> on all pages
  -Visible when tabbed; quickly jumps to main content

✅ Focus Styles (:focus-visible)
  -Clear focus indicators for all interactive elements
  -Controlled by CSS variable: --focus-outline-width: 3px

✅ ARIA Labels
  -aria-label for icon buttons and navigation
  -aria-current="page" for active links
  -role="navigation", role="region" for semantic structure

✅ Image Alt Text
  -All meaningful images include descriptive alt text
  -Charts have detailed alt descriptions (e.g. “EV Market Growth Chart 2008–Present”)

✅ Semantic HTML
  -Proper use of HTML5 structural elements
  -Logical heading hierarchy (h1 → h2 → h3)

✅ Keyboard Navigation
  -All interactive elements operable via keyboard
  -Logical tab order maintained

✅ Reduced Motion Support
  -Honors user motion preferences
  -Animations disabled when prefers-reduced-motion is set


📁 File Structure

html-css project/
├── index.html              # Home page – EV history & trends
├── EV Brands.html          # Brand intro page – Tesla, NIO, BYD
├── survey.html             # User survey page – collects preferences
├── style.css               # Main stylesheet – shared across pages
├── README.md               # Project documentation (this file)
└── img/                    # Image assets
    ├── chart-1.jpg         # Chart 1: EV Market Growth
    ├── chart-2.jpg         # Chart 2: Key Milestones
    ├── chart-3.jpg         # Chart 3: Future Forecast
    ├── chart-4.jpg         # Chart 4: EV Benefits Comparison
    ├── img1_tesla.jpg      # Tesla main image (desktop)
    ├── img1-mobile_tesla.jpg  # Tesla main image (mobile)
    ├── img2_nio.jpg        # NIO main image (desktop)
    ├── img2-mobile_nio.jpg  # NIO main image (mobile)
    ├── img3_byd.jpg        # BYD main image (desktop)
    ├── img3-mobile_byd.jpg  # BYD main image (mobile)
    ├── tesla-brand.jpg      # Tesla brand image
    ├── tesla-brand_mobile.jpg  # Tesla brand (mobile)
    ├── NIO-brand.jpeg       # NIO brand image
    ├── NIO-brand_mobile.jpg  # NIO brand (mobile)
    ├── BYD-brand.jpg        # BYD brand image
    └── BYD-brand_mobile.jpg  # BYD brand (mobile)

 

🚀 Tech Stack

  -HTML5 – Semantic tags, native form validation
  -CSS3 
    -Flexbox layout
    -CSS Grid
    -CSS Variables (Custom Properties)
    -CSS Animations & Transitions
    -CSS Scroll Snap
    -Media Queries
    -Fluid Typography (clamp())
 -No JavaScript – 100% CSS-driven interactivity


 🌐 Browser Support

  ✅ Chrome / Edge – Fully supported (including experimental features)
  ✅ Firefox – Fully supported
  ✅ Safari – Fully supported
  ✅ Mobile Browsers – Fully supported (iOS Safari, Chrome Mobile, etc.)
  
  Note:
  -@scroll-timeline (gallery animation) is experimental and currently Chrome-only
  -All other core features are supported across modern browsers


🔍 Core Features
  Responsive Images
    -Uses <picture> and srcset
    -Loads appropriate image sizes for mobile/desktop
    -Lazy loads non-critical images (loading="lazy")
  
  Form Validation
    -Uses native HTML5 validation
    -Required fields (required)
    -Input type validation (type="email", type="number")
    -Range validation (min, max)
    
  Navigation System
    -Hamburger menu on mobile
    -Horizontal nav bar on desktop
    -Active page highlighting
    -Full keyboard navigation support



📦 Deployment

Deploy via GitHub Pages
  -Push the project to your GitHub repository
  -Enable GitHub Pages in repository settings
  -Choose the main branch as the source
  -Visit: https://J-Hutvecklare.github.io/html-css-project/


Run Locally
Simply open the HTML files directly in your browser — no server required.


📝 License
© 2025 EV Explorer. All rights reserved.

👤 Author
EV Explorer Project








