# Design System - Libera Luminosa

## 🎨 Vue d'ensemble

Le design system de Libera Luminosa reflète l'univers chaleureux et apaisant de Séverine, thérapeute en olfactothérapie et bien-être. Chaque couleur, chaque typographie et chaque composant a été pensé pour créer une expérience harmonieuse qui évoque la sérénité, la confiance et la professionnalisme bienveillant.

---

## 🌈 Palette de Couleurs Harmonieuse

### Couleurs Principales

| Couleur | Hex | Usage | Symbolisme |
|---------|-----|-------|------------|
| **Primary** | `#D4AF37` | Accents dorés, éléments de marque | Luminosité, prestige, lumière intérieure |
| **Secondary** | `#F5F1E8` | Fonds principaux, sections calmes | Pureté, sérénité, blanc nacré |
| **Accent** | `#8B6F47` | Éléments bois, contraste doux | Nature, ancrage, authenticité |
| **Text** | `#2C1810` | Texte principal | Lisibilité, brun profond |
| **Background** | `#FEFEFE` | Fond global | Pureté, clarté |
| **Rose Poudré** | `#E8C4B8` | Touches douces, bordures | Féminité, chaleur |
| **Bronze** | `#CD853F` | Badges, éléments métalliques | Richesse, caractère |

### Variations Tonales

| Type | Couleur | Hex | Usage Spécifique |
|------|---------|-----|------------------|
| **Primary Light** | `#E6C757` | Hover states, éclairages | |
| **Primary Dark** | `#B8941F` | Ombres dorées, profondeur | |
| **Accent Light** | `#8B6F47` | Même que accent (cohérence) | |
| **Accent Dark** | `#2C1810` | Contraste fort, texte | |
| **Rose Light** | `#F2DDD5` | Fonds très doux | |
| **Bronze Dark** | `#A0703A` | Éléments forts, caractère | |

---

## 🎯 Variables Sémantiques

Notre palette exploite **toutes les couleurs** de façon cohérente grâce à des variables sémantiques :

### Héros et Sections

```scss
hero-primary-bg: #F5F1E8        // Blanc nacré principal (fonds hero)
hero-secondary-bg: #F2DDD5      // Rose très pâle (dégradés)  
hero-accent-bg: #E8C4B8         // Rose poudré (richesse visuelle)
```

**Usage :** `linear-gradient(135deg, color(hero-primary-bg), color(hero-secondary-bg))`

### Cards et Icônes

```scss
card-icon-start: #FEFEFE        // Blanc pur (début dégradé)
card-icon-end: #E8C4B8          // Rose poudré (fin dégradé)
card-border: #E8C4B8            // Rose poudré (bordures douces)
```

**Usage :** Dégradés d'icônes harmonieux, bordures subtiles

### Boutons

```scss
button-primary-start: #D4AF37    // Doré principal
button-primary-end: #A0703A      // Bronze foncé (caractère)
button-secondary-bg: #F5F1E8     // Nacré
button-secondary-border: #E8C4B8 // Rose poudré
button-secondary-hover: #E8C4B8  // Rose poudré
```

**Résultat :** Boutons métalliques avec du caractère, secondaires doux

### Badges et Étiquettes

```scss
badge-primary: #CD853F          // Bronze principal
badge-secondary: #A0703A        // Bronze foncé (variété)
badge-accent: #8B6F47           // Bois (naturel)
badge-text: #FEFEFE             // Texte sur badges
```

**Usage :** Catégories de services, prix, labels

### Prix et Valeurs

```scss
price-primary: #A0703A          // Bronze foncé (poids)
price-secondary: #6B4F0F        // Très foncé (importance)
```

**Usage :** Tarifs, montants importants avec impact visuel

### Navigation

```scss
nav-hover: #CD853F              // Bronze cohérent
nav-active: #A0703A             // Bronze foncé
```

**Usage :** États interactifs de navigation harmonieux

### Témoignages

```scss
testimonial-border: #A0703A     // Bronze foncé (caractère)
testimonial-bg: #F2DDD5         // Rose très pâle (apaisant)
```

**Usage :** Citations clients, encadrés spéciaux

### Accessibilité Textuelle

```scss
primary-text: #8B6914           // Doré foncé (ratio 4.6:1)
primary-text-bold: #6B4F0F      // Très foncé (ratio 7.2:1)
```

**Usage :** Texte lisible sur fonds clairs, conforme WCAG

---

## 🖼️ Gradients Signature

### Héros Chaleureux
```scss
background: linear-gradient(135deg, #F5F1E8, #E8C4B8);
```
*Blanc nacré vers rose poudré - accueillant et doux*

### Cards Élégantes
```scss
background: linear-gradient(135deg, #FEFEFE, #E8C4B8);
```
*Blanc pur vers rose poudré - élégance subtile*

### Boutons Métalliques
```scss
background: linear-gradient(135deg, #D4AF37, #A0703A);
```
*Doré vers bronze foncé - caractère et prestige*

### Sections Alternées
```scss
background: linear-gradient(135deg, #F2DDD5, #F5F1E8);
```
*Rose très pâle vers blanc nacré - variation douce*

### Témoignages Apaisants
```scss
background: linear-gradient(135deg, #E8C4B8, #F2DDD5);
```
*Rose poudré vers rose très pâle - sérénité*

---

## ✍️ Typographie

### Familles de Polices

```scss
$font-family-heading: 'Playfair Display', serif;  // Titres élégants
$font-family-body: 'Open Sans', sans-serif;       // Texte lisible
```

### Échelle Typographique

| Nom | Taille | Usage |
|-----|--------|-------|
| `xs` | 0.75rem (12px) | Mentions, petits détails |
| `sm` | 0.875rem (14px) | Badges, sous-titres |
| `base` | 1rem (16px) | Texte courant |
| `lg` | 1.125rem (18px) | Texte emphase |
| `xl` | 1.25rem (20px) | Sous-titres importants |
| `2xl` | 1.5rem (24px) | Titres secondaires |
| `3xl` | 1.875rem (30px) | Prix, éléments forts |
| `4xl` | 2.25rem (36px) | Titres principaux |
| `5xl` | 3rem (48px) | Titres hero (md+) |
| `6xl` | 3.75rem (60px) | Titres hero (lg+) |

### Poids de Police

```scss
light: 300      // Texte léger
normal: 400     // Texte standard  
medium: 500     // Emphase douce
semibold: 600   // Sous-titres
bold: 700       // Titres, éléments forts
```

---

## 📏 Système d'Espacement

### Échelle Harmonique

```scss
0: 0           // Aucun espacement
1: 0.25rem     // 4px - Très petit
2: 0.5rem      // 8px - Petit
3: 0.75rem     // 12px - Compact
4: 1rem        // 16px - Standard
5: 1.25rem     // 20px - Confortable
6: 1.5rem      // 24px - Généreux
8: 2rem        // 32px - Sections
10: 2.5rem     // 40px - Grandes sections
12: 3rem       // 48px - Très grandes sections
16: 4rem       // 64px - Hero, espacements majeurs
20: 5rem       // 80px - Sections principales
24: 6rem       // 96px - Sections majeures
32: 8rem       // 128px - Espacements maximaux
```

**Usage :** `padding: spacing(4) spacing(6);`

---

## 📱 Breakpoints Responsive

```scss
sm: 576px      // Petites tablettes
md: 768px      // Tablettes 
lg: 992px      // Desktop
xl: 1200px     // Grande desktop
2xl: 1400px    // Très grande desktop
```

### Mixins Media Queries

```scss
@include media-up(md) { ... }      // À partir de 768px
@include media-down(md) { ... }    // Jusqu'à 767px
@include media-between(sm, lg) { ... } // Entre 576px et 991px
```

---

---

## 🎨 Améliorations Récentes

### Titres des Fiches Accompagnements

Les titres H2 des services ont été améliorés avec un accent décoratif élégant :

```scss
.service-content h2 {
  position: relative;
  padding-bottom: spacing(4);
  color: color(primary-text-bold);     // #6B4F0F (contraste optimal)
  font-weight: font-weight(semibold);  // Poids renforcé
  
  // Trait décoratif harmonieux
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #D4AF37, #CD853F); // Doré → Bronze
    border-radius: border-radius(full);
    opacity: 0.8;
  }
}
```

**Avantages :**
- **Élégance** : Trait décoratif subtil remplace toute bordure "moche"
- **Harmonie** : Gradient doré-bronze de notre palette
- **Lisibilité** : Couleur de texte renforcée (`primary-text-bold`)
- **Cohérence** : S'intègre parfaitement au design system

### Badges de Catégorie Repensés

Les badges de catégorie ont été transformés d'un style "pilule" datré vers une approche minimaliste et raffinée :

```scss
.service-category {
  color: color(primary-text);          // #8B6914 (lisible et élégant)
  font-variant: small-caps;            // Typographie moderne
  text-transform: lowercase;           // Plus doux que UPPERCASE
  letter-spacing: 0.8px;              // Espacement aéré
  
  // Indicateur décoratif élégant
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: radial-gradient(circle, #CD853F, #A0703A); // Bronze effet métallique
    border-radius: border-radius(full);
    opacity: 0.7;
  }
  
  &::after {
    width: 8px;
    height: 8px;
    background: #F5F1E8;                // Point nacré central
  }
}
```

**Transformation réussie :**
- ❌ **Avant :** Badge orange en pilule avec MAJUSCULES criardes
- ✅ **Après :** Indicateur décoratif bronze + typographie small-caps raffinée
- **Résultat :** Élégance contemporaine parfaitement intégrée au design harmonieux

---

## 🧩 Architecture SCSS

### Structure des Fichiers

```
scss/
├── main.scss                    // Point d'entrée principal
├── abstracts/
│   ├── _variables.scss         // Variables globales (couleurs, spacing...)
│   ├── _mixins.scss           // Mixins réutilisables  
│   └── _functions.scss        // Fonctions SCSS
├── base/
│   ├── _reset.scss            // Reset CSS moderne
│   ├── _typography.scss       // Styles typographiques globaux
│   └── _utilities.scss        // Classes utilitaires
├── layout/
│   ├── _header.scss           // Header fixe desktop
│   ├── _navigation.scss       // Navigation + bottom nav mobile
│   ├── _footer.scss           // Footer responsive
│   └── _grid.scss             // Système de grille
├── components/
│   ├── _buttons.scss          // Tous les styles de boutons
│   ├── _cards.scss            // Cards services + animations
│   ├── _forms.scss            // Formulaires + champs
│   └── _hero.scss             // Sections hero
└── pages/
    ├── _home.scss             // Page d'accueil spécifique
    ├── _accompagnements.scss  // Pages services
    ├── _about.scss            // Page à propos
    └── _contact.scss          // Page contact
```

### Méthodologie

**1. Mobile-First :** Tous les styles commencent par mobile, puis s'adaptent aux écrans plus grands

**2. Variables Sémantiques :** Utilisation de `color(hero-primary-bg)` plutôt que `#F5F1E8`

**3. Mixins Réutilisables :** `@include btn-primary`, `@include section-spacing`

**4. BEM-like :** `.service-card`, `.service-card__title`, `.service-card--featured`

---

## 🎨 Composants Principaux

### Boutons

```scss
// Usage
.btn.btn-primary     // Bouton principal (gradient doré-bronze)
.btn.btn-secondary   // Bouton secondaire (nacré + bordure rose)
.btn.btn-outline     // Bouton contour (transparent + bordure)

// Tailles
.btn.btn-sm          // Petit bouton
.btn.btn-lg          // Grand bouton
.btn.btn-full        // Pleine largeur
```

### Cards Services

```scss
.service-card        // Card avec animation hover
.service-icon        // Icône avec dégradé harmonieux
.service-title       // Titre service
.service-subtitle    // Catégorie (badge bronze)
.service-description // Description
.service-link        // Lien avec animation
```

### Section Citation

```scss
.quote-section       // Section avec dégradé rose poudré
.quote-container     // Container responsive
.quote-content       // Contenu principal
.quote-mark          // Guillemet décoratif (bronze)
.quote-text          // Citation en Playfair italic
.quote-author        // Auteur en small-caps
.quote-decoration    // Élément décoratif flottant
.quote-accent        // Cercle animé avec brillance
```

### Section Vidéo

```scss
.video-section       // Section avec dégradé nacré harmonieux
.video-container     // Container responsive 16:9
.video-placeholder   // Placeholder avant chargement vidéo
.pulse-play         // Animation pulsation bouton play
```

### Navigation

```scss
.header              // Header fixe (desktop uniquement)
.navigation          // Navigation principale
.nav-brand           // Logo + texte de marque
.bottom-nav          // Navigation mobile bottom
```

### Footer et Réseaux Sociaux

```scss
.footer              // Footer principal avec espacement mobile
.footer-content      // Grid responsive 3 colonnes
.footer-brand        // Logo et signature
.footer-links        // Liens utiles
.footer-social       // Boutons réseaux sociaux harmonieux
.footer-bottom       // Copyright et mentions
```

**Boutons sociaux :** Fond nacré avec bordure rose poudré, hover doré avec ombre.

---

## 🔍 Bonnes Pratiques

### 1. Utilisation des Variables

```scss
// ✅ Bon
color: color(primary-text-bold);
background: color(hero-primary-bg);

// ❌ À éviter  
color: #6B4F0F;
background: #F5F1E8;
```

### 2. Responsive Design

```scss
// ✅ Mobile-first
.component {
  font-size: font-size(base);
  
  @include media-up(md) {
    font-size: font-size(lg);
  }
}
```

### 3. Espacement Cohérent

```scss
// ✅ Système harmonique
margin-bottom: spacing(6);
padding: spacing(4) spacing(8);

// ❌ Valeurs arbitraires
margin-bottom: 25px;
padding: 15px 35px;
```

### 4. Accessibilité

- **Contraste :** Utiliser `primary-text` et `primary-text-bold` sur fonds clairs
- **Touch Targets :** Minimum 44px pour éléments interactifs  
- **Focus :** Tous les boutons ont des styles focus visibles

---

## 🚀 Compilation et Développement

### Commandes Essentielles

```bash
# Compilation automatique (développement)
sass --watch scss:css

# Compilation production (minifiée)
sass scss/main.scss css/main.css --style=compressed

# Compilation avec source maps
sass scss/main.scss css/main.css --style=expanded --source-map
```

### Workflow Recommandé

1. **Modifier** les fichiers SCSS dans le dossier approprié
2. **Tester** en mode `--watch` pour compilation automatique
3. **Vérifier** le rendu sur différents écrans
4. **Valider** l'accessibilité et le contraste
5. **Compiler** en production pour déploiement

---

## 🎯 Objectifs du Design System

### ✨ Expérience Utilisateur
- **Sérénité** : Couleurs apaisantes, gradients doux
- **Confiance** : Typographie professionnelle, espacement généreux  
- **Accessibilité** : Contrastes respectés, navigation claire
- **Performance** : CSS optimisé, responsive efficace

### 🌸 Reflet de l'Identité Séverine  
- **Féminité** : Rose poudré, courbes douces
- **Professionnalisme** : Bronze, doré, structure claire
- **Nature** : Bois, tons chauds, harmonie organique
- **Lumière** : Gradients lumineux, contrastes maîtrisés

### 📱 Multi-Device
- **Mobile-first** : Expérience optimale sur smartphone
- **Progressive Enhancement** : Enrichissement desktop
- **Touch-friendly** : Éléments tactiles appropriés
- **Performance** : Chargement rapide sur tous devices

---

*Design System créé avec 💚 pour Libera Luminosa - Harmonie de l'Être*  
*Dernière mise à jour : Janvier 2025*
