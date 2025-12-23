# Guide de modification des informations du restaurant

## Accès au CMS

1. Allez sur votre site : `https://votre-site.netlify.app/admin`
2. Connectez-vous avec vos identifiants Netlify
3. Cliquez sur **⚙️ Paramètres**
4. Sélectionnez **Informations générales**

## Informations modifiables

### 1. Nom du restaurant
- **Champ** : "Nom du restaurant"
- **Valeur actuelle** : Le Papio
- Modifiez pour changer le nom affiché partout sur le site

### 2. Horaires résumés (carte contact)
Ces textes apparaissent dans la petite carte d'horaires sur la page d'accueil :

#### Résumé des horaires (FR)
- **Champ** : "Résumé des horaires (FR)"
- **Valeur actuelle** : `12h-14h / 19h-22h`
- Format court pour les visiteurs français

#### Résumé des horaires (EN)
- **Champ** : "Résumé des horaires (EN)"
- **Valeur actuelle** : `12pm-2pm / 7pm-10pm`
- Format court pour les visiteurs anglophones

### 3. Note de fermeture
Texte affiché en bas de la carte horaires :

#### Note de fermeture (FR)
- **Champ** : "Note de fermeture (FR)"
- **Valeur actuelle** : `Fermé le mardi`
- Indique les jours de fermeture en français

#### Note de fermeture (EN)
- **Champ** : "Note de fermeture (EN)"
- **Valeur actuelle** : `Closed on Tuesday`
- Indique les jours de fermeture en anglais

### 4. Note sous l'heure d'ouverture (optionnel)
Petit texte affiché sous "Ouvre à 19:00" dans le header :

#### Note d'ouverture (FR)
- **Champ** : "Note sous l'heure d'ouverture (FR)"
- Exemple : "Service continu"
- Laissez vide si non utilisé

#### Note d'ouverture (EN)
- **Champ** : "Note sous l'heure d'ouverture (EN)"
- Exemple : "Continuous service"
- Laissez vide si non utilisé

### 5. Coordonnées

#### Téléphone
- **Champ** : "Téléphone"
- **Valeur actuelle** : `02 33 92 18 45`

#### Email
- **Champ** : "Email"
- **Valeur actuelle** : `restaurantlepapio@gmail.com`

#### Adresse
- **Champ** : "Adresse"
- **Valeur actuelle** : `24 quai de Caligny, 50100 Cherbourg-en-Cotentin`

### 6. Logo du restaurant

#### Logo principal
- **Champ** : "URL du logo"
- **Valeur actuelle** : `/bateau.png`
- Cliquez pour changer l'image du logo

#### Logo spécial (Noël, Pâques, etc.)
- **Section** : "Logo spécial" (section pliable)
- **Activer un logo spécial** : Cochez pour utiliser un logo de saison
- **Logo spécial** : Choisissez l'image (ex: logo de Noël)

### 7. Couleurs du thème

#### Couleur principale
- **Champ** : "Couleur principale"
- **Valeur actuelle** : `#3B82F6` (bleu)
- Format : code couleur hex (ex: #3B82F6)

#### Couleur secondaire
- **Champ** : "Couleur secondaire"
- **Valeur actuelle** : `#1E40AF` (bleu foncé)
- Pour les survols et accents

## Comment modifier

### Étape 1 : Accéder au CMS
1. Allez sur `/admin` de votre site
2. Connectez-vous

### Étape 2 : Naviguer vers les paramètres
1. Cliquez sur **⚙️ Paramètres** dans le menu
2. Sélectionnez **Informations générales**

### Étape 3 : Modifier les champs
1. Cliquez dans le champ que vous souhaitez modifier
2. Tapez la nouvelle valeur
3. Pour les images : cliquez sur "Choisir une image"

### Étape 4 : Enregistrer
1. Cliquez sur **Enregistrer** en haut à droite
2. Attendez la confirmation
3. Les modifications sont visibles immédiatement sur le site (peut nécessiter un refresh)

## Exemples de modifications courantes

### Changer les horaires d'été
Si vous passez en horaires d'été (service continu) :

**Résumé des horaires (FR)** :
```
12h-22h en continu
```

**Résumé des horaires (EN)** :
```
12pm-10pm continuous
```

**Note de fermeture (FR)** :
```
Fermé le dimanche soir et lundi
```

**Note de fermeture (EN)** :
```
Closed on Sunday evening and Monday
```

### Ajouter une note spéciale
Pour indiquer une information importante sous l'heure d'ouverture :

**Note sous l'heure d'ouverture (FR)** :
```
Dernière commande à 21h30
```

**Note sous l'heure d'ouverture (EN)** :
```
Last order at 9:30pm
```

### Changer le numéro de téléphone
Si vous changez de numéro :

**Téléphone** :
```
02 33 XX XX XX
```

Le numéro sera automatiquement cliquable sur mobile.

### Activer un logo de Noël
1. Allez dans **Informations générales**
2. Dépliez la section **Logo spécial**
3. Cochez **Activer un logo spécial**
4. Choisissez votre image de logo de Noël
5. Enregistrez

Pour revenir au logo normal :
1. Décochez **Activer un logo spécial**
2. Enregistrez

## Horaires détaillés

Pour modifier les horaires détaillés (jour par jour) :
1. Allez dans **⚙️ Paramètres**
2. Sélectionnez **Horaires d'ouverture**
3. Modifiez chaque jour individuellement
4. Voir le guide `GUIDE_MODIFICATION_HORAIRES.md` pour plus de détails

## En cas de problème

### Les modifications ne s'affichent pas
1. Vérifiez que vous avez bien cliqué sur **Enregistrer**
2. Videz le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)
3. Attendez 1-2 minutes pour la mise à jour

### Le CMS ne s'ouvre pas
1. Vérifiez votre connexion Internet
2. Vérifiez que vous êtes sur la bonne URL (`/admin`)
3. Videz le cache et réessayez

### Impossible de se connecter
1. Vérifiez vos identifiants Netlify
2. Contactez l'administrateur du site

## Conseils

- 💾 **Enregistrez souvent** : Pensez à enregistrer régulièrement vos modifications
- 🌍 **Bilingue** : N'oubliez pas de modifier les versions FR ET EN
- 📱 **Testez** : Vérifiez sur mobile et desktop après modification
- ⏰ **Cohérence** : Assurez-vous que les horaires résumés correspondent aux horaires détaillés

## Guides connexes

- `GUIDE_MODIFICATION_HORAIRES.md` - Modifier les horaires détaillés
- `GUIDE_VACANCES.md` - Programmer les vacances
- `GUIDE_CMS_LOGO_COULEURS.md` - Plus de détails sur logos et couleurs
