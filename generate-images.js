/**
 * Script de génération d'images avec l'API Freepik Seedream 4
 * Génère toutes les images nécessaires pour taxi-digne.fr
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charger la clé API depuis .env
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ Fichier .env non trouvé. Créez-le avec votre FREEPIK_API_KEY');
  console.log('   Exemple: FREEPIK_API_KEY=votre_cle_api_ici');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/FREEPIK_API_KEY=(.+)/)?.[1]?.trim();

if (!API_KEY) {
  console.error('❌ Clé API non trouvée dans .env');
  console.log('   Ajoutez: FREEPIK_API_KEY=votre_cle_api_ici');
  process.exit(1);
}

const API_ENDPOINT = 'https://api.freepik.com/v1/ai/text-to-image/seedream-v4';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Créer les dossiers de sortie s'ils n'existent pas
const subDirs = ['hero', 'services', 'fleet', 'about', 'features', 'villes'];
subDirs.forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

/**
 * Définition de toutes les images à générer pour taxi-digne.fr
 */
const imagesToGenerate = [
  // Hero Section (4 images)
  {
    filename: 'hero/hero-taxi-digne-principal.jpg',
    prompt: 'Professional taxi service in Digne-les-Bains France, modern taxi car on beautiful French street, Alpes-de-Haute-Provence mountains in background, professional photography, realistic, 8k quality, bright daylight',
    aspect_ratio: 'widescreen_16_9'
  },
  {
    filename: 'hero/hero-urgence-24h.jpg',
    prompt: 'Taxi driver working at night, professional night service, city lights, urgent taxi service concept, dedicated driver, professional photography style, realistic',
    aspect_ratio: 'widescreen_16_9'
  },
  {
    filename: 'hero/hero-reservation-rapide.jpg',
    prompt: 'Business person booking taxi on smartphone app, modern technology, easy online reservation concept, professional setting, clean photography, realistic',
    aspect_ratio: 'widescreen_16_9'
  },
  {
    filename: 'hero/hero-transfert-aeroport.jpg',
    prompt: 'Elegant taxi car at airport terminal, airport transfer service, luggage loading, professional driver helping passenger, travel photography, modern airport, realistic',
    aspect_ratio: 'widescreen_16_9'
  },

  // Services (8 images)
  {
    filename: 'services/service-transfert-aeroport.jpg',
    prompt: 'Premium taxi at modern airport departure terminal, professional airport transfer service, businessman with luggage, bright clean environment, service photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-transfert-gare.jpg',
    prompt: 'Taxi waiting at French train station SNCF, railway station transfer, professional driver, passengers with luggage, realistic travel photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-taxi-longue-distance.jpg',
    prompt: 'Comfortable taxi on French highway scenic route, long distance travel, beautiful Provence landscape, professional journey, travel photography style',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-transport-medical.jpg',
    prompt: 'Professional taxi driver helping elderly person enter vehicle, medical transport service, caring assistance, hospital in background, compassionate service photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-courses-locales.jpg',
    prompt: 'Taxi on charming French town street, local taxi service, Provencal architecture, daily errands concept, lifestyle photography, bright daylight',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-taxi-professionnel.jpg',
    prompt: 'Business executive in taxi working on laptop, professional corporate taxi service, premium interior, business travel concept, professional photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-taxi-nuit.jpg',
    prompt: 'Taxi with headlights on at night in French city, night service available, safe evening transport, city lights reflection, night photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-evenements.jpg',
    prompt: 'Elegant taxi at special event venue, wedding or celebration transport, festive atmosphere, professional event service, elegant photography',
    aspect_ratio: 'classic_4_3'
  },

  // Flotte / Véhicules (3 images)
  {
    filename: 'fleet/vehicule-berline-confort.jpg',
    prompt: 'Modern comfortable sedan taxi car, clean black or dark blue vehicle, professional appearance, showroom lighting, automotive photography, realistic detail',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'fleet/vehicule-monospace-famille.jpg',
    prompt: 'Spacious minivan taxi for families, MPV vehicle, modern and clean, large capacity, professional fleet photography, realistic',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'fleet/vehicule-van-groupe.jpg',
    prompt: 'Large passenger van for group transport, 8-seater vehicle, professional taxi van, modern and spacious, fleet photography style, clean and realistic',
    aspect_ratio: 'classic_4_3'
  },

  // Confiance / À propos (4 images)
  {
    filename: 'about/equipe-chauffeurs-professionnels.jpg',
    prompt: 'Team of 3 professional taxi drivers in uniform, friendly and professional appearance, standing together, diverse team, outdoor setting with vehicles, team photography, realistic',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'about/certifications-licences.jpg',
    prompt: 'Professional taxi licenses and certifications documents, official badges, quality seals, French taxi permit, professional credentials display, clean product photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'about/satisfaction-client.jpg',
    prompt: 'Happy customer smiling after successful taxi ride, giving thumbs up, satisfied passenger, positive experience, lifestyle photography, bright and positive',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'about/zone-intervention-alpes.jpg',
    prompt: 'Aerial view of Digne-les-Bains and Alpes-de-Haute-Provence region, beautiful mountain landscape, French Alps, scenic Provence region, drone photography, wide landscape',
    aspect_ratio: 'classic_4_3'
  },

  // Features / Avantages (4 images)
  {
    filename: 'features/disponible-24-7.jpg',
    prompt: '24/7 service concept, clock showing different times, day and night service, always available concept, professional service photography, clean design',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'features/tarifs-transparents.jpg',
    prompt: 'Clear pricing display on tablet or phone screen, transparent rates, price calculator, honest pricing concept, professional business photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'features/chauffeurs-experimentes.jpg',
    prompt: 'Professional experienced taxi driver at wheel, confident driving, years of experience, skilled professional, inside taxi view, professional photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'features/paiement-securise.jpg',
    prompt: 'Secure payment terminal in taxi, contactless payment, credit card reader, modern payment technology, secure transaction, close-up photography',
    aspect_ratio: 'classic_4_3'
  },

  // Villes (2 images)
  {
    filename: 'villes/digne-les-bains-ville.jpg',
    prompt: 'Beautiful view of Digne-les-Bains city center, French Provencal architecture, historic buildings, mountain backdrop, tourism photography, sunny day, realistic',
    aspect_ratio: 'widescreen_16_9'
  },
  {
    filename: 'villes/alpes-haute-provence-paysage.jpg',
    prompt: 'Stunning landscape of Alpes-de-Haute-Provence, lavender fields, mountains, typical Provence scenery, beautiful nature, landscape photography, vibrant colors',
    aspect_ratio: 'widescreen_16_9'
  }
];

/**
 * Fait une requête HTTPS avec promesse
 */
function httpsRequest(url, options, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ statusCode: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

/**
 * Télécharge une image depuis une URL
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Crée une tâche de génération d'image
 */
async function createImageTask(prompt, aspectRatio = 'classic_4_3') {
  const urlObj = new URL(API_ENDPOINT);
  const options = {
    hostname: urlObj.hostname,
    path: urlObj.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-freepik-api-key': API_KEY
    }
  };

  const requestBody = {
    prompt,
    aspect_ratio: aspectRatio,
    output_format: 'jpeg',
    safety_tolerance: 2
  };

  const response = await httpsRequest(API_ENDPOINT, options, requestBody);

  if (response.statusCode !== 200 && response.statusCode !== 201) {
    throw new Error(`API Error: ${response.statusCode} - ${JSON.stringify(response.body)}`);
  }

  return response.body;
}

/**
 * Vérifie le statut d'une tâche
 */
async function getTaskStatus(taskId) {
  const url = `${API_ENDPOINT}/${taskId}`;
  const urlObj = new URL(url);
  const options = {
    hostname: urlObj.hostname,
    path: urlObj.pathname,
    method: 'GET',
    headers: {
      'x-freepik-api-key': API_KEY
    }
  };

  const response = await httpsRequest(url, options);

  if (response.statusCode !== 200) {
    throw new Error(`API Error: ${response.statusCode}`);
  }

  return response.body.data || response.body;
}

/**
 * Attend qu'une tâche soit terminée
 */
async function waitForTaskCompletion(taskId, maxAttempts = 60) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Attendre 2 secondes

    const status = await getTaskStatus(taskId);
    console.log(`   Status: ${status.status || status.state}`);

    if (status.status === 'COMPLETED' || status.state === 'COMPLETED') {
      return status;
    }

    if (status.status === 'FAILED' || status.state === 'FAILED') {
      throw new Error('Task failed');
    }
  }

  throw new Error('Timeout waiting for task completion');
}

/**
 * Génère une image
 */
async function generateImage(imageConfig, index, total) {
  console.log(`\n[${index}/${total}] Generation: ${imageConfig.filename}`);
  console.log(`  Prompt: ${imageConfig.prompt.substring(0, 80)}...`);

  try {
    // Créer la tâche
    const response = await createImageTask(imageConfig.prompt, imageConfig.aspect_ratio);
    const task = response.data || response;
    const taskId = task.task_id || task.id;

    console.log(`   Task ID: ${taskId}`);

    // Attendre la completion
    const completedTask = await waitForTaskCompletion(taskId);

    // Récupérer l'URL de l'image
    const imageUrl = completedTask.generated?.[0] ||
                     completedTask.image?.url ||
                     completedTask.result?.url ||
                     completedTask.output_url;

    if (!imageUrl) {
      throw new Error('No image URL in response');
    }

    console.log(`   Téléchargement...`);

    // Télécharger l'image
    const filepath = path.join(OUTPUT_DIR, imageConfig.filename);
    await downloadImage(imageUrl, filepath);

    console.log(`   ✓ Sauvegardée: ${imageConfig.filename}`);

  } catch (error) {
    console.error(`   ✗ Erreur: ${error.message}`);
    throw error;
  }
}

/**
 * Fonction principale
 */
async function main() {
  console.log('='.repeat(70));
  console.log('GENERATION DES IMAGES - taxi-digne.fr');
  console.log('='.repeat(70));
  console.log(`Dossier de sortie: ${OUTPUT_DIR}`);
  console.log(`Nombre d'images à générer: ${imagesToGenerate.length}\n`);

  const results = {
    success: 0,
    failed: 0,
    errors: []
  };

  for (let i = 0; i < imagesToGenerate.length; i++) {
    try {
      await generateImage(imagesToGenerate[i], i + 1, imagesToGenerate.length);
      results.success++;
    } catch (error) {
      results.failed++;
      results.errors.push({
        filename: imagesToGenerate[i].filename,
        error: error.message
      });
    }

    // Pause entre les requêtes pour éviter le rate limiting
    if (i < imagesToGenerate.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('RESUME DE LA GENERATION');
  console.log('='.repeat(70));
  console.log(`✓ Réussies: ${results.success}`);
  console.log(`✗ Échouées: ${results.failed}`);

  if (results.errors.length > 0) {
    console.log('\n✗ Erreurs:');
    results.errors.forEach(err => {
      console.log(`   - ${err.filename}: ${err.error}`);
    });
  }

  console.log('\n✓ Génération terminée!');
  console.log('\nProchaine étape: Exécutez "node optimize-images.js" pour convertir en WebP');
}

// Lancer le script
main().catch(console.error);
