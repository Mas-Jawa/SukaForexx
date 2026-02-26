# SukaForex IB Trading Website

Website IB Trading Forex yang modern dan responsif dengan animasi smooth menggunakan React, Tailwind CSS, dan Framer Motion.

## 🚀 Fitur Utama

- ✅ **Loading Screen** dengan animasi "SukaForex" dan delay 2 detik
- ✅ **SPA (Single Page Application)** dengan navigasi smooth
- ✅ **Header Responsif** dengan logo dan hamburger menu
- ✅ **3 Halaman Utama**:
  - Beranda: Konten lengkap tentang trading forex
  - Join: Link broker dan social media
  - Edukasi Trading: Materi edukasi forex
- ✅ **Animasi Smooth** menggunakan Framer Motion
- ✅ **Desain Modern** dengan gradient dan glassmorphism
- ✅ **Fully Responsive** untuk mobile dan desktop

## 📦 Teknologi yang Digunakan

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasi
- **Lucide React** - Icons

## 🛠️ Cara Menjalankan Lokal

### Install Dependencies
```bash
npm install
```

### Jalankan Development Server
```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`

### Build untuk Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deploy ke Vercel

### Cara 1: Melalui Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Cara 2: Melalui Vercel Dashboard

1. Push code ke GitHub/GitLab/Bitbucket
2. Buka [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import repository
5. Vercel akan otomatis mendeteksi konfigurasi Vite
6. Klik "Deploy"

## 📝 Konfigurasi Link

Untuk mengubah link broker dan social media, edit file `src/pages/Join.jsx`:

```jsx
const brokers = [
  {
    name: 'Exness',
    url: 'https://www.exness.com', // Ganti dengan link IB Anda
    color: 'from-blue-600 to-blue-800',
    logo: 'EX'
  },
  // ... broker lainnya
];

const socials = [
  {
    name: 'Telegram',
    url: 'https://t.me/sukaforex', // Ganti dengan link Telegram Anda
    color: 'from-blue-400 to-blue-600',
    icon: '📱'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6281234567890', // Ganti dengan nomor WhatsApp Anda
    color: 'from-green-400 to-green-600',
    icon: '💬'
  },
];
```

## 🎨 Customisasi Warna

Untuk mengubah warna tema, edit file `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      forex: {
        primary: '#1a1a2e',    // Background utama
        secondary: '#16213e',  // Background card
        accent: '#0f3460',     // Aksen
        gold: '#ffd700',       // Warna emas
        green: '#00ff88',      // Warna hijau
        red: '#ff4757'         // Warna merah
      }
    }
  }
}
```

## 📱 Struktur Halaman

### Beranda
- Welcome animation
- Apa itu Trading Forex
- Apa itu Teknikal Analisa
- Teknikal Analisa Paling Populer
- Apa itu Bot EA Trading
- CTA untuk join

### Join
- Link broker (Exness, HFM, XM)
- Link social media (Telegram, WhatsApp)
- Informasi penting

### Edukasi Trading
- Pengantar edukasi forex
- Dasar-dasar trading forex
- Manajemen risiko dan strategi
- Tips memulai
- Peringatan penting

## ⚠️ Catatan Penting

- Website ini sudah siap untuk deploy ke Vercel
- Pastikan untuk mengganti semua link broker dan social media dengan link IB Anda
- Website sudah fully responsive dan tested
- Semua animasi sudah dioptimalkan untuk performa

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, hubungi melalui:
- Telegram: [Link Telegram Anda]
- WhatsApp: [Link WhatsApp Anda]

---

**Created with ❤️ by SuperNinja**