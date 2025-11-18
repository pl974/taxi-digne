# Guide de génération des images

Ce document explique comment générer les images professionnelles pour taxi-digne.fr.

## Prérequis

1. **Clé API Freepik** : Obtenez votre clé sur [https://www.freepik.com/api](https://www.freepik.com/api)
2. **Node.js** : Version 16 ou supérieure
3. **Sharp** : Déjà dans les dépendances

## Configuration

### Étape 1 : Créer le fichier .env

Copiez le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

Ajoutez votre clé API dans `.env` :

```
FREEPIK_API_KEY=votre_cle_api_reelle_ici
```

### Étape 2 : Installer Sharp

```bash
npm install
```

Cela installera Sharp et toutes les dépendances nécessaires.

## Génération des images

### Option 1 : Génération et optimisation automatiques

Commande unique pour tout faire :

```bash
npm run images
```

Cette commande :
1. Génère toutes les images JPEG avec l'API Freepik
2. Convertit automatiquement en WebP optimisé
3. Supprime les JPEG originaux

### Option 2 : Étapes séparées

Si vous préférez contrôler chaque étape :

```bash
# 1. Générer les images JPEG
npm run generate-images

# 2. Attendre que toutes les images soient générées...

# 3. Optimiser en WebP
npm run optimize-images
```

## Images générées

Le script génère **25 images** organisées dans `/public/images/` :

### Hero / Bannières (4 images - 16:9)
- `hero/hero-taxi-digne-principal.webp` - Image principale du site
- `hero/hero-urgence-24h.webp` - Service urgence 24/7
- `hero/hero-reservation-rapide.webp` - Réservation en ligne
- `hero/hero-transfert-aeroport.webp` - Transfert aéroport

### Services (8 images - 4:3)
- `services/service-transfert-aeroport.webp`
- `services/service-transfert-gare.webp`
- `services/service-taxi-longue-distance.webp`
- `services/service-transport-medical.webp`
- `services/service-courses-locales.webp`
- `services/service-taxi-professionnel.webp`
- `services/service-taxi-nuit.webp`
- `services/service-evenements.webp`

### Flotte (3 images - 4:3)
- `fleet/vehicule-berline-confort.webp`
- `fleet/vehicule-monospace-famille.webp`
- `fleet/vehicule-van-groupe.webp`

### À propos / Confiance (4 images - 4:3)
- `about/equipe-chauffeurs-professionnels.webp`
- `about/certifications-licences.webp`
- `about/satisfaction-client.webp`
- `about/zone-intervention-alpes.webp`

### Features / Avantages (4 images - 4:3)
- `features/disponible-24-7.webp`
- `features/tarifs-transparents.webp`
- `features/chauffeurs-experimentes.webp`
- `features/paiement-securise.webp`

### Villes (2 images - 16:9)
- `villes/digne-les-bains-ville.webp`
- `villes/alpes-haute-provence-paysage.webp`

## Durée estimée

- Génération complète : **~50-60 minutes** (2-3 min par image)
- Optimisation WebP : **~2-3 minutes**
- **Total : environ 1 heure**

## Personnalisation

### Modifier les prompts

Éditez `generate-images.js` ligne 45+ pour ajuster les prompts de génération.

### Modifier la qualité WebP

Éditez `optimize-images.js` ligne 15 :

```javascript
webp: {
  quality: 80,  // 60-100 (80 recommandé)
  effort: 6     // 0-6 (6 = meilleur compression)
}
```

## Alternative : Images personnalisées

Si vous préférez utiliser vos propres photos :

1. Placez vos images JPEG dans `/public/images/` selon la structure ci-dessus
2. Lancez seulement l'optimisation :
   ```bash
   npm run optimize-images
   ```

## Résolution des problèmes

### Erreur "Clé API non trouvée"
- Vérifiez que `.env` existe à la racine du projet
- Vérifiez le format : `FREEPIK_API_KEY=votre_cle` (pas d'espaces)

### Erreur "Rate limit exceeded"
- Attendez quelques minutes entre les générations
- L'API Freepik a des limites de requêtes

### Images floues ou de mauvaise qualité
- Augmentez la qualité WebP (max 100)
- Régénérez avec des prompts plus détaillés

### Timeout lors de la génération
- Le script attend 2 minutes par image (timeout)
- Si trop lent, vérifiez votre connexion internet
- Relancez le script, il skippe les images déjà générées

## SEO et alt tags

Toutes les images ont des alt tags optimisés dans le code. Format :

```astro
<img src="/images/hero/hero-taxi-digne.webp" alt="Taxi professionnel à Digne-les-Bains" />
```

Les alt tags sont déjà configurés dans :
- `src/data/siteData.ts` - Données centralisées
- Composants Astro - Utilisation des données

## Performances

Après optimisation WebP :
- Réduction moyenne : **60-70%** du poids original
- Qualité visuelle : Excellente (indiscernable du JPEG)
- Format : WebP (supporté par 95%+ des navigateurs)

## Prochaines étapes

Après génération des images :

1. Vérifiez que toutes les images sont dans `/public/images/`
2. Testez le site : `npm run dev`
3. Vérifiez le build : `npm run build`
4. Commitez les images : `git add public/images/ && git commit -m "Add optimized images"`

## Support

Pour toute question sur l'API Freepik : [Documentation officielle](https://www.freepik.com/api/docs)
