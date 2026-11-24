/**
 * Hello Sunshine Goa - Official Business & Menu Database
 * Location: Anjuna Mapusa Road, Bouta Waddo, Anjuna, Goa 403510
 * Contact: +91 78879 98957
 */

export const CAFE_INFO = {
  name: "Hello Sunshine",
  legalName: "Hello Sunshine Goa",
  tagline: "A Little Sunshine in Anjuna",
  subtitle: "Good food. Great coffee. Sunshine-filled moments.",
  location: {
    address: "Anjuna Mapusa Road, Bouta Waddo",
    area: "Anjuna",
    state: "Goa",
    postalCode: "403510",
    country: "India",
    fullAddress: "Anjuna Mapusa Road, Bouta Waddo, Anjuna, Goa 403510",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hello+Sunshine+Anjuna+Mapusa+Road+Bouta+Waddo+Anjuna+Goa+403510",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hello+Sunshine+Anjuna+Mapusa+Road+Bouta+Waddo+Anjuna+Goa+403510",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.0277329525413!2d73.7428!3d15.5862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1086036f0a3%3A0x7d87bc7d2b2725f0!2sAnjuna%20Mapusa%20Rd%2C%20Bouta%20Waddo%2C%20Anjuna%2C%20Goa%20403510!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    nearbyLandmarks: ["Bouta Waddo Junction", "Anjuna Mapusa Road", "5 Mins to Anjuna Beach", "Near Starco Junction"]
  },
  contact: {
    phone: "+91 78879 98957",
    phoneClean: "+917887998957",
    whatsapp: "917887998957",
    instagramHandle: "@hellosunshinegoa",
    instagramUrl: "https://www.instagram.com/hellosunshinegoa",
    googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJofAGYAj-vzsR8CUnK328h30"
  },
  rating: {
    score: 4.4,
    maxScore: 5.0,
    reviewCount: 287,
    source: "Google Reviews",
    breakdown: {
      food: 4.6,
      coffee: 4.7,
      ambience: 4.6,
      service: 4.4
    }
  },
  pricing: {
    range: "₹600 – ₹1,400 per person",
    currency: "₹",
    disclaimer: "Menu prices shown are indicative and subject to seasonal market updates. Please verify current pricing upon your visit."
  },
  timings: {
    open: "8:00 AM",
    close: "10:30 PM",
    days: "Monday – Sunday (Open Daily)",
    breakfastHours: "8:00 AM – 12:00 PM",
    brunchHours: "11:00 AM – 3:30 PM",
    sunsetDinnerHours: "5:00 PM – 10:30 PM"
  },
  features: [
    { id: "dine_in", title: "Dine-in Experience", desc: "Thoughtfully designed spaces for relaxed, slow dining." },
    { id: "pickup_delivery", title: "Pickup & Delivery", desc: "Available for takeaway and local Anjuna deliveries." },
    { id: "outdoor_seating", title: "Lush Tropical Garden", desc: "Sun-dappled open-air seating amidst palms and greenery." },
    { id: "indoor_seating", title: "Cozy AC Lounge", desc: "Air-conditioned indoor seating with warm artisanal decor." },
    { id: "rooftop", title: "Breezy Rooftop Deck", desc: "Panoramic tree-top views and golden hour coastal breezes." },
    { id: "women_owned", title: "Women-Owned", desc: "Proudly independent and women-led boutique enterprise." },
    { id: "lgbtq_friendly", title: "LGBTQ+ Friendly", desc: "A safe, respectful, and unconditionally warm space for all." },
    { id: "family_friendly", title: "Family & Pet Welcoming", desc: "Spacious layout with high chairs and cozy pet-friendly patio corners." },
    { id: "dietary_conscious", title: "Vegetarian & Vegan Friendly", desc: "Extensive plant-based, gluten-free, and high-protein choices." }
  ],
  cuisines: [
    "Cafe",
    "Continental",
    "Healthy Food",
    "Middle Eastern",
    "Mexican",
    "Beverages & Desserts"
  ]
};

export const BEST_SELLERS = [
  {
    id: "bs-1",
    name: "Almond Croissant",
    category: "Viennoiserie and Desserts",
    price: 280,
    priceDisplay: "₹280",
    tags: ["Signature", "Baked Fresh Daily"],
    description: "Twice-baked French artisanal butter croissant layered with rich velvety almond frangipane cream, crowned with toasted golden almond slivers and a delicate dusting of powdered sugar.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian"],
    badge: "Most Loved Pastry"
  },
  {
    id: "bs-2",
    name: "Post Gym Brekkie",
    category: "Best in Breakfast",
    price: 490,
    priceDisplay: "₹490",
    tags: ["High Protein", "Fitness Fuel"],
    description: "Two farm-fresh poached eggs, choice of herb-grilled chicken breast or golden pan-seared tofu, crushed Hass avocado, garlic-sautéed spinach, grilled button mushrooms, and artisanal toasted sourdough.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    dietary: ["High-Protein", "Nutrient-Dense"],
    badge: "Chef's Recommendation"
  },
  {
    id: "bs-3",
    name: "Breakfast Tacos",
    category: "Best in Breakfast",
    price: 420,
    priceDisplay: "₹420",
    tags: ["Mexican", "House Special"],
    description: "Trio of soft grilled corn tortillas piled high with fluffy spiced scrambled eggs, fresh avocado pico de gallo, pickled jalapeños, house-made coriander crema, and crumbled cotija cheese.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian Option", "Gluten-Free Tortillas"],
    badge: "Brunch Favorite"
  },
  {
    id: "bs-4",
    name: "Brioche French Toast",
    category: "All Day Breakfast",
    price: 440,
    priceDisplay: "₹440",
    tags: ["Sweet Tooth", "Artisanal"],
    description: "Thick golden slice of house-baked brioche soaked in vanilla bean custard, pan-caramelized to golden perfection, served with wild berry compote, whipped mascarpone, candied pecans, and pure maple syrup.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian"],
    badge: "Decadent Classic"
  },
  {
    id: "bs-5",
    name: "Artisanal Cappuccino",
    category: "Drinks",
    price: 240,
    priceDisplay: "₹240",
    tags: ["Specialty Coffee", "Single Origin"],
    description: "Rich double shot of medium-dark roasted South Indian estate Arabica espresso, textured with velvety microfoam milk and finished with barista latte art. Oat and almond milk options available.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Dairy-Free Option"],
    badge: "House Brew"
  },
  {
    id: "bs-6",
    name: "Tropical Sunshine Smoothie Bowl",
    category: "Patisserie and Smoothie Bowls",
    price: 460,
    priceDisplay: "₹460",
    tags: ["Superfood", "Plant Based"],
    description: "Vibrant pink pitaya (dragonfruit), ripe Alfonso mango, and banana blended thick with chilled coconut milk. Topped with house-toasted coconut flakes, organic chia seeds, goji berries, kiwi, and artisanal granola.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegan", "Gluten-Free"],
    badge: "Signature Bowl"
  }
];

export const MENU_CATEGORIES = [
  "All Categories",
  "Best in Breakfast",
  "All Day Breakfast",
  "Appetizers & Burgers",
  "Patisserie and Smoothie Bowls",
  "Sandwiches and Wraps",
  "Healthy Salads and Food Bowls",
  "Viennoiserie and Desserts",
  "Protein Treats",
  "Drinks",
  "House Special Dips",
  "Packaged Food",
  "Kids Menu"
];

export const FULL_MENU = [
  // 1. Best in Breakfast
  {
    id: "m-101",
    name: "Sunshine Shakshuka",
    category: "Best in Breakfast",
    price: 440,
    priceDisplay: "₹440",
    cuisine: "Middle Eastern",
    description: "Two farm eggs poached in a slow-simmered skillet of San Marzano tomatoes, bell peppers, toasted cumin, garlic, and crumbled feta. Served with warm za'atar sourdough.",
    dietary: ["Vegetarian"],
    spicyLevel: 1,
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-102",
    name: "Post Gym Brekkie",
    category: "Best in Breakfast",
    price: 490,
    priceDisplay: "₹490",
    cuisine: "Healthy Food",
    description: "Two poached eggs, choice of grilled chicken breast or herb tofu, Hass avocado, sautéed garlic greens, grilled portobello mushroom, toasted multigrain sourdough.",
    dietary: ["High-Protein"],
    popular: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-103",
    name: "Breakfast Tacos Trio",
    category: "Best in Breakfast",
    price: 420,
    priceDisplay: "₹420",
    cuisine: "Mexican",
    description: "Three warm corn tortillas loaded with soft scrambled eggs, roasted corn salsa, smashed avocado, coriander crema, and pickled shallots.",
    dietary: ["Vegetarian Option", "Gluten-Free"],
    popular: true,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-104",
    name: "Avocado & Burrata Tartine",
    category: "Best in Breakfast",
    price: 480,
    priceDisplay: "₹480",
    cuisine: "Continental",
    description: "Crushed Hass avocado on toasted country sourdough with fresh artisanal burrata, heirloom cherry tomatoes, cold-pressed olive oil, and balsamic glaze.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-105",
    name: "Anjuna English Breakfast",
    category: "Best in Breakfast",
    price: 540,
    priceDisplay: "₹540",
    cuisine: "Continental",
    description: "Eggs your style (sunny-side, scrambled or poached), chicken chipolata sausage / vegetarian patties, slow-roasted herb tomatoes, baked beans, hash browns, and buttered toast.",
    dietary: ["Continental Classic"],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80"
  },

  // 2. All Day Breakfast
  {
    id: "m-201",
    name: "Brioche French Toast",
    category: "All Day Breakfast",
    price: 440,
    priceDisplay: "₹440",
    cuisine: "Cafe",
    description: "Golden griddled brioche soaked in vanilla-cinnamon custard, served with fresh seasonal berries, mascarpone quenelle, and Canadian maple syrup.",
    dietary: ["Vegetarian"],
    popular: true,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-202",
    name: "Ricotta Hotcakes with Honeycomb",
    category: "All Day Breakfast",
    price: 460,
    priceDisplay: "₹460",
    cuisine: "Cafe",
    description: "Fluffy Japanese-style buttermilk hotcakes folded with fresh ricotta, topped with golden honeycomb butter, caramelized banana, and warm maple drizzle.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-203",
    name: "Turkish Cilbir Eggs",
    category: "All Day Breakfast",
    price: 430,
    priceDisplay: "₹430",
    cuisine: "Middle Eastern",
    description: "Two velvety poached eggs resting on garlicky whipped Greek yogurt, drizzled with warm Aleppo pepper brown butter, fresh dill, and grilled flatbread.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-204",
    name: "Classic Eggs Florentine",
    category: "All Day Breakfast",
    price: 420,
    priceDisplay: "₹420",
    cuisine: "Continental",
    description: "Two poached farm eggs over wilted garlicky baby spinach and toasted English muffin halves, blanketed in silky house-whipped Hollandaise sauce.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80"
  },

  // 3. Appetizers & Burgers
  {
    id: "m-301",
    name: "Goan Spiced Halloumi Bites",
    category: "Appetizers & Burgers",
    price: 420,
    priceDisplay: "₹420",
    cuisine: "Middle Eastern",
    description: "Crispy pan-seared Cypriot halloumi sticks dusted with zesty coastal spices, served with chili-infused wild honey dip and pomegranate seeds.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-302",
    name: "Sunshine Truffle Mushroom Burger",
    category: "Appetizers & Burgers",
    price: 520,
    priceDisplay: "₹520",
    cuisine: "Continental",
    description: "Sautéed wild portobello and button mushrooms, melted aged Swiss gruyère, truffle aioli, and caramelized onions in a toasted brioche bun with hand-cut rosemary wedges.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-303",
    name: "Grilled Moroccan Chicken Burger",
    category: "Appetizers & Burgers",
    price: 560,
    priceDisplay: "₹560",
    cuisine: "Middle Eastern",
    description: "Juicy chicken breast marinated in ras el hanout, roasted red pepper tapenade, crisp butterhead lettuce, and garlic tahini yogurt on a sesame brioche.",
    dietary: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-304",
    name: "Loaded Nachos Supremo",
    category: "Appetizers & Burgers",
    price: 450,
    priceDisplay: "₹450",
    cuisine: "Mexican",
    description: "Stone-ground artisanal tortilla chips smothered with warm queso cheese, slow-cooked black beans, pico de gallo, jalapeños, guacamole, and sour cream.",
    dietary: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
  },

  // 4. Patisserie and Smoothie Bowls
  {
    id: "m-401",
    name: "Tropical Sunshine Smoothie Bowl",
    category: "Patisserie and Smoothie Bowls",
    price: 460,
    priceDisplay: "₹460",
    cuisine: "Healthy Food",
    description: "Vibrant dragonfruit, mango, and chilled coconut milk base topped with house-toasted granola, chia seeds, kiwi, goji berries, and coconut flakes.",
    dietary: ["Vegan", "Gluten-Free"],
    popular: true,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-402",
    name: "Amazonian Açaí Energizer Bowl",
    category: "Patisserie and Smoothie Bowls",
    price: 490,
    priceDisplay: "₹490",
    cuisine: "Healthy Food",
    description: "Pure wild organic Brazilian açaí berries blended thick with frozen bananas and almond milk, topped with peanut butter swirl, raw cacao nibs, blueberries, and seeds.",
    dietary: ["Vegan", "Superfood"],
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-403",
    name: "Matcha Zen Green Bowl",
    category: "Patisserie and Smoothie Bowls",
    price: 470,
    priceDisplay: "₹470",
    cuisine: "Healthy Food",
    description: "Ceremonial grade Uji Japanese matcha blended with spinach, frozen avocado, green apple, and tender coconut water, finished with fresh figs and hemp hearts.",
    dietary: ["Vegan", "Antioxidant Rich"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-404",
    name: "Signature Basque Burnt Cheesecake",
    category: "Patisserie and Smoothie Bowls",
    price: 360,
    priceDisplay: "₹360",
    cuisine: "Beverages and Desserts",
    description: "Caramelized deeply on top with an ultra-creamy, custard-soft center, infused with Madagascar vanilla bean and served with passion fruit coulis.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  },

  // 5. Sandwiches and Wraps
  {
    id: "m-501",
    name: "Mediterranean Falafel & Hummus Wrap",
    category: "Sandwiches and Wraps",
    price: 410,
    priceDisplay: "₹410",
    cuisine: "Middle Eastern",
    description: "Golden herbed chickpea falafel, silky house hummus, pickled turnips, cucumbers, fresh parsley, and sumac tahini wrapped in grilled flatbread.",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-502",
    name: "Smoked Chicken & Pesto Panini",
    category: "Sandwiches and Wraps",
    price: 490,
    priceDisplay: "₹490",
    cuisine: "Continental",
    description: "Oak-smoked chicken strips, fresh basil-walnut pesto, sun-dried tomatoes, and melted fresh mozzarella pressed between crusty artisan ciabatta.",
    dietary: ["Non-Veg"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-503",
    name: "Gourmet Grilled 3-Cheese Sourdough",
    category: "Sandwiches and Wraps",
    price: 420,
    priceDisplay: "₹420",
    cuisine: "Cafe",
    description: "Melted blend of sharp English cheddar, aged gruyère, and creamy mozzarella with a hint of Dijon mustard and caramelized onions on sourdough.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80"
  },

  // 6. Healthy Salads and Food Bowls
  {
    id: "m-601",
    name: "Anjuna Sunshine Quinoa Power Bowl",
    category: "Healthy Salads and Food Bowls",
    price: 480,
    priceDisplay: "₹480",
    cuisine: "Healthy Food",
    description: "Fluffy tri-color quinoa, Hass avocado, roasted sweet potato cubes, massaged curly kale, edamame, and toasted pumpkin seeds with maple-tahini dressing.",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-602",
    name: "Greek Burrata & Watermelon Salad",
    category: "Healthy Salads and Food Bowls",
    price: 460,
    priceDisplay: "₹460",
    cuisine: "Continental",
    description: "Chilled sweet watermelon wedges, artisanal creamy burrata, Persian cucumbers, Kalamata olives, fresh mint, and aged balsamic glaze.",
    dietary: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-603",
    name: "Middle Eastern Mezze Bowl",
    category: "Healthy Salads and Food Bowls",
    price: 510,
    priceDisplay: "₹510",
    cuisine: "Middle Eastern",
    description: "Creamy hummus, smoked baba ganoush, crispy falafels, tabbouleh salad, marinated olives, pickled chillies, and warm za'atar pita.",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80"
  },

  // 7. Viennoiserie and Desserts
  {
    id: "m-701",
    name: "Almond Croissant (Twice-Baked)",
    category: "Viennoiserie and Desserts",
    price: 280,
    priceDisplay: "₹280",
    cuisine: "Beverages and Desserts",
    description: "Flaky double-baked French butter croissant filled with velvety frangipane cream and topped with toasted sliced almonds.",
    dietary: ["Vegetarian"],
    popular: true,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-702",
    name: "Pain au Chocolat (Dark Belgian)",
    category: "Viennoiserie and Desserts",
    price: 260,
    priceDisplay: "₹260",
    cuisine: "Beverages and Desserts",
    description: "Buttery, multi-layered French pastry stuffed with two generous batons of 70% dark Belgian chocolate.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-703",
    name: "Warm Gooey Brownie with Gelato",
    category: "Viennoiserie and Desserts",
    price: 320,
    priceDisplay: "₹320",
    cuisine: "Beverages and Desserts",
    description: "Decadent Valrhona dark chocolate walnut fudge brownie served sizzling with a scoop of Madagascan vanilla bean gelato.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-704",
    name: "Lemon Raspberry Poppyseed Loaf",
    category: "Viennoiserie and Desserts",
    price: 220,
    priceDisplay: "₹220",
    cuisine: "Beverages and Desserts",
    description: "Moist Meyer lemon infused tea cake studded with blue poppyseeds and tart fresh raspberries, topped with citrus glaze.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },

  // 8. Protein Treats
  {
    id: "m-801",
    name: "Peanut Butter & Whey Protein Truffles",
    category: "Protein Treats",
    price: 260,
    priceDisplay: "₹260",
    cuisine: "Healthy Food",
    description: "Box of 3 raw truffles crafted from organic peanut butter, rolled oats, whey isolate, dark chocolate chips, and chia seeds. (18g protein total).",
    dietary: ["High-Protein", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-802",
    name: "Plant Protein Blueberry Power Muffin",
    category: "Protein Treats",
    price: 240,
    priceDisplay: "₹240",
    cuisine: "Healthy Food",
    description: "Gluten-free almond flour muffin enriched with organic pea protein and bursting with fresh wild blueberries. No refined sugars.",
    dietary: ["Vegan", "Gluten-Free", "High-Protein"],
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80"
  },

  // 9. Drinks
  {
    id: "m-901",
    name: "Artisanal Cappuccino",
    category: "Drinks",
    price: 240,
    priceDisplay: "₹240",
    cuisine: "Beverages and Desserts",
    description: "Double espresso pulled from South Indian specialty estate beans, silky microfoam, and latte art. Oat / almond milk available.",
    dietary: ["Vegetarian"],
    popular: true,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-902",
    name: "Goan Coconut Cold Brew",
    category: "Drinks",
    price: 280,
    priceDisplay: "₹280",
    cuisine: "Beverages and Desserts",
    description: "16-hour steeped Arabica cold brew poured over ice and layered with fresh tender coconut water and a hint of vanilla.",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-903",
    name: "Golden Turmeric Sunshine Latte",
    category: "Drinks",
    price: 250,
    priceDisplay: "₹250",
    cuisine: "Beverages and Desserts",
    description: "Locally sourced organic Goan wild turmeric, fresh ginger, Ceylon cinnamon, black pepper, and steamed oat milk.",
    dietary: ["Vegan", "Caffeine-Free"],
    image: "https://images.unsplash.com/photo-1572442388796-11668ba69e54?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-904",
    name: "Cold-Pressed Sunshine Detox",
    category: "Drinks",
    price: 260,
    priceDisplay: "₹260",
    cuisine: "Beverages and Desserts",
    description: "Pure juice of sweet Valencia orange, carrot, fresh ginger, crisp green apple, and Meyer lemon. No added water or sugar.",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-905",
    name: "Hibiscus Mint Artisan Kombucha",
    category: "Drinks",
    price: 260,
    priceDisplay: "₹260",
    cuisine: "Beverages and Desserts",
    description: "Naturally effervescent probiotic fermented tea infused with organic dried hibiscus flowers and fresh garden mint leaves.",
    dietary: ["Vegan", "Probiotic"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
  },

  // 10. House Special Dips
  {
    id: "m-1001",
    name: "Silk Hummus with Za'atar Olive Oil",
    category: "House Special Dips",
    price: 290,
    priceDisplay: "₹290",
    cuisine: "Middle Eastern",
    description: "Ultra-smooth chickpea and tahini spread topped with whole spiced chickpeas, toasted pine nuts, extra virgin olive oil, and warm pita bread.",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-1002",
    name: "Tableside Chunky Guacamole",
    category: "House Special Dips",
    price: 380,
    priceDisplay: "₹380",
    cuisine: "Mexican",
    description: "Fresh Hass avocados hand-mashed with lime juice, chopped red onions, vine tomatoes, coriander, and serrano chili, served with corn tortilla chips.",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-1003",
    name: "Herbed Labneh with Pomegranate",
    category: "House Special Dips",
    price: 310,
    priceDisplay: "₹310",
    cuisine: "Middle Eastern",
    description: "Strained creamy Middle Eastern yogurt spread drizzled with wild thyme honey, fresh mint, cracked pepper, and ruby pomegranate arils.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80"
  },

  // 11. Packaged Food
  {
    id: "m-1101",
    name: "House-Toasted Sunshine Granola (350g)",
    category: "Packaged Food",
    price: 450,
    priceDisplay: "₹450",
    cuisine: "Healthy Food",
    description: "Artisanal jar of slow-roasted rolled oats, California almonds, pecans, pumpkin seeds, coconut flakes, and orange-blossom honey.",
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1517093157656-b9ec91e32d18?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-1102",
    name: "Estate Blend Arabica Coffee Beans (250g)",
    category: "Packaged Food",
    price: 480,
    priceDisplay: "₹480",
    cuisine: "Cafe",
    description: "Whole beans medium-roasted to yield notes of bittersweet dark chocolate, roasted hazelnut, and sweet caramel finish. (Can be ground to order).",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
  },

  // 12. Kids Menu
  {
    id: "m-1201",
    name: "Mini Fluffy Banana Pancakes",
    category: "Kids Menu",
    price: 280,
    priceDisplay: "₹280",
    cuisine: "Cafe",
    description: "Stack of three bite-sized buttermilk pancakes topped with sliced sweet bananas, honey drizzle, and fresh strawberries.",
    dietary: ["Vegetarian", "Kids Friendly"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-1202",
    name: "Cheesy Sourdough Soldiers & Dippy Eggs",
    category: "Kids Menu",
    price: 290,
    priceDisplay: "₹290",
    cuisine: "Continental",
    description: "Soft-boiled egg served in an egg cup with toasted cheddar cheese sourdough fingers for dipping fun.",
    dietary: ["Vegetarian", "Kids Friendly"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g-1",
    title: "Signature Latte Art in Ceramic Cup",
    category: "Specialty Coffee",
    caption: "Specialty espresso pulled fresh every morning, textured microfoam with artisanal latte art.",
    url: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-2",
    title: "Sun-Drenched Garden Patio",
    category: "Ambience & Spaces",
    caption: "Tropical greenery, warm teak wood, and breezy Anjuna coastal sunshine.",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-3",
    title: "Almond Croissants Fresh from the Oven",
    category: "Desserts & Pastries",
    caption: "Twice-baked French butter croissants filled with golden frangipane cream.",
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-4",
    title: "Tropical Dragonfruit Smoothie Bowl",
    category: "Food & Breakfast",
    caption: "A vibrant bowl of pure tropical freshness topped with chia seeds, kiwi, and toasted granola.",
    url: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-5",
    title: "Post Gym Brekkie & Sourdough Spread",
    category: "Food & Breakfast",
    caption: "Nutrient-packed breakfast with poached eggs, fresh avocado, mushrooms, and country sourdough.",
    url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-6",
    title: "Breezy Rooftop Deck at Golden Hour",
    category: "Ambience & Spaces",
    caption: "Panoramic views of Anjuna's swaying palms and sunset skies.",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-7",
    title: "Mexican Breakfast Tacos Trio",
    category: "Food & Breakfast",
    caption: "Corn tortillas filled with spiced eggs, avocado pico de gallo, and cilantro crema.",
    url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-8",
    title: "Cozy Indoor Air-Conditioned Lounge",
    category: "Ambience & Spaces",
    caption: "Earthy linen textures, cane furnishings, and a quiet retreat from the tropical midday heat.",
    url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "g-9",
    title: "Chilled Coconut Cold Brew",
    category: "Specialty Coffee",
    caption: "16-hour steeped artisanal cold brew poured over ice with fresh sweet tender coconut water.",
    url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=85"
  }
];

export const GOOGLE_REVIEWS_INFO = {
  rating: 4.4,
  totalReviews: 287,
  platform: "Google Business Profile",
  notice: "Ratings and review count are sourced from the verified Google Business listing for Hello Sunshine in Bouta Waddo, Anjuna, Goa.",
  highlights: [
    {
      feature: "Artisanal Coffee & Breakfast",
      sentiment: "Widely praised for specialty coffee, flaky almond croissants, and wholesome brunch options."
    },
    {
      feature: "Boutique Atmosphere",
      sentiment: "Loved for peaceful rooftop seating, lush tropical greenery, and laid-back Goa aesthetic."
    },
    {
      feature: "Inclusive & Friendly Service",
      sentiment: "High marks for warm, accommodating hospitality, vegetarian-friendly menus, and welcoming atmosphere."
    }
  ]
};
