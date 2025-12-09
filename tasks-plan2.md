# Plan 2: Two-Page Split Experience - Implementation Tasks

## Phase 1: Setup & Structure

### 1.1 Project Setup
- [ ] Create new git branch: `feature/plan2-two-page-split`
- [ ] Backup current `index.html` (save as `index-old.html`)
- [ ] Plan two-page architecture:
  - `index.html` - Landing page with featured projects
  - `portfolio.html` - Full portfolio page
- [ ] Review current CSS and plan shared components
- [ ] Decide on navigation approach (same page sections vs separate pages)

### 1.2 Dependencies & Assets
- [ ] Add navigation library if needed (optional)
- [ ] Source/create tech badge icons
- [ ] Optimize all project videos/images
- [ ] Set up shared CSS file for common components
- [ ] Add Swiper.js or carousel library for portfolio page

---

## Phase 2: Landing Page (index.html) Structure

### 2.1 Hero Section
- [ ] Create minimal hero with:
  - Name and title
  - Brief tagline/elevator pitch (1-2 sentences)
  - Professional headshot or logo
  - CTA: "View Featured Work" scroll indicator
- [ ] Full viewport height
- [ ] Animated background or gradient
- [ ] Smooth scroll to featured projects

### 2.2 Featured Projects "Chapters"
- [ ] Create full-width alternating section layout
- [ ] **Project 1: Goico SOS**
  - Large video/media on left, content on right
  - Prominent heading
  - Detailed description (3-4 paragraphs from current content)
  - Tech badge pills
  - Links: Live site, GitHub
  - Background accent color/gradient
- [ ] **Project 2: VideoAI Studio**
  - Large video/media on right, content on left (alternating)
  - Same structure as Project 1
  - Different background accent
- [ ] **Project 3: Goico's Artist**
  - Large video/media on left, content on right
  - Same structure as Project 1
  - Third background accent
- [ ] Each section should be full viewport or near-full
- [ ] Smooth scroll between sections

### 2.3 Call-to-Action Section
- [ ] Create CTA section between projects and footer
- [ ] "Want to see more of my work?" heading
- [ ] Large button: "View All Projects →" linking to `portfolio.html`
- [ ] Secondary button: "Contact Me" linking to portfolio page contact

### 2.4 Mini Footer
- [ ] Simple footer with:
  - Social media links (LinkedIn, GitHub, Twitter)
  - Copyright
  - Link to full portfolio page

---

## Phase 3: Portfolio Page (portfolio.html) Structure

### 3.1 Header/Navigation
- [ ] Create sticky header with:
  - Logo/Name (links back to index.html)
  - Navigation links: About, Work, Projects, Contact
  - "View Featured Work" link back to index.html
- [ ] Make header persistent across scroll

### 3.2 Intro Section
- [ ] Brief welcome back message
- [ ] Quick summary of what's on this page
- [ ] Jump links to sections

### 3.3 About Section
- [ ] Port current "About Me" content
- [ ] Include profile image
- [ ] Personal background, hobbies
- [ ] Keep concise

### 3.4 Work History Section
- [ ] **Lukka Experience** (expanded):
  - Company name, role, dates
  - Brief overview paragraph (current + expansion)
  - Bullet points:
    - Junior → L2 → L3 progression timeline
    - Key projects/products launched
    - Tech stack: Angular, TypeScript, RxJS, NgRx, etc.
    - Team leadership experience
    - Fast-paced startup environment learnings
  - Optional: Company logo if available
- [ ] Section for other relevant experience (if any)
- [ ] Keep focused and scannable

### 3.5 All Projects Carousel Section
- [ ] Section heading: "All Projects"
- [ ] Optional: Category filter tabs (AI Projects, Full-Stack, etc.)
- [ ] Compact carousel implementation:
  - Show 2-3 projects at once (desktop)
  - Project cards with:
    - Thumbnail/image
    - Title
    - One-sentence description
    - Tech badge pills (2-4 key techs)
    - "View Details" button
  - Navigation arrows and dots
- [ ] Modal/slide-in for full project details:
  - Full video
  - Complete description
  - All tech badges
  - Links to live site and GitHub
- [ ] All 11 projects included:
  - Featured 3 (Goico SOS, VideoAI Studio, Goico's Artist)
  - MathMentor AI
  - SpendSense
  - Demand Letter Generator
  - Email Ad Generator
  - Rapid Photo Upload
  - RxID
  - Instagram Clone
  - Any others

### 3.6 Contact Section
- [ ] Port current contact form
- [ ] Keep Formspree integration
- [ ] Social media links
- [ ] Optional: Email address displayed

### 3.7 Footer
- [ ] Full footer with:
  - Navigation links
  - Social media
  - Copyright
  - Credits

---

## Phase 4: Shared Components & CSS

### 4.1 Shared CSS File
- [ ] Create `assets/css/shared.css` for common components:
  - Navigation styles
  - Button styles
  - Form styles
  - Footer styles
  - Tech badge pills
  - Typography
  - Color variables

### 4.2 Tech Badge Pills
- [ ] Define badge component CSS
- [ ] Color coding:
  - Blue: Frontend (React, Angular, Tailwind)
  - Green: Backend (Node, Express, FastAPI, Spring Boot)
  - Purple: AI/ML (GPT-4, OpenAI SDK)
  - Orange: Database/Storage (Firebase, PostgreSQL, S3)
  - Red: Other
- [ ] Include icons
- [ ] Hover effects

### 4.3 Page-Specific CSS
- [ ] `assets/css/landing.css` - For index.html
  - Hero styles
  - Featured project "chapter" styles
  - Alternating layouts
  - CTA section styles
- [ ] `assets/css/portfolio.css` - For portfolio.html
  - Section styles
  - Carousel styles
  - Work history styles
  - About section styles

### 4.4 Responsive Breakpoints
- [ ] Define consistent breakpoints for both pages
- [ ] Mobile: < 768px
- [ ] Tablet: 768px - 1024px
- [ ] Desktop: > 1024px

---

## Phase 5: JavaScript Functionality

### 5.1 Landing Page (index.html) JS
- [ ] Smooth scroll between featured project sections
- [ ] Scroll-triggered animations (fade-in, slide-in)
- [ ] Video lazy loading
- [ ] Hero CTA button scroll behavior
- [ ] Optional: Progress indicator showing which featured project is in view

### 5.2 Portfolio Page (portfolio.html) JS
- [ ] Sticky navigation with active section highlighting
- [ ] Smooth scroll to sections
- [ ] Carousel functionality:
  - Initialize carousel
  - Navigation controls
  - Touch/swipe support
  - Keyboard navigation
- [ ] Modal/slide-in for project details:
  - Open modal on "View Details" click
  - Close modal (X, ESC, outside click)
  - Accessible (focus trap, keyboard nav)
- [ ] Form submission handling (existing Formspree)
- [ ] Video lazy loading

### 5.3 Shared JS
- [ ] Create `assets/js/shared.js` for:
  - Navigation toggle (mobile)
  - Common utilities
  - Animation helpers

---

## Phase 6: Content Population

### 6.1 Landing Page Content
- [ ] Write compelling hero tagline
- [ ] **Goico SOS** featured content:
  - Video
  - Full description (3-4 paragraphs)
  - Tech badges: React Native, Expo, Firebase, GPT-4o-mini, OpenAI Embeddings
  - Links
- [ ] **VideoAI Studio** featured content:
  - Video
  - Full description (3-4 paragraphs, emphasize multi-step pipeline)
  - Tech badges: Python, FastAPI, Celery, Redis, GPT-4o-mini, Flux Dev, Veo 3.1
  - Links
- [ ] **Goico's Artist** featured content:
  - Video
  - Full description (3-4 paragraphs)
  - Tech badges: React, Tailwind CSS, Firebase, OpenAI SDK, GPT-4 Turbo
  - Links
- [ ] Write CTA section copy

### 6.2 Portfolio Page Content
- [ ] Write intro/welcome message
- [ ] Port "About Me" content
- [ ] **Expand Lukka work history**:
  - Current paragraph as base
  - Add bullet points:
    - "Progressed from Junior (L1) to L2 in ~1 year, then L3"
    - "Contributed to launch of [product names if you remember]"
    - "Tech stack: Angular, TypeScript, RxJS, NgRx, [others]"
    - "Led team of [X] developers" (if applicable)
    - "Gained expertise in fast-paced startup environment"
  - Keep total under 200 words
- [ ] Populate all 11 projects in carousel with:
  - Thumbnails
  - Titles
  - Short descriptions
  - Tech badges
  - Full details for modals

---

## Phase 7: Responsive Design

### 7.1 Landing Page Mobile
- [ ] Hero section: stacked, proper font sizing
- [ ] Featured projects: stack vertically (media above text)
- [ ] Ensure videos/images scale properly
- [ ] Mobile-friendly spacing and padding
- [ ] Touch-friendly CTA buttons

### 7.2 Landing Page Tablet
- [ ] Featured projects: may keep side-by-side if space allows
- [ ] Optimize spacing

### 7.3 Portfolio Page Mobile
- [ ] Hamburger menu for navigation
- [ ] All sections stack vertically
- [ ] Carousel shows 1 project card
- [ ] Form fields properly sized
- [ ] Work history bullet points readable

### 7.4 Portfolio Page Tablet
- [ ] Carousel shows 2 project cards
- [ ] Navigation may stay horizontal
- [ ] Optimize layouts

### 7.5 Desktop Optimization
- [ ] Landing: maximize alternating layouts
- [ ] Portfolio: carousel shows 3 cards
- [ ] Proper use of whitespace
- [ ] Hover effects work well

---

## Phase 8: Navigation Between Pages

### 8.1 Internal Linking
- [ ] Ensure all links between index.html and portfolio.html work
- [ ] "View All Projects" button on landing page
- [ ] "View Featured Work" link on portfolio page
- [ ] Logo/name links back to landing
- [ ] Test navigation flow

### 8.2 Deep Linking (Optional)
- [ ] Consider URL hash navigation for portfolio page sections
- [ ] Example: `portfolio.html#about`, `portfolio.html#projects`
- [ ] Enable sharing specific sections

---

## Phase 9: Polish & Testing

### 9.1 Visual Consistency
- [ ] Ensure design consistency between pages
- [ ] Matching color schemes
- [ ] Consistent typography
- [ ] Shared component styles identical
- [ ] Smooth visual transition between pages

### 9.2 Cross-Browser Testing
- [ ] Test both pages in Chrome
- [ ] Test both pages in Firefox
- [ ] Test both pages in Safari
- [ ] Test both pages in Edge
- [ ] Fix browser-specific issues

### 9.3 Performance
- [ ] Optimize images and videos
- [ ] Lazy loading implemented
- [ ] Minimize CSS/JS
- [ ] Test load times for both pages
- [ ] Ensure smooth animations

### 9.4 Accessibility
- [ ] Proper ARIA labels
- [ ] Keyboard navigation works on both pages
- [ ] Screen reader testing
- [ ] Heading hierarchy
- [ ] Color contrast
- [ ] Focus indicators

### 9.5 Content Review
- [ ] Proofread all content on both pages
- [ ] Test all external links
- [ ] Verify videos play correctly
- [ ] Test form submission
- [ ] Check social media links
- [ ] Run Lighthouse audit on both pages

---

## Phase 10: Deployment

### 10.1 Pre-Deployment
- [ ] Test both pages together locally
- [ ] Verify navigation between pages
- [ ] Create backup of current live site
- [ ] Update README with new structure

### 10.2 Deployment
- [ ] Merge branch to main
- [ ] Push both HTML files to GitHub Pages
- [ ] Verify both pages deploy successfully
- [ ] Test live site navigation
- [ ] Check all links work in production

### 10.3 Post-Deployment
- [ ] Monitor for issues
- [ ] Update portfolio links on other platforms
- [ ] Share updated portfolio
- [ ] Consider analytics to see which page gets more traffic

---

## Estimated Timeline

- **Phase 1**: 1-2 hours (Setup)
- **Phase 2**: 3-4 hours (Landing page structure)
- **Phase 3**: 3-4 hours (Portfolio page structure)
- **Phase 4**: 3-4 hours (CSS for both pages)
- **Phase 5**: 3-4 hours (JavaScript functionality)
- **Phase 6**: 2-3 hours (Content population)
- **Phase 7**: 3-4 hours (Responsive design)
- **Phase 8**: 1 hour (Navigation between pages)
- **Phase 9**: 2-3 hours (Polish & testing)
- **Phase 10**: 1 hour (Deployment)

**Total estimated time**: 18-25 hours

---

## Key Files to Create/Modify

### New Files
- `portfolio.html` - Full portfolio page
- `assets/css/shared.css` - Shared component styles
- `assets/css/landing.css` - Landing page specific styles
- `assets/css/portfolio.css` - Portfolio page specific styles
- `assets/js/shared.js` - Shared JavaScript utilities
- `assets/js/landing.js` - Landing page JavaScript
- `assets/js/portfolio.js` - Portfolio page JavaScript
- `assets/js/carousel.js` - Carousel implementation
- `assets/js/modals.js` - Modal/slide-in implementation

### Modified Files
- `index.html` - Rebuild as landing page
- Existing CSS/JS may be referenced or replaced

---

## Notes

- Keep current `favicon.ico`, `CNAME`, `LICENSE.txt`
- Maintain video hosting on GitHub releases
- Consider user flow: most visitors will land on index.html first
- Featured projects get maximum attention on landing page
- Portfolio page serves as comprehensive reference
- SEO considerations: ensure both pages have proper meta tags
- Consider adding a subtle "Page 1 of 2" indicator or navigation hint

---

## Advantages of Two-Page Approach

- **Focused first impression**: Featured work gets full attention
- **Clear separation**: "Best work" vs "Complete portfolio"
- **Storytelling**: Each featured project gets its own "chapter"
- **Scalability**: Easy to add more projects to portfolio page without cluttering landing
- **User choice**: Let visitors decide how deep they want to go

## Potential Challenges

- Maintaining consistency across two pages
- Users might not discover portfolio page (mitigate with clear CTAs)
- Slightly more maintenance (two pages to update)
- Need to decide which projects go where (already decided: top 3 featured)

