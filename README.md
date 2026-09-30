# 🎮 Sudoku Master - Modern Glassmorphism Edition

Game Sudoku interaktif dengan desain visual **Glassmorphism**, generator puzzle cerdas, sintetis audio mandiri berbasis Web Audio API, dan siap di-deploy ke **Firebase Hosting**.

Repo GitHub: [https://github.com/ceciliarenata/game-sudoku-mb2](https://github.com/ceciliarenata/game-sudoku-mb2)

---

## ✨ Fitur Unggulan

- **💎 Desain Glassmorphism & Responsif**: UI modern dengan aksen neon glowing, font Google *Outfit* & *JetBrains Mono*, serta dukungan Dark Mode dan Light Mode.
- **👤 Sistem Akun & Keunikan Username**: Sebelum bermain, pemain diwajibkan mendaftar akun dengan username yang **unik** (tidak boleh sama dengan pemain lain) serta memilih avatar favorit. Dilengkapi fitur ganti akun dan halaman profil statistik pemain.
- **❤️ 3 Kesempatan Gagal (Hearts System)**: Setiap pemain hanya diberikan maksimal 3 kali kesempatan gagal per permainan. Indikator visual 3 hati (`❤️❤️❤️` ➔ `🖤❤️❤️` ➔ `🖤🖤❤️` ➔ `🖤🖤🖤`) dan peringatan game over dramatis saat kesempatan habis.
- **🏆 Sistem Skor Dinamis & Combo Streak**: Perhitungan skor real-time berdasarkan tingkat kesulitan, bonus kecepatan waktu, bonus combo beruntun (*streak combo*), serta penalti kesalahan dan hint.
- **🥇 Papan Skor & Leaderboard Global**: Menampilkan podium juara 3 teratas (Emas, Perak, Perunggu) serta tabel peringkat lengkap dengan filter berdasarkan tingkat kesulitan.
- **🧠 6 Tingkat Kesulitan Puzzle**: Mulai dari tingkat paling santai hingga tantangan paling ekstrem:
  - 🟢 **Sangat Mudah** (*Beginner* - 48 angka terbuka)
  - 🔵 **Mudah** (*Easy* - 38 angka terbuka)
  - 🟣 **Sedang** (*Medium* - 30 angka terbuka)
  - 🟠 **Sulit** (*Hard* - 25 angka terbuka)
  - 🔴 **Pakar** (*Expert* - 22 angka terbuka)
  - 🔥 **Ekstrem** (*Extreme* - 18 angka terbuka, mendekati batas minimum teori Sudoku!)
- **✏️ Mode Catatan (Pencil Mode)**: Tambahkan angka kemungkinan kecil (1-9) langsung ke dalam sel untuk mempermudah perhitungan.
- **💡 Smart Hint**: Bantuan angka pintar yang memverifikasi solusi terbaik.
- **🔄 Undo / Redo & Erase**: Kemudahan memperbaiki langkah sebelumnya.
- **🔊 Web Audio API Synthesizer**: Prosedural audio sound effects (termasuk efek combo, game over buzzer, leaderboard fanfare, dan kemenangan) tanpa file eksternal.
- **🎉 Animasi Confetti Partikel**: Animasi perayaan penuh saat puzzle berhasil diselesaikan.
- **⏱️ Timer & Mistakes Counter**: Pengukur waktu (dengan jeda/pause) dan pembatas kesalahan (maksimal 3 kesalahan).
- **⌨️ Dukungan Keyboard Penuh**:
  - `Panah / WASD`: Pindah sel
  - `1-9`: Isi angka
  - `Backspace / Delete`: Hapus
  - `N`: Toggle mode catatan
  - `H`: Menggunakan hint
  - `U`: Undo
  - `Spasi`: Jeda permainan

---

## 🚀 Menjalankan Secara Lokal

Cukup buka file `index.html` langsung di browser favorit Anda, atau jalankan menggunakan server lokal:

```bash
# Menggunakan npx serve
npx serve .
```

---

## 🔥 Integrasi & Deploy ke Firebase

Proyek ini telah dikonfigurasi dengan file `firebase.json` dan `.firebaserc`.

### Langkah Deploy ke Firebase Hosting:

1. **Login ke akun Firebase**:
   ```bash
   npx firebase login
   ```

2. **Inisialisasi atau pilih project Firebase Anda**:
   ```bash
   npx firebase use --add
   ```
   *(Pilih project Firebase yang telah Anda buat di [Firebase Console](https://console.firebase.google.com/))*

3. **Deploy aplikasi**:
   ```bash
   npm run deploy
   # atau:
   npx firebase deploy --only hosting
   ```

Setelah deploy selesai, aplikasi Sudoku akan langsung aktif secara global melalui URL Firebase Hosting (misalnya: `https://<project-id>.web.app`).

---

## 🛠️ Lisensi & Kontributor

Dibuat oleh [ceciliarenata](https://github.com/ceciliarenata).
Lisensi MIT.
