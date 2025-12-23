# Guide d'ajout d'une note sous les horaires d'ouverture

Ce guide explique comment ajouter un petit texte personnalisé qui apparaîtra sous "Ouvre à 19:00" dans l'en-tête du site Le Papio.

## Où apparaît cette note ?

La note personnalisée s'affiche :
- Dans l'en-tête du site, en haut à droite
- Uniquement quand le restaurant est fermé
- Juste en dessous du texte "Ouvre à 19:00" (ou l'heure d'ouverture suivante)
- En couleur grise plus claire que l'heure d'ouverture

## Comment ajouter ou modifier la note

### Étape 1 : Accéder au CMS
1. Connectez-vous à l'interface CMS : `https://votre-site.com/admin/`
2. Cliquez sur "⚙️ Paramètres" dans le menu de gauche
3. Sélectionnez "Informations générales"

### Étape 2 : Ajouter votre texte
1. Faites défiler jusqu'aux champs "Note sous l'heure d'ouverture"
2. Vous trouverez deux champs :
   - **Note sous l'heure d'ouverture (FR)** : Pour le texte en français
   - **Note sous l'heure d'ouverture (EN)** : Pour le texte en anglais

3. Entrez votre texte dans les champs correspondants
   - Ces champs sont optionnels
   - Si vous laissez vide, aucune note ne s'affichera
   - Le texte doit être court (environ 30-50 caractères maximum)

### Étape 3 : Enregistrer
1. Cliquez sur "Enregistrer" en haut à droite
2. Attendez quelques minutes que les modifications soient prises en compte
3. Rafraîchissez la page du site pour voir vos modifications

## Exemples d'utilisation

### Exemple 1 : Réservations recommandées
```
FR: Sur réservation de préférence
EN: Reservation recommended
```

### Exemple 2 : Information spéciale
```
FR: Pensez à réserver votre table
EN: Remember to book your table
```

### Exemple 3 : Service limité
```
FR: Service en salle uniquement
EN: Dine-in only
```

### Exemple 4 : Vide (pas de note)
```
FR: (laisser vide)
EN: (laisser vide)
```

## Points importants

1. **Texte court** : La note doit être courte et concise pour s'afficher correctement sur mobile
2. **Bilingue** : Remplissez les deux champs (FR et EN) pour une expérience complète
3. **Optionnel** : Si vous ne voulez pas de note, laissez simplement les champs vides
4. **Affichage conditionnel** : La note ne s'affiche que quand le restaurant est fermé
5. **Mise à jour automatique** : Le texte change automatiquement selon la langue sélectionnée par le visiteur

## Pour supprimer la note

Pour supprimer la note et ne plus rien afficher :
1. Allez dans CMS > Paramètres > Informations générales
2. Videz complètement les deux champs (FR et EN)
3. Enregistrez

## En cas de problème

Si la note ne s'affiche pas :
1. Vérifiez que vous avez bien enregistré vos modifications
2. Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)
3. Attendez 2-3 minutes pour que les modifications se propagent
4. Vérifiez que le restaurant est bien fermé (la note n'apparaît pas quand le restaurant est ouvert)
5. Si le problème persiste, contactez votre développeur
