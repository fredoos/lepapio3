# Guide de gestion des logos spéciaux

## À propos des logos spéciaux

La fonctionnalité de logos spéciaux vous permet de remplacer temporairement votre logo principal par un logo de saison ou d'événement (Noël, Pâques, Halloween, Saint-Valentin, etc.).

Le logo s'affiche en haut de la page d'accueil, à côté du texte "Le" dans le titre.

## Accéder à la configuration des logos

1. Allez sur votre interface d'administration : `https://votre-site.com/admin`
2. Connectez-vous avec vos identifiants
3. Dans le menu latéral, cliquez sur **"⚙️ Paramètres"**
4. Cliquez sur **"Informations générales"**
5. Descendez jusqu'à la section **"Logo spécial"** (cliquez pour déplier si nécessaire)

## Configuration

La section "Logo spécial" contient deux paramètres :

### 1. **Activer un logo spécial** (Case à cocher)
- Cochez cette case pour activer l'affichage du logo spécial
- Décochez-la pour revenir au logo normal
- Le logo ne changera que si cette case est cochée

### 2. **Logo spécial**
- Cliquez sur "Choisir une image" pour télécharger un logo spécial
- Le logo par défaut est `/lepapio_noel.png` (logo de Noël)
- Formats recommandés : PNG ou GIF avec fond transparent
- Taille recommandée : Environ 300-400px de hauteur

## Comment utiliser les logos spéciaux

### Activer un logo de Noël
1. Dans le CMS, allez dans **Paramètres** → **Informations générales**
2. Dépliez la section **"Logo spécial"**
3. Cochez la case **"Activer un logo spécial"**
4. Si nécessaire, téléchargez votre logo de Noël
5. Cliquez sur **"Enregistrer"**

Le logo de Noël apparaîtra immédiatement sur votre site !

### Revenir au logo normal
1. Dans le CMS, allez dans **Paramètres** → **Informations générales**
2. Dépliez la section **"Logo spécial"**
3. Décochez la case **"Activer un logo spécial"**
4. Cliquez sur **"Enregistrer"**

Le logo normal sera restauré.

## Préparer vos logos spéciaux

Pour créer des logos spéciaux pour différentes occasions :

### Caractéristiques recommandées
- **Format** : PNG ou GIF (de préférence avec fond transparent)
- **Dimensions** : Environ 300-400px de hauteur
- **Poids** : Moins de 500 Ko pour un chargement rapide
- **Style** : Cohérent avec votre logo principal

### Idées de logos spéciaux
- **Noël** : Logo avec bonnet de Noël, guirlandes
- **Pâques** : Logo avec œufs, lapins
- **Halloween** : Logo avec citrouilles, chapeaux de sorcière
- **Saint-Valentin** : Logo avec cœurs
- **14 Juillet** : Logo avec couleurs tricolores
- **Anniversaire du restaurant** : Logo spécial avec date

## Calendrier type d'utilisation

| Période | Logo spécial |
|---------|--------------|
| 1 déc - 31 déc | Logo de Noël |
| 1 janv - 15 janv | Logo "Bonne année" |
| 1 fév - 14 fév | Logo Saint-Valentin |
| Mars-Avril | Logo de Pâques |
| Mai-Juin | Logo de printemps/été |
| 14 juillet | Logo tricolore |
| Octobre | Logo d'Halloween |
| Novembre | Logo d'automne |

## Astuces

1. **Préparez vos logos à l'avance** : Créez vos logos spéciaux en début d'année et téléchargez-les au moment opportun

2. **Testez avant de publier** : Vérifiez que le logo s'affiche correctement sur mobile et ordinateur

3. **N'oubliez pas de désactiver** : Une fois l'événement passé, pensez à désactiver le logo spécial pour revenir au logo normal

4. **Gardez une cohérence** : Assurez-vous que le logo spécial reste reconnaissable et cohérent avec votre identité visuelle

## Logos disponibles par défaut

Votre site dispose déjà de ces logos :

- **Logo normal** : `/papio2y copy.gif` (logo animé standard)
- **Logo de Noël** : `/lepapio_noel.png` (logo avec bonnet de Noël)

Vous pouvez en télécharger d'autres via le CMS selon vos besoins.

## Résolution de problèmes

### Le logo ne change pas
1. **Vérifiez la configuration dans le CMS**
   - Allez dans Admin → Paramètres → Informations générales
   - Dépliez la section "Logo spécial"
   - Vérifiez que la case "Activer un logo spécial" est bien cochée
   - Vérifiez que le champ "Logo spécial" contient le bon chemin

2. **Videz le cache du navigateur**
   - Windows/Linux : Appuyez sur Ctrl+Shift+R
   - Mac : Appuyez sur Cmd+Shift+R
   - Ou ouvrez la console (F12), allez dans "Network" et cochez "Disable cache"

3. **Vérifiez le fichier dans le dossier public**
   - Le fichier doit être dans le dossier `/public/`
   - Exemple : `/public/lepapio_noel.png`

4. **Testez directement l'URL de l'image**
   - Ouvrez votre navigateur
   - Tapez : `https://votre-site.com/lepapio_noel.png`
   - L'image devrait s'afficher
   - Si elle ne s'affiche pas, le fichier n'a pas été correctement téléchargé

### Le logo est trop grand ou trop petit
- Modifiez les dimensions de votre image avant de la télécharger
- La hauteur recommandée est de 300-400px
- Le composant ajuste automatiquement la taille avec `h-32 md:h-48` (128px sur mobile, 192px sur desktop)

### Le logo a un fond blanc au lieu d'être transparent
- Utilisez un format PNG avec transparence
- Éditez votre image dans un logiciel de retouche photo pour retirer le fond

### Vérification technique
Pour vérifier que la configuration est correctement chargée, ouvrez la console du navigateur (F12) et tapez :
```javascript
fetch('/src/content/settings/general.yml').then(r => r.text()).then(console.log)
```
Vous devriez voir votre configuration YAML avec `special_logo: enabled: true`
