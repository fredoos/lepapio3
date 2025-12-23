# Guide de gestion du panneau de vacances/fermeture

Ce guide explique comment afficher ou masquer le panneau de vacances (ou fermeture exceptionnelle) qui apparaît sur la page d'accueil du site Le Papio.

## ⚠️ IMPORTANT : Configuration centralisée

**Toute la configuration des vacances est maintenant au même endroit** :
- **⚙️ Paramètres → Horaires d'ouverture → Prévision Vacances**

Cette section unique permet de configurer :
- Les dates de début et fin
- Les messages personnalisés
- L'affichage du panneau visuel
- L'image du panneau

## Comment programmer les vacances

### Configuration unique (tout au même endroit)

1. Allez dans **⚙️ Paramètres → Horaires d'ouverture**
2. Faites défiler jusqu'à **Prévision Vacances**
3. **Activez "Activer les vacances"** ✓
4. **Définissez les dates :**
   - Date de début (ex: 24 décembre 2024, 20:00)
   - Date de fin (ex: 7 janvier 2025, 12:00)
5. **(Optionnel) Messages personnalisés :**
   - Message (FR) : "Joyeuses fêtes !"
   - Message (EN) : "Happy holidays!"
6. **Panneau visuel :**
   - Activez "Afficher le panneau visuel" ✓
   - Choisissez l'image du panneau
7. **Enregistrez**

## Résultat

Pendant la période de vacances définie :
- ✅ Le panneau s'affiche automatiquement sur la page d'accueil
- ✅ Les horaires sont masqués et remplacés par "FERMÉ POUR LES VACANCES"
- ✅ Le header affiche "🔴 Fermé pour les vacances"

## Options disponibles (toutes dans Prévision Vacances)

### Activer les vacances
- Active/désactive le mode vacances complet (horaires + panneau)

### Dates
- **Date de début** : Quand les vacances commencent
- **Date de fin** : Quand le restaurant rouvre

### Messages personnalisés (optionnel)
- Texte affiché dans la section horaires
- Versions FR et EN disponibles

### Afficher le panneau visuel
- **Case cochée** : Le panneau image s'affiche sur la page d'accueil
- **Case décochée** : Seul le message texte s'affiche (pas d'image)

### Image du panneau
- Image affichée sur la page d'accueil pendant les vacances
- Par défaut : `/images/uploads/fermeture.gif`
- Cliquez pour changer ou télécharger une nouvelle image

## Cas d'usage

### Programmer les vacances complètes (RECOMMANDÉ ✨)

**Tout dans : Horaires d'ouverture → Prévision Vacances**
1. Activer les vacances : ✓
2. Date de début : 24 décembre 2025, 18:00
3. Date de fin : 7 janvier 2026, 11:00
4. Message (FR) : "Joyeuses fêtes !"
5. Message (EN) : "Happy holidays!"
6. Afficher le panneau visuel : ✓
7. Image : `/images/uploads/fermeture.gif`
8. **Enregistrer**

**Résultat** : Tout s'active et se désactive automatiquement !

### Masquer uniquement le panneau (garder le texte)
Si vous voulez seulement le message texte "FERMÉ POUR LES VACANCES" sans l'image :

**Dans Prévision Vacances :**
1. Gardez "Activer les vacances" : ✓
2. Décochez "Afficher le panneau visuel"
3. Enregistrez

### Désactiver complètement les vacances
Pour revenir immédiatement aux horaires normaux :

**Dans Prévision Vacances :**
1. Décochez "Activer les vacances"
2. Enregistrez

### Changer l'image du panneau
**Dans Prévision Vacances :**
1. Cliquez sur "Choisir une image" sous "Image du panneau"
2. Téléchargez une nouvelle image ou sélectionnez-en une existante
3. Enregistrez

## Exemples pratiques

### Vacances de Noël 2025
**Configuration unique (Horaires d'ouverture → Prévision Vacances) :**
```
Activer les vacances: ✓
Date de début: 24 décembre 2025, 18:00
Date de fin: 7 janvier 2026, 11:00
Message (FR): Joyeuses fêtes !
Message (EN): Happy holidays!
Afficher le panneau visuel: ✓
Image du panneau: /images/uploads/fermeture.gif
```
→ Tout actif du 24 décembre 18h au 7 janvier 11h

### Vacances d'été 2025
**Configuration unique (Horaires d'ouverture → Prévision Vacances) :**
```
Activer les vacances: ✓
Date de début: 10 août 2025, 20:00
Date de fin: 25 août 2025, 11:00
Message (FR): Bonnes vacances !
Message (EN): Enjoy the summer!
Afficher le panneau visuel: ✓
```
→ Tout actif du 10 août 20h au 25 août 11h

## Conseils

- ⏰ **Programmez à l'avance** : Configurez vos vacances plusieurs semaines avant pour ne plus y penser
- 🔄 **Automatique** : Le système s'active et se désactive automatiquement aux dates définies
- 🖼️ **Images multiples** : Préparez plusieurs images pour différentes occasions (Noël, été, etc.)
- 📍 **Position** : Le panneau s'affiche en haut à gauche du logo, avec une légère rotation
- ⏱️ **Heure de fin réaliste** : Mettez l'heure à laquelle vous rouvrez (ex: 11h00 pour le déjeuner)
- 🌍 **Bilingue** : N'oubliez pas de remplir les messages FR et EN pour les touristes

## En cas de problème

### Le panneau ne s'affiche pas à la date programmée
**Vérifiez dans Horaires d'ouverture → Prévision Vacances :**
1. "Activer les vacances" est coché ✓
2. "Afficher le panneau visuel" est coché ✓
3. Les dates sont correctes
4. Videz le cache (Ctrl+F5 ou Cmd+Shift+R)

### Le panneau ne disparaît pas à la date programmée
**Dans Prévision Vacances :**
1. Vérifiez la date de fin
2. Vérifiez que la date de fin est après la date de début
3. Videz le cache (Ctrl+F5 ou Cmd+Shift+R)
4. **Si urgent** : Décochez "Activer les vacances"

### Les horaires ne reviennent pas après les vacances
**Dans Prévision Vacances :**
1. Décochez "Activer les vacances"
2. Enregistrez
3. Videz le cache

## Guides connexes

- `GUIDE_VACANCES.md` - Guide complet de la fonctionnalité vacances
- `GUIDE_MODIFICATION_HORAIRES.md` - Modifier les horaires normaux
