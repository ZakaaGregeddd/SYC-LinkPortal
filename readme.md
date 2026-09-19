
## Stack & Library
- **HTML5** untuk struktur semantik.
- **Tailwind CSS v3 (via CDN)** untuk styling responsif dan utilitas CSS yang cepat.
- **Vanilla JavaScript** untuk logika interaktif (Countdown, Copy Link, Filter Kategori).
- **Font Awesome 6** untuk ikon-ikon vektor.
- **Google Fonts** (Cinzel, Playfair Display, Plus Jakarta Sans, Great Vibes, dll).

## Struktur
```text
.
├── index.html           # Entry point / halaman utama website
├── vercel.json          # Konfigurasi deployment untuk Vercel
├── css/
│   └── style.css        # Custom CSS (animasi, custom background, dll)
├── js/
│   ├── script.js        # Logika Countdown Timer, Toast, Share, dan Filter
│   └── tailwind.config.js # Konfigurasi kustom tema warna dan font Tailwind
└── img/                 # Folder gambar untuk logo dan aset
    ├── kwarda.png
    ├── logo.png
    ├── pramuka.png
    ├── racanaunsri.png
    ├── unsri.png
    └── wosm.png
```

## Maintenance

### 1. Gambar & Logo Bagian Atas
Jejeran logo di bagian paling atas bergantung pada file gambar yang ada di folder `img/`. Pastikan nama file berikut ada di dalam folder agar logo tidak rusak:
- `unsri.png`
- `wosm.png`
- `pramuka.png` (Tunas Kelapa)
- `kwarda.png` (Kwarda Sumsel)
- `racanaunsri.png`
- `logo.png` (Logo Utama SYC)

### 2. Ubah Tanggal Countdown Timer
Buka `js/script.js` dan cari fungsi `initCountdown()`. Ubah `targetDate` sesuai dengan tanggal target:
```javascript
const targetDate = new Date('2026-10-17T09:00:00');
```

### 3. Mengubah Tautan (Link)
Buka `index.html` dan cari elemen `<a class="link-card ...">`. 
- Ubah atribut `href` dengan link tujuanmu (Grup WA, Google Form pendaftaran, Google Drive buku panduan, dll).
- Jika ada tautan yang sudah tidak diperlukan, kamu cukup menghapus blok elemen `<a>` tersebut dari `index.html`.

### 4. Mengubah Kontak Narahubung & Sosial Media
Di bagian paling bawah `index.html`:
- Narahubung: Cari tautan `href="https://wa.me/..."` dan ubah nomor serta nama jika panitia berganti.
- Email: Cari teks `mailto:` pada tautan email dan perbarui jika alamat email berubah.

### 5. localhost
jalankan Python server:
```bash
python -m http.server 8000
```
Buka browser ke `http://localhost:8000`.
