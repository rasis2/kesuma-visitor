# Cara Run Lokal

## Keperluan
- Node.js (versi 16+) — download dari nodejs.org

## Langkah

### 1. Install dependencies
```bash
cd kesuma-v2
npm install
```

### 2. Run server
```bash
npm start
```

Buka browser: **http://localhost:3000**

---

## Alternatif (tanpa Node.js)

### Python (dah ada dalam Windows/Mac/Linux)
```bash
cd kesuma-v2
python -m http.server 3000
```
Buka: **http://localhost:3000**

### VS Code Live Server
1. Install extension **Live Server** (Ritwick Dey)
2. Klik kanan `index.html` → **Open with Live Server**

---

## Note
- Database masih pakai Supabase — internet connection diperlukan
- Semua changes dalam code akan refresh bila reload browser
