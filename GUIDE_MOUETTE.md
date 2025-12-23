# Guide de gestion de l'animation de la mouette

## Accès au menu

1. Connectez-vous au CMS : `https://votre-site.com/admin`
2. Dans la barre latérale, cliquez sur **"Paramètres"**
3. Sélectionnez **"Animation de la mouette"**

## Options disponibles

### Activer/Désactiver la mouette
- **Activer la mouette** : Cochez cette case pour afficher la mouette animée sur le site
- Décochez pour masquer complètement la mouette

### Personnalisation des images

#### Images de vol (animation de défilement)
L'animation de vol se compose de 3 images qui s'enchaînent quand l'utilisateur fait défiler la page :

1. **Image de vol 1 (bas)** : Première position de l'animation
   - Par défaut : `/mouette_vol_bas.gif`

2. **Image de vol 2 (milieu)** : Position intermédiaire
   - Par défaut : `/mouette_vol_milieu.gif`

3. **Image de vol 3 (haut)** : Position haute
   - Par défaut : `/mouette_vol_haut.gif`

#### Image au repos
4. **Image au sol** : Image affichée quand la page ne défile pas
   - Par défaut : `/mouette_sol.gif`

## Comment changer les images

### Option 1 : Télécharger une nouvelle image
1. Cliquez sur le bouton **"Choisir une image différente"**
2. Sélectionnez l'image depuis votre ordinateur
3. L'image sera automatiquement uploadée

### Option 2 : Utiliser une image existante
1. Cliquez sur **"Choisir une image différente"**
2. Dans la médiathèque, sélectionnez une image déjà uploadée
3. Cliquez sur "Choisir"

### Option 3 : Utiliser une URL
1. Cliquez sur **"Remplacer depuis une adresse web"**
2. Collez l'URL de l'image
3. Validez

## Conseils

### Format des images
- **Format recommandé** : GIF animé (pour des animations fluides)
- **Formats acceptés** : PNG, JPG, GIF, WebP
- **Taille recommandée** : Maximum 200Ko par image pour de bonnes performances

### Cohérence de l'animation
Pour une animation fluide :
- Les 3 images de vol doivent avoir la même taille
- Utilisez des images qui se ressemblent pour créer un effet de mouvement naturel
- L'image au sol peut être différente (ex: mouette posée)

### Thèmes saisonniers
Vous pouvez personnaliser la mouette selon les saisons :
- Noël : Mouette avec bonnet de Noël
- Été : Mouette avec lunettes de soleil
- Halloween : Mouette déguisée
- Etc.

## Sauvegarder les modifications

1. Une fois toutes les modifications effectuées, cliquez sur **"Sauvegarder"** en haut à droite
2. Les changements seront visibles immédiatement sur le site
3. Rechargez la page du site (Ctrl+F5) pour voir les modifications

## Restaurer les valeurs par défaut

Pour revenir aux images originales :
1. Cliquez sur **"Supprimer l'image"** pour chaque champ
2. Les valeurs par défaut seront automatiquement rétablies
3. Sauvegardez

## Dépannage

### Les images ne s'affichent pas
- Vérifiez que la case "Activer la mouette" est bien cochée
- Videz le cache du navigateur (Ctrl+F5)
- Vérifiez que les URLs des images sont correctes
- Vérifiez que les images ne sont pas trop lourdes (>500Ko)

### L'animation est saccadée
- Réduisez la taille des images (compression)
- Utilisez des GIF optimisés
- Vérifiez que les 3 images de vol ont des dimensions similaires

### La mouette ne vole pas au défilement
- Testez sur une page avec du contenu à faire défiler
- Vérifiez que JavaScript est activé dans le navigateur
- Rechargez la page avec Ctrl+F5
