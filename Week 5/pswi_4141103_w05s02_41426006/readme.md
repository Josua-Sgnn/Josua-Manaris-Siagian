-Aku menambahi gambar di bagian kegiatan HTML.
-aku mengambil gambar dari web , gamabar band ada 3 yang kusertakan pada kegiatan html
 di bagian css
-aku memakai AI untuk mengartikan arti dari code css ku
-aku memakai validator nu untuk mencek html ku agar melihat apakah dia berjalan dengan baik atau ada yang error

==--Latihan Manndiri
no |Input / Kondisi                             |Tindakan                                     |Hasil Aktual
                                                                                              
1. |Kasus Normal                                |Buka halaman pada viewport 1200px.           |Tiga card sejajar secara horizontal dalam satu 
   | (Contoh: 3 Card, layar laptop/1200px)      |                                             |baris, rapi dengan gap 1rem.
   |                                            |                                             |
2. |Kasus Batas                                 |Ubah lebar viewport ke 360px via             |Card otomatis wrap menjadi 1 kolom vertikal. Teks 
   |(Contoh: Viewport 360px & Judul Panjang)    |DevTools dan tambahkan judul teks panjang.   |judul panjang turun ke bawah (break) tanpa 
   |                                            |                                             |menyebabkan overflow.
   |                                            |                                             |
3. |Kasus Gagal / Perbaikan                     |Hapus sementara                              |Teks judul panjang melebihi lebar card (overflow 
   |(Contoh: Tanpa overflow-wrap)               |(overflow-wrap: anywhere;) pada CSS.         |keluar border). Setelah CSS dikembalikan, tampilan 
   |                                            |                                             |kembali rapi.


no |Status / Bukti
1. |Lolos (Simpan screenshot: bukti/normal-1200px.png)
2. |Selesai Diperbaiki (Simpan screenshot: bukti/fix-overflow.png)
