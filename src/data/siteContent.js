/* =============================================================================
   KHOKHA REFRIGERATION & WELDING — SITE CONTENT
   -----------------------------------------------------------------------------
   Everything the client can change lives in this file. No copy, phone number,
   price, photo or video path is hard-coded anywhere else in the app.

   Anything still set to "REPLACE_ME" is unconfigured. While running
   `npm run dev` a setup panel lists what is outstanding; it never appears in a
   production build.
   ========================================================================== */

/* -----------------------------------------------------------------------------
   1. BUSINESS DETAILS  — fill these in first
   -------------------------------------------------------------------------- */
export const business = {
  name: 'Khokha Refrigeration & Welding',
  phone: 'REPLACE_ME', // dialled number, e.g. "+27 82 123 4567"
  whatsapp: 'REPLACE_ME', // international digits only, e.g. "27821234567"
  email: 'REPLACE_ME', // e.g. "info@khokha.co.za"
  location: 'REPLACE_ME', // e.g. "Durban, KwaZulu-Natal"
}

export const brand = {
  name: 'Khokha Refrigeration & Welding',
  short: 'Khokha',
  suffix: 'Refrigeration & Welding',
  /* Drop a logo file into /public/images and point here, e.g. "/images/logo.svg".
     Leave empty to use the built-in KHOKHA wordmark. */
  logo: '',
}

/* Optional extras. Leave as '' to hide them from the site completely.
   Social links only render once a real account URL is filled in. */
export const details = {
  serviceArea: '', // e.g. "Durban and surrounding areas"
  hours: '', // e.g. "Mon-Fri 8:00-17:00, Sat 8:00-13:00"
  address: '', // leave blank until confirmed — nothing is invented
  facebook: '',
  instagram: '',
}

/* -----------------------------------------------------------------------------
   2. MOBILE FRIDGE OFFERING
   Set the mode and every heading, label and FAQ answer updates together.
     'hire'  -> "Mobile Fridge Hire"
     'sales' -> "Mobile Fridges"
     'both'  -> "Mobile Fridges & Hire"
   -------------------------------------------------------------------------- */
export const mobileFridgeMode = 'both'

const FRIDGE_LABELS = {
  hire: 'Mobile Fridge Hire',
  sales: 'Mobile Fridges',
  both: 'Mobile Fridges & Hire',
}

const FRIDGE_ANSWERS = {
  hire: 'They are available to hire. Send us your dates and what you need to keep cold, and we will come back to you.',
  sales: 'They are available to buy. Tell us what you need it for and we will come back to you with what we have.',
  both: 'You can hire one or buy one. Tell us which you are after and what you need to keep cold.',
}

export const mobileFridgeTitle = FRIDGE_LABELS[mobileFridgeMode] || FRIDGE_LABELS.both
export const mobileFridgeAnswer = FRIDGE_ANSWERS[mobileFridgeMode] || FRIDGE_ANSWERS.both

/* -----------------------------------------------------------------------------
   3. NAVIGATION
   -------------------------------------------------------------------------- */
export const nav = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Welding', id: 'welding' },
  { label: 'Mobile Fridges', id: 'fridges' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

/* -----------------------------------------------------------------------------
   4. MEDIA — hero video and poster
   The full-length source clip lives in /media-source and is not shipped.
   See "Hero video" in README.md to regenerate these after replacing it.
   -------------------------------------------------------------------------- */
export const media = {
  heroVideo: '/video/hero-welding.mp4', // 1280x720, silent, 12s loop
  heroVideoMobile: '/video/hero-welding-sm.mp4', // 768x432 for small screens
  heroPoster: '/images/hero-welding-poster.jpg', // shown until the video plays
}

/* -----------------------------------------------------------------------------
   5. HERO
   -------------------------------------------------------------------------- */
export const hero = {
  label: 'Khokha Refrigeration & Welding',
  headline: ['Welded strong.', 'Kept cool.'],
  body: 'Welding, fabrication and mobile refrigeration. Tell us what you need and we will give you a straightforward quote.',
  videoAlt: 'Khokha welding a steel joint in the workshop',
}

/* -----------------------------------------------------------------------------
   6. SERVICES — the two sides of the business
   Remove any list item that does not match the work actually offered.
   -------------------------------------------------------------------------- */
export const servicesIntro = {
  headline: ['Two trades.', 'One workshop.'],
  body: 'Steel that has to hold, and stock that has to stay cold. Pick the side you need.',
}

export const services = [
  {
    id: 'services-welding',
    number: '01',
    tone: 'steel',
    title: 'Welding & Fabrication',
    summary: 'Need something welded? Send us a photo and we will take a look.',
    items: [
      'Custom welding',
      'Metal repairs',
      'Fabrication',
      'Steelwork',
      'Gates and burglar bars',
      'Custom frames and trailers',
    ],
    cta: 'Enquire about welding',
    enquiry: 'welding',
    image: '/images/gate-sliding.jpg',
    imageFit: 'contain',
    imageAlt: 'Large steel sliding gate fabricated by Khokha',
  },
  {
    id: 'services-fridges',
    number: '02',
    tone: 'cold',
    title: mobileFridgeTitle,
    summary: 'Need extra fridge space for an event? Ask us about our mobile fridges.',
    items: ['Events and functions', 'Parties', 'Catering', 'Businesses', 'Outdoor occasions'],
    cta: 'Enquire about mobile fridges',
    enquiry: 'fridge',
    image: '/images/fridge-trailer-main.jpg',
    imageFit: 'contain',
    imageAlt: 'Khokha mobile fridge trailer',
  },
]

/* -----------------------------------------------------------------------------
   7. WELDING FEATURE SECTION
   -------------------------------------------------------------------------- */
export const weldingFeature = {
  label: 'Welding & metalwork',
  headline: ['Built by hand.', 'Built to last.'],
  body: 'Gates, frames, trailers, brackets, grilles, beds — if it is steel and it needs to hold, we can build it or repair it.',
  body2: 'Send a photo of the job on WhatsApp and we will tell you what it takes.',
  cta: 'Request a quote',
  image: '/images/welding-chassis.jpg',
  imageAlt: 'Khokha welding a trailer chassis in the workshop',
  strip: [
    {
      src: '/images/welding-workshop.jpg',
      alt: 'Welder working on a steel trailer frame',
      label: 'In the workshop',
      fit: 'cover',
    },
    {
      src: '/images/gates-security.jpg',
      alt: 'Set of finished steel security gates',
      label: 'Finished gates',
      fit: 'contain',
    },
    {
      src: '/images/bed-finished.jpg',
      alt: 'Steel four-poster bed frame built by Khokha',
      label: 'Custom steelwork',
      fit: 'contain',
    },
  ],
}

/* -----------------------------------------------------------------------------
   8. MOBILE FRIDGE FEATURE SECTION
   -------------------------------------------------------------------------- */
export const fridgeFeature = {
  headline: ['Cold where', 'you need it.'],
  body: 'A mobile fridge goes where the work is. Set it up at a function, a stall, a site or a shop and keep stock, drinks and food cold without building anything permanent.',
  points: [
    { title: 'Mobile', text: 'Tows to wherever you need the cold.' },
    { title: 'Practical', text: 'Set up and running without a permanent install.' },
    { title: 'Convenient', text: 'One unit handles stock, drinks and food.' },
    { title: 'Built for events & business', text: 'Functions, catering, stalls and shops.' },
  ],
  cta: 'Request a quote',
  image: '/images/fridge-trailer-unit.jpg',
  imageAlt: 'Khokha mobile fridge trailer with its cooling unit fitted',
}

/* -----------------------------------------------------------------------------
   9. WHY CHOOSE KHOKHA
   -------------------------------------------------------------------------- */
export const whyChoose = {
  headline: ['Why customers', 'call Khokha.'],
  items: [
    { title: 'Quality work', text: 'Attention to the job and to the finished result.' },
    {
      title: 'Practical solutions',
      text: 'Straightforward solutions based on what you actually need.',
    },
    { title: 'Custom work', text: 'Welding and fabrication built to fit the job in front of us.' },
    { title: 'Easy to contact', text: 'Reach us on WhatsApp or by phone and get a real answer.' },
  ],
}

/* -----------------------------------------------------------------------------
   10. HOW IT WORKS
   -------------------------------------------------------------------------- */
export const process = {
  headline: ['Three steps', 'to a quote.'],
  steps: [
    {
      number: '01',
      title: 'Tell us what you need',
      text: 'A gate, a repair, a frame, a fridge for a function — in your own words.',
    },
    {
      number: '02',
      title: 'Send photos on WhatsApp',
      text: 'A photo of the job says more than a paragraph. Add sizes and your location if you have them.',
    },
    {
      number: '03',
      title: 'Get a quote',
      text: 'We come back to you with what the job takes and what it costs.',
    },
  ],
  cta: 'Send photos on WhatsApp',
}

/* -----------------------------------------------------------------------------
   11. ABOUT
   -------------------------------------------------------------------------- */
export const about = {
  label: 'About Khokha',
  headline: ['Practical work,', 'done properly.'],
  paragraphs: [
    'At Khokha Refrigeration & Welding we focus on practical work, quality workmanship and solutions that get the job done.',
    'Two trades, one workshop: welding and metalwork for the things that need to be built or repaired, and mobile refrigeration for the things that need to stay cold. Tell us which one you need and we will take it from there.',
  ],
  image: '/images/fabrication-wiring.jpg',
  imageAlt: 'Khokha wiring up a trailer build in the workshop',
}

/* -----------------------------------------------------------------------------
   12. PROJECT GALLERY — real work
     category: 'welding' | 'fridges'
     size:     'tall' | 'wide' | 'normal'  — the shape of the tile
     fit:      'cover' for photographs, 'contain' for cut-outs on white
   -------------------------------------------------------------------------- */
export const gallery = {
  headline: ['See the work.'],
  body: 'Finished steelwork, builds in progress, and mobile fridges ready to go.',
  filters: [
    { id: 'all', label: 'All work' },
    { id: 'welding', label: 'Welding' },
    { id: 'fridges', label: 'Mobile fridges' },
  ],
  items: [
    { src: '/images/gate-sliding.jpg', alt: 'Large steel sliding gate with a decorative corner detail', label: 'Sliding gate', category: 'welding', size: 'wide', fit: 'contain' },
    { src: '/images/welding-workshop.jpg', alt: 'Welder working on a steel trailer frame in the workshop', label: 'In the workshop', category: 'welding', size: 'tall', fit: 'cover' },
    { src: '/images/fridge-trailer-main.jpg', alt: 'Mobile fridge trailer, side view', label: 'Mobile fridge trailer', category: 'fridges', size: 'tall', fit: 'contain' },
    { src: '/images/gates-security.jpg', alt: 'Set of finished steel security gates', label: 'Security gates', category: 'welding', size: 'normal', fit: 'contain' },
    { src: '/images/bed-finished.jpg', alt: 'Steel four-poster bed frame with mattresses', label: 'Four-poster bed', category: 'welding', size: 'normal', fit: 'contain' },
    { src: '/images/fridge-trailer-unit.jpg', alt: 'Mobile fridge trailer with the cooling unit fitted', label: 'Cooling unit fitted', category: 'fridges', size: 'normal', fit: 'contain' },
    { src: '/images/welding-chassis.jpg', alt: 'Welding a trailer chassis', label: 'Chassis welding', category: 'welding', size: 'wide', fit: 'cover' },
    { src: '/images/gate-decorative.jpg', alt: 'Steel gate panel with a chevron pattern', label: 'Patterned gate panel', category: 'welding', size: 'wide', fit: 'contain' },
    { src: '/images/coldroom-trailer-interior.jpg', alt: 'Inside a mobile fridge trailer showing the evaporator', label: 'Inside the unit', category: 'fridges', size: 'tall', fit: 'cover' },
    { src: '/images/trailer-watertank.jpg', alt: 'Water tank mounted on a fabricated trailer', label: 'Tank trailer', category: 'welding', size: 'normal', fit: 'contain' },
    { src: '/images/bed-frame.jpg', alt: 'Steel bed frame with wooden slats', label: 'Bed frame', category: 'welding', size: 'normal', fit: 'contain' },
    { src: '/images/fridge-condensing-unit.jpg', alt: 'Refrigeration condensing unit', label: 'Condensing unit', category: 'fridges', size: 'normal', fit: 'contain' },
    { src: '/images/trailer-chassis.jpg', alt: 'Galvanised trailer chassis', label: 'Trailer chassis', category: 'welding', size: 'wide', fit: 'contain' },
    { src: '/images/gate-steel.jpg', alt: 'Steel security gate', label: 'Steel gate', category: 'welding', size: 'tall', fit: 'contain' },
    { src: '/images/fridge-trailer-plain.jpg', alt: 'Mobile fridge trailer, rear view', label: 'Ready to tow', category: 'fridges', size: 'tall', fit: 'contain' },
    { src: '/images/trailer-flatbed.jpg', alt: 'Flatbed trailer built by Khokha', label: 'Flatbed trailer', category: 'welding', size: 'normal', fit: 'contain' },
  ],
}

/* -----------------------------------------------------------------------------
   13. MOBILE FRIDGE GALLERY
   -------------------------------------------------------------------------- */
export const fridgeGallery = {
  headline: ['The units.'],
  body: 'What the mobile fridges look like, inside and out.',
  main: {
    src: '/images/fridge-trailer-plain.jpg',
    alt: 'Mobile fridge trailer, full view',
    label: 'The unit',
    fit: 'contain',
  },
  detail: {
    src: '/images/fridge-condensing-unit.jpg',
    alt: 'The refrigeration unit that keeps it cold',
    label: 'The cooling unit',
    fit: 'contain',
  },
  useCase: {
    src: '/images/coldroom-trailer-interior.jpg',
    alt: 'Inside a mobile fridge trailer',
    label: 'Inside',
    fit: 'cover',
  },
  ctaHeadline: 'Need a mobile fridge?',
  ctaBody: 'Tell us your dates and what you need to keep cold.',
  cta: 'WhatsApp Khokha',
}

/* -----------------------------------------------------------------------------
   14. FAQ — confirm every answer with the client before going live
   -------------------------------------------------------------------------- */
export const faq = {
  headline: ['Questions', 'we get asked.'],
  items: [
    {
      q: 'What kind of welding work do you take on?',
      a: 'Custom welding, metal repairs, fabrication, steelwork, gates and custom frames — new pieces built to size, and repairs to steel that has cracked, broken or rusted through.',
    },
    {
      q: 'Can I send photos instead of describing the job?',
      a: 'Yes, and it helps. Send photos on WhatsApp with rough sizes and we can tell you what the job involves.',
    },
    {
      q: 'Are the mobile fridges for hire or for sale?',
      a: mobileFridgeAnswer,
    },
    {
      q: 'How do I get a price?',
      a: 'Send us the details and photos of what you need. We come back to you with a quote for that specific job.',
    },
  ],
}

/* -----------------------------------------------------------------------------
   15. QUOTE FORM
   -------------------------------------------------------------------------- */
export const quote = {
  headline: ['Request a quote.'],
  body: 'Fill this in and it opens a WhatsApp message to Khokha with your details already written out. Rather talk? Call instead.',
  needOptions: [
    { value: 'Welding', label: 'Welding' },
    { value: 'Fabrication', label: 'Fabrication' },
    { value: 'Welding repair', label: 'Welding repair' },
    { value: 'Mobile fridge', label: 'Mobile fridge' },
    { value: 'Other', label: 'Other' },
  ],
  photoNote: 'Photos cannot be attached from this form — add them to the WhatsApp chat once it opens.',
  submit: 'Send on WhatsApp',
}

/* -----------------------------------------------------------------------------
   16. FOOTER
   -------------------------------------------------------------------------- */
export const footer = {
  blurb: 'Welding, metalwork and mobile refrigeration. Built to work, kept cool.',
  legal: 'Khokha Refrigeration & Welding',
  services: ['Welding & Fabrication', mobileFridgeTitle],
}

/* -----------------------------------------------------------------------------
   17. NOT YET ON THE SITE
   -----------------------------------------------------------------------------
   Khokha supplied photographs of work that does not fit either category above,
   so none of it is shown — no service is claimed that has not been confirmed.
   The files are already in /public/images and ready to use:

     Mobile toilet units   unit-toilet-01 … 05, unit-toilet-open,
                           unit-toilet-build
     Walk-in cold rooms    coldroom-walkin, coldroom-door

   They are parked in /media-source/unused-photos so they do not add weight to
   the build. To use them: copy the files into /public/images, add an entry to
   `services`, add a nav item, and add the photos to `gallery.items` with a new
   category id and a matching filter. Confirm with Khokha first.
   -------------------------------------------------------------------------- */
