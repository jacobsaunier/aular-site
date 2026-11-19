---
name: Aular
description: Ruhige, flache Campus-Website: weiße Karten auf kühlem Papier, Hallenboden-Navy und ein einziges Ozeanblau.
colors:
  hallenboden-navy: "#1e293b"
  schiefer-text: "#475569"
  prose-text: "#2c3a4f"
  papierlicht: "#ededf5"
  karte-weiss: "#ffffff"
  linie: "#d6d7e3"
  ozeanblau: "#0369a1"
  ozeanblau-tief: "#075985"
  platzhalter-bg: "#fff3bf"
  platzhalter-text: "#5c4400"
typography:
  display:
    fontFamily: "Instrument Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.3rem, 6.2vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Instrument Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.6rem, 3.6vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Instrument Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  store: "14px"
  lg: "18px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "72px"
components:
  store-badge:
    backgroundColor: "{colors.hallenboden-navy}"
    textColor: "{colors.karte-weiss}"
    rounded: "{rounded.store}"
    padding: "12px 20px"
  card:
    backgroundColor: "{colors.karte-weiss}"
    textColor: "{colors.hallenboden-navy}"
    rounded: "{rounded.lg}"
    padding: "24px"
  step-badge:
    backgroundColor: "{colors.ozeanblau}"
    textColor: "{colors.karte-weiss}"
    rounded: "{rounded.full}"
    size: "36px"
  nav-link:
    textColor: "{colors.hallenboden-navy}"
    typography: "{typography.body}"
  nav-link-hover:
    textColor: "{colors.ozeanblau}"
---

# Design System: Aular

## Overview

**Creative North Star: "Das Campus-Schwarze-Brett"**

Aular wirkt wie ein gut gepflegtes Schwarzes Brett an der Hochschule: helle, kühle Fläche, darauf klar abgegrenzte weiße Karten, jede mit einer einzigen Aussage. Nichts schreit. Der Ton ist sachlich, nahbar und studentisch, ohne Sport-Pathos und ohne Start-up-Glanz. Das Hallenboden-Navy gibt Halt, das Ozeanblau markiert, was zählt.

Die Dichte ist niedrig bis mittel: großzügiger Weißraum, eine Textspalte pro Gedanke, Karten im Raster. Tiefe entsteht ausschließlich durch Tonwerte (weiße Karte auf Papierlicht, Navy-Fläche auf Papierlicht), nie durch Schatten. Die Markenfarben und die Schrift Instrument Sans sind verbindlich (PRODUCT.md).

**Key Characteristics:**
- Flach und tonal geschichtet: keine Schatten, keine Verläufe.
- Ein Akzent (Ozeanblau) für Marke, Links, Etiketten und Nummern.
- Großzügig gerundete Karten (18px), straffe, enge Überschriften.
- Eine Schrift in drei Gewichten (400, 600, 700), selbst gehostet.
- Alle Interaktionsflächen und Texte bleiben auf Papierlicht oder Weiß lesbar.

## Colors

Zurückhaltende Palette: ein kühles Papier, ein dunkles Navy, ein Akzentblau, dazu Weiß für Flächen.

### Primary
- **Ozeanblau** (#0369a1): der einzige Akzent. Punkt im Wortmarke-Logo, Links, Eyebrow und Karten-Etiketten, aktive Navigation, Nummern-Badges, Fokusring.
- **Ozeanblau tief** (#075985): Hover-Zustand von Links.

### Neutral
- **Hallenboden-Navy** (#1e293b): Fließtext und Überschriften, Wortmarke, Store-Badges, Theme-Farbe, Favicon-Grund.
- **Schiefer-Text** (#475569): sekundärer Text (Lead, Kartentexte, Hinweise, Footer).
- **Prose-Text** (#2c3a4f): Fließtext auf den Rechtsseiten.
- **Papierlicht** (#ededf5): Seitenhintergrund.
- **Karte Weiß** (#ffffff): Karten und Textblöcke.
- **Linie** (#d6d7e3): feine Trennlinie über dem Footer.
- **Platzhalter-Gelb** (#fff3bf / Text #5c4400): nur für Redaktions-Platzhalter und Entwurfsbanner, bewusst auffällig; darf nie live ungefüllt stehen.

### Named Rules
**The One Voice Rule.** Ozeanblau ist die einzige Akzentfarbe. Es markiert Marke und Orientierung, nie großflächige Dekoration.
**The Paper Rule.** Der Seitengrund ist immer Papierlicht, nie reines Weiß. Weiß gehört den Karten.

## Typography

**Display Font:** Instrument Sans (mit system-ui, -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Instrument Sans (gleiche Familie)

**Character:** Eine einzige geometrisch-freundliche Grotesk, in Überschriften eng gesetzt und fett, im Fließtext locker (1.6). Hierarchie entsteht durch Größe, Gewicht und Laufweite, nicht durch eine zweite Schrift.

### Hierarchy
- **Display** (700, clamp(2.3rem, 6.2vw, 4rem), 1.06, -0.035em): H1 im Hero; ausgeglichener Umbruch (text-wrap: balance).
- **Headline** (700, clamp(1.6rem, 3.6vw, 2.2rem), 1.15, -0.025em): H2 der Abschnitte.
- **Title** (700, 1.15rem, -0.01em): H3 in Karten.
- **Body** (400, 1.0625rem, 1.6): Fließtext; Leads max. 34em, Einleitungen max. 40em.
- **Label** (700, 0.75rem, 0.08em, Versalien): Karten-Etiketten. Das Eyebrow im Hero ist größer (0.8rem, 0.12em, Versalien).

### Named Rules
**The Three Weights Rule.** Nur 400, 600 (Navigation) und 700 (alles Betonte). Keine weiteren Gewichte, keine zweite Familie.

## Layout

Eine zentrierte Spalte mit max. 1080px, seitliche Ränder mindestens 20px (inkl. Safe-Area). Der Hero hat viel Luft (56px oben, 72px unten; mobil 32/48px), Abschnitte 40px vertikal. Karten liegen im Auto-Fit-Raster mit 16px Abstand (Schritte min. 240px, Funktionen min. 250px). Textseiten liegen in einem Block von max. 820px. Der Footer hat eine feine Linie, zwei Spalten, die auf schmalen Schirmen umbrechen. Unter 560px werden Store-Badges volle Breite.

## Elevation & Depth

Rein tonal, ohne Schatten. Weiße Karten auf Papierlicht und Navy-Flächen auf Papierlicht geben die einzige Tiefe. Zustände ändern Farbe, nie Höhe.

### Named Rules
**The Flat-By-Default Rule.** Keine `box-shadow` und kein Verlauf. Trennung durch Tonwert, Abstand oder die eine Footer-Linie.

## Shapes

Weich, aber nicht verspielt: Karten 18px, Store-Badges 14px, Überspringen-Link 10px, Fokusring 6px, Nummern-Badges kreisrund. Die Rundung wächst mit der Fläche. Rahmen werden nicht verwendet; die einzige Linie ist die Trennlinie über dem Footer.

## Components

### Buttons (Store-Badges)
- **Shape:** 14px Rundung, zweizeilig (kleines Label, fette Zeile).
- **Primary:** Navy (#1e293b) mit weißem Text, Padding 12px 20px, mindestens 190px breit.
- **Disabled ("Bald im …"):** 60% Deckkraft, Standardcursor, `aria-disabled`; sie sind keine Links, solange die App nicht erschienen ist.

### Cards / Containers
- **Corner Style:** 18px
- **Background:** Weiß auf Papierlicht
- **Shadow Strategy:** keine (siehe Elevation)
- **Internal Padding:** 24px (Schritte 26px 24px)

### Schritt-Badge
- Kreis, 36px, Ozeanblau mit weißer fetter Ziffer, aus einem CSS-Zähler.

### Etiketten (Tags)
- Versalien-Label in Ozeanblau über dem Kartentitel, ohne Hintergrund.

### Navigation
- Wortmarke "aular." fett, 1.6rem, -0.03em; der Punkt in Ozeanblau. Navigationslinks 600 / 0.97rem, Navy, ohne Unterstreichung; Hover und aktuelle Seite in Ozeanblau. Mobil umbrechend, kleinerer Abstand (16px).

### Fokus
- 3px Ozeanblau-Ring, 3px Abstand, 6px Rundung; sichtbar auf allen interaktiven Elementen.

## Do's and Don'ts

### Do:
- **Do** Karten in Weiß (#ffffff) auf Papierlicht (#ededf5) setzen und 18px runden.
- **Do** Ozeanblau (#0369a1) sparsam für Marke, Links, Etiketten und Nummern einsetzen.
- **Do** Überschriften eng (−0.025 bis −0.035em) und fett (700) setzen.
- **Do** Instrument Sans selbst hosten und keine externen Schriften laden.
- **Do** `prefers-reduced-motion` respektieren und Bewegung minimal halten.

### Don't:
- **Don't** Schatten, Verläufe oder Glas-Effekte einführen.
- **Don't** weitere Akzentfarben, Fotos von Nutzern oder erfundene Zahlen und Bewertungen einsetzen (PRODUCT.md).
- **Don't** eine zweite Schriftfamilie oder weitere Gewichte hinzufügen.
- **Don't** Store-Badges wie Links aussehen oder funktionieren lassen, bevor die App erschienen ist.
- **Don't** Platzhalter-Gelb auf einer veröffentlichten Seite stehen lassen.
