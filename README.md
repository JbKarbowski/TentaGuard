# Tentaguard Landing (Vite + React + Tailwind)

Prosty landing do hostingu na **Cloudflare Pages**. Struktura inspirowana Hoxhunt, z miejscami na Twoje treści.

## Wymagania
- Node.js 18 lub nowszy
- Konto GitHub (repo już masz)
- Cloudflare Pages (projekt połączony z repo)

## Uruchomienie lokalnie
```bash
npm install
npm run dev
```
Otwórz: http://localhost:5173

## Build produkcyjny
```bash
npm run build
```
Wynik w folderze `dist/`.

## Deploy na Cloudflare Pages
1. W Cloudflare Pages wybierz **Create project → Connect to Git** i wskaż to repo.
2. Framework: **Vite** (albo „Other”), Build command: `npm run build`, Output directory: `dist`.
3. Deploy!
4. (Opcjonalnie) Dodaj domenę `tentaguard.com` w zakładce **Custom domains**.

## Edycja treści
- Plik główny: `src/App.jsx` (sekcje: Hero, HowItWorks, Benefits, Pricing, CTA, Contact, Footer).
- Style: `src/index.css` + Tailwind.
- Zastąp placeholdery (teksty w języku polskim, ceny, adres e-mail, NIP).
- W sekcji **Contact** podmień link do Google Forms na właściwy.

## FAQ
- **CTA** = „wezwanie do akcji” (przycisk typu *Umów rozmowę*).
- **Lead** = osoba/firma, która zostawiła kontakt w formularzu.
- **Conversion/Konwersja** = moment, w którym lead zrobił to, czego oczekujesz (np. wysłał formularz).

Powodzenia! 🚀
