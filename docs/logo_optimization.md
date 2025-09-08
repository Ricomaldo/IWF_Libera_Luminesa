# Optimisation du Logo - Guide

## 📋 Implémentation réalisée

### ✅ Option 1B - Logo côte à côte avec texte
- **Structure** : Logo + texte "Libera Luminosa" + sous-titre "Harmonie de l'Être"
- **Disposition** : Côte à côte (flexbox)
- **Responsive** : Adaptatif selon les tailles d'écran

### 🎨 Caractéristiques du design
- **Logo** : 45px de hauteur sur desktop, 40px sur tablette, 35px sur mobile
- **Animation** : Effet de scale au survol (1.05x)
- **Transition** : Couleur du texte qui s'éclaircit au hover
- **Responsive** : Texte masqué sur très petits écrans (<576px)

### 🖼️ Format d'image optimisé
- **Structure HTML** : Utilisation de `<picture>` pour le support WebP
- **Fallback** : PNG comme format de secours
- **Loading** : `loading="eager"` pour le logo (critique)
- **Alt text** : Texte alternatif approprié pour l'accessibilité

## 📱 Breakpoints responsifs

| Taille écran | Logo hauteur | Texte | Action |
|-------------|--------------|-------|---------|
| > 992px     | 45px        | Affiché (1.25rem) | Standard |
| 768-991px   | 40px        | Affiché (1.125rem) | Réduit |
| 576-767px   | 35px        | Affiché (1rem) | Plus petit |
| < 576px     | 35px        | Masqué | Logo seul |

## 🔧 Optimisations recommandées

### 1. Création d'une version WebP
```bash
# Convertir le logo PNG en WebP
cwebp -q 85 assets/images/logo.png -o assets/images/logo.webp
```

### 2. Responsive images (optionnel)
```html
<picture class="brand-logo">
    <source media="(max-width: 767px)" srcset="assets/images/logo-mobile.webp" type="image/webp">
    <source media="(max-width: 767px)" srcset="assets/images/logo-mobile.png">
    <source srcset="assets/images/logo.webp" type="image/webp">
    <img src="assets/images/logo.png" alt="Libera Luminosa - Logo" loading="eager">
</picture>
```

### 3. Préchargement critique
```html
<!-- Dans le <head> si nécessaire -->
<link rel="preload" as="image" href="assets/images/logo.webp" type="image/webp">
<link rel="preload" as="image" href="assets/images/logo.png" type="image/png">
```

## 🎯 Avantages de cette implémentation

1. **SEO** : Texte "Libera Luminosa" indexable par les moteurs de recherche
2. **Performance** : Support WebP + compression optimisée
3. **Accessibilité** : Alt text approprié + texte lisible par screen readers
4. **UX** : Animation subtile et design cohérent
5. **Responsive** : Adaptation parfaite à tous les écrans
6. **Branding** : Conservation de l'identité textuelle forte

## 📄 Fichiers modifiés
- `index.html`
- `contact.html`
- `mes-accompagnements.html`
- `mon-parcours.html`
- `mentions-legales.html`
- `scss/layout/_navigation.scss`
- `css/main.css` (recompilé)
