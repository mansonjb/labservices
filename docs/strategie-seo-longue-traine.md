# Stratégie SEO longue traîne — LAB Services

> Synthèse d'un deep research (24 sources, 112 claims extraits, 25 vérifiés en adversarial 3-votes : 17 confirmés, 8 réfutés). Marché France, 2026. À valider par un audit de volumes Ahrefs/Semrush.

## 1. Le principe directeur (le plus important)

Le template **Service × Ville** est le pattern longue traîne le plus rentable pour une agence événementielle — MAIS il ne rank en 2026 **que si chaque page porte un contenu réellement unique** (données locales, parcs d'expo, chiffres, cas clients nommés). La simple insertion de variables (« stand à {ville} » où seul le nom change) est classée **doorway / scaled content abuse** par Google et pénalisée : jusqu'à **98 % de désindexation** documentée sur des sites qui ont abusé du template.

**Règle d'or : moins de pages, plus riches.** « 500 pages à forte valeur battent 5 000 pages minces. »

## 2. Templates programmatiques, classés

| Rang | Template | Exemple | Statut recherche |
|---|---|---|---|
| 1 | **Service × Ville** | `stand sur mesure à Lyon` | ✅ Confirmé (n°1 accessible) |
| 2 | **Service × Venue** (parc expo) | `stand à Paris Villepinte` | ✅ Confirmé (prioritaire) |
| 3 | **Service × Secteur** | `stand pour laboratoires` | ✅ Confirmé |
| 4 | **Verticales / cas d'usage** | page `événementiel sportif` | ✅ Confirmé |
| 5 | **Guides « prix/coût »** | `prix d'un stand de salon 2026` | ✅ Confirmé (fort trafic info) |
| — | Pages comparatives / « vs concurrent » | — | ❌ **Réfuté** — ne pas prioriser |

## 3. Villes prioritaires (par infrastructure expo réelle)

| Ville | Parc d'exposition | Surface |
|---|---|---|
| **Paris** (hub dominant, #2 mondial congrès) | Villepinte / Porte de Versailles | 246 000 m² / 202 000 m² |
| **Lyon** | Eurexpo | 110 000 m² |
| **Toulouse** | MEETT (2020, Rem Koolhaas) | ~100 000 m² |
| **Marseille** | Parc Chanot | ~95 000 m² |
| **Bordeaux** | Parc des Expositions | ~90 000 m² |
| **Lille** | Grand Palais | — |
| Nice, Nantes, Strasbourg, Rennes, Cannes | Acropolis, Beaujoire, Wacken, Palais des Festivals | tier-2 |

## 4. Clusters de mots-clés (intention)

- **Commerciale locale** : `agence événementielle {ville}`, `stand sur mesure {ville}`, `logistique événementielle {ville}`, `stand {parc expo}`.
- **Commerciale de niche (avantage LAB)** : `hospitality {événement sportif}`, `événementiel sportif`, `stand paddock`, `village de marque`, `loge VIP`. → Niche motorsport **validée** comme viable (des agences comparables structurent leur offre autour d'« Événementiel Sportif »).
- **Informationnelle (haut de tunnel)** : `prix d'un stand de salon`, `combien coûte un stand`, `comment aménager un stand`.

## 5. Structure de contenu idéale (ranking + GEO/IA)

- **Contenu unique substantiel** dépassant l'insertion de variables (le facteur n°1).
- Réponse **directe à l'intention** dès l'intro (favorise featured snippet + citation IA).
- **FAQ** balisée `FAQPage`.
- **Preuves E-E-A-T** : cas clients locaux nommés, équipe, réalisations chiffrées, partenariats. (~96 % des citations d'AI Overviews viennent de sources à fort E-E-A-T.)
- **Maillage interne** entre pages du cluster : Service ↔ Ville ↔ Venue ↔ Secteur.

## 6. Balisage schema.org

- **`Service`** pour les pages de service (⚠️ **PAS `ProfessionalService`, déprécié**).
- **`Organization` + `LocalBusiness`** pour l'entité (Le Mans + Paris).
- **`FAQPage` + `BreadcrumbList`** sur chaque page.
- `areaServed` pour la couverture géo (idéalement lié à Wikidata).
- ⚠️ **Ne pas surestimer le schema pour l'IA** : études contrôlées (Ahrefs n=5885) = effet **nul voire négatif** sur les citations IA. Sa valeur = rendre les entités machine-lisibles. **Le budget GEO va dans le contenu visible / E-E-A-T**, pas dans le schema.

## 7. À NE PAS faire (claims réfutés 0-3)

- Ne pas croire qu'un template « ville » suffit sans contenu unique (règle 75/25 et « 300 mots » : **non confirmées**).
- Ne pas prioriser les pages comparatives / vs-concurrent (pas les meilleures pour ce métier).
- Ne pas compter sur le schema pour doper le ranking ou les citations IA.

## 8. Pages « à fort potentiel » à construire en priorité

| # | Page (exemple) | Type | Intention |
|---|---|---|---|
| 1 | Stand sur mesure à Paris (Villepinte / Porte de Versailles) | Service × Venue | Commerciale locale |
| 2 | Hospitality & événementiel sportif au Mans | Niche motorsport | Commerciale (or pur) |
| 3 | Logistique événementielle à Lyon (Eurexpo) | Service × Ville | Commerciale locale |
| 4 | Agence événementielle à Toulouse (MEETT) | Service × Ville | Commerciale locale |
| 5 | Prix d'un stand de salon (guide 2026) | Guide coût | Informationnelle |
| 6 | Stand sur mesure pour l'industrie / la tech | Service × Secteur | Commerciale |
| 7 | Stand à Cannes (Palais des Festivals) | Service × Venue premium | Commerciale locale |

## 9. Ce qui est déjà implémenté sur ce site (démo)

- **44 pages Service × Ville** (`/[service]/[ville]`) : 4 services × 11 villes, chacune avec angle local, parcs d'expo réels **et surface au m²** (donnée unique anti-doorway), FAQ localisée, schema Service + FAQPage + BreadcrumbList, maillage interne.
- **Hub `/villes`** listant la matrice.
- **Guide `/prix-stand-salon`** (template informationnel, tableaux de prix + FAQ).
- Schema entité corrigé : `Organization` + `LocalBusiness` (Le Mans + Paris), `Service` (plus de `ProfessionalService`).

## Sources principales

Ahrefs (étude schema/IA), Search Engine Land, Google Search spam policies, schema.org (Service / ProfessionalService / ExhibitionEvent / areaServed), FounderPath, Passionfruit, LocalRanker.fr, SEOmatic, Ultiplace, Allostand, Xperience Events, ThestandExperts.

_Question ouverte : les volumes de recherche exacts par requête (FR) restent à chiffrer via Ahrefs/Semrush pour prioriser le ROI page par page._
