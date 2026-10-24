penjelasan;
3. RESET UKURAN KOTAK
--ukuran width suatu elemen sudah memperhitungkan padding dan border.
Ini membantu supaya ukuran kotak/form tidak melebar melebihi ukuran yang ditentukan.
--Saya menghapus ukuran width eksperimen yang terlalu kecil dan menambahkan box-sizing: border-box pada elemen dan pseudo-element. Kemudian saya menggunakan width: 90%, max-width: 60rem, dan margin-inline: auto pada elemen main. Pada ukuran browser yang lebih kecil, main mengikuti sekitar 90% lebar layar. Pada browser yang lebih besar, lebar main berhenti pada batas 60rem. Form tetap berada di dalam main dan tidak melewati batas wadah

4. Token Warna dan Jarak
Saya membuat token warna dan jarak pada root menggunakan --brand, space  surface, dan ink. Setelah nilai brand  diubah satu kali, komponen yang menggunakan var(--brand)` ikut berubah secara otomatis. Tidak menggunakan !important.

5. TIPOGRAFI DAN UNIT
--1rem digunakan untuk ukuran teks normal, sedangkan 1.5rem membuat teks menjadi lebih besar. Sementara itu, zoom browser 200% memperbesar seluruh tampilan halaman. Pengujian ini dilakukan untuk memastikan teks tetap terbaca dan konten tidak terpotong saat ukuran diperbesar.

6. ORGANISASI DAN AUDIT
Saya merapikan CSS menjadi bagian base, wadah, komponen, dan interaction states. Saya juga menambahkan focus-visible agar kontrol tetap terlihat saat digunakan dengan keyboard.
dan saat saya menekan tab dia berjalan dan saat menekan tab + spce ia berarti menuju tombol button dan berhsil

7. Matriks Uji
**Kasus normal**
Input/kondisi: Mengisi form dengan data yang benar.
Tindakan: Mengisi seluruh kolom yang wajib diisi.
Hasil aktual: Form dapat diisi dan digunakan dengan normal.
Status/bukti: Berhasil, dibuktikan dengan screenshot form.

**Kasus batas**
Input/kondisi: Zoom browser 200%.
Tindakan: Memperbesar tampilan browser hingga 200%.
Hasil aktual: Konten tetap tersedia dan masih dapat digunakan dengan scroll.
Status/bukti: Berhasil, dibuktikan dengan screenshot zoom 200%.

**Kasus batas**
Input/kondisi: Menggunakan teks/catatan yang panjang.
Tindakan: Memasukkan teks panjang pada bagian catatan.
Hasil aktual: Teks tetap berada di dalam area dan tidak terpotong.
Status/bukti: Berhasil, dibuktikan dengan screenshot.

**Kasus gagal**
Input/kondisi: Mengubah nilai `--brand`.
Tindakan: Mengganti nilai `--brand` pada `:root` satu kali.
Hasil aktual: Komponen yang menggunakan `var(--brand)` ikut berubah.
Status/bukti: Berhasil, dibuktikan dengan perbandingan sebelum dan sesudah.

**Kasus gagal**
Input/kondisi: Navigasi menggunakan keyboard.
Tindakan: Menekan tombol Tab untuk berpindah antar kontrol.
Hasil aktual: Fokus terlihat pada input dan tombol melalui outline.
Status/bukti: Berhasil, dibuktikan dengan screenshot saat elemen mendapat fokus.



