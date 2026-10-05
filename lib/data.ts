export type Univers = 'complements' | 'fitness' | 'chaussures'

export type Product = {
  id: string
  slug: string
  name: string
  univers: Univers
  category: string
  categorySlug: string
  brand: string
  price: number
  oldPrice?: number
  discount?: number
  isNew?: boolean
  isTrending?: boolean
  image: string
  gallery?: string[]
  /** Photo plein cadre (chaussures, équipement) plutôt qu’un packshot détouré */
  fullBleed?: boolean
  description: string
  highlights: string[]
  weight?: string
  flavor?: string
  sizes?: string[]
}

export type Brand = {
  id: string
  name: string
  image: string
  description: string
}

export const INSTAGRAM_URL = 'https://www.instagram.com/jollofproteine'
export const WHATSAPP_NUMBER = '221783813181'
export const PHONE_DISPLAY = '+221 78 381 31 81'

export const univers: {
  slug: Univers
  label: string
  tagline: string
  image: string
}[] = [
  {
    slug: 'complements',
    label: 'Compléments',
    tagline: 'Whey, créatine, gainers, vitamines',
    image: '/jollof/photos/univers-complements.webp',
  },
  {
    slug: 'fitness',
    label: 'Fitness',
    tagline: 'Haltères, kettlebells, shakers, cardio',
    image: '/jollof/photos/univers-fitness.webp',
  },
  {
    slug: 'chaussures',
    label: 'Chaussures',
    tagline: 'Training, running & lifestyle',
    image: '/jollof/photos/univers-chaussures.webp',
  },
]

export const categories = [
  { label: 'Compléments', href: '/boutique?cat=complements', hasChildren: true },
  { label: 'Fitness', href: '/boutique?cat=fitness', hasChildren: true },
  { label: 'Chaussures', href: '/boutique?cat=chaussures', hasChildren: true },
  { label: 'Nouveautés', href: '/boutique?new=1', hasChildren: false },
  { label: 'Promos', href: '/boutique?promo=1', hasChildren: false },
  { label: 'Calculateur', href: '/calculateur', hasChildren: false },
]

export const categoryChildren: Record<string, { label: string; href: string }[]> = {
  Compléments: [
    { label: 'Protéines & Whey', href: '/boutique?cat=whey' },
    { label: 'Prise de masse', href: '/boutique?cat=prise-de-masse' },
    { label: 'Créatine', href: '/boutique?cat=creatine' },
    { label: 'Acides aminés', href: '/boutique?cat=bcaa' },
    { label: 'Sèche & minceur', href: '/boutique?cat=perte-de-poids' },
    { label: 'Vitamines & bien-être', href: '/boutique?cat=bien-etre' },
  ],
  Fitness: [
    { label: 'Haltères & poids', href: '/boutique?cat=halteres' },
    { label: 'Cardio', href: '/boutique?cat=cardio' },
    { label: 'Shakers', href: '/boutique?cat=shakers' },
  ],
  Chaussures: [
    { label: 'Training', href: '/boutique?cat=chaussures-training' },
    { label: 'Running', href: '/boutique?cat=chaussures-running' },
    { label: 'Lifestyle', href: '/boutique?cat=chaussures-lifestyle' },
  ],
}

export const allCategories: { label: string; slug: string; sub?: boolean }[] = [
  { label: 'Compléments alimentaires', slug: 'complements' },
  { label: 'Protéines & Whey', slug: 'whey', sub: true },
  { label: 'Prise de masse', slug: 'prise-de-masse', sub: true },
  { label: 'Créatine', slug: 'creatine', sub: true },
  { label: 'Acides aminés', slug: 'bcaa', sub: true },
  { label: 'Sèche & minceur', slug: 'perte-de-poids', sub: true },
  { label: 'Vitamines & bien-être', slug: 'bien-etre', sub: true },
  { label: 'Fitness & équipement', slug: 'fitness' },
  { label: 'Haltères & poids', slug: 'halteres', sub: true },
  { label: 'Cardio', slug: 'cardio', sub: true },
  { label: 'Shakers', slug: 'shakers', sub: true },
  { label: 'Chaussures', slug: 'chaussures' },
  { label: 'Training', slug: 'chaussures-training', sub: true },
  { label: 'Running', slug: 'chaussures-running', sub: true },
  { label: 'Lifestyle', slug: 'chaussures-lifestyle', sub: true },
]

const img = (file: string) => `/products/real/${file}`
const jp = (file: string) => `/products/jollof/${file}.webp`

const SHOE_SIZES = ['39', '40', '41', '42', '43', '44', '45']

export const brands: Brand[] = [
  {
    id: 'nike',
    name: 'Nike',
    image: jp('shoe-airmax-orange'),
    description: 'Training, running et lifestyle — les modèles iconiques.',
  },
  {
    id: 'optimum',
    name: 'Optimum Nutrition',
    image: img('min_828-0-fitandprotein.webp'),
    description: 'Gold Standard — la whey la plus vendue au monde.',
  },
  {
    id: 'biotech',
    name: 'BioTechUSA',
    image: img('min_63-0-fitandprotein.webp'),
    description: 'Formules innovantes pour la performance.',
  },
  {
    id: 'new-balance',
    name: 'New Balance',
    image: jp('shoe-nb-olive'),
    description: 'Confort et style au quotidien.',
  },
  {
    id: 'puma',
    name: 'Puma',
    image: jp('shoe-court-white'),
    description: 'Sneakers clean, faciles à porter.',
  },
  {
    id: 'cellucor',
    name: 'Cellucor',
    image: img('min_4734-1753373915-5211.webp'),
    description: 'Créatine et pré-workouts haute intensité.',
  },
  {
    id: 'jollof',
    name: 'Jollof Protéine',
    image: jp('gear-kettlebell'),
    description: 'Notre sélection d’équipement pour s’entraîner partout.',
  },
  {
    id: 'optigura',
    name: 'Optigura',
    image: img('min_4509-1728498010-72645.webp'),
    description: 'Compléments accessibles et efficaces.',
  },
]

export const products: Product[] = [
  // ——— Compléments ———
  {
    id: 'c1',
    slug: 'on-gold-standard-whey-300g',
    name: 'Gold Standard 100% Whey - 300g',
    univers: 'complements',
    category: 'Whey',
    categorySlug: 'whey',
    brand: 'Optimum Nutrition',
    price: 20700,
    oldPrice: 23000,
    discount: 10,
    isNew: true,
    isTrending: true,
    image: img('min_4961-0-fitandprotein.webp'),
    gallery: [img('min_4961-0-fitandprotein.webp'), img('min_828-0-fitandprotein.webp')],
    description: 'La whey Gold Standard Optimum Nutrition — 24 g de protéines par dose.',
    highlights: ['24 g protéines / dose', '300 g', 'Gold Standard', '-10%'],
    weight: '300 g',
  },
  {
    id: 'c2',
    slug: 'biotech-muscle-mass-chocolate-1000g',
    name: 'MUSCLE MASS Chocolate - 1000G',
    univers: 'complements',
    category: 'Gainers',
    categorySlug: 'prise-de-masse',
    brand: 'BioTechUSA',
    price: 30000,
    isTrending: true,
    image: img('min_189-0-fitandprotein.webp'),
    gallery: [img('min_189-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description:
      'Gainer chocolat BioTechUSA pour les hardgainers. Apport calorique dense pour construire du volume.',
    highlights: ['1000 g', 'Chocolat', '5 sources protéines', 'Créatine'],
    weight: '1000 g',
    flavor: 'Chocolat',
  },
  {
    id: 'c3',
    slug: 'biotech-creatine-monohydrate-300g',
    name: '100% CREATINE MONOHYDRATE Saveur neutre - 300G',
    univers: 'complements',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'BioTechUSA',
    price: 25000,
    isTrending: true,
    image: img('min_63-0-fitandprotein.webp'),
    gallery: [img('min_63-0-fitandprotein.webp'), img('min_4509-1728498010-72645.webp')],
    description:
      'Créatine monohydrate pure BioTechUSA. Un classique pour progresser en musculation et améliorer la récupération entre les séries.',
    highlights: ['100% monohydrate', 'Saveur neutre', '300 g', 'Micronisée'],
    weight: '300 g',
    flavor: 'Neutre',
  },
  {
    id: 'c4',
    slug: 'on-micronised-creatine-317g',
    name: 'MICRONISED CREATINE POWDER Saveur neutre - 317G',
    univers: 'complements',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'Optimum Nutrition',
    price: 26000,
    image: img('min_828-0-fitandprotein.webp'),
    gallery: [img('min_828-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description:
      'Créatine micronisée Optimum Nutrition : pureté et finesse de grain pour une meilleure dissolution dans votre shaker.',
    highlights: ['317 g', '3 g créatine', '100% pure', 'Saveur neutre'],
    weight: '317 g',
    flavor: 'Neutre',
  },
  {
    id: 'c5',
    slug: 'creatine-cor-performance-306g',
    name: 'CREATINE COR-PERFORMANCE Saveur neutre - 306G',
    univers: 'complements',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'Cellucor',
    price: 28000,
    image: img('min_4734-1753373915-5211.webp'),
    gallery: [img('min_4734-1753373915-5211.webp'), img('min_828-0-fitandprotein.webp')],
    description: 'Créatine Cor-Performance Cellucor — force, puissance et volume musculaire.',
    highlights: ['306 g', 'Saveur neutre', 'Performance', 'Force'],
    weight: '306 g',
    flavor: 'Neutre',
  },
  {
    id: 'c6',
    slug: 'optigura-creatine-250g',
    name: 'Creatine Monohydrate - 250g',
    univers: 'complements',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'Optigura',
    price: 19000,
    image: img('min_4509-1728498010-72645.webp'),
    gallery: [img('min_4509-1728498010-72645.webp'), img('min_63-0-fitandprotein.webp')],
    description:
      'Créatine Optigura pour booster vos performances à l’entraînement. Format pratique pour débuter ou entretenir un cycle.',
    highlights: ['250 g', '3 g par dose', '200 mesh', 'Bonne solubilité'],
    weight: '250 g',
    flavor: 'Neutre',
  },
  {
    id: 'c7',
    slug: 'creatine-ultra-pure-cherry-bomb-300g',
    name: 'CREATINE ULTRA PURE Cherry Bomb - 300G',
    univers: 'complements',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'Zoomad Labs',
    price: 23000,
    image: img('min_1064-0-fitandprotein.webp'),
    gallery: [img('min_1064-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description: 'Créatine Ultra Pure Cherry Bomb — goût intense, performance maximale.',
    highlights: ['300 g', 'Cherry Bomb', '3 g / dose', 'Goût intense'],
    weight: '300 g',
    flavor: 'Cherry Bomb',
  },
  {
    id: 'c8',
    slug: 'mega-amino-300',
    name: 'MEGA AMINO - 300 COMPRIMÉS',
    univers: 'complements',
    category: 'Acides aminés',
    categorySlug: 'bcaa',
    brand: 'BioTechUSA',
    price: 23400,
    oldPrice: 26000,
    discount: 10,
    isNew: true,
    image: img('min_4900-0-fitandprotein.webp'),
    gallery: [img('min_4900-0-fitandprotein.webp'), img('min_4894-0-fitandprotein.webp')],
    description:
      'Mega Amino BioTechUSA — acides aminés complets pour récupération et construction musculaire.',
    highlights: ['300 comprimés', 'Acides aminés complets', 'Récupération', '-10%'],
    weight: '300 comprimés',
  },
  {
    id: 'c9',
    slug: 'biotech-l-arginine',
    name: 'L-ARGININE Saveur neutre - 300G',
    univers: 'complements',
    category: 'Acides aminés',
    categorySlug: 'bcaa',
    brand: 'BioTechUSA',
    price: 24300,
    oldPrice: 27000,
    discount: 10,
    image: img('min_4894-0-fitandprotein.webp'),
    gallery: [img('min_4894-0-fitandprotein.webp'), img('min_4900-0-fitandprotein.webp')],
    description: 'L-Arginine BioTechUSA — précurseur d’oxyde nitrique pour le pump musculaire.',
    highlights: ['1000 mg / caps', '90 capsules', 'Pump', '-10%'],
    weight: '90 caps',
  },
  {
    id: 'c10',
    slug: 'creatine-effervescente-blood-orange',
    name: 'CREATINE EFFERVESCENTE Blood Orange - 18 COMPRIMÉS',
    univers: 'complements',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'BioTechUSA',
    price: 10400,
    oldPrice: 13000,
    discount: 20,
    isNew: true,
    image: img('min_4905-0-fitandprotein.webp'),
    gallery: [img('min_4905-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description: 'Créatine effervescente Blood Orange — pratique hors domicile, sans sucre.',
    highlights: ['18 comprimés', 'Blood Orange', 'Sans sucre', '-20%'],
    weight: '18 comprimés',
    flavor: 'Blood Orange',
  },
  {
    id: 'c11',
    slug: 'biotech-l-carnitine-chrome-60caps',
    name: 'L-CARNITINE + CHROME',
    univers: 'complements',
    category: 'Sèche',
    categorySlug: 'perte-de-poids',
    brand: 'BioTechUSA',
    price: 18000,
    image: img('min_133-0-fitandprotein.webp'),
    gallery: [img('min_133-0-fitandprotein.webp'), img('min_4894-0-fitandprotein.webp')],
    description: 'L-Carnitine associée au chrome pour accompagner une sèche ou une recomposition corporelle.',
    highlights: ['1000 mg / dose', '60 capsules', 'Chrome', 'Idéal en sèche'],
    weight: '60 caps',
  },
  {
    id: 'c12',
    slug: 'the-brule-graisse',
    name: 'Thé - Brûle graisse',
    univers: 'complements',
    category: 'Minceur',
    categorySlug: 'perte-de-poids',
    brand: 'RKD Nutrition',
    price: 9500,
    image: img('min_4501-1769094919-69008.webp'),
    gallery: [img('min_4501-1769094919-69008.webp')],
    description: 'Tisane brûle-graisse thé vert, menthe douce et verveine — arôme naturel d’orange.',
    highlights: ['30 sachets', 'Thé vert', 'Menthe & verveine', '100 g'],
    weight: '100 g',
  },
  {
    id: 'c13',
    slug: 'marine-collagen-orange-300g',
    name: 'MARINE COLLAGEN Orange - 300G',
    univers: 'complements',
    category: 'Bien-être',
    categorySlug: 'bien-etre',
    brand: 'BioTechUSA',
    price: 31500,
    oldPrice: 35000,
    discount: 10,
    isNew: true,
    image: img('min_4884-0-fitandprotein.webp'),
    gallery: [img('min_4884-0-fitandprotein.webp')],
    description: 'Collagène marin goût orange pour peau, articulations et récupération.',
    highlights: ['300 g', 'Orange', 'Articulations', '-10%'],
    weight: '300 g',
    flavor: 'Orange',
  },

  // ——— Fitness ———
  {
    id: 'f1',
    slug: 'kettlebell-fonte-8kg',
    name: 'Kettlebell fonte - 8 kg',
    univers: 'fitness',
    category: 'Haltères & poids',
    categorySlug: 'halteres',
    brand: 'Jollof Protéine',
    price: 15000,
    isNew: true,
    isTrending: true,
    image: jp('gear-kettlebell'),
    fullBleed: true,
    description:
      'Kettlebell en fonte avec poignée large : swings, goblet squats, presses — l’outil idéal pour un full body à la maison.',
    highlights: ['Fonte pleine', '8 kg', 'Poignée large', 'Home training'],
    weight: '8 kg',
  },
  {
    id: 'f2',
    slug: 'paire-halteres-hexagonaux-10kg',
    name: 'Paire d’haltères hexagonaux - 2 × 10 kg',
    univers: 'fitness',
    category: 'Haltères & poids',
    categorySlug: 'halteres',
    brand: 'Jollof Protéine',
    price: 32000,
    oldPrice: 36000,
    discount: 11,
    image: jp('gear-hex-dumbbells'),
    fullBleed: true,
    description:
      'Haltères hexagonaux gainés caoutchouc : ils ne roulent pas, protègent le sol et offrent une prise sûre.',
    highlights: ['2 × 10 kg', 'Gaine caoutchouc', 'Anti-roulis', 'Poignée chromée'],
    weight: '2 × 10 kg',
  },
  {
    id: 'f3',
    slug: 'haltere-reglable-20kg',
    name: 'Haltère réglable - 20 kg',
    univers: 'fitness',
    category: 'Haltères & poids',
    categorySlug: 'halteres',
    brand: 'Jollof Protéine',
    price: 38000,
    isTrending: true,
    image: jp('gear-adjustable-dumbbell'),
    fullBleed: true,
    description:
      'Un seul haltère, toutes les charges : passez de 2,5 à 20 kg en quelques secondes. Gain de place garanti.',
    highlights: ['2,5 → 20 kg', 'Réglage rapide', 'Compact', 'Disques fonte'],
    weight: '20 kg',
  },
  {
    id: 'f4',
    slug: 'halteres-neoprene-2x3kg',
    name: 'Haltères néoprène - 2 × 3 kg',
    univers: 'fitness',
    category: 'Haltères & poids',
    categorySlug: 'halteres',
    brand: 'Jollof Protéine',
    price: 12000,
    image: jp('gear-neoprene-dumbbells'),
    fullBleed: true,
    description:
      'Haltères légers revêtus de néoprène, parfaits pour le renforcement, le cardio et la tonification.',
    highlights: ['2 × 3 kg', 'Néoprène', 'Prise douce', 'Tonification'],
    weight: '2 × 3 kg',
  },
  {
    id: 'f5',
    slug: 'corde-a-sauter-speed',
    name: 'Corde à sauter Speed',
    univers: 'fitness',
    category: 'Cardio',
    categorySlug: 'cardio',
    brand: 'Jollof Protéine',
    price: 6000,
    isNew: true,
    image: jp('gear-jump-rope'),
    fullBleed: true,
    description:
      'Corde à sauter à roulements, câble réglable : double unders, échauffement et cardio express.',
    highlights: ['Roulements à billes', 'Câble réglable', 'Poignées antidérapantes', 'Cardio'],
  },
  {
    id: 'f6',
    slug: 'nano-shaker-300ml',
    name: 'NANO SHAKER - 300ML',
    univers: 'fitness',
    category: 'Shakers',
    categorySlug: 'shakers',
    brand: 'Jollof Protéine',
    price: 4500,
    oldPrice: 5000,
    discount: 10,
    image: img('min_5065-0-fitandprotein.webp'),
    gallery: [img('min_5065-0-fitandprotein.webp')],
    description: 'Nano shaker 300 ml — compact, pratique, anti-grumeaux.',
    highlights: ['300 ml', 'Anti-grumeaux', 'Compact', '-10%'],
    weight: '300 ml',
  },

  // ——— Chaussures ———
  {
    id: 's1',
    slug: 'nike-air-max-orange-blanc',
    name: 'Nike Air Max — Orange & Blanc',
    univers: 'chaussures',
    category: 'Lifestyle',
    categorySlug: 'chaussures-lifestyle',
    brand: 'Nike',
    price: 65000,
    isNew: true,
    isTrending: true,
    image: jp('shoe-airmax-orange'),
    fullBleed: true,
    description:
      'L’amorti Air visible et un coloris orange vif : la paire qui passe de la salle à la rue.',
    highlights: ['Amorti Air', 'Mesh respirant', 'Semelle caoutchouc', 'Coloris orange'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's2',
    slug: 'nike-training-volt',
    name: 'Nike Training — Volt',
    univers: 'chaussures',
    category: 'Training',
    categorySlug: 'chaussures-training',
    brand: 'Nike',
    price: 55000,
    oldPrice: 62000,
    discount: 11,
    isTrending: true,
    image: jp('shoe-training-volt'),
    fullBleed: true,
    description:
      'Stabilité latérale et semelle plate pour vos séances HIIT, circuits et renforcement.',
    highlights: ['Stabilité latérale', 'HIIT & circuits', 'Légère', 'Grip multi-surfaces'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's3',
    slug: 'nike-flyknit-running-rouge',
    name: 'Nike Flyknit Running — Rouge',
    univers: 'chaussures',
    category: 'Running',
    categorySlug: 'chaussures-running',
    brand: 'Nike',
    price: 60000,
    image: jp('shoe-flyknit-red'),
    fullBleed: true,
    description:
      'Tige Flyknit ultra-légère qui épouse le pied, pour vos sorties running et fractionnés.',
    highlights: ['Tige Flyknit', 'Ultra-légère', 'Amorti réactif', 'Running'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's4',
    slug: 'nike-running-gris-anthracite',
    name: 'Nike Running — Gris anthracite',
    univers: 'chaussures',
    category: 'Running',
    categorySlug: 'chaussures-running',
    brand: 'Nike',
    price: 58000,
    isNew: true,
    image: jp('shoe-running-grey'),
    fullBleed: true,
    description: 'Une running polyvalente et sobre, confortable sur route comme sur tapis.',
    highlights: ['Amorti mousse', 'Polyvalente', 'Coloris sobre', 'Route & tapis'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's5',
    slug: 'puma-court-blanc',
    name: 'Puma Court — Blanc',
    univers: 'chaussures',
    category: 'Lifestyle',
    categorySlug: 'chaussures-lifestyle',
    brand: 'Puma',
    price: 45000,
    image: jp('shoe-court-white'),
    fullBleed: true,
    description: 'Sneaker blanche en cuir au profil épuré, facile à associer à toutes vos tenues.',
    highlights: ['Cuir', 'Profil épuré', 'Semelle cupsole', 'Blanc total'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's6',
    slug: 'new-balance-olive',
    name: 'New Balance — Olive',
    univers: 'chaussures',
    category: 'Lifestyle',
    categorySlug: 'chaussures-lifestyle',
    brand: 'New Balance',
    price: 52000,
    oldPrice: 58000,
    discount: 10,
    image: jp('shoe-nb-olive'),
    fullBleed: true,
    description: 'Le confort New Balance dans un coloris olive pour le quotidien.',
    highlights: ['Tige textile', 'Semelle confort', 'Coloris olive', 'Quotidien'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's7',
    slug: 'nike-dunk-high-sail',
    name: 'Nike Dunk High — Sail',
    univers: 'chaussures',
    category: 'Lifestyle',
    categorySlug: 'chaussures-lifestyle',
    brand: 'Nike',
    price: 70000,
    isNew: true,
    image: jp('shoe-dunk-sail'),
    fullBleed: true,
    description: 'La silhouette montante iconique, en coloris sail et dégradé pêche.',
    highlights: ['Montante', 'Cuir', 'Iconique', 'Édition limitée'],
    sizes: SHOE_SIZES,
  },
  {
    id: 's8',
    slug: 'nike-air-force-wheat',
    name: 'Nike Air Force — Wheat',
    univers: 'chaussures',
    category: 'Lifestyle',
    categorySlug: 'chaussures-lifestyle',
    brand: 'Nike',
    price: 68000,
    image: jp('shoe-af1-wheat'),
    fullBleed: true,
    description: 'Le classique en nubuck wheat, robuste et chaleureux.',
    highlights: ['Nubuck', 'Coloris wheat', 'Semelle Air', 'Classique'],
    sizes: SHOE_SIZES,
  },
]

const byIds = (ids: string[]) =>
  ids.map((id) => products.find((p) => p.id === id)).filter((p): p is Product => !!p)

export const bestSellers = byIds(['c1', 's1', 'c3', 'f1', 'c2', 's2', 'f3', 'c8'])
export const supplementsTop = byIds(['c1', 'c2', 'c3', 'c4', 'c8', 'c10', 'c11', 'c13'])
export const shoesTop = byIds(['s1', 's2', 's3', 's7'])
export const fitnessTop = byIds(['f1', 'f2', 'f3', 'f5'])

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function searchProducts(query: string, limit = 8) {
  const q = query.trim().toLowerCase()
  if (!q) return [] as Product[]

  const scored = products
    .map((p) => {
      const name = p.name.toLowerCase()
      const brand = p.brand.toLowerCase()
      const category = `${p.category} ${p.univers}`.toLowerCase()
      const flavor = (p.flavor || '').toLowerCase()
      const highlights = p.highlights.join(' ').toLowerCase()

      let score = 0
      if (name === q) score += 100
      else if (name.startsWith(q)) score += 80
      else if (name.includes(q)) score += 50
      if (brand.startsWith(q)) score += 40
      else if (brand.includes(q)) score += 25
      if (category.includes(q)) score += 20
      if (flavor.includes(q)) score += 15
      if (highlights.includes(q)) score += 10

      return { p, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.p.price - b.p.price)

  return scored.slice(0, limit).map((x) => x.p)
}

export function getProductsByCategory(slug: string) {
  if (slug === 'complements' || slug === 'fitness' || slug === 'chaussures') {
    return products.filter((p) => p.univers === slug)
  }
  return products.filter((p) => p.categorySlug === slug)
}

export function getRelatedProducts(product: Product, limit = 4) {
  const same = products.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
  const rest = products.filter(
    (p) => p.id !== product.id && p.univers === product.univers && !same.includes(p),
  )
  return [...same, ...rest].slice(0, limit)
}

export function formatFCFA(value: number) {
  return `${value.toLocaleString('fr-FR').replace(/\u202f/g, '.').replace(/\s/g, '.')} FCFA`
}
