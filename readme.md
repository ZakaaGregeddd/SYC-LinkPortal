## Lib
- **HTML5** untuk struktur semantik.
- **Tailwind CSS v3 (via CDN)** untuk styling responsif dan utilitas CSS yang cepat.
- **Vanilla JavaScript** untuk logika interaktif (Countdown, Copy Link, Filter Kategori).
- **Font Awesome 6** untuk ikon-ikon vektor.
- **Google Fonts** (Cinzel, Playfair Display, Plus Jakarta Sans, Great Vibes).

## Struktur
```
.
├── index.html           # Entry point / halaman utama website
├── vercel.json          # Konfigurasi deployment untuk Vercel
├── css/
│   └── style.css        # Custom CSS (animasi, custom background, dll)
└── js/
    ├── script.js        # Logika Countdown Timer, Toast, Share, dan Filter
    └── tailwind.config.js # Konfigurasi kustom tema warna dan font Tailwind
```

## Maintenance

### 1. Ubah Tanggal Countdown Timer
Buka `js/script.js` dan cari fungsi `initCountdown()`. Ubah bagian ini sesuai dengan tanggal target pembukaan acara:
```javascript
// Contoh untuk menetapkan tanggal statis: 20 Oktober 2026 jam 08:00
const targetDate = new Date('2026-10-20T08:00:00');
```

### 2. Menambah / Mengubah Link
Buka `index.html` dan cari bagian dengan komentar `<!-- BEGIN: Link Hub Interactive Cards -->`. 
Setiap link dibungkus dalam tag `<a>` dengan kelas `link-card`. 
- Pastikan atribut `href` diisi dengan tautan tujuan.
- Atribut `data-category` digunakan untuk sistem filter (misal: `daftar`, `panduan`, `media`). Pastikan sesuai dengan nama kategori yang ada.
