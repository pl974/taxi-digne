# Plan d'Action SEO - Taxi Digne
## Objectif: Atteindre les positions 1 et 0 sur Google

**Date de début**: 2025-11-18
**Durée estimée**: 3 semaines
**Score actuel**: 70/100
**Score cible**: 95/100

---

## PHASE 1: CORRECTIONS CRITIQUES (Jours 1-3)
### Impact SEO: +15 points | Priorité: CRITIQUE

### Action 1.1: Créer les 5 pages villes manquantes
**Impact**: +10 points SEO | **Urgence**: CRITIQUE ❌

#### Pages à créer:
1. `/villes/manosque.astro` - 1400 mots
2. `/villes/sisteron.astro` - 1400 mots
3. `/villes/forcalquier.astro` - 1300 mots
4. `/villes/chateau-arnoux.astro` - 1300 mots
5. `/villes/barcelonnette.astro` - 1300 mots

#### Structure de chaque page ville:
```
- H1: Taxi [Ville] - Service 24h/24
- H2: Service de taxi à [Ville]
- H2: Nos services de taxi à [Ville]
- H2: Points d'intérêt et destinations
- H2: Liaisons depuis [Ville]
- H2: Pourquoi choisir notre service
- H2: Réservez votre taxi à [Ville]
- H3: 8-10 sous-sections
```

#### Contenu spécifique par ville:

**Manosque** (23 000 habitants - Sous-préfecture)
- Mots-clés: taxi manosque, taxi 04100, transport manosque
- Points intérêt: Zone industrielle, Centre Giono, Fondation Carzou
- Liaisons: Digne, Aix, Marseille, Gap, Forcalquier
- Spécificités: Zone économique importante, entreprises (L'Occitane)

**Sisteron** (7 500 habitants - Sous-préfecture)
- Mots-clés: taxi sisteron, taxi 04200, perle haute provence
- Points intérêt: Citadelle, Cathédrale, Rocher de la Baume
- Liaisons: Digne, Gap, Manosque, Aix, Grenoble
- Spécificités: Carrefour routier, tourisme, passage vers Hautes-Alpes

**Forcalquier** (5 000 habitants - Chef-lieu de canton)
- Mots-clés: taxi forcalquier, taxi 04300, cité médiévale
- Points intérêt: Citadelle, Couvent des Cordeliers, Observatoire
- Liaisons: Digne, Manosque, Apt, Avignon
- Spécificités: Marché provençal, tourisme culturel

**Château-Arnoux-Saint-Auban** (5 400 habitants)
- Mots-clés: taxi château-arnoux, taxi saint-auban, taxi 04160
- Points intérêt: Zone industrielle, Lac de l'Escale, Centre commercial
- Liaisons: Digne, Sisteron, Manosque, Oraison
- Spécificités: Zone d'activité importante, industries

**Barcelonnette** (2 700 habitants - Sous-préfecture)
- Mots-clés: taxi barcelonnette, taxi 04400, taxi vallée ubaye
- Points intérêt: Stations de ski (Pra-Loup, Le Sauze), Musée de la Vallée
- Liaisons: Digne, Gap, Nice, Grenoble
- Spécificités: Tourisme montagne, sports d'hiver, été

#### Template à utiliser:
Copier la structure de `/villes/digne-les-bains.astro` et adapter:
- ImageHero avec image ville ou paysage approprié
- Sections services localisées
- Points d'intérêt spécifiques à la ville
- Tarifs depuis cette ville
- Maillage vers autres villes
- Contenu SEO footer unique

### Action 1.2: Vérifier et corriger tous les liens internes
**Impact**: +3 points SEO | **Durée**: 30 min

- [ ] Vérifier tous les liens href dans toutes les pages
- [ ] S'assurer que les 5 nouvelles pages sont bien liées
- [ ] Vérifier les ancres (#) fonctionnent
- [ ] Tester en local tous les liens

### Action 1.3: Optimiser les meta descriptions manquantes
**Impact**: +2 points SEO | **Durée**: 20 min

- [ ] Vérifier que chaque page a description unique
- [ ] 150-160 caractères par description
- [ ] Inclure mots-clés principaux + call-to-action

---

## PHASE 2: ENRICHISSEMENT CONTENU (Jours 4-7)
### Impact SEO: +10 points | Priorité: MAJEUR

### Action 2.1: Enrichir Homepage (+900 mots)
**Impact**: +3 points SEO | **Cible**: 2000 mots total

#### Sections à ajouter:

**Section: "Expertise et expérience"** (200 mots)
```html
<section class="expertise-section">
  <h2>Plus de 15 ans d'expérience dans le transport de personnes</h2>
  <p>Historique, expertise, certifications, flotte...</p>
</section>
```

**Section: "Guide rapide - Comment ça marche"** (300 mots)
```html
<section class="how-it-works-detailed">
  <h2>Comment réserver votre taxi à Digne en 3 étapes</h2>
  <h3>Étape 1: Demandez votre devis</h3>
  <h3>Étape 2: Recevez votre confirmation</h3>
  <h3>Étape 3: Profitez de votre course</h3>
</section>
```

**Section: "Nos engagements qualité"** (200 mots)
```html
<section class="commitments">
  <h2>Nos engagements pour votre satisfaction</h2>
  <ul>Ponctualité, Propreté, Courtoisie, Tarifs fixes, etc.</ul>
</section>
```

**Section: "FAQ essentielles homepage"** (200 mots)
```html
<section class="faq-home">
  <h2>Questions fréquentes sur nos services</h2>
  <h3>Combien coûte un taxi Digne → Marseille ?</h3>
  <h3>Acceptez-vous les réservations de nuit ?</h3>
  <h3>Comment payer ma course ?</h3>
</section>
```

### Action 2.2: Enrichir page Tarifs (+400 mots)
**Impact**: +2 points SEO | **Cible**: 1800 mots total

#### Sections à ajouter:

**FAQ Tarifs détaillée** (250 mots)
- Comment est calculé le tarif de nuit ?
- Y a-t-il des frais cachés ?
- Puis-je avoir un devis avant la course ?
- Comment annuler ma réservation ?
- Quels sont les moyens de paiement acceptés ?

**Section comparaison tarifs** (150 mots)
- Taxi vs VTC vs Bus
- Avantages du taxi professionnel
- Rapport qualité-prix

### Action 2.3: Enrichir page Contact (+400 mots)
**Impact**: +2 points SEO | **Cible**: 1300 mots total

#### Sections à ajouter:

**FAQ Contact étendue** (300 mots)
10 nouvelles questions:
- Quel est le délai de réponse pour une réservation ?
- Puis-je modifier ma réservation ?
- Comment suivre ma course en temps réel ?
- Proposez-vous un service de rappel ?
- Comment contacter le chauffeur le jour J ?
- Que faire en cas de retard de train/avion ?
- Puis-je réserver pour quelqu'un d'autre ?
- Acceptez-vous les animaux ?
- Proposez-vous des sièges bébé ?
- Comment obtenir une facture ?

**Section "Nous trouver"** (100 mots)
- Adresse détaillée
- Horaires bureau
- Plan d'accès
- Parking disponible

### Action 2.4: Enrichir page Villes Index (+1100 mots)
**Impact**: +3 points SEO | **Cible**: 1800 mots total

#### Sections à ajouter:

**Introduction Alpes-de-Haute-Provence** (300 mots)
```html
<section class="region-intro">
  <h2>Se déplacer dans les Alpes-de-Haute-Provence</h2>
  <p>Présentation du département 04, ses particularités, relief, climat...</p>
</section>
```

**Description par secteur** (600 mots - 150 par secteur)
```html
<section class="sector-descriptions">
  <h3>Secteur de Digne - Préfecture et thermalisme</h3>
  <p>Description détaillée du secteur de Digne...</p>

  <h3>Secteur de Manosque - Pôle économique</h3>
  <p>Description du secteur de Manosque...</p>

  <h3>Secteur de Sisteron - Carrefour de la Haute-Provence</h3>
  <p>Description du secteur de Sisteron...</p>

  <h3>Secteur de Forcalquier - Pays de Haute-Provence</h3>
  <p>Description du secteur de Forcalquier...</p>
</section>
```

**Attractions et destinations** (200 mots)
```html
<section class="attractions">
  <h2>Principales attractions touristiques du 04</h2>
  <ul>Gorges du Verdon, Réserve géologique, Stations de ski, etc.</ul>
</section>
```

---

## PHASE 3: MAILLAGE INTERNE (Jours 8-10)
### Impact SEO: +8 points | Priorité: IMPORTANT

### Action 3.1: Ajouter liens contextuels dans contenus
**Impact**: +4 points SEO

#### Règles de maillage:
- 3-5 liens contextuels par page minimum
- Ancres variées et naturelles (pas toujours "cliquez ici")
- Liens bidirectionnels entre pages connexes
- Deep linking vers pages importantes

#### Exemples de liens à ajouter:

**Homepage**:
- Dans section services → liens vers /services#transfert-aeroport
- Dans section zones → liens vers pages villes individuelles
- Dans section tarifs → lien vers /tarifs

**Page Services**:
- Liens croisés entre services connexes
- Liens vers pages villes dans descriptions
- Liens vers /tarifs pour chaque service

**Page Tarifs**:
- Liens vers /services pour détails services
- Liens vers pages villes pour tarifs locaux
- Liens vers /contact pour devis personnalisé

**Pages Villes**:
- Liens vers autres villes proches
- Liens vers services spécifiques
- Liens vers /villes pour vue d'ensemble

### Action 3.2: Créer composant "Pages connexes"
**Impact**: +2 points SEO

#### Nouveau composant: `RelatedPages.astro`
```typescript
interface RelatedPage {
  title: string;
  description: string;
  url: string;
  image?: string;
}

interface Props {
  pages: RelatedPage[];
  title?: string;
}
```

#### Utilisation:
- En bas de chaque page avant le footer
- 3-4 pages connexes recommandées
- Automatique ou manuel selon contexte

### Action 3.3: Ajouter breadcrumbs visuels
**Impact**: +2 points SEO

#### Composant: `Breadcrumbs.astro`
- Affichage visuel du chemin
- Schema.org BreadcrumbList
- Sur toutes les pages sauf homepage

Exemple:
```
Accueil > Villes > Digne-les-Bains
Accueil > Services > Transfert Aéroport
```

---

## PHASE 4: SEO AVANCÉ (Jours 11-14)
### Impact SEO: +7 points | Priorité: IMPORTANT

### Action 4.1: Implémenter FAQPage schema
**Impact**: +3 points SEO

#### Pages concernées:
- Contact (FAQ existante)
- Tarifs (nouvelle FAQ)
- Homepage (FAQ essentielles)
- Nouvelle page FAQ complète

#### Structure schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Question text",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Answer text"
    }
  }]
}
```

### Action 4.2: Ajouter Review schema pour témoignages
**Impact**: +2 points SEO

#### Schema Review:
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Nom Client"
  },
  "reviewBody": "Texte témoignage"
}
```

### Action 4.3: Créer sitemap.xml
**Impact**: +1 point SEO

#### Contenu sitemap:
- Toutes les pages du site
- Pages villes (toutes)
- Fréquence de mise à jour
- Priorités

#### Fichier: `public/sitemap.xml`

### Action 4.4: Optimiser robots.txt
**Impact**: +1 point SEO

#### Fichier: `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://taxi-digne.fr/sitemap.xml

# Disallow admin pages if any
```

---

## PHASE 5: CONTENU PREMIUM (Jours 15-21)
### Impact SEO: +5 points | Priorité: OPTIMISATION

### Action 5.1: Créer page FAQ complète
**Impact**: +2 points SEO

#### Fichier: `src/pages/faq.astro`
**Contenu**: 2500-3000 mots | 25-30 questions

#### Catégories de questions:
1. **Réservation et tarifs** (8 questions)
2. **Services et véhicules** (7 questions)
3. **Zones desservies** (5 questions)
4. **Transport médical** (4 questions)
5. **Professionnels et entreprises** (4 questions)
6. **Paiement et facturation** (3 questions)

#### Structure:
- Navigation par catégories
- Ancres pour chaque question
- FAQPage schema complet
- Maillage vers pages concernées

### Action 5.2: Créer page À propos
**Impact**: +1 point SEO

#### Fichier: `src/pages/a-propos.astro`
**Contenu**: 1200-1500 mots

#### Sections:
- H2: Notre histoire
- H2: Nos valeurs
- H2: Notre équipe
- H2: Nos certifications
- H2: Nos véhicules
- H2: Nos engagements

### Action 5.3: Créer guide transport Alpes-de-Haute-Provence
**Impact**: +2 points SEO

#### Fichier: `src/pages/guide-transport-alpes-haute-provence.astro`
**Contenu**: 2000-2500 mots

#### Sections:
- H2: Se déplacer dans le département 04
- H2: Les principales destinations
- H2: Conseils de voyage
- H2: Événements et périodes de forte affluence
- H2: Comparatif modes de transport
- H2: Tarifs moyens

---

## PHASE 6: OPTIMISATION LONGUE TRAÎNE (Optionnel)
### Impact SEO: +5 points | Priorité: BONUS

### Action 6.1: Cibler mots-clés longue traîne
**Impact**: +3 points SEO

#### Liste de 20 mots-clés longue traîne:
1. taxi digne les bains pas cher
2. réserver taxi digne en ligne
3. taxi digne aéroport marseille prix
4. taxi conventionné digne les bains
5. taxi digne manosque tarif
6. taxi de nuit digne
7. chauffeur privé digne
8. taxi digne gare sncf horaires
9. taxi urgence digne 24h
10. taxi digne sisteron prix
11. navette aéroport digne marseille
12. transport médical digne les bains
13. taxi professionnel entreprise digne
14. taxi digne barcelonnette station ski
15. vtc digne les bains
16. meilleur taxi digne avis
17. taxi digne nice côte azur
18. réservation taxi digne téléphone
19. taxi 7 places digne
20. taxi digne forcalquier horaires

#### Actions:
- Intégrer naturellement dans contenus existants
- Créer sections dédiées pour certains
- Optimiser meta descriptions

### Action 6.2: Créer contenus ciblés longue traîne
**Impact**: +2 points SEO

#### Idées de contenus:
- Article: "Comment choisir son taxi à Digne"
- Article: "Tarifs taxi Digne: guide complet 2025"
- Article: "Transfert aéroport depuis Digne: tout savoir"
- Page: "Taxi 7 places Digne"
- Page: "Taxi conventionné Digne"

---

## COMPOSANTS RÉUTILISABLES À CRÉER

### Composant 1: RelatedPages.astro
**Utilité**: Maillage interne automatisé
```typescript
interface Props {
  pages: {
    title: string;
    url: string;
    description: string;
  }[];
}
```

### Composant 2: FAQSection.astro
**Utilité**: FAQ avec schema.org
```typescript
interface Props {
  questions: {
    question: string;
    answer: string;
  }[];
  addSchema?: boolean;
}
```

### Composant 3: Breadcrumbs.astro
**Utilité**: Navigation et SEO
```typescript
interface Props {
  items: {
    label: string;
    url?: string;
  }[];
}
```

### Composant 4: LocalBusinessCard.astro
**Utilité**: Infos entreprise avec schema
```typescript
interface Props {
  name: string;
  address: string;
  phone: string;
  city: string;
  compact?: boolean;
}
```

---

## CHECKLIST DE VALIDATION

### Avant de passer à la phase suivante:

#### Phase 1:
- [ ] 5 pages villes créées et accessibles
- [ ] Contenu unique 1300-1400 mots par page
- [ ] Images appropriées pour chaque ville
- [ ] Maillage interne entre toutes les villes
- [ ] Meta tags uniques pour chaque page
- [ ] Build réussi sans erreurs
- [ ] Test liens en local
- [ ] Commit et push

#### Phase 2:
- [ ] Homepage: 2000 mots atteints
- [ ] Tarifs: 1800 mots atteints
- [ ] Contact: 1300 mots atteints
- [ ] Villes index: 1800 mots atteints
- [ ] Contenu unique et de qualité
- [ ] Pas de duplicate content
- [ ] Build réussi
- [ ] Commit et push

#### Phase 3:
- [ ] 3-5 liens contextuels par page
- [ ] Composant RelatedPages créé
- [ ] Composant Breadcrumbs créé
- [ ] Breadcrumbs sur toutes pages
- [ ] Pages connexes en bas de pages
- [ ] Ancres variées et naturelles
- [ ] Build réussi
- [ ] Commit et push

#### Phase 4:
- [ ] FAQPage schema sur 3+ pages
- [ ] Review schema sur témoignages
- [ ] Sitemap.xml généré
- [ ] Robots.txt optimisé
- [ ] Validation schema avec Google Rich Results Test
- [ ] Build réussi
- [ ] Commit et push

#### Phase 5:
- [ ] Page FAQ complète créée (2500+ mots)
- [ ] Page À propos créée (1500+ mots)
- [ ] Guide transport créé (2000+ mots)
- [ ] Maillage vers nouvelles pages
- [ ] Images appropriées
- [ ] Build réussi
- [ ] Commit et push

---

## MÉTRIQUES DE SUCCÈS

### Indicateurs à suivre:

#### SEO:
- Score SEO: 70 → 95/100
- Position moyenne mots-clés: 4 → 1-2
- Trafic organique: +80-100%
- Pages indexées: 6 → 11+
- Backlinks internes: 30 → 100+

#### Conversions:
- Taux de conversion: +45-60%
- Demandes de devis: +50%
- Appels téléphoniques: +40%
- Formulaires remplis: +60%

#### Engagement:
- Temps sur site: +40%
- Taux de rebond: -25%
- Pages par session: +50%
- Retours visiteurs: +30%

---

## OUTILS ET RESSOURCES

### Validation SEO:
- Google Search Console
- Google Rich Results Test
- Lighthouse (intégré Chrome)
- PageSpeed Insights
- GTmetrix

### Suivi:
- Google Analytics 4
- Google Search Console
- Position tracking (SE Ranking, Semrush, etc.)

### Vérification:
- W3C Validator (HTML)
- Schema.org Validator
- Broken Link Checker
- Sitemap Validator

---

## TIMELINE RÉSUMÉ

| Semaine | Phase | Actions principales | Impact |
|---------|-------|-------------------|--------|
| Semaine 1 | Phases 1-2 | Pages villes + Enrichissement | +20 pts |
| Semaine 2 | Phases 3-4 | Maillage + SEO avancé | +15 pts |
| Semaine 3 | Phase 5 | Contenu premium | +5 pts |

**Total impact**: +40 points SEO (70 → 95+/100)

---

## PROCHAINE ÉTAPE

**ACTION IMMÉDIATE**: Commencer Phase 1, Action 1.1
→ Créer les 5 pages villes manquantes en utilisant le template de digne-les-bains.astro

**Ordre de priorité**:
1. Manosque (ville la plus importante)
2. Sisteron (sous-préfecture stratégique)
3. Forcalquier (tourisme)
4. Château-Arnoux (proximité Digne)
5. Barcelonnette (spécificité montagne)

---

**Plan créé le**: 2025-11-18
**Prêt à être exécuté**: OUI ✓
