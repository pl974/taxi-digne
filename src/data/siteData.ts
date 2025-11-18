/**
 * Données centralisées du site taxi-digne.fr
 * Permet une maintenance facile et une réutilisation du contenu
 */

// Flotte de véhicules
export const fleetVehicles = [
  {
    name: "Berline confort",
    description: "Véhicule élégant et confortable pour vos déplacements professionnels ou personnels.",
    image: "/images/fleet/vehicule-berline-confort.webp",
    imageAlt: "Berline confort pour taxi à Digne",
    capacity: "1-4 passagers",
    luggage: "2-3 valises",
    features: [
      "Climatisation",
      "Sièges cuir",
      "GPS intégré",
      "Wifi à bord"
    ],
    ideal: "Déplacements professionnels, transferts aéroport, courses locales"
  },
  {
    name: "Monospace familial",
    description: "Espace et confort pour toute la famille avec une grande capacité de bagages.",
    image: "/images/fleet/vehicule-monospace-famille.webp",
    imageAlt: "Monospace familial pour taxi à Digne",
    capacity: "1-6 passagers",
    luggage: "4-6 valises",
    features: [
      "7 places assises",
      "Grand coffre",
      "Climatisation arrière",
      "Sièges modulables"
    ],
    ideal: "Familles, groupes, déménagements légers, longs trajets"
  },
  {
    name: "Van groupe",
    description: "Véhicule spacieux pour les groupes, idéal pour les événements et excursions.",
    image: "/images/fleet/vehicule-van-groupe.webp",
    imageAlt: "Van pour groupe et taxi collectif à Digne",
    capacity: "1-8 passagers",
    luggage: "6-8 valises",
    features: [
      "8 places assises",
      "Espace XXL",
      "Confort premium",
      "Système audio"
    ],
    ideal: "Groupes, événements, mariages, excursions, transferts collectifs"
  }
];

// Étapes du processus de réservation
export const bookingSteps = [
  {
    number: 1,
    title: "Contactez-nous",
    description: "Appelez-nous au 01 23 45 67 89 ou remplissez notre formulaire en ligne 24h/24"
  },
  {
    number: 2,
    title: "Recevez votre devis",
    description: "Obtenez un devis gratuit et précis sous 15 minutes, sans engagement"
  },
  {
    number: 3,
    title: "Confirmez votre course",
    description: "Validez votre réservation et recevez une confirmation par SMS et email"
  },
  {
    number: 4,
    title: "Profitez du trajet",
    description: "Notre chauffeur vous attend à l'heure et vous emmène à destination"
  }
];

// Features/Avantages principaux
export const mainFeatures = [
  {
    title: "Disponible 24h/24 et 7j/7",
    description: "Notre service est accessible jour et nuit, tous les jours de l'année, pour répondre à tous vos besoins de transport.",
    image: "/images/features/disponible-24-7.webp",
    imageAlt: "Service taxi disponible 24h/24 à Digne"
  },
  {
    title: "Tarifs transparents",
    description: "Prix annoncés à l'avance, sans surprise. Devis gratuit et détaillé pour chaque course.",
    image: "/images/features/tarifs-transparents.webp",
    imageAlt: "Tarifs de taxi transparents à Digne"
  },
  {
    title: "Chauffeurs expérimentés",
    description: "Tous nos chauffeurs sont professionnels, courtois et connaissent parfaitement la région.",
    image: "/images/features/chauffeurs-experimentes.webp",
    imageAlt: "Chauffeurs de taxi professionnels à Digne"
  },
  {
    title: "Paiement sécurisé",
    description: "Espèces, carte bancaire, chèque ou facturation entreprise. Tous les moyens de paiement acceptés.",
    image: "/images/features/paiement-securise.webp",
    imageAlt: "Paiement sécurisé pour taxi à Digne"
  }
];

// Badges de confiance
export const trustBadges = [
  {
    label: "Licence Taxi Officielle",
    description: "Agréé préfecture des Alpes-de-Haute-Provence"
  },
  {
    label: "Assurance Tous Risques",
    description: "Protection complète pour votre sécurité"
  },
  {
    label: "Conventionné CPAM",
    description: "Transport médical remboursé"
  },
  {
    label: "Chauffeurs Certifiés",
    description: "Formation professionnelle continue"
  }
];

// Statistiques/Chiffres clés
export const keyStats = [
  {
    number: "15",
    suffix: "+",
    label: "Années d'expérience"
  },
  {
    number: "500",
    suffix: "+",
    label: "Clients satisfaits/mois"
  },
  {
    number: "24",
    suffix: "/7",
    label: "Service disponible"
  },
  {
    number: "100",
    suffix: "%",
    label: "Satisfaction garantie"
  }
];

// Services principaux pour les cartes
export const servicesData = [
  {
    title: "Transfert aéroport",
    description: "Transport vers les aéroports de Marseille, Nice et Toulon. Service porte-à-porte avec suivi de vol.",
    link: "/services#transfert-aeroport",
    price: "90€",
    image: "/images/services/service-transfert-aeroport.webp"
  },
  {
    title: "Transfert gare",
    description: "Navette depuis et vers les gares SNCF de Digne, Manosque et Sisteron. Ponctualité garantie.",
    link: "/services#transfert-gare",
    price: "30€",
    image: "/images/services/service-transfert-gare.webp"
  },
  {
    title: "Taxi longue distance",
    description: "Trajets longue distance vers toute la région PACA et au-delà. Confort assuré.",
    link: "/services#taxi-longue-distance",
    price: "Sur devis",
    image: "/images/services/service-taxi-longue-distance.webp"
  },
  {
    title: "Transport médical",
    description: "Transport conventionné CPAM pour vos rendez-vous médicaux. Véhicule adapté.",
    link: "/services#taxi-medical",
    price: "Remboursé",
    image: "/images/services/service-transport-medical.webp"
  },
  {
    title: "Courses locales",
    description: "Déplacements quotidiens dans Digne et alentours. Service rapide et efficace.",
    link: "/services#courses-locales",
    price: "20€",
    image: "/images/services/service-courses-locales.webp"
  },
  {
    title: "Taxi professionnel",
    description: "Service dédié aux entreprises avec facturation mensuelle. Disponibilité garantie.",
    link: "/services#taxi-professionnel",
    price: "Sur devis",
    image: "/images/services/service-taxi-professionnel.webp"
  },
  {
    title: "Service de nuit",
    description: "Disponible 24h/24 pour vos déplacements nocturnes en toute sécurité. Retours de soirée et urgences.",
    link: "/services",
    price: "À partir de 20€",
    image: "/images/services/service-taxi-nuit.webp"
  },
  {
    title: "Événements et séminaires",
    description: "Transport pour vos événements professionnels ou privés. Mariages, séminaires, soirées d'entreprise.",
    link: "/services",
    price: "Sur devis",
    image: "/images/services/service-evenements.webp"
  }
];

// Témoignages
export const testimonials = [
  {
    name: "Marie Dupont",
    rating: 5,
    comment: "Service impeccable pour mon transfert vers l'aéroport de Marseille. Chauffeur à l'heure, véhicule propre et confortable. Je recommande vivement !",
    city: "Digne-les-Bains",
    date: "2024-01-15"
  },
  {
    name: "Jean Martin",
    rating: 5,
    comment: "J'utilise régulièrement ce service de taxi pour mes déplacements professionnels. Toujours ponctuel, tarifs corrects et chauffeurs très professionnels.",
    city: "Manosque",
    date: "2024-01-10"
  },
  {
    name: "Sophie Bernard",
    rating: 5,
    comment: "Excellent service pour mes rendez-vous médicaux. Le chauffeur est patient et attentionné. Transport conventionné bien géré. Merci beaucoup !",
    city: "Sisteron",
    date: "2024-01-05"
  }
];
