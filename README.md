# Hello Sunshine Goa — Premium Boutique Cafe Website
> **"A Little Sunshine in Anjuna."**  
> *Good food. Great coffee. Sunshine-filled moments.*

An ultra-premium, modern, mobile-responsive interactive website designed specifically for **Hello Sunshine**, located at **Anjuna Mapusa Road, Bouta Waddo, Anjuna, Goa 403510**.

Inspired by the artisanal warmth of boutique cafe culture (warm cream, muted olive green, warm gold, and rich espresso brown typography), this project offers both direct browser-runnable applications and full React & Vue 3 project structures.

---

## 🌟 Business Profile & Highlights

- **Business Name:** Hello Sunshine (Hello Sunshine Goa)
- **Location:** Anjuna Mapusa Road, Bouta Waddo, Anjuna, Goa 403510, India
- **Phone Number:** [+91 78879 98957](tel:+917887998957) (Click-to-call enabled)
- **WhatsApp Inquiries:** [Direct WhatsApp Link](https://wa.me/917887998957)
- **Rating:** **4.4 Stars** with **287 Verified Reviews** on Google Business Profile
- **Price Range:** ₹600 – ₹1,400 per person
- **Daily Hours:** 8:00 AM – 10:30 PM (Open 7 Days a Week)
- **Cuisine Portfolio:** Cafe, Continental, Healthy Food, Middle Eastern, Mexican, Beverages & Desserts
- **Key Features:** Dine-in, pickup, delivery, breakfast & brunch, outdoor tropical garden seating, indoor AC lounge, breezy rooftop deck, family & pet-friendly, vegetarian & vegan-friendly, LGBTQ+ welcoming, and women-owned.

---

## 📁 Project Architecture

```
Cafe/
├── index.html              # Flagship interactive web application (Zero build required, opens in any browser)
├── reference_hero.jpg      # High-resolution hero image inspired by reference
├── css/
│   └── styles.css          # Design system, Playfair Display & DM Sans fonts, color tokens, animations
├── data/
│   └── cafeData.js         # Comprehensive business, menu (12 categories), reviews & gallery dataset
├── js/
│   ├── supabaseConfig.js   # Supabase project URL and anon public key configuration
│   └── supabaseClient.js   # Client service capturing reservations, order inquiries & contact messages
├── supabase/
│   ├── schema.sql          # Complete PostgreSQL schema (reservations, order_inquiries, contact_inquiries)
│   └── README.md           # Supabase backend documentation & RLS setup
├── react-app/
│   ├── index.html          # Standalone interactive React 18 edition (runs instantly with JSX)
│   └── package.json        # Vite + React 18 configuration
├── vue-app/
│   ├── index.html          # Standalone interactive Vue 3 edition
│   └── package.json        # Vite + Vue 3 configuration
└── README.md               # Complete setup, design guide, and documentation
```

---

## 🚀 How to Run & View

### Option 1: Instant Browser Launch (No Node.js or Setup Required)
Simply double-click or open any of the following HTML files in Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox:
- **Flagship Application:** `c:\Users\Roy\Downloads\Cafe\index.html`
- **React 18 Edition:** `c:\Users\Roy\Downloads\Cafe\react-app\index.html`
- **Vue 3 Edition:** `c:\Users\Roy\Downloads\Cafe\vue-app\index.html`

### Option 2: Run with Local HTTP Server (VS Code Live Server or Python)
If you have a local HTTP server:
```bash
# Using Python (if installed):
python -m http.server 3000

# Using Node / npx (if installed):
npx serve .
```

---

## 🍽️ Complete Website Sections Included

1. **Top Announcement Bar:** Click-to-call phone number, exact Bouta Waddo address, and daily opening hours.
2. **Navigation Header:** Sticky glassmorphic navbar with smooth scroll links, Order Tray counter, and "Reserve a Table" button. Includes animated mobile drawer.
3. **Hero Section:** Large cinematic cafe background with sunbeam lighting, rotating luxury stamp seal (*"HELLO SUNSHINE • EST. ANJUNA GOA • 4.4★"*), display serif typography with script flourish (*"A Little Sunshine in Anjuna."*), and dual CTA buttons.
4. **About Section:** Genuine narrative celebrating relaxed Goan dining, breakfast, coffee, pastries, smoothie bowls, and feature badges (women-owned, rooftop, garden, dietary-friendly).
5. **Best Sellers Section:** Mouth-watering cards for:
   - *Almond Croissant (Twice-Baked)*
   - *Post Gym Brekkie*
   - *Breakfast Tacos Trio*
   - *Brioche French Toast*
   - *Artisanal Cappuccino*
   - *Tropical Sunshine Smoothie Bowl*
   *(Clear disclaimer: Menu prices are indicative and subject to seasonal verification).*
6. **Searchable & Filterable Menu (All 12 Categories):**
   - Best in Breakfast
   - All Day Breakfast
   - Appetizers & Burgers
   - Patisserie and Smoothie Bowls
   - Sandwiches and Wraps
   - Healthy Salads and Food Bowls
   - Viennoiserie and Desserts
   - Protein Treats
   - Drinks (Specialty Coffee, Fresh Juices, Kombucha)
   - House Special Dips (Hummus, Guacamole, Labneh)
   - Packaged Food (Granola, Coffee Beans)
   - Kids Menu
   *(Includes real-time text search, category tabs, and dietary filter toggles: Veg, Vegan, Gluten-Free, High-Protein).*
7. **Interactive Order Tray:** Guests can click **"+ Add to Note"** on any dish to compile their desired table order with an estimated total and send an instant inquiry to the cafe via WhatsApp.
8. **Photo Gallery with Lightbox:** Filterable gallery (Specialty Coffee, Food & Breakfast, Ambience & Spaces, Desserts) with a fullscreen interactive lightbox supporting keyboard shortcuts (ESC, Left, Right arrows) and next/prev navigation.
9. **Reviews & Ratings:** Displays verified **4.4 Stars with 287 Google Reviews** with score breakdown bars, review policy transparency note (strictly no fabricated testimonials), and a direct button to read reviews on Google Maps.
10. **Instagram Section:** Showcase grid inviting guests to follow `@hellosunshinegoa`.
11. **Location & Maps:** Full address in Bouta Waddo, interactive Google Maps embed, Google Maps Directions link, and click-to-call button.
12. **Reservation Booking Form:** Complete form capturing guest name, phone, date, time slot, guest count, seating preference (Rooftop, Garden Patio, AC Lounge), and special requests. Strict compliance notice clarifies that table availability is verified directly by the cafe team at +91 78879 98957 without charging online. Includes instant WhatsApp verification link.
13. **Footer:** Comprehensive footer with address, operating hours, cuisine list, quick links, social channels, and legal notes.
14. **Mobile Sticky Action Bar:** Bottom bar for mobile users featuring quick **Call Now**, **Menu**, and **Book Table** buttons.

---

## 🎨 Design System Tokens

- **Cream Background:** `#FAF7F0` / `#F6F1E6`
- **Muted Olive Green:** `#253325` / `#3F523D` / `#EBF0EA`
- **Warm Gold & Amber:** `#C59A58` / `#DEB36D`
- **Espresso Coffee Brown:** `#231811` / `#36251B`
- **Headings Font:** `Playfair Display`, serif
- **Body Font:** `DM Sans`, sans-serif
- **Flourish Accent Font:** `Alex Brush`, cursive script

---

## 📝 Updating Menu Items & Pricing

All menu items, categories, prices, and cafe information are centralized in:
`c:\Users\Roy\Downloads\Cafe\data\cafeData.js`

To update a price, change `price` and `priceDisplay` in `cafeData.js` and the entire website (search, cards, category filters, and order tray) updates automatically!
