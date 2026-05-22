# SchichtBuddy – Support Website

Static website for the SchichtBuddy iOS app.  
Hosted via GitHub Pages at **https://matillacomic.github.io/schichtbuddy-support**

## Pages

| File | URL | Purpose |
|------|-----|---------|
| `index.html` | `/` | Landing page – features, hero, download CTAs |
| `privacy.html` | `/privacy.html` | DSGVO Datenschutzerklärung |
| `support.html` | `/support.html` | FAQ + contact |
| `style.css` | – | Shared Apple-dark design system |
| `script.js` | – | Scroll animations, FAQ accordion, nav |

## Design

- Apple-inspired dark theme (`#0a0a0f` background)
- Glassmorphism cards with backdrop-filter blur
- Animated gradient background blobs
- Responsive grid layout (mobile-first)
- CSS custom properties for easy theming
- Intersection Observer fade-in animations
- No external dependencies – pure HTML/CSS/JS

## App Info

- **App:** SchichtBuddy
- **Bundle ID:** com.matillacomic.schichtbuddy
- **Developer:** Matilla Comic
- **Support email:** support@schichtbuddy.app
- **Platform:** iOS 16+

## GitHub Pages Setup

1. Push to `main` branch
2. Settings → Pages → Source: Deploy from branch `main` / `/ (root)`
3. Site live at: `https://matillacomic.github.io/schichtbuddy-support`

## Update App Store Link

Replace the placeholder in `index.html` and `support.html`:
```
https://apps.apple.com/app/schichtbuddy/id000000000
```
→ replace `id000000000` with your actual App Store ID after publishing.
