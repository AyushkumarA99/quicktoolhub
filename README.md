# QuickToolHub 🛠️

> **Free, private, and lightning-fast online tools for everyday productivity.**

QuickToolHub is an all-in-one web platform providing 10+ free utilities for students, content creators, developers, and professionals. All data is processed **100% locally in the user's web browser** with zero server uploads and zero account registration walls.

---

## 🌟 Key Features

- **100% Client-Side Privacy:** No photos, documents, or calculation inputs are ever uploaded to a server.
- **Instant Speed:** Zero latency calculations and immediate image conversions.
- **Modern Glassmorphism UI:** Built with Inter & JetBrains Mono typography, responsive Bento grids, and subtle luminous category accents.
- **AdSense & SEO Ready:** Semantic HTML, Open Graph tags, XML sitemap, `robots.txt`, custom 404 page, and reserved-height ad placements to prevent Cumulative Layout Shift (CLS).

---

## 🚀 Included Tools

| Category | Tool | Description |
|---|---|---|
| **Text** | [Word Counter](tools/word-counter/) | Real-time counts for words, characters (with & without spaces), sentences, paragraphs, and reading time. |
| **Text** | [Case Converter](tools/case-converter/) | Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, and kebab-case. |
| **Calculators** | [Age Calculator](tools/age-calculator/) | Exact chronological age in years, months, and days with next birthday countdown and leap year precision. |
| **Calculators** | [Percentage Calculator](tools/percentage-calculator/) | 4-in-1 calculator for X% of Y, percentage shares, percentage increase/decrease, and markups with formula steps. |
| **Calculators** | [GST Calculator](tools/gst-calculator/) | Calculate GST Inclusive and Exclusive amounts with 3%, 5%, 12%, 18%, 28% slabs and CGST/SGST breakdowns. |
| **Image** | [Image Resizer](tools/image-resizer/) | Canvas-based photo resizing with custom dimensions, aspect-ratio lock, and social media presets (Instagram, YouTube, Twitter). |
| **Image** | [Image Compressor](tools/image-compressor/) | Quality slider, WebP/JPEG/PNG formats, canvas compression, and honest byte-level savings verification. |
| **Student** | [CGPA Calculator](tools/cgpa-calculator/) | Credit-weighted semester and cumulative GPA on 10-point and 4-point university scales with configurable percentage equivalents. |
| **Developer** | [QR Code Generator](tools/qr-code-generator/) | Generate custom QR codes for web links, WiFi credentials, text, and email with high-resolution PNG download. |
| **Developer** | [JSON Formatter](tools/json-formatter/) | Format, beautify, minify, and validate JSON payloads with precise syntax error lines. Safe from `eval()`. |

---

## 💻 How to Run Locally

### Option 1: Direct Browser
Simply double-click `index.html` or open it in any web browser.

### Option 2: Local Server (One-Click)
Double-click `start-server.bat` in the project root to start the local server and automatically open:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
quicktoolhub/
├── index.html                     # Homepage
├── 404.html                       # Custom 404 Page
├── robots.txt                     # Search engine crawler instructions
├── sitemap.xml                    # XML Sitemap with all page routes
├── assets/
│   ├── css/styles.css             # Glassmorphism tokens & styling
│   └── js/
│       ├── config.js              # Site configuration & AdSense publisher ID
│       ├── tools-data.js          # Tool registry & search keywords
│       ├── components.js          # Header, footer, search modal, ad banners
│       ├── qrcode.min.js          # Client-side QR engine
│       └── main.js                # Search & homepage interactivity
├── tools/                         # 10 dedicated tool directories
├── all-tools/                     # Catalog directory
├── categories/                    # Category suite view
├── about-us/                      # About & privacy architecture
├── contact-us/                    # Contact form
├── privacy-policy/                # Legal & AdSense compliant policy
└── terms-and-conditions/          # Terms of service
```

---

## 📄 License

This project is licensed under the MIT License.
