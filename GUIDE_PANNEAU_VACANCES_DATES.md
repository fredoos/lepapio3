# Guide de programmation automatique du panneau de vacances

Ce guide explique comment programmer l'affichage et la disparition automatique du panneau de vacances selon des dates et heures précises.

## Fonctionnalité

Le panneau de vacances peut maintenant :
- S'afficher automatiquement à une date/heure de début
- Se cacher automatiquement à une date/heure de fin
- Être visible en permanence si aucune date n'est spécifiée

## Configuration dans le CMS

### Étape 1 : Accéder aux paramètres
1. Connectez-vous au CMS : `https://votre-site.com/admin/`
2. Cliquez sur "⚙️ Paramètres" dans le menu de gauche
3. Sélectionnez "Informations générales"
4. Trouvez la section "Panneau de vacances/fermeture"

### Étape 2 : Configurer le panneau

Vous trouverez 4 options :

#### 1. Afficher le panneau (obligatoire)
- Activez cette option pour que le système de dates fonctionne
- Si désactivé, le panneau ne s'affichera jamais, même avec des dates

#### 2. Image du panneau
- Choisissez l'image à afficher
- Par défaut : `/images/uploads/fermeture.gif`

#### 3. Date/heure de début (optionnel)
- Date et heure à partir de laquelle le panneau s'affichera
- Format : `JJ/MM/AA HH:MM`
- Exemple : `24/12/25 18:00`

#### 4. Date/heure de fin (optionnel)
- Date et heure jusqu'à laquelle le panneau sera visible
- Format : `JJ/MM/AA HH:MM`
- Exemple : `07/01/26 11:00`

## Exemples d'utilisation

### Exemple 1 : Vacances de Noël programmées
```
Afficher le panneau: ✓ Activé
Image du panneau: /images/uploads/fermeture.gif
Date/heure de début: 24/12/25 18:00
Date/heure de fin: 07/01/26 11:00
```

**Résultat :**
- Le panneau apparaît automatiquement le 24/12/2025 à 18h00
- Le panneau disparaît automatiquement le 07/01/2026 à 11h00

### Exemple 2 : Affichage permanent
```
Afficher le panneau: ✓ Activé
Image du panneau: /images/uploads/fermeture.gif
Date/heure de début: (vide)
Date/heure de fin: (vide)
```

**Résultat :**
- Le panneau est toujours visible
- Utile pour une fermeture sans date de fin précise

### Exemple 3 : Affichage à partir d'une date
```
Afficher le panneau: ✓ Activé
Image du panneau: /images/uploads/fermeture.gif
Date/heure de début: 24/12/25 18:00
Date/heure de fin: (vide)
```

**Résultat :**
- Le panneau apparaît à partir du 24/12/2025 à 18h00
- Il reste visible indéfiniment
- Vous devrez le désactiver manuellement

### Exemple 4 : Affichage jusqu'à une date
```
Afficher le panneau: ✓ Activé
Image du panneau: /images/uploads/fermeture.gif
Date/heure de début: (vide)
Date/heure de fin: 07/01/26 11:00
```

**Résultat :**
- Le panneau est visible immédiatement
- Il disparaît automatiquement le 07/01/2026 à 11h00

## Format des dates

Le format attendu est le format français :
- **Format** : `JJ/MM/AA HH:MM`
- **JJ** : jour sur 2 chiffres (01 à 31)
- **MM** : mois sur 2 chiffres (01 à 12)
- **AA** : année sur 2 chiffres (25 pour 2025, 26 pour 2026)
- **HH:MM** : heure sur 24h (00:00 à 23:59)

**Exemples valides** :
  - `24/12/25 18:00` (24 décembre 2025 à 18h00)
  - `07/01/26 11:00` (7 janvier 2026 à 11h00)
  - `15/08/25 08:30` (15 août 2025 à 8h30)
  - `01/01/26 00:00` (1er janvier 2026 à minuit)

## Logique d'affichage

Le système vérifie :

1. **Si "Afficher le panneau" est désactivé** → Panneau jamais affiché
2. **Si aucune date n'est spécifiée** → Panneau toujours affiché
3. **Si seulement date de début** → Panneau affiché après cette date
4. **Si seulement date de fin** → Panneau affiché jusqu'à cette date
5. **Si les deux dates** → Panneau affiché entre les deux dates

## Planification pour fermetures régulières

### Vacances d'été 2025
```
Date/heure de début: 10/08/25 20:00
Date/heure de fin: 25/08/25 11:00
```

### Vacances de Noël 2025
```
Date/heure de début: 24/12/25 18:00
Date/heure de fin: 07/01/26 11:00
```

### Jour férié
```
Date/heure de début: 14/07/25 00:00
Date/heure de fin: 15/07/25 00:00
```

## Conseils pratiques

1. **Planifiez à l'avance** : Configurez les dates de vos vacances plusieurs semaines avant
2. **Heure de fin réaliste** : Mettez l'heure de réouverture prévue (ex: 11h00 si vous ouvrez pour le déjeuner)
3. **Vérifiez après configuration** : Utilisez un simulateur de date dans votre navigateur pour tester
4. **Notifications** : Pensez à aussi mettre à jour vos réseaux sociaux et votre répondeur téléphonique

## Vérification

Pour tester si votre configuration fonctionne :

1. **Avant la date de début** : Le panneau ne doit pas être visible
2. **Pendant la période** : Le panneau doit être visible
3. **Après la date de fin** : Le panneau doit disparaître automatiquement

## En cas de problème

### Le panneau ne s'affiche pas à la date prévue

1. Vérifiez que "Afficher le panneau" est bien activé
2. Vérifiez le format de la date de début (JJ/MM/AA HH:MM)
3. Vérifiez que la date de début est dans le futur
4. Videz le cache du navigateur (Ctrl+F5)

### Le panneau ne disparaît pas à la date prévue

1. Vérifiez le format de la date de fin (JJ/MM/AA HH:MM)
2. Vérifiez que la date de fin est après la date de début
3. Videz le cache du navigateur (Ctrl+F5)
4. Attendez quelques minutes pour la mise à jour

### Le panneau s'affiche en permanence

1. Vérifiez que les champs de dates ne sont pas vides si vous voulez une programmation
2. Si les champs sont vides, c'est normal (comportement par défaut)
3. Remplissez au moins une des deux dates pour activer la programmation

## Désactivation manuelle d'urgence

Si vous devez désactiver le panneau immédiatement :

1. Allez dans CMS > Paramètres > Informations générales
2. Désactivez "Afficher le panneau"
3. Enregistrez

Le panneau disparaîtra immédiatement, peu importe les dates configurées.
