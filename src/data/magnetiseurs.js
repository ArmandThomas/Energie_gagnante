// Données des magnétiseurs de l'association L'Équilibre Gagnant.
// PLACEHOLDERS — remplacez les valeurs par les vraies infos.
// `photo`   : chemin vers la photo du magnétiseur (ex: importée depuis assets).
//             Laissé vide => les initiales servent de fallback.
// `address` + `coords` : servent à la future fonctionnalité de distance
//             (voir ameliorations.md).

export const magnetiseurs = [
  {
    id: 'philippe-thomas',
    name: 'Philippe Thomas',
    initials: 'PT',
    photo: '',
    city: 'Bullion',
    region: 'Yvelines',
    specialty: 'Magnétiseur-Énergéticien',
    bio: 'Magnétiseur spécialisé dans la récupération post-blessure et la gestion du stress de compétition.',
    siteUrl: 'https://www.qi-equilibre.fr/',
    address: 'Bullion, Yvelines (78)',
    coords: { lat: 48.6167, lng: 1.9333 },
  },
  {
    id: 'lyon',
    name: '[Prénom Nom]',
    initials: 'M2',
    photo: '',
    city: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    specialty: 'Énergie & endurance',
    bio: 'Accompagnement énergétique des sportifs d\'endurance pour optimiser performance et régénération.',
    siteUrl: 'https://example.com',
    address: '2 cours de l\'Exemple, 69001 Lyon',
    coords: { lat: 45.7640, lng: 4.8357 },
  },
  {
    id: 'marseille',
    name: '[Prénom Nom]',
    initials: 'M3',
    photo: '',
    city: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    specialty: 'Équilibre émotionnel & focus',
    bio: 'Spécialiste de l\'harmonisation émotionnelle et de la concentration dans les moments décisifs.',
    siteUrl: 'https://example.com',
    address: '3 avenue de l\'Exemple, 13001 Marseille',
    coords: { lat: 43.2965, lng: 5.3698 },
  },
]
