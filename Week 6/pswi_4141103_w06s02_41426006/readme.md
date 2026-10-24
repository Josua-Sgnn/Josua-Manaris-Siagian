3. Starter Mobile
Langkah pertama adalah menambahkan kode berikut pada bagian <head> di file HTML agar halaman menyesuaikan ukuran layar perangkat.

<meta name="viewport" content="width=device-width, initial-scale=1">

Selanjutnya, pengujian dilakukan pada lebar layar minimum 320px dengan menerapkan layout satu kolom menggunakan display: grid dan grid-template-columns: 1fr.

Hasil pengujian: Seluruh teks, gambar, dan tautan tampil dengan baik secara vertikal tanpa terpotong pada layar 320px.
4. Breakpoint Konten
Pengujian dilakukan pada lebar 767px, 768px, dan 769px untuk memastikan perpindahan layout berjalan sesuai breakpoint.

Hasil pengujian:

767px: Tampilan masih menggunakan satu kolom.

768px: Layout berubah menjadi dua kolom.

769px: Tampilan tetap menggunakan dua kolom.
5. Navigasi dan Formulir

Navigasi diatur menggunakan flex-wrap: wrap agar menu yang panjang dapat berpindah ke baris berikutnya. Sementara itu, elemen input, select, dan textarea diberi batas lebar max-width: 100% agar tetap berada di dalam kontainer.
Hasil pengujian:
Menu navigasi dapat membungkus ke baris berikutnya tanpa menimbulkan overflow horizontal.
Formulir menyesuaikan lebar kontainer.
Tombol Tab dapat digunakan untuk berpindah antar-elemen dengan indikator fokus yang tetap terlihat.
6. Matriks Viewport
Pengujian responsivitas dilakukan pada tiga ukuran layar, yaitu 320px, 768px, dan 1200px
Hasil pengujian:
Konten tetap terbaca saat zoom 200% tanpa scroll horizontal yang mengganggu.
Overflow berhasil diperbaiki dengan mengganti ukuran tetap menjadi ukuran fleksibel atau menambahkan batas lebar maksimum.
