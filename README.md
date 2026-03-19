# Lady Alisha Danner — Author Website

A premium, production-ready Next.js 14 author website for **Elect Lady Alisha Danner**, featuring the book *A Woman's Write: Prophetic Literature for the Common Woman*.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
/app
  page.tsx              → Homepage (Hero, About preview, Features, Testimonials, CTA)
  layout.tsx            → Root layout with Navbar + Footer
  globals.css           → Global styles, fonts, custom classes
  /about
    page.tsx            → About page (metadata)
    AboutClient.tsx     → About page UI (bio, milestones, mission/vision)
  /book
    page.tsx            → Book page (metadata)
    BookClient.tsx      → Book page UI (cover, chapters, discoveries)
  /contact
    page.tsx            → Contact page (metadata)
    ContactClient.tsx   → Contact form + inquiry types
/components
  Navbar.tsx            → Sticky navbar with scroll-aware transparency + mobile menu
  Footer.tsx            → Footer with social links + navigation
  Hero.tsx              → Animated hero with floating book cover + CTAs
  BookCard.tsx          → Reusable book display card component
  CTA.tsx               → Conversion banner section
/public
  /images
    book-cover.jpg      → Book cover image
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Background | `#0D0414` (royal-950) |
| Secondary Background | `#1A0826` (royal-900) |
| Accent Purple | `#2E0F3A` (royal-800) |
| Gold Primary | `#D4AF37` (gold-500) |
| Gold Light | `#F0D080` (gold-300) |
| Cream | `#FAF7F0` |

**Fonts:**
- Display: `Cormorant Garamond` (headings, pull quotes)
- Body: `EB Garamond` (paragraphs, descriptions)
- Accent: `Cinzel` (labels, buttons, nav items)

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** via CSS `@import`

---

## ✏️ Customization

### Update the Amazon link
Search for `https://amazon.com` in all files and replace with your actual Amazon book URL.

### Update social media links
Edit `components/Footer.tsx` — find the social links array and replace `href="#"` with your real URLs.

### Add author email
In `app/contact/ContactClient.tsx`, the form currently shows a success animation. To wire it to a real backend, integrate with services like **Resend**, **EmailJS**, or **Formspree**.

### Add author photo
Replace `/public/images/book-cover.jpg` with a dedicated author headshot for the About page, and update the `src` in `app/about/AboutClient.tsx`.

---

## 📦 Deployment

Deploy instantly on **Vercel**:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

*Built with prayer, precision, and prophetic purpose. 🙏*
