# Plan 1: Modern Single-Page with Hero Featured Section - Implementation Tasks

## Phase 1: Setup & Structure

### 1.1 Project Setup

- [ ] Create new git branch: `feature/plan1-modern-single-page`
- [ ] Backup current `index.html` (save as `index-old.html`)
- [ ] Review and audit current CSS in `assets/css/main.css`
- [ ] Decide on CSS approach: Tailwind CDN vs custom CSS Grid/Flexbox
- [ ] Set up new HTML structure skeleton in `index.html`

### 1.2 Dependencies & Assets

- [ ] Add Swiper.js CDN or alternative carousel library (or build custom)
- [ ] Source/create tech badge icons (React, Firebase, Angular, etc.)
- [ ] Optimize all project videos/images for web performance
- [ ] Set up color scheme variables for tech badges in CSS
- [ ] Ensure all Font Awesome icons are available

---

## Phase 2: HTML Structure

### 2.1 Landing Hero Section

- [ ] Create full-screen hero section with animated background
- [ ] Add name, title, and tagline
- [ ] Implement scroll-down indicator/animation
- [ ] Add navigation bar (sticky header with smooth scroll links)
- [ ] Ensure hero is responsive (mobile, tablet, desktop)

### 2.2 Featured Projects Section

- [ ] Create 3-column grid container (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Build featured project card component structure for:
  - Goico SOS
  - VideoAI Studio
  - Goico's Artist
- [ ] Add hover states for video/GIF previews
- [ ] Implement "View Details" button/modal trigger for each
- [ ] Add tech badge pills to each card

### 2.3 About & Work History Section

- [ ] Create side-by-side layout container
- [ ] Left side: Visual timeline or profile section
- [ ] Right side: Expanded Lukka work description with bullet points
- [ ] Add current intro paragraph content
- [ ] Include profile image
- [ ] Ensure responsive stacking on mobile

### 2.4 All Projects Carousel Section

- [ ] Create compact carousel container
- [ ] Build project card template (smaller than featured)
- [ ] Add all 11 projects to carousel:
  - Goico's Artist
  - Goico SOS
  - VideoAI Studio
  - MathMentor AI
  - SpendSense
  - Demand Letter Generator
  - Email Ad Generator
  - Rapid Photo Upload
  - RxID
  - Instagram Clone
  - (Any other projects)
- [ ] Implement navigation controls (arrows, dots)
- [ ] Show 2-3 cards at once on desktop, 1 on mobile
- [ ] Add click handler to open full project details

### 2.5 Contact Footer

- [ ] Create contact section with form
- [ ] Keep existing Formspree integration
- [ ] Add social media icons (LinkedIn, GitHub, Twitter)
- [ ] Style footer with copyright info

---

## Phase 3: CSS Styling

### 3.1 Global Styles

- [ ] Set up CSS variables for colors, spacing, typography
- [ ] Define responsive breakpoints
- [ ] Create smooth scroll behavior
- [ ] Add loading animations/transitions
- [ ] Set up typography hierarchy

### 3.2 Hero Section Styles

- [ ] Full-screen height with animated background (particle animation - PRIMARY)
  - Alternative options to try later: animated gradient, bg.jpg with overlay, geometric patterns
- [ ] Centered content alignment
- [ ] Animated text entrance
- [ ] Scroll indicator animation

### 3.3 Featured Projects Grid

- [ ] 3-column CSS Grid with gaps
- [ ] Card styles: shadows, borders, hover effects
- [ ] Video/image container with aspect ratio preservation
- [ ] Hover overlay with description preview
- [ ] Responsive grid (3→2→1 columns)

### 3.4 Tech Badge Pills

- [ ] Create badge component styles
- [ ] Color coding system:
  - Blue: Frontend (React, Angular, Tailwind)
  - Green: Backend (Node, Express, FastAPI, Spring Boot)
  - Purple: AI/ML (GPT-4, OpenAI SDK, Embedding models)
  - Orange: Database/Storage (Firebase, PostgreSQL, S3)
  - Red: Other/DevOps
- [ ] Add icons to badges
- [ ] Hover effects
- [ ] Responsive sizing

### 3.5 Carousel Styles

- [ ] Compact card design
- [ ] Smooth transitions between slides
- [ ] Navigation arrow styles
- [ ] Dot indicator styles
- [ ] Mobile-responsive controls

### 3.6 Animations & Interactions

- [ ] Scroll-triggered animations (Intersection Observer)
- [ ] Card hover animations
- [ ] Button hover effects
- [ ] Smooth scroll navigation
- [ ] Progress indicator as user scrolls

---

## Phase 4: JavaScript Functionality

### 4.1 Navigation

- [ ] Implement smooth scroll to sections
- [ ] Sticky navigation bar with active section highlighting
- [ ] Hamburger menu for mobile
- [ ] Scroll progress indicator

### 4.2 Featured Projects Modals/Slide-ins

- [ ] Create modal/slide-in component
- [ ] Open modal with full project details on "View Details" click
- [ ] Close modal functionality (X button, ESC key, outside click)
- [ ] Load full project description, video, GitHub links, tech badges
- [ ] Make modal accessible (keyboard navigation, focus trap)

### 4.3 Carousel Implementation

- [ ] Initialize carousel library (or custom implementation)
- [ ] Set up auto-play (optional)
- [ ] Navigation arrow click handlers
- [ ] Dot indicator click handlers
- [ ] Touch/swipe support for mobile
- [ ] Keyboard navigation (arrow keys)

### 4.4 Scroll Animations

- [ ] Set up Intersection Observer API
- [ ] Trigger animations when sections enter viewport
- [ ] Fade-in, slide-in effects for content
- [ ] Stagger animations for multiple cards

### 4.5 Video Lazy Loading

- [ ] Keep existing lazy loading for videos
- [ ] Implement progressive video loading
- [ ] Add loading spinners/placeholders

---

## Phase 5: Content Population

### 5.1 Featured Projects Content

- [ ] Goico SOS:
  - Video/GIF
  - Short description (2-3 sentences)
  - Tech badges: React Native, Expo, Firebase, GPT-4o-mini, OpenAI Embeddings
  - GitHub link, live link
- [ ] VideoAI Studio:
  - Video/GIF
  - Short description (2-3 sentences)
  - Tech badges: Python, FastAPI, Celery, Redis, GPT-4o-mini, Flux Dev, Veo 3.1
  - GitHub link, live link
- [ ] Goico's Artist:
  - Video/GIF
  - Short description (2-3 sentences)
  - Tech badges: React, Tailwind CSS, Firebase, OpenAI SDK, GPT-4 Turbo
  - GitHub link, live link

### 5.2 All Projects Content

- [ ] Populate remaining 8 projects with:
  - Thumbnail/image
  - Title
  - One-sentence description
  - Tech badges (2-4 key technologies)
  - Links

### 5.3 Work History Expansion

- [ ] Expand Lukka section with:
  - Role progression: Junior → L2 → L3
  - Key projects/products launched
  - Tech stack: Angular, TypeScript, RxJS, NgRx
  - Team leadership mention
  - Keep under 150 words total

---

## Phase 6: Responsive Design

### 6.1 Mobile Optimization

- [ ] Test hero section on mobile devices
- [ ] Ensure featured projects stack vertically (1 column)
- [ ] Mobile navigation (hamburger menu)
- [ ] Carousel shows 1 card on mobile
- [ ] Form fields properly sized
- [ ] Touch-friendly button sizes

### 6.2 Tablet Optimization

- [ ] Featured projects: 2-column grid
- [ ] Carousel shows 2 cards
- [ ] Proper spacing and sizing

### 6.3 Desktop Optimization

- [ ] Featured projects: 3-column grid
- [ ] Carousel shows 3 cards
- [ ] Maximize use of screen space
- [ ] Hover effects work properly

---

## Phase 7: Polish & Testing

### 7.1 Cross-Browser Testing

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Fix any browser-specific issues

### 7.2 Performance Optimization

- [ ] Optimize images (compress, use WebP)
- [ ] Lazy load videos
- [ ] Minimize CSS/JS
- [ ] Test page load speed
- [ ] Ensure smooth animations (60fps)

### 7.3 Accessibility

- [ ] Add proper ARIA labels
- [ ] Ensure keyboard navigation works
- [ ] Test with screen reader
- [ ] Proper heading hierarchy
- [ ] Sufficient color contrast
- [ ] Focus indicators visible

### 7.4 Final Review

- [ ] Proofread all content
- [ ] Test all links (live sites, GitHub)
- [ ] Verify all videos play correctly
- [ ] Test form submission
- [ ] Check social media links
- [ ] Run Lighthouse audit
- [ ] Get feedback from others

---

## Phase 8: Deployment

### 8.1 Pre-Deployment

- [ ] Final testing on staging/local
- [ ] Create backup of current live site
- [ ] Update README if needed

### 8.2 Deployment

- [ ] Merge branch to main (or deploy branch)
- [ ] Push to GitHub Pages (or hosting platform)
- [ ] Verify deployment successful
- [ ] Test live site thoroughly

### 8.3 Post-Deployment

- [ ] Monitor for any issues
- [ ] Update any external links to portfolio
- [ ] Share updated portfolio

---

## Key Files to Modify/Create

- `index.html` - Complete rebuild
- `assets/css/main.css` - Major updates or new file
- `assets/css/plan1-custom.css` - New custom styles
- `assets/js/plan1-main.js` - New JavaScript file
- `assets/js/carousel.js` - Carousel implementation
- `assets/js/modals.js` - Modal/slide-in implementation

---

## Notes

- Keep current `favicon.ico`, `CNAME`, `LICENSE.txt`
- Maintain current video hosting on GitHub releases
- Consider creating reusable components for future updates
- Document any custom JavaScript for maintenance
