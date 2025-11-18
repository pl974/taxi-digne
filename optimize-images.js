/**
 * Script d'optimisation des images pour le SEO
 * Convertit les images JPEG en WebP et réduit leur poids
 * Utilise Sharp pour des performances optimales
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Configuration d'optimisation
const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 80,        // Qualité WebP (80 = excellent compromis qualité/poids)
    effort: 6          // Niveau de compression (0-6, 6 = meilleur)
  },
  resize: {
    width: 1920,       // Largeur max pour les images (Full HD)
    withoutEnlargement: true  // Ne pas agrandir les petites images
  }
};

/**
 * Obtient la taille d'un fichier en KB
 */
function getFileSizeKB(filepath) {
  const stats = fs.statSync(filepath);
  return (stats.size / 1024).toFixed(2);
}

/**
 * Parcourt récursivement un dossier
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Optimise une image JPEG vers WebP
 */
async function optimizeImage(inputPath, outputPath) {
  const inputSize = getFileSizeKB(inputPath);

  await sharp(inputPath)
    .resize(OPTIMIZATION_CONFIG.resize)
    .webp(OPTIMIZATION_CONFIG.webp)
    .toFile(outputPath);

  const outputSize = getFileSizeKB(outputPath);
  const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

  return {
    inputSize,
    outputSize,
    reduction
  };
}

/**
 * Fonction principale
 */
async function main() {
  console.log('='.repeat(70));
  console.log('OPTIMISATION DES IMAGES - taxi-digne.fr');
  console.log('='.repeat(70));
  console.log(`Dossier source : ${INPUT_DIR}`);
  console.log(`Dossier destination : ${OUTPUT_DIR}`);
  console.log(`Configuration :`);
  console.log(`  - Format : WebP (qualité ${OPTIMIZATION_CONFIG.webp.quality})`);
  console.log(`  - Largeur max : ${OPTIMIZATION_CONFIG.resize.width}px`);
  console.log('');

  // Lire tous les fichiers JPEG/JPG dans le dossier et sous-dossiers
  const allFiles = getAllFiles(INPUT_DIR);
  const files = allFiles
    .filter(file => /\.(jpg|jpeg)$/i.test(file))
    .map(file => ({
      absolute: file,
      relative: path.relative(INPUT_DIR, file)
    }));

  if (files.length === 0) {
    console.log('✗ Aucune image JPEG trouvée dans le dossier');
    return;
  }

  console.log(`Images à optimiser: ${files.length}\n`);

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = file.absolute;
    const relativePath = file.relative;
    const outputFilename = relativePath.replace(/\.(jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    console.log(`[${i + 1}/${files.length}] ${relativePath}`);

    try {
      const result = await optimizeImage(inputPath, outputPath);

      console.log(`   ✓ ${result.inputSize} KB → ${result.outputSize} KB (-${result.reduction}%)`);
      console.log(`   Sauvegardé: ${outputFilename}\n`);

      totalInputSize += parseFloat(result.inputSize);
      totalOutputSize += parseFloat(result.outputSize);
      successCount++;

      // Supprimer l'image JPEG originale
      fs.unlinkSync(inputPath);
      console.log(`   ✓ Image JPEG supprimée\n`);

    } catch (error) {
      console.log(`   ✗ Erreur : ${error.message}\n`);
      errorCount++;
    }
  }

  // Résumé
  console.log('='.repeat(70));
  console.log('RESUME DE L\'OPTIMISATION');
  console.log('='.repeat(70));
  console.log(`✓ Images optimisées : ${successCount}`);
  console.log(`✗ Erreurs : ${errorCount}`);
  console.log(`Poids total avant : ${totalInputSize.toFixed(2)} KB`);
  console.log(`Poids total après : ${totalOutputSize.toFixed(2)} KB`);
  console.log(`Gain d'espace : ${(totalInputSize - totalOutputSize).toFixed(2)} KB`);
  console.log(`Réduction : ${((1 - totalOutputSize / totalInputSize) * 100).toFixed(1)}%`);
  console.log('');
  console.log('✓ Optimisation terminée !');
  console.log('');
  console.log('Les images sont prêtes à être utilisées dans votre code.');
  console.log('N\'oubliez pas de mettre à jour les URLs (.jpg → .webp)');
}

// Lancer le script
main().catch(console.error);
