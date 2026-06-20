# Améliorations à venir

## Affichage des magnétiseurs par distance géographique

### Objectif
Sur la section « Nos magnétiseurs », proposer au visiteur d'afficher les 3
magnétiseurs **triés par proximité** et d'indiquer pour chacun la **distance en km**
par rapport à sa position ou à une adresse saisie.

### Fonctionnement envisagé
1. **Demander la position** du visiteur via l'API navigateur
   `navigator.geolocation.getCurrentPosition()` (avec consentement explicite),
   ou laisser saisir une adresse / un code postal.
2. **Géocoder l'adresse** saisie en coordonnées `(lat, lng)` si l'utilisateur ne
   partage pas sa position (ex. API publique : `api-adresse.data.gouv.fr`, gratuite,
   sans clé, données françaises).
3. **Calculer la distance** entre le visiteur et chaque magnétiseur avec la formule
   de Haversine (distance à vol d'oiseau, suffisante pour un tri par proximité).
4. **Trier et afficher** les cartes par distance croissante, avec un badge
   « à ~X km ».

### Données déjà prêtes
Chaque magnétiseur dans `src/data/magnetiseurs.js` possède déjà :
- `address` : adresse postale (à géocoder ou à afficher) ;
- `coords: { lat, lng }` : coordonnées GPS utilisées pour le calcul de distance.

> ⚠️ Les coordonnées actuelles sont des **placeholders** (centres-villes de Paris,
> Lyon, Marseille). À remplacer par les vraies adresses des cabinets.

### Points d'attention
- **RGPD** : la géolocalisation nécessite un consentement clair ; ne pas stocker
  la position, l'utiliser uniquement côté client pour le tri.
- **Fallback** : si l'utilisateur refuse la géoloc, garder l'ordre par défaut et
  proposer la saisie manuelle d'une adresse.
- **Pas de backend** : tout doit rester côté client (contrainte du projet — landing
  statique une seule page).

### Esquisse technique (Haversine, côté client)
```js
// Distance à vol d'oiseau en km entre deux points GPS
function distanceKm(a, b) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLng = ((b.lng - a.lng) * Math.PI) / 180
  const lat1 = (a.lat * Math.PI) / 180
  const lat2 = (b.lat * Math.PI) / 180
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2
  return Math.round(2 * R * Math.asin(Math.sqrt(h)))
}
```
