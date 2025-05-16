# KinderKunst³ – Backend

Das Backend für **KinderKunst³** – dem Webshop, bei dem Kinderzeichnungen in fotorealistische Kunstwerke verwandelt und auf Textilien gedruckt werden.

## 🚀 Features

- Upload & Verarbeitung von Kinderzeichnungen
- Bildkonvertierung & Mockup-Integration
- REST API für Frontend-Kommunikation
- Unterstützung von JPEG, PNG und HEIC
- Bildspeicherung mit Dateinamen-Hashing
- KI-Integration vorbereitet (z. B. über externe Services)

## 📦 Tech Stack

- Node.js + Express
- Multer (Datei-Uploads)
- Sharp (Bildbearbeitung)
- dotenv (Konfigurationsmanagement)
- CORS, Body-Parser, etc.

## 🧪 Lokale Entwicklung

```bash
git clone git@github.com:Angelo1312/kinderkunst-backend.git
cd kinderkunst-backend
npm install
npm start
```

Die API läuft unter `http://localhost:3000`.

## 📁 Endpunkte (Beispiel)

| Methode | Pfad         | Beschreibung           |
|--------|--------------|------------------------|
| POST   | `/upload`    | Bild hochladen         |
| GET    | `/health`    | Healthcheck-Endpunkt   |

## ✅ TODO

- Automatisches Deployment (CI/CD)
- Authentifizierung
- WebSocket-Unterstützung (Live-Status)
- API-Dokumentation

---

**Slogan:** *Kleine Kunst ganz groß.* 🎨

---

🛠️ Automatisches Deployment per GitHub Actions + Render aktiviert.

