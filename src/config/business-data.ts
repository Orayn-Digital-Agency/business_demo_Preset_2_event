// ============================================================
// ORAYN DEMO — BUSINESS TIER
// To switch preset: change the import on the last line.
// Available presets:
//   RESTAURANT  → restaurantData
//   EVENTS      → eventsData
//   SALON       → salonData
// ============================================================

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type Service = {
  name: string;
  description: string;
  price?: string;
  icon?: string;
};

export type BusinessData = {
  // Identity
  businessName: string;
  tagline: string;
  logoText: string;
  category: string;
  industry: string;

  // Contact
  phone: string;
  whatsappNumber: string;
  email: string | null;
  address: string;
  city: string;

  // Colors (optional overrides)
  primaryColor?: string;
  accentColor?: string;

  // CTA — fully dynamic so no hardcoded "appointment" language
  ctaLabel: string; // e.g. "Reserve a Table" / "Get a Quote" / "Book Appointment"
  ctaSubLabel: string; // shown under map/hero e.g. "Walk-ins welcome" / "Free consultation"
  bookingPageTitle: string; // H1 on /booking page
  bookingPageSub: string; // subheading on /booking page
  bookingFields: {
    showService: boolean; // show service dropdown
    showDate: boolean; // show date picker
    showGuests: boolean; // show party-size field (restaurants)
    showTime: boolean; // show time picker (restaurants / events)
    guestLabel: string; // e.g. "Number of Guests" / "Attendees"
    dateLabel: string; // e.g. "Preferred Date" / "Event Date"
    timeLabel: string; // e.g. "Preferred Time" / "Event Start Time"
    notesLabel: string; // e.g. "Special Requests" / "Tell us about your event"
    submitLabel: string; // e.g. "Send Reservation" / "Request Quote"
  };

  // Content
  about: string;
  mission?: string;
  services: Service[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  openingHours: { day: string; hours: string }[];
  stats?: { value: string; label: string }[];
  whyUs?: string[];

  // Social
  instagramHandle?: string;
  facebookHandle?: string;

  // Map
  mapEmbedUrl: string;
};

// ─────────────────────────────────────────────────────────────
// PRESET 1 — RESTAURANT
// Used for: Food & Hospitality Business-tier leads (18 leads)
// ─────────────────────────────────────────────────────────────
export const restaurantData: BusinessData = {
  businessName: "The Buka House",
  tagline:
    "Authentic Nigerian cuisine served with warmth, pride, and no shortcuts.",
  logoText: "The Buka House",
  category: "Restaurant",
  industry: "Food & Hospitality",

  phone: "+234 802 341 7890",
  whatsappNumber: "2348023417890",
  email: "hello@thebukahouse.ng",
  address: "12 Awolowo Road, Ikoyi",
  city: "Lagos",

  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",

  ctaLabel: "Reserve a Table",
  ctaSubLabel: "Walk-ins welcome — reservations guarantee your seat",
  bookingPageTitle: "Reserve a Table",
  bookingPageSub:
    "Fill in your details and we will confirm your reservation within 30 minutes",
  bookingFields: {
    showService: false,
    showDate: true,
    showGuests: true,
    showTime: true,
    guestLabel: "Number of Guests",
    dateLabel: "Preferred Date",
    timeLabel: "Preferred Time",
    notesLabel: "Special Requests",
    submitLabel: "Send Reservation Request",
  },

  about:
    "The Buka House has been serving Lagos the best of Nigerian home cooking since 2013. We source our ingredients daily from local markets — fresh ede, eja, ẹwà, and ofe that our grandmothers would approve of. Our kitchen is open, our portions are generous, and every plate leaves this building with pride.",

  mission:
    "To prove that the finest food in Lagos comes from a pot of patience, not a packet of shortcuts.",

  stats: [
    { value: "11+", label: "Years Serving Lagos" },
    { value: "300+", label: "Covers Daily" },
    { value: "4.8", label: "Google Rating" },
    { value: "100%", label: "Fresh Daily Sourcing" },
  ],

  whyUs: [
    "Every dish cooked fresh from scratch — no frozen, no reheated",
    "Locally sourced ingredients from certified market suppliers every morning",
    "Private dining room available for groups of 10 to 40",
    "Catering for weddings, corporate events, and aso-ebi parties",
  ],

  services: [
    {
      name: "Dine In",
      description:
        "Enjoy the full Buka House experience in our warm, open dining room. Family tables, private booths, and a live kitchen counter.",
      icon: "Utensils",
    },
    {
      name: "Private Dining",
      description:
        "Reserve our private room for business meetings, birthdays, and family gatherings. Seats up to 40. Full menu and custom set meals available.",
      icon: "Users",
    },
    {
      name: "Event Catering",
      description:
        "Full catering service for weddings, funerals, naming ceremonies, and corporate events. We handle setup, service, and cleanup.",
      icon: "Briefcase",
    },
    {
      name: "Takeaway & Delivery",
      description:
        "Order via WhatsApp for same-day pickup or delivery within a 5km radius. Meals packed in eco-friendly, heat-retaining containers.",
      icon: "Truck",
    },
    {
      name: "Sunday Buffet",
      description:
        "Every Sunday from 12 PM — a spread of 15+ dishes including jollof, egusi, banga soup, moi moi, puff puff, and fresh juice. Unlimited refills.",
      icon: "Coffee",
    },
    {
      name: "Corporate Lunch",
      description:
        "Daily lunch sets for offices within Ikoyi, VI, and Lekki. Order by 10 AM for noon delivery. Minimum 10 packs. Invoicing available.",
      icon: "ClipboardCheck",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85&auto=format&fit=crop",
      alt: "Interior of The Buka House dining room",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=85&auto=format&fit=crop",
      alt: "Freshly plated Nigerian dishes",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85&auto=format&fit=crop",
      alt: "Jollof rice and grilled fish spread",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85&auto=format&fit=crop",
      alt: "Chef preparing fresh soup at open kitchen",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop",
      alt: "Private dining table set for a group",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1200&q=85&auto=format&fit=crop",
      alt: "Sunday buffet spread",
      width: 1200,
      height: 900,
    },
  ],

  testimonials: [
    {
      name: "Tunde Adeyemi",
      role: "Regular Customer, VI",
      text: "The egusi soup here tastes exactly like my late mother used to make. I have been coming every Friday for two years and the quality has never dropped once. The portions are extremely generous and the prices are fair for Ikoyi.",
      rating: 5,
    },
    {
      name: "Chidinma Okafor",
      role: "Event Client — Birthday Catering",
      text: "They catered my 40th birthday for 120 guests and every single person was asking me for the number. The jollof was perfect, the pepper soup was on fire, and their service team was professional and punctual. Will definitely use them again.",
      rating: 5,
    },
    {
      name: "Babatunde Fashola",
      role: "Corporate Lunch Client",
      text: "Our office orders from them every Monday and Thursday. Delivery is always on time, the food is always hot, and they accommodate special dietary requests without fuss. Best corporate lunch option in Lagos right now.",
      rating: 5,
    },
    {
      name: "Adaeze Nwosu",
      role: "Sunday Buffet Regular",
      text: "The Sunday buffet is unmissable. Fifteen dishes, unlimited refills, fresh juice, and a live kitchen. My whole family comes now. At ₦8,500 per head it is honestly one of the best value meals in Lagos.",
      rating: 5,
    },
    {
      name: "Emeka Eze",
      role: "Private Dining Client",
      text: "We used the private room for a board dinner and it was spotless. The set menu they arranged was impressive and our guests were genuinely surprised by the quality. Highly professional from start to finish.",
      rating: 4,
    },
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "11:00 AM – 10:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 9:00 PM" },
  ],

  instagramHandle: "thebukahouse.ng",
  facebookHandle: "TheBukaHouseLagos",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4210!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53b1c6e4d0f%3A0x0!2sIkoyi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000000",
};

// ─────────────────────────────────────────────────────────────
// PRESET 2 — EVENT PLANNING
// Used for: Events Business-tier leads (2 leads)
// ─────────────────────────────────────────────────────────────
export const eventsData: BusinessData = {
  businessName: "Pinnacle Events Co.",
  tagline: "Crafting extraordinary events that people talk about for years.",
  logoText: "Pinnacle Events",
  category: "Event Planning & Management",
  industry: "Events",

  phone: "+234 809 876 5432",
  whatsappNumber: "2348098765432",
  email: "hello@pinnacleevents.ng",
  address: "4B Adeola Hopewell Street, Victoria Island",
  city: "Lagos",

  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",

  ctaLabel: "Get a Free Quote",
  ctaSubLabel: "No commitment — free consultation for all event types",
  bookingPageTitle: "Request a Free Quote",
  bookingPageSub:
    "Tell us about your event and we will respond within 4 hours with a tailored proposal",
  bookingFields: {
    showService: true,
    showDate: true,
    showGuests: true,
    showTime: false,
    guestLabel: "Expected Number of Guests",
    dateLabel: "Event Date",
    timeLabel: "Event Start Time",
    notesLabel:
      "Tell us about your event — theme, venue preference, and any special requirements",
    submitLabel: "Send Quote Request",
  },

  about:
    "Pinnacle Events Co. is Lagos' foremost full-service event management company. Since 2016 we have delivered over 400 events across Nigeria — from intimate 20-person corporate dinners to 2,000-guest wedding receptions. We handle everything: venue selection, decor, catering coordination, entertainment, photography, and guest management. You enjoy the event. We handle the pressure.",

  mission:
    "To build events that feel effortless for our clients and unforgettable for their guests.",

  stats: [
    { value: "400+", label: "Events Delivered" },
    { value: "8+", label: "Years in Business" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Vendor Partners" },
  ],

  whyUs: [
    "Full-service from concept to cleanup — one point of contact throughout",
    "Curated vendor network: vetted caterers, DJs, photographers, and decorators",
    "Dedicated event manager assigned from first call to final hour",
    "Transparent pricing — no hidden charges, no day-of surprises",
  ],

  services: [
    {
      name: "Wedding Planning",
      description:
        "Complete wedding management — traditional, white wedding, or both. Venue, decor, catering, entertainment, photography, and day-of coordination. Full or partial planning packages available.",
      icon: "Heart",
      price: "From ₦800,000",
    },
    {
      name: "Corporate Events",
      description:
        "Annual dinners, product launches, conferences, awards nights, and team retreats. Professional AV, branded decor, catering, and logistics handled end to end.",
      icon: "Briefcase",
      price: "From ₦400,000",
    },
    {
      name: "Birthday Celebrations",
      description:
        "Intimate dinners to lavish 1,000-guest parties. Theme development, venue dressing, entertainment, MC, and catering coordination. Every detail handled.",
      icon: "Star",
      price: "From ₦250,000",
    },
    {
      name: "Decor & Styling",
      description:
        "Standalone decor service for clients with their own venue. We supply centrepieces, draping, lighting, floral arrangements, and branded installations.",
      icon: "Paintbrush",
      price: "From ₦150,000",
    },
    {
      name: "Naming & Traditional Ceremonies",
      description:
        "Naming ceremonies, engagement parties, and traditional rites — handled with cultural sensitivity and maximum visual impact. Any size, any tribe.",
      icon: "Users",
      price: "From ₦200,000",
    },
    {
      name: "Day-of Coordination",
      description:
        "Already planned your event but need a professional on the ground? Our coordinators manage vendors, timelines, and logistics so you can enjoy the day.",
      icon: "ClipboardCheck",
      price: "From ₦120,000",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85&auto=format&fit=crop",
      alt: "Luxury wedding reception hall decorated by Pinnacle Events",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85&auto=format&fit=crop",
      alt: "Corporate gala dinner setup",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85&auto=format&fit=crop",
      alt: "Birthday party floral centrepiece arrangement",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=85&auto=format&fit=crop",
      alt: "Outdoor traditional ceremony setup",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=85&auto=format&fit=crop",
      alt: "Product launch event with branded stage",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85&auto=format&fit=crop",
      alt: "Naming ceremony decor with floral arch",
      width: 1200,
      height: 900,
    },
  ],

  testimonials: [
    {
      name: "Toyin & Segun Abiodun",
      role: "Wedding Clients, 2024",
      text: "Pinnacle Events turned our vision into something even more beautiful than we imagined. From the first meeting to the final slow dance, their team was calm, professional, and thorough. Every single guest asked who our planner was. We cannot thank them enough.",
      rating: 5,
    },
    {
      name: "Adeola Fashola",
      role: "Corporate Client — Annual Gala 2023",
      text: "We hired Pinnacle for our company's 25th anniversary gala. 350 guests, full AV, live band, and a five-course dinner. Everything ran to the minute. Our CEO said it was the best event we have ever held. We are already talking to them about next year.",
      rating: 5,
    },
    {
      name: "Ngozi Okonkwo",
      role: "Birthday Client — 50th Celebration",
      text: "I wanted a gold and ivory themed party for my 50th. What Pinnacle delivered was absolutely breathtaking. The decor, the food coordination, the MC, the surprise element they added — all perfection. My guests are still talking about it six months later.",
      rating: 5,
    },
    {
      name: "Chidi Nwosu",
      role: "Day-of Coordination Client",
      text: "I had planned everything myself but was terrified about the day. Pinnacle's coordinator handled everything from 6 AM to midnight. Not one issue reached me. I actually enjoyed my own event for the first time ever.",
      rating: 5,
    },
    {
      name: "Funke Balogun",
      role: "Traditional & White Wedding Client",
      text: "We had both our traditional and church wedding planned with Pinnacle over eight months. The communication was excellent throughout. They respected our budget and found creative solutions that looked twice the price. Absolutely recommend.",
      rating: 5,
    },
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "By appointment only" },
  ],

  instagramHandle: "pinnacleevents.ng",
  facebookHandle: "PinnacleEventsLagos",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4210!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53b1c6e4d0f%3A0x0!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000001",
};

// ─────────────────────────────────────────────────────────────
// PRESET 3 — SALON (Beauty & Wellness Business tier)
// Used for: Beauty & Wellness Business-tier lead (1 lead)
// ─────────────────────────────────────────────────────────────
export const salonData: BusinessData = {
  businessName: "Glam & Grace Salon",
  tagline: "Where every woman leaves feeling like the best version of herself.",
  logoText: "Glam & Grace",
  category: "Hair & Beauty Salon",
  industry: "Beauty & Wellness",

  phone: "+234 803 456 7890",
  whatsappNumber: "2348034567890",
  email: "hello@glamandgrace.ng",
  address: "7 Adeola Odeku Street, Victoria Island",
  city: "Lagos",

  primaryColor: "#1B2A4A",
  accentColor: "#C49A28",

  ctaLabel: "Book Appointment",
  ctaSubLabel: "Same-day appointments available — call or WhatsApp us",
  bookingPageTitle: "Book an Appointment",
  bookingPageSub:
    "Fill in your details and we will confirm your appointment within 2 hours",
  bookingFields: {
    showService: true,
    showDate: true,
    showGuests: false,
    showTime: true,
    guestLabel: "Number of Guests",
    dateLabel: "Preferred Date",
    timeLabel: "Preferred Time",
    notesLabel: "Anything else we should know?",
    submitLabel: "Send Booking Request",
  },

  about:
    "Glam & Grace Salon has been the premier destination for hair, beauty, and wellness on Victoria Island since 2015. We combine expert technique with premium products to deliver transformative results for every client. Our team of 12 licensed stylists and beauticians are trained annually in London and Dubai to bring the world's best techniques directly to Lagos.",

  mission:
    "To make every woman in Lagos feel celebrated, confident, and beautifully herself — every single visit.",

  stats: [
    { value: "9+", label: "Years in Business" },
    { value: "5,000+", label: "Happy Clients" },
    { value: "12", label: "Expert Stylists" },
    { value: "4.9", label: "Average Rating" },
  ],

  whyUs: [
    "Premium products only — Kerastase, L'Oreal Professional, OPI, and Dermalogica",
    "Internationally certified stylists trained in London and Dubai",
    "Clean, relaxed environment with complimentary refreshments on arrival",
    "Appointment reminders and aftercare tips sent via WhatsApp after every visit",
  ],

  services: [
    {
      name: "Hair Relaxer & Treatment",
      description:
        "Full chemical relaxer with deep conditioning, scalp analysis, and blow-dry finish. Includes Kerastase treatment.",
      price: "From ₦18,000",
      icon: "Sparkles",
    },
    {
      name: "Natural Hair Styling",
      description:
        "Wash, deep condition, and style for natural hair — twists, bantu knots, wash-and-go, protective styles. All textures welcome.",
      price: "From ₦12,000",
      icon: "Flower2",
    },
    {
      name: "Weave & Extensions",
      description:
        "Human hair weave installation — sew-in, lace frontal, full lace. Premium hair brands available in-salon at competitive prices.",
      price: "From ₦35,000",
      icon: "Crown",
    },
    {
      name: "Manicure & Pedicure",
      description:
        "Classic, gel, or acrylic nail service with cuticle care, massage, and top-coat. Nail art by our specialist on request.",
      price: "From ₦8,000",
      icon: "Gem",
    },
    {
      name: "Facial & Skincare",
      description:
        "Customised facials using Dermalogica — deep cleanse, brightening, anti-ageing, or acne control. Skin analysis included.",
      price: "From ₦22,000",
      icon: "Heart",
    },
    {
      name: "Bridal & Event Makeup",
      description:
        "Full glam makeup and gele tying for weddings, aso-ebi, and photoshoots. Airbrush finish available. Trial sessions recommended.",
      price: "From ₦30,000",
      icon: "Paintbrush",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85&auto=format&fit=crop",
      alt: "Stylist working on a client in salon chair",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=85&auto=format&fit=crop",
      alt: "Professional hair styling tools and products",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop",
      alt: "Facial treatment being applied by specialist",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85&auto=format&fit=crop",
      alt: "Elegant interior of Glam & Grace salon",
      width: 1200,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85&auto=format&fit=crop",
      alt: "Manicure and nail art close-up",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&q=85&auto=format&fit=crop",
      alt: "Client after a complete hair transformation",
      width: 1200,
      height: 900,
    },
  ],

  testimonials: [
    {
      name: "Adaeze Okonkwo",
      role: "Regular Client since 2019",
      text: "Glam & Grace is my safe place. Five years and the quality has never dropped once. My stylist knows exactly what my hair needs before I even say it. I always leave feeling like a completely new woman. Cannot recommend them enough.",
      rating: 5,
    },
    {
      name: "Funmi Adeyemi",
      role: "Bridal Client, 2024",
      text: "They did my hair and makeup for my traditional wedding and I received compliments from every single guest. So patient during the trial sessions and they matched my vision perfectly. The best decision I made for my wedding day.",
      rating: 5,
    },
    {
      name: "Chioma Eze",
      role: "Monthly Facial Client",
      text: "Best facials in Lagos, full stop. My skin has transformed since I started coming monthly. The products are genuinely high quality and the ladies care about your long-term skin health, not just the appointment.",
      rating: 5,
    },
    {
      name: "Toyin Babatunde",
      role: "Walk-in Client",
      text: "I walked in without an appointment on a Saturday and was attended to within 20 minutes. The weave installation was done so neatly and the price was fair for the quality I received. I have referred four colleagues already.",
      rating: 4,
    },
    {
      name: "Blessing Osei",
      role: "Natural Hair Client",
      text: "As someone with 4C hair I have had so many bad salon experiences. Glam & Grace is the first place that actually understood my hair type. The stylist took her time, used the right products, and my hair has never looked better.",
      rating: 5,
    },
  ],

  openingHours: [
    { day: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "7:30 AM – 8:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 5:00 PM" },
  ],

  instagramHandle: "glamandgrace.ng",
  facebookHandle: "GlamAndGraceLagos",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4210!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53b1c6e4d0f%3A0x0!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000002",
};

// ─────────────────────────────────────────────────────────────
// ACTIVE PRESET
// Switch the export below to match the lead's industry:
//   restaurantData  → Food & Hospitality
//   eventsData      → Events
//   salonData       → Beauty & Wellness
// ─────────────────────────────────────────────────────────────
export default eventsData;
