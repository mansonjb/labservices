// Données LAB Services — issues de l'audit de lab-services.org + connaissance marché.
// ⚠️ À CONFIRMER par le client : téléphone, e-mail, adresses exactes, URLs réseaux sociaux.

export type Service = {
  slug: string;
  name: string;
  punch: string;
  desc: string;
  bullets: string[];
};
export type Faq = { q: string; a: string };
export type Pillar = { letter: string; word: string; title: string; desc: string; points: string[] };
export type Step = { n: string; title: string; desc: string };

export const BUSINESS = {
  name: "LAB Services",
  legalName: "LAB Services",
  tagline: "Logisticiens, Architectes & Bâtisseurs d'événements",
  baseline:
    "L'agence qui conçoit, produit et livre vos événements de A à Z — de la première esquisse 3D au dernier boulon démonté.",
  url: "https://www.lab-services.org",
  email: "contact@lab-services.org", // ⚠️ à confirmer
  phone: "+33243000000", // ⚠️ PLACEHOLDER — remplacer par le vrai numéro
  phoneDisplay: "02 43 00 00 00", // ⚠️ PLACEHOLDER
  locations: [
    {
      city: "Le Mans",
      region: "Pays de la Loire",
      postalCode: "72000",
      country: "FR",
      note: "Au cœur du circuit des 24 Heures du Mans",
      lat: 47.9503,
      lng: 0.2076,
    },
    {
      city: "Paris",
      region: "Île-de-France",
      postalCode: "75000",
      country: "FR",
      note: "Antenne opérationnelle Île-de-France",
      lat: 48.8566,
      lng: 2.3522,
    },
  ],
  social: {
    // ⚠️ URLs à confirmer
    instagram: "https://www.instagram.com/lab_services_event/",
    linkedin: "https://www.linkedin.com/company/lab-services",
    facebook: "https://www.facebook.com/LABServicesEvent",
  },
  areaServed: ["France", "Europe", "International"],
};

export const STATS = [
  { value: "143+", label: "événements livrés" },
  { value: "100+", label: "marques accompagnées" },
  { value: "2", label: "bases : Le Mans & Paris" },
  { value: "360°", label: "de la 3D au démontage" },
];

// Clients réels tirés du portfolio de LAB Services (réalisations documentées).
export const CLIENTS = [
  "GP Explorer",
  "24 Heures du Mans",
  "Le Mans Classic",
  "Samsung",
  "Goodyear",
  "Erborian",
  "HOKA",
  "Ferrari",
  "Perrier-Jouët",
  "Milwaukee",
  "Brembo",
  "Richard Mille",
  "PlayStation",
  "Pirelli",
  "Marathon de Paris",
  "UTMB",
  "Ironman",
  "Aston Martin",
  "Motul",
  "ACO",
  "Silmo",
  "Bacardi",
  "Louis XIII",
  "Peter Auto",
];

export const PILLARS: Pillar[] = [
  {
    letter: "L",
    word: "Logisticien",
    title: "On maîtrise le flux, vous dormez tranquille",
    desc: "Entrepôt sécurisé, logiciel WMS 24h/24, transport et gestion des flux. Votre matériel est stocké, tracé et acheminé sans mauvaise surprise.",
    points: ["Stockage & entreposage sécurisé", "Logiciel WMS 24h/24", "Transport & acheminement national"],
  },
  {
    letter: "A",
    word: "Architecte",
    title: "On dessine avant de construire",
    desc: "Conception et modélisation 3D : vous voyez votre événement avant qu'un seul élément soit produit. Une scénographie pensée pour votre marque et vos objectifs.",
    points: ["Conception & direction artistique", "Modélisation 3D validée avant production", "Scénographie sur mesure"],
  },
  {
    letter: "B",
    word: "Bâtisseur",
    title: "On produit, on monte, on pilote",
    desc: "Production, coordination et un chef de projet unique du brief au démontage. Un seul interlocuteur responsable de bout en bout.",
    points: ["Production & fabrication", "Montage, pilotage jour J, démontage", "Un chef de projet unique"],
  },
];

export const SERVICES: Service[] = [
  {
    slug: "stands",
    name: "Stands & structures événementielles",
    punch: "Un stand qui arrête le visiteur",
    desc: "Stands sur mesure et structures événementielles conçus pour capter l'attention et servir vos objectifs commerciaux.",
    bullets: ["Stand sur mesure", "Structures & tentes", "Conception 3D incluse"],
  },
  {
    slug: "salons",
    name: "Salons professionnels",
    punch: "Votre salon géré de bout en bout",
    desc: "De la réservation de l'espace au démontage, on orchestre votre présence sur les salons professionnels sans que vous ayez à courir.",
    bullets: ["Aménagement d'espace", "Logistique salon", "Coordination sur site"],
  },
  {
    slug: "roadshow",
    name: "Roadshows & tournées",
    punch: "Votre marque en mouvement, ville après ville",
    desc: "Planification et transport de vos tournées événementielles : un dispositif identique et impeccable à chaque étape.",
    bullets: ["Planning multi-villes", "Transport & montage", "Dispositif réplicable"],
  },
  {
    slug: "experientiel",
    name: "Expérientiel & activations de marque",
    punch: "Des activations dont on parle",
    desc: "Des expériences immersives qui font vivre votre marque et génèrent du contenu et du bouche-à-oreille.",
    bullets: ["Activations de marque", "Expériences immersives", "Dispositifs à fort impact"],
  },
  {
    slug: "decoration",
    name: "Décoration & scénographie",
    punch: "Une scénographie qui raconte votre marque",
    desc: "Décoration et scénographie soignées pour transformer un espace brut en univers de marque cohérent.",
    bullets: ["Direction artistique", "Décor sur mesure", "Ambiances & mise en lumière"],
  },
  {
    slug: "logistique",
    name: "Logistique & stockage événementiel",
    punch: "WMS 24/7, zéro imprévu logistique",
    desc: "Entreposage sécurisé et logiciel de gestion d'entrepôt 24h/24 : votre matériel événementiel stocké, tracé et prêt à partir.",
    bullets: ["Entrepôt sécurisé", "WMS 24h/24", "Transport intégré"],
  },
];

export const WHY = [
  {
    title: "Un seul interlocuteur, du concept au démontage",
    desc: "Fini les cinq prestataires qui se renvoient la balle. Un chef de projet LAB pilote tout : conception, production, logistique, montage, jour J, démontage.",
  },
  {
    title: "Un ancrage motorsport unique au monde",
    desc: "Notre base est au cœur du circuit des 24 Heures du Mans. Personne ne connaît mieux l'hospitality et la logistique des grands événements sportifs.",
  },
  {
    title: "La logistique intégrée, pas sous-traitée",
    desc: "Entrepôt en propre et logiciel WMS 24h/24. Votre matériel ne dépend pas d'un maillon externe hasardeux : il est chez nous, tracé et sécurisé.",
  },
  {
    title: "Des références qui parlent d'elles-mêmes",
    desc: "GP Explorer, 24h du Mans, Samsung, Goodyear, Erborian, HOKA… Les plus grands nous confient leurs événements les plus visibles.",
  },
];

export const PROCESS: Step[] = [
  { n: "01", title: "Brief & vision", desc: "On écoute vos objectifs, votre marque, votre budget. On cadre le projet et ses contraintes." },
  { n: "02", title: "Conception & 3D", desc: "On dessine votre événement et on le modélise en 3D. Vous validez avant qu'un euro soit engagé en production." },
  { n: "03", title: "Production & logistique", desc: "On fabrique, on stocke, on achemine. Chaque élément est tracé via notre WMS 24h/24." },
  { n: "04", title: "Montage, jour J & démontage", desc: "On installe, on pilote l'événement sur site et on démonte. Vous restez concentré sur vos invités." },
];

export const FAQ: Faq[] = [
  {
    q: "Qu'est-ce que LAB Services ?",
    a: "LAB Services est une agence française de logistique et de production événementielle basée au Mans et à Paris. Son nom résume sa méthode : [L]ogisticien, [A]rchitecte et [B]âtisseur d'événements. L'agence conçoit, produit et livre des événements de A à Z pour des marques comme GP Explorer, les 24 Heures du Mans, Samsung ou Goodyear.",
  },
  {
    q: "Où intervient LAB Services ?",
    a: "LAB Services dispose de deux bases, à Le Mans (au cœur du circuit des 24 Heures) et à Paris, et intervient partout en France ainsi qu'à l'international.",
  },
  {
    q: "Quels types d'événements gérez-vous ?",
    a: "Stands et salons professionnels, roadshows et tournées, activations de marque et expériences immersives, événements sportifs et hospitality, décoration et scénographie. L'agence est spécialisée dans les dispositifs événementiels sur mesure.",
  },
  {
    q: "Qu'est-ce qu'un service événementiel 360° ?",
    a: "Cela signifie qu'un seul prestataire prend en charge l'intégralité du projet : conception et modélisation 3D, production, logistique et stockage, transport, montage, pilotage le jour J et démontage. Vous n'avez qu'un seul interlocuteur responsable de bout en bout.",
  },
  {
    q: "LAB Services gère-t-il la logistique et le stockage du matériel ?",
    a: "Oui. LAB Services dispose d'un entrepôt sécurisé et d'un logiciel de gestion d'entrepôt (WMS) fonctionnant 24h/24, ce qui permet de stocker, tracer et acheminer votre matériel événementiel sans dépendre d'un sous-traitant.",
  },
  {
    q: "Combien coûte l'organisation d'un stand ou d'un événement ?",
    a: "Chaque projet est chiffré sur mesure selon la surface, la scénographie, la logistique et le nombre d'étapes. Le meilleur moyen d'obtenir un budget précis est de demander un devis gratuit : la réponse est rapide et sans engagement.",
  },
  {
    q: "Quels sont les délais pour organiser un événement ?",
    a: "Plus le projet est anticipé, mieux c'est, mais LAB Services est structuré pour gérer des délais courts grâce à sa logistique intégrée. Contactez l'agence avec votre date : elle vous dira immédiatement ce qui est réalisable.",
  },
  {
    q: "LAB Services travaille-t-il pour le sport automobile ?",
    a: "Oui, c'est l'une de ses spécialités. Basée sur le circuit des 24 Heures du Mans, l'agence a livré des dispositifs pour les 24 Heures du Mans, le Le Mans Classic, le GP Explorer, ainsi que des marques comme Goodyear, Pirelli, Brembo ou Aston Martin.",
  },
  {
    q: "Proposez-vous la conception et la modélisation 3D des stands ?",
    a: "Oui. Chaque projet passe par une phase de conception et de modélisation 3D : vous visualisez précisément votre stand ou votre dispositif avant sa production.",
  },
  {
    q: "Comment obtenir un devis auprès de LAB Services ?",
    a: "Il suffit de cliquer sur « Demande de devis », de décrire votre projet (type d'événement, date, ville, budget indicatif) ou d'écrire à contact@lab-services.org. Un chef de projet vous recontacte rapidement.",
  },
];

export const NAV = [
  { href: "#methode", label: "Méthode" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];
