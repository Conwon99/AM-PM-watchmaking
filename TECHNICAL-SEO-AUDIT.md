# Technical SEO Audit & Implementation — ampmwatchrepair.com

**Business:** Watch Repair Service | **Primary area:** Troon  
**Audit date:** 2025 | **Site:** https://ampmwatchrepair.com/

---

## Summary: What Was Fixed (Implemented)

| Fix | Impact | Status |
|-----|--------|--------|
| **robots.txt** added (Allow: /, Sitemap) | High – crawlability | ✅ Done |
| **sitemap.xml** added (all 7 pages) | High – indexation | ✅ Done |
| **Canonical tags** site-wide (full URL) | High – duplicate content | ✅ Done |
| **Unique meta title per page** | High – rankings/snippets | ✅ Done |
| **Unique meta description per page** | High – CTR/snippets | ✅ Done |
| **JSON-LD LocalBusiness schema** (NAP, area, services) | High – rich results | ✅ Done |
| **Open Graph & Twitter cards** | Medium – social/snippets | ✅ Done |
| **Favicon** (no 404) | Low – UX/trust | ✅ Done |
| **Font loading** (non-blocking) | Medium – LCP/CLS | ✅ Done |

---

## Phase 1: Crawlability & Indexation

### Issues found (before fixes)

- **No robots.txt** – Risk of crawl directives unknown; no sitemap reference.
- **No sitemap** – Search engines had no explicit list of URLs.
- **Favicon 404** – Layout referenced `/favicon.svg` but file was missing.

### Fixes applied

1. **`static/robots.txt`**
   - `User-agent: *` / `Allow: /`
   - `Sitemap: https://ampmwatchrepair.com/sitemap.xml`

2. **`static/sitemap.xml`**
   - All 7 pages with `<loc>`, `<changefreq>`, `<priority>`.
   - Home priority 1.0; services 0.9; about/contact 0.8; faq 0.7; terms/privacy 0.4.

3. **`static/favicon.svg`**
   - Simple SVG favicon so `/favicon.svg` no longer 404s.

### Hosting checklist

- Enforce **HTTPS** and redirect HTTP → HTTPS (301).
- Choose **www** or **non-www** and 301 the other (e.g. www → non-www).
- Ensure `robots.txt` and `sitemap.xml` are served at `/robots.txt` and `/sitemap.xml`.
- Submit `https://ampmwatchrepair.com/sitemap.xml` in Google Search Console.

---

## Phase 2: Canonicalization & URL Structure

### Fixes applied

- **Canonical tag** on every page: `<link rel="canonical" href="{full URL}">`.
- Canonical is `site + pathname` (e.g. `https://ampmwatchrepair.com/about`).
- **`astro.config.mjs`** has `site: 'https://ampmwatchrepair.com'` so canonicals are correct in production.

### Recommendation

- **Trailing slash:** Decide one convention (with or without). Sitemap uses trailing slash (e.g. `/about/`). If the live site serves no trailing slash, either change sitemap to match or add a 301 redirect so only one version is indexed.
- **301 vs canonical:** Use 301 for alternate hostnames (e.g. www → non-www). Use canonical for same-host duplicates (e.g. query params).

---

## Phase 3: On-Page Technical Signals

### Fixes applied

- **Unique meta title** per page (see table below).
- **Unique meta description** per page (~150–160 chars, keyword-aware).
- **Single H1 per page** – Already correct (one H1 in hero per template).

### Title/description template (current)

| Page | Title | Description (summary) |
|------|--------|------------------------|
| Home | Professional Watch Repair Troon \| AM/PM Watch Repair | Expert watch repair Troon, South Ayrshire; Omega, Rolex, etc.; insured; 10+ years |
| About | About Us \| AM/PM Watch Repair Troon | Repairing and restoring watches since 2015 in Troon |
| Services | Services & Pricing \| Watch Repair Troon \| AM/PM Watch Repair | Prices; part repairs; quartz/mechanical; chronograph; Omega, Rolex; insured |
| Contact | Contact \| AM/PM Watch Repair Troon | Free quote; contact by message or form |
| FAQ | FAQ \| Watch Repair Troon \| AM/PM Watch Repair | FAQs: postage, turnaround, warranties, quotes |
| Terms | Terms & Conditions \| AM/PM Watch Repair | Terms: estimates, postage, warranties, exclusions |
| Privacy | Privacy Policy \| AM/PM Watch Repair | How we collect, use and protect your data |

### Heading hierarchy

- One **H1** per page (hero). Rest **H2** for sections, **H3** for cards/sub-sections. No changes required if this is already the case in your components.

---

## Phase 4: Schema & Structured Data

### Implemented

- **LocalBusiness** JSON-LD on all pages (in `Layout.astro`) with:
  - name, image, url, description
  - address (Troon, South Ayrshire, GB)
  - geo (lat/long Troon)
  - areaServed (Troon, South Ayrshire, UK)
  - sameAs (Instagram)
  - hasOfferCatalog (Part Repairs, Watch Servicing, Vintage Watch Restoration)
  - priceRange: ££

### Optional next steps

- Add **telephone** when you have a public number.
- Add **openingHoursSpecification** if you publish hours.
- Add **Review** or **AggregateRating** schema when you have reviews (must reflect real reviews).

### Validation

- Test with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).

---

## Phase 5: Performance & Core Web Vitals

### Done

- **Fonts:** Google Fonts (Figtree) loaded with `media="print"` and `onload="this.media='all'"` to avoid render-blocking; `<noscript>` fallback.

### Recommended (not yet done)

1. **Images**
   - Prefer **WebP** (with JPEG/PNG fallback) for above-the-fold and large images.
   - Use **width/height** (or aspect-ratio) on all `<img>` to reduce CLS.
   - Keep **lazy loading** (`loading="lazy"`) for below-the-fold images (already used in gallery and elsewhere where appropriate).

2. **Critical CSS**
   - Inline or preload critical above-the-fold CSS; defer the rest if the bundle grows.

3. **Third-party scripts**
   - Keep Formspree/analytics minimal; load after first paint if possible.

### Estimated impact

- Non-blocking fonts: small LCP/CLS improvement.
- WebP + dimensions: moderate LCP and CLS improvement.
- Full image and JS optimisation: can move Core Web Vitals from “Needs improvement” to “Good” on mobile.

---

## Phase 6: Mobile & UX

- **Viewport** is set; no obvious tap-target or font-size issues in the current layout.
- **CLS:** Add explicit dimensions (or aspect-ratio) to images and avoid inserting content above existing content without reserved space.

---

## Phase 7: Internal Linking

- **Nav:** Home, About, Services & Pricing, Terms, Contact (and Instagram).
- **Footer:** Home, About Us, Services, FAQ, Contact; Privacy Policy; Terms of Service.
- All main pages are within 1–2 clicks from home. No orphan pages; no broken internal links identified.

### Optional

- Add a contextual link from **Services** to **Contact** (“Get a quote”) if not already present.
- From **About** or **FAQ**, link to **Services** where relevant.

---

## Phase 8: Automated Checks (Recommendations)

- **Thin content:** Terms/Privacy/FAQ may be short; add useful, unique copy where possible (e.g. 300+ words per page).
- **Image alt:** Already in place on key images (gallery, services, about, hero). Audit remaining `<img>` and add descriptive `alt` where missing.
- **Duplicate meta:** Resolved by unique title/description per page.
- **Broken links:** Internal links checked; fix any broken external links (e.g. animaapp assets) if they appear in production.

---

## Prioritised Issue List

### High (done)

- [x] robots.txt and sitemap
- [x] Canonical tags
- [x] Unique titles and descriptions
- [x] LocalBusiness schema
- [x] Favicon and font loading

### Medium (recommended)

- [ ] Add telephone and opening hours to schema when available
- [ ] Enforce HTTPS and www/non-www redirects on server
- [ ] Image dimensions (width/height) to reduce CLS
- [ ] Convert key images to WebP

### Low

- [ ] Align sitemap URLs with live trailing-slash behaviour or redirects
- [ ] Add more internal links (e.g. Services → Contact)

---

## Execution Checklist

1. **Deploy** current build so `robots.txt`, `sitemap.xml`, canonicals, meta, and schema are live.
2. **Google Search Console:** Add property for `https://ampmwatchrepair.com`, submit sitemap URL.
3. **Bing Webmaster Tools:** Add site and submit same sitemap.
4. **Verify** canonicals and meta in View Source (or GSC URL Inspection).
5. **Test** schema with Rich Results Test and fix any errors.
6. **Monitor** Core Web Vitals (PageSpeed Insights / Search Console) and fix images/JS if needed.
7. **Optional:** Add phone and opening hours to schema; consider WebP and image dimensions in a follow-up sprint.

---

## Expected Outcome

- **Crawlability:** All important pages allowed and listed in sitemap.
- **Indexation:** Clear canonical and unique meta per URL; duplicate content risk reduced.
- **Rich results:** LocalBusiness schema supports local and brand search.
- **Performance:** Non-blocking fonts and future image/JS work should help stability and rankings over 30–60 days.
