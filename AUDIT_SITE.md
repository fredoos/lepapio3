# Audit du Site Web - Le Papio Restaurant

**Date de l'audit :** 23 décembre 2025
**Site :** https://lepapio.fr
**Projet :** Restaurant Le Papio - Cherbourg-en-Cotentin

---

## 1. Vue d'ensemble

Le site du restaurant Le Papio est une application web moderne construite avec React, TypeScript et Vite. Il s'agit d'un site vitrine pour un restaurant situé à Cherbourg, proposant cuisine normande, pizzas artisanales et fruits de mer.

### Stack technologique
| Composant | Technologie |
|-----------|-------------|
| Frontend | React 18.3.1 + TypeScript 5.5.3 |
| Build Tool | Vite 5.4.2 |
| Styling | Tailwind CSS 3.4.1 |
| Icones | Lucide React |
| CMS | Decap CMS (Git-based) |
| Backend | Supabase |
| Hebergement | Netlify |
| Langues | Francais / Anglais |

---

## 2. Points Positifs

### 2.1 Architecture et Code

- **Lazy Loading** : Les composants lourds (Menu, Gallery, News, Contact, Footer, Seagull) sont charges dynamiquement avec `React.lazy()` et `Suspense`, ce qui ameliore le temps de chargement initial.

- **Structure modulaire** : Le code est bien organise en composants reutilisables, hooks personnalises, et contextes.

- **TypeScript** : Utilisation correcte de TypeScript avec des interfaces bien definies pour les props et les donnees.

- **Separation des preoccupations** : Hooks personnalises (`useSettings`, `useMenuData`, `useMenuVisibility`, etc.) pour la logique metier.

### 2.2 Accessibilite

- **Skip link** : Presence d'un lien "Aller au contenu principal" pour les lecteurs d'ecran.
- **ARIA labels** : Attributs `role="banner"`, `role="status"`, `aria-label`, `aria-expanded`, `aria-controls` correctement utilises.
- **Focus visible** : Styles CSS pour les etats de focus (`:focus-visible`).
- **Landmarks semantiques** : Utilisation de `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
- **Balise noscript** : Contenu alternatif pour les utilisateurs sans JavaScript.

### 2.3 SEO

- **Meta tags complets** : Title, description, keywords, Open Graph, Twitter Card.
- **Structured Data (JSON-LD)** : Schema.org Restaurant avec coordonnees, horaires, type de cuisine.
- **Canonical URL** : URL canonique definie.
- **Manifest PWA** : Configuration pour application mobile.

### 2.4 Performance

- **Code splitting** : Chunks manuels pour React et Lucide icons.
- **Hash fingerprinting** : Assets avec hash pour cache-busting.
- **Preconnect** : Google Fonts preconnecte.

### 2.5 Fonctionnalites

- **Bilingue** : Support complet francais/anglais avec contexte React.
- **Meteo en temps reel** : Widget meteo via Open-Meteo API.
- **Horaires dynamiques** : Calcul automatique ouvert/ferme selon l'heure.
- **Mode vacances** : Systeme de fermeture temporaire avec dates.
- **CMS integre** : Gestion du contenu via Decap CMS sans toucher au code.
- **Menu configurable** : Visibilite des sections du menu par saison.

---

## 3. Points a Ameliorer

### 3.1 Securite - CRITIQUE

#### 3.1.1 Cle API exposee dans le code
**Fichier :** `netlify.toml:7`
```toml
VITE_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```
**Probleme :** La cle Supabase est exposee publiquement dans le fichier de configuration versionne.

**Recommandation :**
- Utiliser les variables d'environnement Netlify (interface web) au lieu de les hardcoder
- Ne jamais commiter de cles API dans le repository

#### 3.1.2 Cache desactive sur index.html
**Fichier :** `index.html:5-7`
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
```
**Probleme :** Le cache est completement desactive, ce qui impacte les performances.

**Recommandation :** Utiliser des strategies de cache appropriees avec ETags ou des durees raisonnables.

### 3.2 Accessibilite - A CORRIGER

#### 3.2.1 Images sans attribut loading
**Fichier :** `Gallery.tsx`

Les images de la galerie n'ont pas l'attribut `loading="lazy"` pour le chargement differe.

#### 3.2.2 Modal sans gestion du focus
**Fichier :** `Gallery.tsx:79-117`

Le modal de la galerie ne gere pas le focus trap - les utilisateurs au clavier peuvent naviguer en dehors du modal.

#### 3.2.3 Navigation clavier incomplete dans la galerie
Les touches fleches gauche/droite ne sont pas gerees pour naviguer entre les images.

#### 3.2.4 Contraste potentiel
Verifier le contraste des textes gris clair (`text-gray-500`, `text-gray-600`) sur fond blanc.

### 3.3 Performance

#### 3.3.1 Images non optimisees
**Probleme :** Les images (JPEG, PNG, GIF) ne sont pas converties en formats modernes (WebP, AVIF).

**Recommandation :**
- Utiliser le composant `OptimizedImage` de maniere coherente
- Convertir les images en WebP avec fallback
- Ajouter des dimensions explicites (`width`, `height`) pour eviter le CLS

#### 3.3.2 GIFs animes lourds
Plusieurs GIFs animes (mouettes, bateau, marin) peuvent etre lourds. Considerer :
- Les remplacer par des animations CSS/SVG
- Les compresser davantage
- Utiliser le format AVIF anime

#### 3.3.3 Fonts externes
Les polices Google Fonts sont chargees depuis un CDN externe.

**Recommandation :** Auto-heberger les polices pour un meilleur controle et performance.

### 3.4 Code Quality

#### 3.4.1 Nom de package generique
**Fichier :** `package.json:2`
```json
"name": "vite-react-typescript-starter"
```
**Recommandation :** Renommer en `lepapio-website` ou similaire.

#### 3.4.2 Erreurs gerees sans feedback utilisateur
**Fichier :** `Header.tsx:53-54`
```javascript
} catch (err) {
  console.error('Erreur meteo:', err);
}
```
Les erreurs de l'API meteo sont simplement loguees sans informer l'utilisateur.

#### 3.4.3 Couleurs Tailwind dupliquees
**Fichier :** `tailwind.config.js:13,17`
```javascript
300: '#6EB8B2',
500: '#6EB8B2', // Meme valeur
```
Les couleurs 300 et 500 sont identiques, ce qui est probablement une erreur.

### 3.5 SEO

#### 3.5.1 Sitemap manquant
Il n'y a pas de `sitemap.xml` pour les moteurs de recherche.

#### 3.5.2 Robots.txt manquant
Pas de fichier `robots.txt` pour guider les crawlers.

### 3.6 UX/Design

#### 3.6.1 Texte non traduit
Certains textes sont hardcodes en francais :
- `Header.tsx:85-86` : "Ferme aujourd'hui", "Ouvre a"
- `Header.tsx:128` : "Ferme pour aujourd'hui"

#### 3.6.2 Temps hardcode
**Fichier :** `Header.tsx:21`
```javascript
const [currentTime, setCurrentTime] = useState('20h42');
```
La valeur initiale devrait etre dynamique.

#### 3.6.3 Espaces dans les noms de fichiers
**Fichier :** `Gallery.tsx:14,18`
```javascript
{ src: "/entrecote .jpg", ...
{ src: "/Hareng marine.jpg", ...
```
Les espaces dans les noms de fichiers peuvent causer des problemes d'URL.

### 3.7 Maintenance

#### 3.7.1 Dependencies a mettre a jour
Verifier regulierement les mises a jour de securite des dependances avec `npm audit`.

#### 3.7.2 Pas de tests
Aucun test unitaire ou d'integration n'est present dans le projet.

---

## 4. Recommandations Prioritaires

### Priorite Haute (Securite/Critique)
1. Deplacer les cles API vers les variables d'environnement Netlify
2. Ajouter un `robots.txt` et `sitemap.xml`
3. Corriger les noms de fichiers avec espaces

### Priorite Moyenne (Accessibilite/Performance)
4. Ajouter `loading="lazy"` aux images
5. Implementer le focus trap dans le modal de la galerie
6. Optimiser les images en WebP
7. Corriger la palette de couleurs Tailwind

### Priorite Basse (Ameliorations)
8. Traduire tous les textes hardcodes
9. Ajouter des tests
10. Auto-heberger les polices
11. Renommer le package

---

## 5. Score Global

| Categorie | Score | Commentaire |
|-----------|-------|-------------|
| **Accessibilite** | 7/10 | Bonne base, quelques ajustements necessaires |
| **SEO** | 8/10 | Tres bien configure, sitemap manquant |
| **Performance** | 6/10 | Lazy loading OK, images a optimiser |
| **Securite** | 5/10 | Cles API exposees |
| **Code Quality** | 7/10 | Bien structure, quelques problemes mineurs |
| **UX/Design** | 8/10 | Interface agreable et fonctionnelle |
| **Maintenance** | 6/10 | Pas de tests, documentation OK |

**Score global : 6.7/10**

Le site est globalement bien construit avec une architecture moderne et de bonnes pratiques d'accessibilite et de SEO. Les points critiques a corriger en priorite concernent la securite (cles API) et l'optimisation des images.

---

## 6. Conclusion

Le site du restaurant Le Papio est une application web moderne et fonctionnelle qui repond bien aux besoins d'un site vitrine de restaurant. L'architecture React/TypeScript est solide, l'accessibilite est prise en compte, et le SEO est bien configure.

Les principales ameliorations a apporter concernent :
1. La securite des credentials
2. L'optimisation des performances (images)
3. Quelques finitions d'accessibilite

Avec ces corrections, le site atteindrait facilement un score de 8+/10.

---

*Audit realise par Claude Code*
