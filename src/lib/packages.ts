export type DivePackage = {
  slug: string;
  title: string;
  category: 'Course / Certification' | 'Leisure Dive';
  level: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  highlights?: string[];
  notes?: string;
  image: string;
};

export const divePackages: DivePackage[] = [
  {
    slug: 'try-scuba-boat',
    title: 'Try Scuba Diving (Boat)',
    category: 'Course / Certification',
    level: 'No experience needed',
    duration: '~3 hours • non-certification',
    price: 'RM 250',
    description:
      'First-time boat experience with skills in shallow water, then a guided dive on an easy reef.',
    includes: [
      'Instructor-led boat dive',
      'Full gear hire included',
      'Max depth ~12m',
      'Safety briefing + confined-water skills',
    ],
    highlights: ['Best for first-timers', 'Boat access included', 'Photos available on request'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'scuba-diver',
    title: 'Scuba Diver (Entry-Level)',
    category: 'Course / Certification',
    level: 'Beginner certification',
    duration: '2 days • 3 training dives',
    price: 'RM 1,200',
    description:
      'Entry-level certification covering theory, pool/confined-water skills, and open-water dives.',
    includes: [
      'Manual & certification paperwork',
      '3 open-water training dives',
      'Full equipment rental',
      'Max depth 12m with pro',
    ],
    highlights: ['Great for short stays', 'Progress to Open Water later', 'Small group ratios'],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'open-water-diver',
    title: 'Open Water Diver',
    category: 'Course / Certification',
    level: 'Beginner certification',
    duration: '4 days • 4 training dives',
    price: 'RM 1,470',
    description:
      'Full beginner certification: self-study/e-learning plus confined skills and 4 open-water dives.',
    includes: [
      'Manual or e-learning access',
      'Pool/confined-water sessions',
      '4 open-water dives',
      'Certification + logbook',
    ],
    highlights: ['Most popular starter course', 'Max depth 18m', 'Upgrade path to Advanced'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'advanced-open-water',
    title: 'Advanced Open Water',
    category: 'Course / Certification',
    level: 'For certified divers',
    duration: '2 days • 5 adventure dives',
    price: 'RM 1,300',
    description:
      'Build confidence with deep, navigation, and elective dives like buoyancy, night, or wreck.',
    includes: [
      '5 training dives with instructor',
      'Deep + navigation mandatory dives',
      'Choice of 3 elective dives',
      'Certification processing',
    ],
    highlights: ['Max depth 30m', 'Great skills tune-up', 'Works over a long weekend'],
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'rescue-diver',
    title: 'Rescue Diver',
    category: 'Course / Certification',
    level: 'For Advanced-certified divers',
    duration: '3 days • scenario-based',
    price: 'RM 1,600',
    description:
      'Scenario-driven training to manage diver stress, surface/underwater assists, and rescue planning.',
    includes: [
      'Rescue academics & drills',
      'Open-water rescue scenarios',
      'Instructor + safety team',
      'Certification processing',
    ],
    highlights: ['EFR/React Right required', 'Challenging & rewarding', 'Ideal before Divemaster'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'react-right-plus-rescue',
    title: 'React Right + Rescue Bundle',
    category: 'Course / Certification',
    level: 'Advanced prerequisite + first aid',
    duration: '4 days • bundled',
    price: 'RM 2,000',
    description:
      'Combine first-aid/CPR (React Right/EFR) with the full Rescue Diver program in one trip.',
    includes: [
      '1 day of first-aid/CPR training',
      'Rescue Diver academics + scenarios',
      'Certification paperwork for both',
      'Gear & oxygen kit for practice',
    ],
    highlights: ['Best value bundle', 'Meets Rescue prerequisites', 'Great for career track'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'nitrox-specialty',
    title: 'Nitrox (Enriched Air) Specialty',
    category: 'Course / Certification',
    level: 'Certified divers',
    duration: '½ day • dry course',
    price: 'RM 550',
    description:
      'Earn your Nitrox certification for longer bottom times; dry course with optional Nitrox dive add-on.',
    includes: [
      'Classroom/e-learning theory',
      'Analyzing cylinders practice',
      'Certification processing',
      'Optional Nitrox dive add-on',
    ],
    highlights: ['Great add-on to trips', 'No in-water requirement', 'Pairs well with Deep Specialty'],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'deep-diver-specialty',
    title: 'Deep Diver Specialty',
    category: 'Course / Certification',
    level: 'Certified divers • 20+ dives',
    duration: '2–3 days • 4 dives',
    price: 'RM 1,200',
    description:
      'Learn gas planning, narcosis awareness, and staged descents to safely explore deeper reefs and wrecks.',
    includes: [
      '4 deep training dives',
      'Instructor & safety kit',
      'Certification paperwork',
      'Optional Nitrox combo pricing',
    ],
    highlights: ['For 20+ logged dives', 'Max depth 40m with instructor', 'Pairs with Wreck Specialty'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'boat-dive-day',
    title: 'Certified Diver Boat Dives (3x)',
    category: 'Leisure Dive',
    level: 'Certified divers',
    duration: 'Day trip • 3 guided dives',
    price: 'RM 420 with gear / RM 390 without',
    description:
      'Three-tank boat day to our signature sites. Perfect for certified divers wanting guided fun dives.',
    includes: [
      '3 guided boat dives',
      'Tanks, weights, and boat fees',
      'Light snacks & surface interval drinks',
      'Rental gear optional add-on',
    ],
    highlights: ['Upgrade to Nitrox on request', 'Small groups, matched by experience', 'Night dive add-on available'],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1000&auto=format&fit=crop',
  },
];

export const getPackageBySlug = (slug: string) => divePackages.find((pkg) => pkg.slug === slug);
