# Biblioteka Lumina

Biblioteka Lumina to prototyp interfejsu użytkownika platformy do czytania i kolekcjonowania książek, inspirowany nowoczesnymi usługami online.
Projekt powstał w ramach kursu projektowania front-endu i koncentruje się na strukturze interfejsu użytkownika, przepływie nawigacji i interakcji z użytkownikiem, bez konieczności korzystania z zaplecza ani bazy danych.

## Cel projektu

Celem tego projektu jest zaprezentowanie w pełni nawigowalnego prototypu platformy do czytania, w której użytkownik może:

- przeglądać książki,
- przeglądać rankingi i sekcje społecznościowe,
- zarządzać swoją półką,
- otwierać widok czytelnika,
- korzystać z przepływów logowania, rejestracji i resetowania hasła,
- przemieszczać się między widokami bez martwych linków.

Ta wersja została celowo stworzona **bez bazy danych ani zaplecza**, więc wszystkie dane są statyczne lub obsługiwane lokalnie w interfejsie użytkownika.

## Stos technologiczny

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **lucide-react**
- **Vercel Analytics**
- **Contentsquare** (skrypt śledzenia/analityczny)

## Główne funkcje

- Prototyp klikalności z działającą nawigacją
- Strona Odkryj/Strona główna
- Strona rankingowa z sekcją społecznościową
- Strona półki z lokalnym filtrowaniem i wyszukiwaniem
- Strona czytelnika z lokalnymi elementami sterującymi czytaniem
- Strona logowania z fałszywym przekierowaniem
- Strona rejestracji
- Strona „Zapomniałem hasła”
- Niestandardowa strona 404
- Stopka z działającymi stronami informacyjnymi

## Trasy

Projekt obecnie zawiera następujące widoki:

- `/` — Odkryj/Strona główna
- `/login` — Zaloguj się
- `/register` — Zarejestruj się
- `/forgot-password` — Zapomniałem hasła
- `/rankings` — Rankingi
- `/shelf` — Półka użytkownika
- `/reader/[id]` — Widok czytelnika
- `/info` — Strona informacyjna
- `/privacy-policy` — Polityka prywatności
- `/terms-of-service` — Warunki korzystania z usługi
- `/api-docs` — Miejsce na dokumentację API
- `/support` — Strona pomocy technicznej
- `*` — Niestandardowa strona błędu 404

## Ważna uwaga

Ten projekt jest tylko **prototypem frontendu**.

Oznacza to:

- nie ma **prawdziwego uwierzytelniania**,
- nie ma **bazy danych**,
- nie ma **integracji z Firebase**,
- nie ma **zaplecza do przesyłania plików**,
- akcje takie jak logowanie, importowanie, polubienie lub odpowiedź są symulowane lokalnie.

Prototyp ma na celu zademonstrowanie struktury interfejsu, przepływów i interakcji.

# Instalacja

Upewnij się, że masz zainstalowany **Node.js**.

Następnie uruchom:

```bash
npm install
npm run dev

Otwórz projekt w przeglądarce:

http://localhost:3000

Aby zbudować projekt:

npm run build
npm run start

Struktura projektu:

app/
  login/
  register/
  forgot-password/
  rankings/
  shelf/
  reader/
  info/
  privacy-policy/
  terms-of-service/
  api-docs/
  support/
  not-found.tsx
  layout.tsx
  page.tsx

components/
  books/
  layout/
  social/

hooks/
lib/
public/
styles/
