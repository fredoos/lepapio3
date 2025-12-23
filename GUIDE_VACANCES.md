# Guide de gestion des vacances

## Accès à la fonctionnalité

1. Allez dans le CMS Netlify (`/admin`)
2. Cliquez sur **⚙️ Paramètres**
3. Sélectionnez **Horaires d'ouverture**
4. Faites défiler jusqu'à la section **Prévision Vacances** (elle est repliée par défaut)

## Configuration

### Champs disponibles

1. **Activer les vacances** (curseur oui/non)
   - Active ou désactive le mode vacances
   - Si désactivé, les horaires normaux s'affichent

2. **Date de début**
   - Date et heure de début de fermeture
   - Sélecteur de date et heure intégré

3. **Date de fin**
   - Date et heure de réouverture
   - Sélecteur de date et heure intégré

4. **Message personnalisé (FR)** (optionnel)
   - Message complémentaire en français
   - Exemple : "Bonnes fêtes !"

5. **Message personnalisé (EN)** (optionnel)
   - Message complémentaire en anglais
   - Exemple : "Happy holidays!"

6. **Afficher le panneau visuel** (curseur oui/non)
   - Active/désactive l'affichage du panneau image sur la page d'accueil
   - Si désactivé, seul le message texte s'affiche

7. **Image du panneau** (optionnel)
   - Image à afficher sur la page d'accueil pendant les vacances
   - Par défaut : `/images/uploads/fermeture.gif`

## Comportement automatique

### Quand le mode vacances est activé ET dans la période :

#### Sur la page d'accueil (Hero) :
- **Panneau de fermeture** affiché (si "Afficher le panneau visuel" est activé)
- Position : en haut à gauche du logo
- Image personnalisable dans la même section
- **Carte d'horaires transformée automatiquement** :
  - 🔴 Bordure rouge épaisse pour attirer l'attention
  - ✍️ Texte "FERMÉ POUR LES VACANCES" en rouge (FR/EN)
  - 📅 Dates de début et fin affichées automatiquement
  - 💬 Message personnalisé affiché s'il est défini
  - ✨ Le contenu change automatiquement pour correspondre à la grande section d'horaires

#### Dans le header (en haut) :
- Status : 🔴 Fermé
- Message : "Fermé pour les vacances"

#### Dans la section Contact (horaires) :
- **Les horaires normaux sont masqués**
- Affichage d'un panneau rouge avec :
  ```
  FERMÉ POUR LES VACANCES

  Du [date début] à [heure début]
  Au [date fin] à [heure fin]

  [Message personnalisé si défini]
  ```

### En dehors de la période :
- Les horaires normaux s'affichent automatiquement
- Le panneau disparaît automatiquement
- Aucune intervention nécessaire

## Exemple d'utilisation

### Fermeture pour les fêtes de fin d'année :

1. **Activer les vacances** : ✅ Oui
2. **Date de début** : 24/12/2024 à 20:00
3. **Date de fin** : 05/01/2025 à 12:00
4. **Message (FR)** : Bonnes fêtes de fin d'année !
5. **Message (EN)** : Happy holidays!

### Résultat :
Le site affichera automatiquement le message de fermeture du 24 décembre 2024 à 20h00 jusqu'au 5 janvier 2025 à 12h00. Après cette date, les horaires normaux réapparaîtront automatiquement.

## Notes importantes

- ⏰ La vérification est automatique et en temps réel
- 🔄 Aucune intervention manuelle nécessaire après la configuration
- 🌍 Le message s'adapte automatiquement à la langue sélectionnée (FR/EN)
- 📱 Le design est responsive (adapté mobile et desktop)
- ✅ Le message personnalisé est facultatif

## Cas particuliers

### Mode vacances activé sans dates
Si vous activez le mode vacances sans définir de dates, le message s'affichera immédiatement et indéfiniment jusqu'à désactivation manuelle.

### Dates invalides
Si les dates ne sont pas définies ou invalides, le système considère le mode comme "toujours actif" si le curseur est activé.

## Configuration du panneau visuel

Le panneau de fermeture (image) est maintenant configuré **dans la même section "Prévision Vacances"** :

1. Dans **Paramètres → Horaires d'ouverture → Prévision Vacances**
2. Activez "Afficher le panneau visuel" ✓
3. Choisissez l'image du panneau (par défaut : `/images/uploads/fermeture.gif`)

**Avantage** : Tout est centralisé ! Dates, messages ET panneau au même endroit.

## Désactivation

Pour revenir aux horaires normaux :
1. Retournez dans **Paramètres → Horaires d'ouverture → Prévision Vacances**
2. Désactivez le curseur **Activer les vacances**
3. Enregistrez

Les horaires normaux réapparaîtront immédiatement, et le panneau disparaîtra automatiquement.
