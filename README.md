# Taxi Digne - Site Web Professionnel

Site web optimisé SEO et conversion pour le service de taxi à Digne-les-Bains et dans les Alpes-de-Haute-Provence.

## Caractéristiques

### SEO et Performance
- Structure optimisée pour le référencement Google (positions 1 et 0)
- Schema.org markup (LocalBusiness, TaxiService)
- Sitemap XML automatique
- Meta tags optimisés pour chaque page
- Maillage interne stratégique
- Contenu riche en mots-clés pertinents

### UI/UX
- Design moderne et épuré
- CTA au-dessus de la ligne de flottaison
- Formulaire de réservation optimisé conversion
- Navigation intuitive et mobile-friendly
- Accessibilité WCAG
- Images optimisées WebP

### Pages principales
- **Accueil** : Landing page optimisée conversion avec formulaire
- **Services** : Détail de tous les services avec ancres et maillage interne
- **Tarifs** : Grille tarifaire transparente
- **Villes** : Pages dédiées par ville (Digne, Manosque, Sisteron, etc.)
- **Contact** : Formulaire et informations de contact

### Composants réutilisables
- `Header.astro` : Navigation sticky avec menu responsive
- `Footer.astro` : Pied de page avec maillage interne
- `BookingForm.astro` : Formulaire de réservation optimisé
- `CTA.astro` : Call-to-action personnalisable
- `ServiceCard.astro` : Carte de service
- `TestimonialCard.astro` : Témoignage client

### Technologies
- **Astro JS 4.0** : Framework moderne et performant
- **TypeScript** : Typage statique
- **CSS Custom Properties** : Variables CSS pour cohérence visuelle
- **Sitemap intégré** : Génération automatique

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
taxi-digne/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── layouts/         # Layouts principaux
│   ├── pages/          # Pages du site
│   │   ├── villes/     # Pages par ville
│   │   ├── index.astro # Page d'accueil
│   │   ├── services.astro
│   │   ├── tarifs.astro
│   │   └── contact.astro
│   └── styles/         # Styles globaux
├── public/             # Assets statiques
└── astro.config.mjs    # Configuration Astro
```

## Mots-clés ciblés

### Principaux
- taxi digne
- taxi digne-les-bains
- réservation taxi digne
- transport digne
- VTC digne

### Secondaires
- transfert aéroport digne
- taxi gare digne
- taxi 04
- taxi alpes de haute provence
- transport médical digne

### Longue traîne
- taxi digne les bains 24h/24
- réserver taxi digne en ligne
- tarif taxi digne marseille
- taxi conventionné digne

## Optimisations SEO

### Technique
- Temps de chargement < 2s
- Core Web Vitals optimisés
- Mobile-first responsive
- HTML sémantique
- Liens internes stratégiques

### Contenu
- Titres optimisés (une majuscule)
- Contenu riche et informatif
- Balises meta uniques par page
- Rich snippets (étoiles, prix, horaires)
- FAQ schema markup

### Local SEO
- Balises géographiques
- Adresse et coordonnées visibles
- Pages par ville pour cibler les recherches locales
- Google My Business ready

## Performance

- Build optimisé avec compression
- CSS inline pour le critical path
- Images lazy loading (prêt pour WebP)
- Scripts minimaux et optimisés

## À faire après déploiement

1. Remplacer le numéro de téléphone fictif par le vrai
2. Ajouter les vraies images (format WebP recommandé)
3. Configurer Google Analytics
4. Configurer Google Search Console
5. Créer Google My Business
6. Ajouter le vrai email de contact
7. Configurer le formulaire de contact (backend)
8. Tester les performances avec Lighthouse
9. Soumettre le sitemap à Google

## Licence

Tous droits réservés - Taxi Digne
