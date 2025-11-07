# html-css-project
EV Explorer

A zero-JS, fully responsive electric-vehicle showcase built with pure HTML + CSS.
Live Demo: https://J-Hutvecklare.github.io/html-css-project/


Project Description:

EV Explorer is a showcase website about electric vehicles, featuring three main pages:
    - Home (index.html) – Presents the history and trends of EV development, including an image gallery and expandable details
    - EV brands (ev-brands.html) – Provides introductions to Tesla, NIO, and BYD
    - Survey (survey.html) – Collects user preferences and opinions about electric vehicles



Design Decisions:
1. Color System
 -Primary Color: #007bff (Blue)
   -Conveys a sense of technology and trust
   -Used for links, buttons, and focus indicators

 -Text Color: #333 (Dark Gray)
   -Ensures good readability
   -Meets WCAG AA contrast requirements
 
 -Background Color: #fff (White)
   -Provides a comfortable reading experience

 -Footer Background: #312f2f (Dark Gray)
   -Creates visual contrast with main content
   -Defines the footer area clearly

2. Typography System
 -Font Family: System font stack (sans-serif, system-ui, -apple-system)
   -Uses native system fonts for better performance

 -Fluid Typography: Uses the clamp() function extensively
   -Maintains readability across devices

 -Font Size Range:
   -Different ranges based on devices


Layout Strategy
1. Mobile-First Design:
 -Base styles for mobile first
 -Enhanced progressively for larger screens using media queries

2.Layout Techniques:
 -Flexbox: Used for navigation, internal layouts, and galleries
 -CSS Grid: Used for desktop content grid (grid-template-columns: 1fr 300px)

3.Responsive Breakpoints:
 -768px: Tablet/Desktop switch
   -Header switches to horizontal layout
   -Navigation displayed inline
   -Content uses Grid layout

 -1024px: Large desktop optimization
   -Improves spacing and structure

Container Width:
 -Max width: 1200px
 -Centered with auto margins 

CSS Interaction Patterns:
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

  -Hover Effects:
    -Logo scaling (transform: scale(1.05))
    -Button lift (translateY(-2px))


  -Transitions:
    -Smooth transitions for all interactive elements
    -Implemented via transition property

  -Accessibility:
    -Respects prefers-reduced-motion to disable motion for sensitive users


Accessibility Features
This project follows WCAG 2.1 AA standards:

1. Skip Link
  -<a href="#main-content">Main content</a> on all pages
  -Visible when tabbed; quickly jumps to main content

2. Focus Styles (:focus-visible)
  -Clear focus indicators for all interactive elements
  -Controlled by CSS variable: --focus-outline-width: 3px

3. ARIA Labels
  -aria-label for icon buttons and navigation
  -aria-current="page" for active links
  -role="navigation", role="region" for semantic structure

4. Image Alt Text
  -All meaningful images include descriptive alt text
  -Charts have detailed alt descriptions

5. Semantic HTML
  -Proper use of HTML5 structural elements

6. Keyboard Navigation
  -All interactive elements operable via keyboard
  -Logical tab order maintained

7. Reduced Motion Support
  -Honors user motion preferences
  -Animations disabled when prefers-reduced-motion is set


File Structure

html-css project/
├── index.html              # Home page – EV history & trends
├── ev-brands.html          # Brand intro page – Tesla, NIO, BYD
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


 Browser Support
  1. Chrome / Edge – Fully supported (including experimental features)
  2. Safari – Fully supported
  3. Mobile Browsers – Fully supported (iOS Safari, Chrome Mobile, etc.)
    

Deploy via GitHub Pages
  -Visit: https://J-Hutvecklare.github.io/html-css-project/


License
© 2025 EV Explorer. All rights reserved.

Author
EV Explorer Project








