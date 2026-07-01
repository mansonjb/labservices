// Moteur de pages programmatiques Service × Ville.
// Le contenu local (parcs d'expo, contexte, angle sportif) rend chaque page unique
// et réellement rankable — l'inverse d'un contenu "spinné" mince.

export type City = {
  slug: string;
  name: string;
  prep: string; // "à Paris", "au Mans", "à Bordeaux"
  region: string;
  dept: string;
  venues: string[]; // parcs d'expo / lieux événementiels réels
  angle: string; // contexte local (unique par ville)
  sport?: string; // ancrage sportif local
  nearby: string[]; // slugs de villes proches (maillage interne)
};

export type PService = {
  slug: string;
  label: string;
  short: string; // formulation minuscule pour les phrases
  lead: string;
  includes: string[];
  intent: string;
};

export const CITIES: City[] = [
  {
    slug: "paris",
    name: "Paris",
    prep: "à Paris",
    region: "Île-de-France",
    dept: "75",
    venues: ["Paris Expo Porte de Versailles", "Paris Nord Villepinte", "Paris Le Bourget", "Paris La Défense Arena"],
    angle:
      "Premier pôle de salons et de congrès d'Europe, l'Île-de-France concentre les plus grands parcs d'exposition du continent. Y réussir un événement suppose une logistique millimétrée dans un environnement dense et exigeant.",
    sport: "Roland-Garros, Stade de France, ParisLongchamp, Accor Arena",
    nearby: ["lille", "le-mans", "strasbourg"],
  },
  {
    slug: "lyon",
    name: "Lyon",
    prep: "à Lyon",
    region: "Auvergne-Rhône-Alpes",
    dept: "69",
    venues: ["Eurexpo Lyon", "Centre de Congrès de Lyon", "Halle Tony Garnier", "Groupama Stadium"],
    angle:
      "Deuxième place événementielle française, Lyon et son parc Eurexpo accueillent des salons professionnels de dimension internationale. Un carrefour logistique idéal entre Paris, la Méditerranée et l'Europe.",
    sport: "Groupama Stadium, LDLC Arena",
    nearby: ["marseille", "strasbourg"],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    prep: "à Bordeaux",
    region: "Nouvelle-Aquitaine",
    dept: "33",
    venues: ["Parc des Expositions de Bordeaux", "Palais 2 l'Atlantique", "Bordeaux Convention Center", "Matmut Atlantique"],
    angle:
      "Bordeaux s'est imposée comme une place événementielle majeure du Grand Sud-Ouest, portée par un parc des expositions rénové et une scène business en pleine croissance.",
    sport: "Matmut Atlantique, Circuit du Val de Vienne",
    nearby: ["nantes", "marseille"],
  },
  {
    slug: "lille",
    name: "Lille",
    prep: "à Lille",
    region: "Hauts-de-France",
    dept: "59",
    venues: ["Lille Grand Palais", "Grand Palais de Lille", "Stade Pierre-Mauroy", "Zénith de Lille"],
    angle:
      "Porte d'entrée du nord de l'Europe, Lille bénéficie d'une position stratégique entre Paris, Bruxelles et Londres, idéale pour les salons et roadshows à rayonnement transfrontalier.",
    sport: "Stade Pierre-Mauroy",
    nearby: ["paris", "strasbourg"],
  },
  {
    slug: "le-mans",
    name: "Le Mans",
    prep: "au Mans",
    region: "Pays de la Loire",
    dept: "72",
    venues: ["Circuit des 24 Heures du Mans", "Centre des Congrès du Mans", "Parc des Expositions du Mans", "Antarès"],
    angle:
      "Capitale mondiale de l'endurance automobile, Le Mans est notre terrain de jeu : notre siège est installé au cœur même du circuit des 24 Heures. Personne ne connaît mieux la logistique et l'hospitality des grands rendez-vous du sport auto.",
    sport: "Circuit des 24 Heures, Le Mans Classic, GP Explorer",
    nearby: ["nantes", "paris"],
  },
  {
    slug: "nantes",
    name: "Nantes",
    prep: "à Nantes",
    region: "Pays de la Loire",
    dept: "44",
    venues: ["Parc des Expositions de la Beaujoire (Exponantes)", "La Cité des Congrès de Nantes", "Zénith Nantes Métropole"],
    angle:
      "Moteur économique du Grand Ouest, Nantes conjugue salons professionnels, congrès et événements de marque dans des équipements modernes, à moins de deux heures de notre base mancelle.",
    sport: "Stade de la Beaujoire",
    nearby: ["le-mans", "bordeaux"],
  },
  {
    slug: "marseille",
    name: "Marseille",
    prep: "à Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    dept: "13",
    venues: ["Parc Chanot", "Palais des Congrès et des Expositions", "Orange Vélodrome", "Le Dôme"],
    angle:
      "Première façade méditerranéenne de France, Marseille et le Parc Chanot accueillent congrès internationaux et grands salons, avec une logique logistique portuaire et euroméditerranéenne unique.",
    sport: "Orange Vélodrome, Circuit Paul Ricard",
    nearby: ["lyon", "bordeaux"],
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    prep: "à Strasbourg",
    region: "Grand Est",
    dept: "67",
    venues: ["Parc des Expositions du Wacken", "Palais de la Musique et des Congrès", "Rhénus Sport"],
    angle:
      "Capitale européenne, Strasbourg attire congrès institutionnels et salons transfrontaliers, avec un nouveau parc des expositions au Wacken pensé pour l'événementiel professionnel.",
    sport: "Rhénus Sport",
    nearby: ["lille", "lyon"],
  },
];

export const PSERVICES: PService[] = [
  {
    slug: "agence-evenementielle",
    label: "Agence événementielle",
    short: "agence événementielle",
    lead:
      "De la conception 3D au démontage, LAB Services prend en charge l'intégralité de vos événements professionnels : stands, salons, activations de marque, séminaires et opérations d'envergure. Un seul interlocuteur, responsable de bout en bout.",
    includes: [
      "Conception, direction artistique & scénographie 3D",
      "Production de stands, structures et décors sur mesure",
      "Logistique, transport et stockage sécurisé",
      "Montage, pilotage le jour J et démontage",
    ],
    intent: "commerciale locale",
  },
  {
    slug: "stand-sur-mesure",
    label: "Stand sur mesure",
    short: "stand sur mesure",
    lead:
      "Un stand qui arrête le visiteur et sert vos objectifs commerciaux. Nous concevons, fabriquons et installons votre stand sur mesure sur les principaux parcs d'exposition, puis le stockons pour le réemployer d'un salon à l'autre.",
    includes: [
      "Design & modélisation 3D validée avant production",
      "Fabrication sur mesure en atelier",
      "Installation et désinstallation sur le parc des expositions",
      "Stockage et réemploi entre deux salons",
    ],
    intent: "commerciale locale",
  },
  {
    slug: "logistique-evenementielle",
    label: "Logistique événementielle",
    short: "logistique événementielle",
    lead:
      "La logistique est le maillon qui fait ou défait un événement. Entrepôt sécurisé, logiciel WMS 24h/24, transport et manutention : nous garantissons que le bon matériel arrive au bon endroit, au bon moment.",
    includes: [
      "Entrepôt sécurisé & logiciel WMS 24h/24",
      "Transport et acheminement national",
      "Gestion des flux, du matériel et des stocks",
      "Manutention, installation et reprise sur site",
    ],
    intent: "commerciale locale",
  },
  {
    slug: "hospitality-sportive",
    label: "Hospitality & événementiel sportif",
    short: "hospitality sportive",
    lead:
      "Loges VIP, villages de marque, paddocks, espaces réceptifs : nous concevons et opérons des dispositifs d'hospitality pour les plus grands événements sportifs. Un savoir-faire né au cœur du circuit des 24 Heures du Mans.",
    includes: [
      "Loges & espaces VIP clés en main",
      "Aménagement de villages, paddocks et zones réceptives",
      "Logistique d'événements sportifs",
      "Hospitality et expérience spectateur",
    ],
    intent: "commerciale locale de niche",
  },
];

export function findCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
export function findService(slug: string) {
  return PSERVICES.find((s) => s.slug === slug);
}
export function allCombos() {
  return PSERVICES.flatMap((s) => CITIES.map((c) => ({ service: s.slug, ville: c.slug })));
}
