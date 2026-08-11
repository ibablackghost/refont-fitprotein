export type Product = {
  id: string
  slug: string
  name: string
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
  description: string
  highlights: string[]
  weight?: string
  flavor?: string
}

export type Brand = {
  id: string
  name: string
  image: string
  description: string
}

export const categories = [
  { label: 'Prise De Masse', href: '/boutique?cat=prise-de-masse', hasChildren: true },
  { label: 'Perte De Poids', href: '/boutique?cat=perte-de-poids', hasChildren: true },
  { label: 'Bien-Être', href: '/boutique?cat=bien-etre', hasChildren: true },
  { label: 'Beauté', href: '/boutique?cat=beaute', hasChildren: true },
  { label: 'Intimité', href: '/boutique?cat=intimite', hasChildren: false },
  { label: 'Healthy', href: '/boutique?cat=healthy', hasChildren: false },
  { label: 'Snacks & Boissons', href: '/boutique?cat=snacks', hasChildren: true },
  { label: 'Vêtements & Accessoires', href: '/boutique?cat=accessoires', hasChildren: true },
]

export const categoryChildren: Record<string, { label: string; href: string }[]> = {
  'Prise De Masse': [
    { label: 'Whey', href: '/boutique?cat=whey' },
    { label: 'Gainers', href: '/boutique?cat=prise-de-masse' },
    { label: 'Créatine', href: '/boutique?cat=creatine' },
    { label: 'Gamme AMKA', href: '/boutique?cat=amka' },
    { label: 'BCAA / EAA', href: '/boutique?cat=bcaa' },
  ],
  'Perte De Poids': [
    { label: 'Brûleurs de graisse', href: '/boutique?cat=perte-de-poids' },
    { label: 'Tisanes', href: '/boutique?cat=perte-de-poids' },
  ],
  'Bien-Être': [
    { label: 'Vitamines & Minéraux', href: '/boutique?cat=bien-etre' },
    { label: 'Collagène', href: '/boutique?cat=bien-etre' },
  ],
  Beauté: [
    { label: 'Peau', href: '/boutique?cat=beaute' },
    { label: 'Cheveux', href: '/boutique?cat=beaute' },
  ],
  'Snacks & Boissons': [
    { label: 'Barres protéinées', href: '/boutique?cat=snacks' },
    { label: 'Boissons', href: '/boutique?cat=snacks' },
  ],
  'Vêtements & Accessoires': [
    { label: 'Shakers', href: '/boutique?cat=accessoires' },
    { label: 'Vêtements', href: '/boutique?cat=accessoires' },
  ],
}

export const allCategories = [
  { label: 'Gamme AMKA', slug: 'amka' },
  { label: 'Protéines & Whey', slug: 'whey' },
  { label: 'Gainers & Prise de masse', slug: 'prise-de-masse' },
  { label: 'Créatine', slug: 'creatine' },
  { label: 'Acides aminés & BCAA', slug: 'bcaa' },
  { label: 'Brûleurs de graisse', slug: 'perte-de-poids' },
  { label: 'Pré-workout', slug: 'pre-workout' },
  { label: 'Vitamines & Minéraux', slug: 'bien-etre' },
  { label: 'Shakers & Accessoires', slug: 'accessoires' },
]

const img = (file: string) => `/products/real/${file}`
const amkaImg = (file: string) => `/products/amka/${file}`

export const brands: Brand[] = [
  {
    id: 'amka',
    name: 'AMKA Nutrition',
    image: '/amka/logo.png',
    description: 'Premium sports nutrition — Made for Africa, created for champions.',
  },
  {
    id: 'biotech',
    name: 'BioTechUSA',
    image: img('min_63-0-fitandprotein.webp'),
    description: 'Formules innovantes pour la performance.',
  },
  {
    id: 'optimum',
    name: 'Optimum Nutrition',
    image: img('min_828-0-fitandprotein.webp'),
    description: 'Gold Standard — la whey la plus vendue au monde.',
  },
  {
    id: 'optigura',
    name: 'Optigura',
    image: img('min_4509-1728498010-72645.webp'),
    description: 'Compléments accessibles et efficaces.',
  },
  {
    id: 'cellucor',
    name: 'Cellucor',
    image: img('min_4734-1753373915-5211.webp'),
    description: 'Créatine et pré-workouts haute intensité.',
  },
  {
    id: 'zoomad',
    name: 'Zoomad Labs',
    image: img('min_1064-0-fitandprotein.webp'),
    description: 'Créatines et formules explosives.',
  },
]

export const products: Product[] = [
  {
    id: 'amka1',
    slug: 'amka-whey-protein-chocolate',
    name: 'AMKA Whey Protein Chocolate',
    category: 'Whey',
    categorySlug: 'whey',
    brand: 'AMKA Nutrition',
    price: 32000,
    isNew: true,
    isTrending: true,
    image: amkaImg('whey-choco.webp'),
    gallery: [amkaImg('whey-choco.webp'), amkaImg('whey-vanilla.webp')],
    description:
      '21 g de whey premium par dose pour soutenir la masse maigre et accélérer la récupération. Goût chocolat, texture clean.',
    highlights: ['21 g protéines / dose', 'Chocolat', 'Made for Africa', 'Partenaire AMKA'],
    weight: 'Pouch',
    flavor: 'Chocolate',
  },
  {
    id: 'amka2',
    slug: 'amka-whey-protein-vanilla',
    name: 'AMKA Whey Protein Vanilla',
    category: 'Whey',
    categorySlug: 'whey',
    brand: 'AMKA Nutrition',
    price: 32000,
    isNew: true,
    image: amkaImg('whey-vanilla.webp'),
    gallery: [amkaImg('whey-vanilla.webp'), amkaImg('whey-choco.webp')],
    description:
      '21 g de whey douce et clean par dose. Un goût vanille polyvalent, parfait en post-workout ou en shake.',
    highlights: ['21 g protéines / dose', 'Vanilla', 'Clean mix', 'Partenaire AMKA'],
    weight: 'Pouch',
    flavor: 'Vanilla',
  },
  {
    id: 'amka3',
    slug: 'amka-creatine-monohydrate-red-fruit',
    name: 'AMKA Creatine Monohydrate Red Fruit',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'AMKA Nutrition',
    price: 24000,
    isTrending: true,
    image: amkaImg('creatine.webp'),
    gallery: [amkaImg('creatine.webp')],
    description:
      '5 g de créatine monohydrate pure par dose, goût fruits rouges léger et rafraîchissant.',
    highlights: ['5 g / dose', 'Red Fruit', 'Force & puissance', 'Partenaire AMKA'],
    weight: 'Tub',
    flavor: 'Red Fruit',
  },
  {
    id: 'mw2',
    slug: 'biotech-creatine-monohydrate-300g',
    name: '100% CREATINE MONOHYDRATE Saveur neutre - 300G',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'BioTechUSA',
    price: 25000,
    image: img('min_63-0-fitandprotein.webp'),
    gallery: [img('min_63-0-fitandprotein.webp'), img('min_4509-1728498010-72645.webp')],
    description:
      'Créatine monohydrate pure BioTechUSA. Un classique pour progresser en musculation et améliorer la récupération entre les séries.',
    highlights: ['100% monohydrate', 'Saveur neutre', '300 g', 'Micronisée'],
    weight: '300 g',
    flavor: 'Neutre',
  },
  {
    id: 'mw3',
    slug: 'optigura-creatine-250g',
    name: 'Creatine Monohydrate - 250g',
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
    id: 'mw4',
    slug: 'on-micronised-creatine-317g',
    name: 'MICRONISED CREATINE POWDER Saveur neutre - 317G',
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
    id: 'mw6',
    slug: 'biotech-l-carnitine-chrome-60caps',
    name: 'L-CARNITINE + CHROME',
    category: 'Brûleurs De Graisse',
    categorySlug: 'perte-de-poids',
    brand: 'BioTechUSA',
    price: 18000,
    image: img('min_133-0-fitandprotein.webp'),
    gallery: [img('min_133-0-fitandprotein.webp'), img('min_4894-0-fitandprotein.webp')],
    description:
      'L-Carnitine associée au chrome pour accompagner une sèche ou une recomposition corporelle.',
    highlights: ['1000 mg / dose', '60 capsules', 'Chrome', 'Idéal en sèche'],
    weight: '60 caps',
  },
  {
    id: 'mw5',
    slug: 'biotech-muscle-mass-chocolate-1000g',
    name: 'MUSCLE MASS Chocolate - 1000G',
    category: 'Gainers',
    categorySlug: 'prise-de-masse',
    brand: 'BioTechUSA',
    price: 30000,
    image: img('min_189-0-fitandprotein.webp'),
    gallery: [img('min_189-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description:
      'Gainer chocolat BioTechUSA pour les hardgainers. Apport calorique dense pour construire du volume.',
    highlights: ['1000 g', 'Chocolat', '5 sources protéines', 'Créatine'],
    weight: '1000 g',
    flavor: 'Chocolat',
  },
  {
    id: 'mw1',
    slug: 'creatine-ultra-pure-cherry-bomb-300g',
    name: 'CREATINE ULTRA PURE Cherry Bomb - 300G',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'Zoomad Labs',
    price: 23000,
    isTrending: true,
    image: img('min_1064-0-fitandprotein.webp'),
    gallery: [img('min_1064-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description:
      'Créatine Ultra Pure Cherry Bomb — goût intense, performance maximale.',
    highlights: ['300 g', 'Cherry Bomb', 'Tendance', '3 g / dose'],
    weight: '300 g',
    flavor: 'Cherry Bomb',
  },
  {
    id: 'tea1',
    slug: 'the-brule-graisse',
    name: 'Thé - Brûle graisse',
    category: 'Tisane',
    categorySlug: 'perte-de-poids',
    brand: 'RKD Nutrition',
    price: 9500,
    image: img('min_4501-1769094919-69008.webp'),
    gallery: [img('min_4501-1769094919-69008.webp')],
    description:
      'Tisane brûle-graisse thé vert, menthe douce et verveine — arôme naturel d’orange.',
    highlights: ['30 sachets', 'Thé vert', 'Menthe & verveine', '100 g'],
    weight: '100 g',
  },
  {
    id: 'mg1',
    slug: 'mega-amino-300',
    name: 'MEGA AMINO - 300 COMPRIMÉS',
    category: 'Bcaa / Eaa / Acides Aminées',
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
    highlights: ['Comprimés', '-10%', 'Nouveau', 'Acides aminés'],
    weight: '300 comprimés',
  },
  {
    id: 'mg2',
    slug: 'biotech-l-arginine',
    name: 'L-ARGININE Saveur neutre - 300G',
    category: 'Bcaa / Eaa / Acides Aminées',
    categorySlug: 'bcaa',
    brand: 'BioTechUSA',
    price: 24300,
    oldPrice: 27000,
    discount: 10,
    isNew: true,
    image: img('min_4894-0-fitandprotein.webp'),
    gallery: [img('min_4894-0-fitandprotein.webp'), img('min_4900-0-fitandprotein.webp')],
    description:
      'L-Arginine BioTechUSA — précurseur d’oxyde nitrique pour le pump musculaire.',
    highlights: ['1000 mg / caps', '90 capsules', '-10%', 'Nouveau'],
    weight: '90 caps',
  },
  {
    id: 'mg3',
    slug: 'creatine-effervescente-blood-orange',
    name: 'CREATINE EFFERVESCENTE Blood Orange - 18 COMPRIMÉS',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'BioTechUSA',
    price: 10400,
    oldPrice: 13000,
    discount: 20,
    isNew: true,
    image: img('min_4905-0-fitandprotein.webp'),
    gallery: [img('min_4905-0-fitandprotein.webp'), img('min_63-0-fitandprotein.webp')],
    description:
      'Créatine effervescente Blood Orange — pratique hors domicile, sans sucre.',
    highlights: ['18 comprimés', 'Blood Orange', '-20%', 'Nouveau'],
    weight: '18 comprimés',
    flavor: 'Blood Orange',
  },
  {
    id: 'mg4',
    slug: 'on-gold-standard-whey-300g',
    name: 'Gold Standard 100% Whey - 300g',
    category: 'Whey',
    categorySlug: 'whey',
    brand: 'Optimum Nutrition',
    price: 20700,
    oldPrice: 23000,
    discount: 10,
    isNew: true,
    image: img('min_4961-0-fitandprotein.webp'),
    gallery: [img('min_4961-0-fitandprotein.webp'), img('min_828-0-fitandprotein.webp')],
    description:
      'La whey Gold Standard Optimum Nutrition — 24 g de protéines par dose.',
    highlights: ['300 g', 'Gold Standard', '-10%', 'Nouveau'],
    weight: '300 g',
  },
  {
    id: 'ts5',
    slug: 'marine-collagen-orange-300g',
    name: 'MARINE COLLAGEN Orange - 300G',
    category: 'Peau',
    categorySlug: 'bien-etre',
    brand: 'BioTechUSA',
    price: 31500,
    oldPrice: 35000,
    discount: 10,
    isNew: true,
    image: img('min_4884-0-fitandprotein.webp'),
    gallery: [img('min_4884-0-fitandprotein.webp')],
    description:
      'Collagène marin goût orange pour peau, articulations et récupération.',
    highlights: ['300 g', 'Orange', '-10%', 'Nouveau'],
    weight: '300 g',
    flavor: 'Orange',
  },
  {
    id: 'ts6',
    slug: 'creatine-cor-performance-306g',
    name: 'CREATINE COR-PERFORMANCE Saveur neutre - 306G',
    category: 'Créatine',
    categorySlug: 'creatine',
    brand: 'Cellucor',
    price: 28000,
    isTrending: true,
    image: img('min_4734-1753373915-5211.webp'),
    gallery: [img('min_4734-1753373915-5211.webp'), img('min_828-0-fitandprotein.webp')],
    description:
      'Créatine Cor-Performance Cellucor — force, puissance et volume musculaire.',
    highlights: ['306 g', 'Tendance', 'Saveur neutre', 'Performance'],
    weight: '306 g',
    flavor: 'Neutre',
  },
  {
    id: 'ts7',
    slug: 'nano-shaker-bleu-300ml',
    name: 'NANO SHAKER Bleu - 300ML',
    category: 'Shakers',
    categorySlug: 'accessoires',
    brand: 'FitProtein',
    price: 4500,
    oldPrice: 5000,
    discount: 10,
    isNew: true,
    image: img('min_5065-0-fitandprotein.webp'),
    gallery: [img('min_5065-0-fitandprotein.webp')],
    description:
      'Nano shaker bleu 300 ml — compact, pratique, anti-grumeaux.',
    highlights: ['300 ml', 'Bleu', '-10%', 'Nouveau'],
    weight: '300 ml',
  },
]

export const mostWanted = products.filter((p) =>
  ['amka1', 'amka2', 'amka3', 'mw2', 'mw3', 'mw4', 'mw5', 'mw6'].includes(p.id),
)

export const massGainTop = products.filter((p) =>
  ['amka1', 'amka3', 'mg4', 'mw5', 'mg1', 'mg2', 'mw2', 'mw4'].includes(p.id),
)

export const topSellers = products.filter((p) =>
  ['amka1', 'amka2', 'amka3', 'mw2', 'mw3', 'mw4', 'mw6', 'mw5'].includes(p.id),
)

export const amkaProducts = products.filter((p) =>
  p.brand.toLowerCase().includes('amka'),
)

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
      const category = p.category.toLowerCase()
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
  if (slug === 'amka') {
    return amkaProducts
  }
  return products.filter((p) => p.categorySlug === slug)
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.brand === product.brand))
    .slice(0, limit)
}

export function formatFCFA(value: number) {
  return `${value.toLocaleString('fr-FR').replace(/\u202f/g, '.').replace(/\s/g, '.')} FCFA`
}
