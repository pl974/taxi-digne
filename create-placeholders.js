/**
 * Script pour créer des images placeholder SVG
 * Permet de tester le site sans générer les vraies images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Créer les dossiers
const subDirs = ['hero', 'services', 'fleet', 'about', 'features', 'villes'];
subDirs.forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

/**
 * Génère un SVG placeholder
 */
function generatePlaceholderSVG(width, height, text, color = '#0066cc') {
  const lines = text.split('\n');
  const fontSize = Math.min(width, height) / 15;
  const lineHeight = fontSize * 1.2;
  const startY = (height - (lines.length * lineHeight)) / 2 + fontSize;

  const textElements = lines.map((line, index) => {
    const y = startY + (index * lineHeight);
    return `<text x="50%" y="${y}" text-anchor="middle" fill="white" font-size="${fontSize}" font-family="Arial, sans-serif">${line}</text>`;
  }).join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <rect width="100%" height="100%" fill="url(#grad)" opacity="0.3"/>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0.1" />
    </linearGradient>
  </defs>
  ${textElements}
</svg>`;
}

/**
 * Liste des placeholders à créer
 */
const placeholders = [
  // Hero images (1920x1080 - 16:9)
  { file: 'hero/hero-taxi-digne-principal.svg', width: 1920, height: 1080, text: 'Taxi Digne\nImage Hero Principale', color: '#0066cc' },
  { file: 'hero/hero-urgence-24h.svg', width: 1920, height: 1080, text: 'Urgence 24h/24\nService Disponible', color: '#004d99' },
  { file: 'hero/hero-reservation-rapide.svg', width: 1920, height: 1080, text: 'Réservation Rapide\nEn Ligne 24/7', color: '#0066cc' },
  { file: 'hero/hero-transfert-aeroport.svg', width: 1920, height: 1080, text: 'Transfert Aéroport\nService Premium', color: '#004d99' },

  // Services (800x600 - 4:3)
  { file: 'services/service-transfert-aeroport.svg', width: 800, height: 600, text: 'Transfert\nAéroport', color: '#0066cc' },
  { file: 'services/service-transfert-gare.svg', width: 800, height: 600, text: 'Transfert\nGare SNCF', color: '#0066cc' },
  { file: 'services/service-taxi-longue-distance.svg', width: 800, height: 600, text: 'Longue\nDistance', color: '#0066cc' },
  { file: 'services/service-transport-medical.svg', width: 800, height: 600, text: 'Transport\nMédical', color: '#28a745' },
  { file: 'services/service-courses-locales.svg', width: 800, height: 600, text: 'Courses\nLocales', color: '#0066cc' },
  { file: 'services/service-taxi-professionnel.svg', width: 800, height: 600, text: 'Taxi\nProfessionnel', color: '#0066cc' },

  // Fleet (800x600 - 4:3)
  { file: 'fleet/vehicule-berline-confort.svg', width: 800, height: 600, text: 'Berline\nConfort', color: '#1a1a1a' },
  { file: 'fleet/vehicule-monospace-famille.svg', width: 800, height: 600, text: 'Monospace\nFamilial', color: '#1a1a1a' },
  { file: 'fleet/vehicule-van-groupe.svg', width: 800, height: 600, text: 'Van\nGroupe', color: '#1a1a1a' },

  // About (800x600 - 4:3)
  { file: 'about/equipe-chauffeurs-professionnels.svg', width: 800, height: 600, text: 'Équipe de\nChauffeurs Pros', color: '#0066cc' },
  { file: 'about/certifications-licences.svg', width: 800, height: 600, text: 'Certifications\nLicences', color: '#ffd700' },
  { file: 'about/satisfaction-client.svg', width: 800, height: 600, text: 'Clients\nSatisfaits', color: '#28a745' },
  { file: 'about/zone-intervention-alpes.svg', width: 800, height: 600, text: 'Zone\nIntervention', color: '#0066cc' },

  // Features (800x600 - 4:3)
  { file: 'features/disponible-24-7.svg', width: 800, height: 600, text: 'Disponible\n24h/24 7j/7', color: '#0066cc' },
  { file: 'features/tarifs-transparents.svg', width: 800, height: 600, text: 'Tarifs\nTransparents', color: '#0066cc' },
  { file: 'features/chauffeurs-experimentes.svg', width: 800, height: 600, text: 'Chauffeurs\nExpérimentés', color: '#0066cc' },
  { file: 'features/paiement-securise.svg', width: 800, height: 600, text: 'Paiement\nSécurisé', color: '#28a745' },

  // Villes (1920x1080 - 16:9)
  { file: 'villes/digne-les-bains-ville.svg', width: 1920, height: 1080, text: 'Digne-les-Bains\nAlpes-de-Haute-Provence', color: '#0066cc' },
  { file: 'villes/alpes-haute-provence-paysage.svg', width: 1920, height: 1080, text: 'Alpes-de-Haute-Provence\nPaysage', color: '#28a745' }
];

/**
 * Créer tous les placeholders
 */
console.log('='.repeat(70));
console.log('CREATION DES IMAGES PLACEHOLDER - taxi-digne.fr');
console.log('='.repeat(70));
console.log(`Dossier de sortie: ${OUTPUT_DIR}`);
console.log(`Nombre d'images à créer: ${placeholders.length}\n`);

let created = 0;

placeholders.forEach((placeholder, index) => {
  const filepath = path.join(OUTPUT_DIR, placeholder.file);
  const svg = generatePlaceholderSVG(placeholder.width, placeholder.height, placeholder.text, placeholder.color);

  fs.writeFileSync(filepath, svg);
  console.log(`[${index + 1}/${placeholders.length}] ✓ Créé: ${placeholder.file}`);
  created++;
});

console.log('\n' + '='.repeat(70));
console.log('RESUME');
console.log('='.repeat(70));
console.log(`✓ Images placeholder créées : ${created}`);
console.log('');
console.log('Ces images SVG permettent de tester le site.');
console.log('Pour les vraies images, suivez le guide IMAGE-GENERATION-GUIDE.md');
console.log('');
console.log('Prochaine étape: npm run dev');
