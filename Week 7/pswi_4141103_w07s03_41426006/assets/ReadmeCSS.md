# Penjelasan CSS Situs Komunitas Web Mahasiswa

Dokumen ini menjelaskan arti setiap kode di dua file CSS:

| File | Dipakai oleh | Tampilan |
|---|---|---|
| `style.css` | `daftar.html` | Hijau tua, menu menempel di atas |
| `situs.css` | `index.html`, `kegiatan.html`, `kontak.html`, `Catalog.html` | Biru indigo, kuning sebagai aksen, judul bergaya serif |

---

## 1. Cara membaca satu aturan CSS

```css
main {                 /* selector: elemen mana yang diatur */
    padding: 1.5rem;   /* properti: nilai; */
}
```

- **Selector** menentukan elemen HTML yang dikenai gaya.
- **Properti** adalah hal yang diatur, misalnya warna, jarak, atau ukuran.
- **Nilai** adalah isi pengaturannya.
- Teks di antara `/* ... */` adalah komentar. Browser mengabaikannya.

---

## 2. Kamus selector

| Selector | Arti | Contoh |
|---|---|---|
| `main` | Semua elemen `<main>` | `main { ... }` |
| `.card` | Elemen ber-`class="card"` | `.card { ... }` |
| `#kode-help` | Elemen ber-`id="kode-help"` | `#kode-help { ... }` |
| `A, B` | Berlaku untuk A **dan** B | `select, textarea { ... }` |
| `A B` | B di dalam A, di tingkat mana pun | `form figure` |
| `A > B` | B yang **langsung** berada di dalam A | `main > p` |
| `A + B` | B yang tepat **setelah** A (sejajar) | `main > section + section` |
| `A[atribut="x"]` | Elemen A dengan atribut tertentu | `a[aria-current="page"]` |
| `:not(...)` | Kecuali yang cocok dengan isi kurung | `input:not([type="radio"])` |
| `:hover` | Saat kursor di atas elemen | `a:hover` |
| `:active` | Saat elemen sedang ditekan | `form button:active` |
| `:focus-visible` | Saat elemen dipilih lewat keyboard (Tab) | `input:focus-visible` |
| `:user-invalid` | Saat isian salah **setelah** pengguna mengisinya | `input:user-invalid` |
| `:empty` | Elemen yang benar-benar kosong | `nav ul:empty` |
| `:nth-child(even)` | Anak urutan genap (2, 4, 6, ...) | `tbody tr:nth-child(even)` |
| `:last-child` | Anak terakhir | `tbody tr:last-child td` |
| `*` | Semua elemen | `* { ... }` |
| `::before`, `::after` | Elemen bayangan sebelum/sesudah isi elemen | `*::before` |

---

## 3. Kamus satuan dan fungsi

| Kode | Arti |
|---|---|
| `rem` | Satuan relatif terhadap ukuran font dasar (biasanya 16px). `1rem` = 16px, `2rem` = 32px. |
| `px` | Piksel, ukuran tetap. |
| `%` | Persen dari ukuran elemen induk. |
| `vw` | 1% dari lebar layar. `4vw` = 4% lebar layar. |
| `#25286b` | Warna format heksadesimal (merah-hijau-biru). |
| `rgba(r, g, b, a)` | Warna dengan transparansi; `a` dari 0 (bening) sampai 1 (pekat). |
| `var(--nama)` | Mengambil nilai variabel yang dibuat di `:root`. |
| `calc(100% - 2rem)` | Menghitung ukuran langsung di CSS. |
| `min(a, b)` | Memakai nilai yang **terkecil** dari a dan b. |
| `max(a, b)` | Memakai nilai yang **terbesar** dari a dan b. |
| `clamp(min, ideal, max)` | Nilai `ideal`, tapi tidak boleh lebih kecil dari `min` atau lebih besar dari `max`. |
| `linear-gradient(...)` | Latar gradasi warna. |
| `repeat(auto-fit, minmax(14rem, 1fr))` | Membuat kolom grid otomatis; tiap kolom minimal 14rem dan sisa ruang dibagi rata. |

---

## 4. Kamus properti

### Ukuran dan jarak
| Properti | Arti |
|---|---|
| `width` / `height` | Lebar / tinggi elemen. |
| `max-width` / `max-height` | Batas **maksimal** lebar / tinggi. |
| `min-width` / `min-height` | Batas **minimal** lebar / tinggi. |
| `margin` | Jarak **di luar** elemen. `margin: 2rem auto 0` = atas 2rem, kiri-kanan otomatis (jadi di tengah), bawah 0. |
| `margin-inline: auto` | Margin kiri dan kanan otomatis, sehingga elemen berada di tengah. |
| `padding` | Jarak **di dalam** elemen, antara isi dan tepi. `padding: 0.7rem 0.85rem` = atas-bawah 0.7rem, kiri-kanan 0.85rem. |
| `gap` | Jarak antar item di dalam flex atau grid. |
| `box-sizing: border-box` | Lebar elemen sudah termasuk padding dan border, jadi ukurannya mudah diprediksi. |

### Warna dan latar
| Properti | Arti |
|---|---|
| `color` | Warna teks. |
| `background` | Latar elemen (warna atau gradasi). |
| `background-image` / `background-repeat` / `background-position` / `background-size` | Gambar latar, apakah diulang, posisinya, dan ukurannya. Dipakai untuk panah kecil di dropdown. |
| `accent-color` | Warna bawaan radio dan checkbox. |

### Garis, sudut, dan bayangan
| Properti | Arti |
|---|---|
| `border` | Garis tepi. `1px solid #ccc` = tebal 1px, polos, abu. |
| `border-bottom` / `border-left` / `border-top` | Garis tepi di satu sisi saja. |
| `border-radius` | Membulatkan sudut. `999px` membuat bentuk pil. |
| `box-shadow` | Bayangan: `geser-x geser-y blur warna`. `0 0 0 3px ...` dipakai sebagai cincin di sekeliling kolom. |
| `outline` | Garis di luar elemen, dipakai sebagai penanda fokus. |
| `outline-offset` | Jarak outline dari elemen. |
| `border-collapse` | Apakah garis antar sel tabel digabung (`collapse`) atau terpisah (`separate`). |
| `border-spacing` | Jarak antar sel tabel (dipakai bila `separate`). |

### Teks
| Properti | Arti |
|---|---|
| `font-family` | Jenis huruf. Urutannya adalah cadangan: bila font pertama tidak ada, dipakai berikutnya. |
| `font-size` | Ukuran huruf. |
| `font-weight` | Ketebalan huruf. `600` = tebal, `700` = lebih tebal. |
| `font: inherit` | Memakai font yang sama dengan elemen induk. Kolom isian dan tombol biasanya punya font sendiri, jadi ini menyamakannya. |
| `line-height` | Tinggi baris. `1.6` = 1,6 kali ukuran huruf. |
| `letter-spacing` | Jarak antar huruf. |
| `text-align` | Rata teks: `left`, `center`, `right`. |
| `text-decoration: none` | Menghilangkan garis bawah tautan. |
| `text-underline-offset` | Jarak garis bawah tautan dari teks. |
| `white-space: nowrap` | Teks tidak boleh turun ke baris baru. |

### Tata letak
| Properti | Arti |
|---|---|
| `display: block` | Elemen memenuhi satu baris penuh. |
| `display: inline-block` | Elemen sebaris dengan teks, tapi bisa diberi lebar, tinggi, dan padding. |
| `display: flex` | Anak-anaknya disusun sejajar dalam satu baris (atau kolom). |
| `display: grid` | Anak-anaknya disusun dalam kotak kolom dan baris. |
| `display: none` | Elemen disembunyikan sepenuhnya. |
| `flex-wrap: wrap` | Item boleh turun ke baris berikutnya bila tidak muat. |
| `flex-direction: column` | Susunan flex menjadi atas ke bawah. |
| `flex-grow: 1` | Item mengisi sisa ruang yang ada. |
| `align-items` / `justify-content` | Perataan item flex secara tegak / mendatar. `center` = di tengah. |
| `grid-template-columns` | Menentukan jumlah dan lebar kolom grid. |
| `order` | Mengubah urutan tampil item flex tanpa mengubah HTML. |
| `position: sticky` + `top: 0` | Elemen ikut ter-scroll, lalu menempel di atas layar. |
| `z-index` | Urutan tumpukan; angka besar berada di depan. |
| `vertical-align: middle` | Menyejajarkan elemen sebaris di tengah garis teks. |
| `list-style: none` | Menghilangkan titik atau angka pada daftar. |
| `overflow: hidden` | Bagian yang keluar dari kotak dipotong. |
| `overflow-x: auto` | Muncul scroll mendatar bila isi terlalu lebar. |

### Gambar
| Properti | Arti |
|---|---|
| `object-fit: cover` | Gambar memenuhi kotak dan dipotong, tanpa gepeng. |
| `object-fit: contain` | Gambar tampil utuh di dalam kotak, tanpa dipotong. |
| `aspect-ratio: 4 / 3` | Menjaga perbandingan lebar dan tinggi kotak. |

### Interaksi dan animasi
| Properti | Arti |
|---|---|
| `cursor: pointer` | Kursor berubah jadi tangan. |
| `transition` | Perubahan gaya berjalan halus. `0.15s ease` = 0,15 detik. |
| `transform: translateY(1px)` | Menggeser elemen 1px ke bawah. |
| `resize: vertical` | Textarea hanya bisa diperbesar ke bawah. |
| `appearance: none` | Menghapus tampilan bawaan browser, misalnya pada dropdown. |
| `caption-side: top` | Judul tabel ditaruh di atas tabel. |

---

## 5. Isi `style.css` (untuk `daftar.html`)

| Bagian | Fungsi |
|---|---|
| `:root` | Menyimpan variabel warna, radius, dan font supaya mudah diganti di satu tempat. |
| `*, *::before, *::after` | Menerapkan `border-box` ke semua elemen. |
| `html` | `-webkit-text-size-adjust: 100%` mencegah HP memperbesar teks sendiri. |
| `body` | Menentukan latar, warna teks, font, dan tinggi baris untuk seluruh halaman. |
| `main` | Jadi kartu putih di tengah: lebarnya `min(38rem, 100% - 2rem)`, ada garis tepi, sudut bulat, dan bayangan tipis. |
| `h1` | Judul yang ukurannya otomatis menyesuaikan layar lewat `clamp()`. |
| `main > p` | Paragraf pembuka berwarna abu. |
| `figure`, `img` | Menghapus margin bawaan. Gambar tidak boleh melebihi lebar kartu. |
| `main > figure img` | Banner Rinjani: lebar penuh, tinggi 11-15rem, dipotong dengan `cover`. |
| `form figure`, `form figure img` | Gambar Naga ditaruh di kotak abu muda, rata tengah, tinggi maksimal 16rem. |
| `figcaption` | Keterangan gambar berukuran kecil dan abu. |
| `form > label` | Label tampil di atas kolom, tebal, dengan jarak atas 1.25rem. |
| `input:not([type="radio"]):not([type="checkbox"]), select, textarea` | Menyeragamkan semua kolom isian: lebar penuh, padding, garis tepi, sudut bulat. Radio dan checkbox dikecualikan karena diatur terpisah. |
| `...:hover` | Garis tepi kolom sedikit lebih gelap saat kursor di atasnya. |
| `select` | Menghapus tampilan bawaan, lalu memasang panah kecil (gambar SVG) di sisi kanan. |
| `textarea` | Tinggi minimal 7rem dan hanya bisa diubah ukurannya ke bawah. |
| `#kode-help` | Teks bantuan "Contoh: 001234" berukuran kecil dan abu. |
| `...:focus-visible` | Saat kolom dipilih: garis tepi dan cincin berwarna biru. |
| `...:user-invalid` | Garis tepi merah untuk isian yang tidak valid, tapi baru setelah pengguna mengisinya. |
| `fieldset`, `legend` | Kotak kelompok radio dan checkbox, beserta judulnya. `min-width: 0` mencegah kotak melebar keluar layar di sebagian browser. |
| `fieldset input[type=...]` | Radio dan checkbox dibesarkan sedikit, berwarna hijau, dan sejajar dengan labelnya. |
| `fieldset label` | Label di dalam fieldset berukuran normal, sebaris, dan bisa diklik. |
| `form button` | Tombol Daftar: hijau, lebar penuh, tebal. Efek `:hover` membuatnya lebih gelap dan `:active` menggesernya 1px ke bawah. |
| `@media (min-width: 40rem)` | Di layar lebar: kartu lebih longgar dan tombol tidak lagi selebar kartu. |
| `@media (prefers-reduced-motion: reduce)` | Mematikan animasi bagi pengguna yang meminta gerakan dikurangi. `!important` memastikan aturan ini menang. |
| `a`, `a:hover`, `a:focus-visible` | Warna tautan, warna saat disorot, dan penanda saat dipilih lewat keyboard. |
| `body > nav, body > ul` | Bilah menu menempel di atas dengan latar gradasi hijau dan bayangan. |
| `body > ul, nav ul` | Daftar menu disusun mendatar (`flex`), rata tengah, tanpa titik daftar. `padding: ... max(1rem, calc((100% - 60rem) / 2))` membuat isi menu tetap berada di tengah pada layar yang sangat lebar. |
| `nav a, body > ul a` | Tautan menu berbentuk pil, tanpa garis bawah. |
| `nav a[aria-current="page"]` | Tautan halaman yang sedang dibuka berwarna putih. |
| `@media (max-width: 30rem)` | Di layar sempit, tautan menu dikecilkan agar muat. |

---

## 6. Isi `situs.css` (untuk halaman lain)

Variabel, reset, dan dasar halaman serupa dengan `style.css`. Bagian yang khas:

| Bagian | Fungsi |
|---|---|
| `:root` | Palet indigo (`--brand`) dengan aksen kuning (`--accent`), ditambah `--serif` untuk font judul dan `--w` untuk lebar konten (60rem). |
| `header, body > h1, body > nav` | Membuat blok kepala berwarna indigo. `body > h1` dan `body > nav` ada karena `kontak.html` tidak memakai `<header>`. |
| `header, body > nav` (garis bawah) | Garis kuning 4px di dasar kepala halaman. |
| `header h1, body > h1` | Judul putih, di tengah, memakai font serif. |
| `nav, nav ul` | Menu disusun mendatar dengan flex. **`font-size: 0`** menyembunyikan tanda `\|` yang ada di HTML, lalu `nav a` mengembalikan ukuran 1rem khusus untuk tautan. |
| `nav ul:empty` | Menyembunyikan `<ul class="nav-list"></ul>` yang kosong supaya tidak memakan ruang. |
| `nav a` dan variannya | Tautan menu berbentuk kotak membulat. Saat `:hover` agak terang; saat `aria-current="page"` berwarna kuning. |
| `main, body > aside, body > footer` | Konten dibatasi lebar `min(60rem, 100% - 2rem)` dan diletakkan di tengah. |
| `main > h1` | Judul "Perkenalan Diri" di `index.html`. |
| `main > p` | Baris profil (Nama, NIM, Kelas) berbentuk kotak putih dengan garis kuning di kiri. |
| `main > section + section` | Jarak 3rem antar bagian halaman. |
| `main > section > h2` | Judul bagian. `inline-block` membuat garis kuning di bawahnya hanya selebar teks. |
| `main figure`, `body > figure`, `figure img` | Foto dibatasi tinggi 24rem dan dipotong rapi. Foto di `index.html` yang berada di luar `<main>` dibuat lebih sempit (40rem). |
| `table` | Tabel jadwal dengan `border-collapse: separate`, `border-spacing: 0`, dan `overflow: hidden` supaya sudut tabel bisa membulat. |
| `caption` | Judul tabel di atas tabel. |
| `th, td` | Padding sel dan garis pemisah antar baris. Garis `border="1"` bawaan HTML ditimpa di sini. |
| `th` | Baris judul tabel berlatar indigo dan berteks putih. |
| `tbody tr:nth-child(even)` | Baris genap diberi warna lebih muda (belang-belang). |
| `tbody tr:hover` | Baris disorot saat kursor di atasnya. |
| `.cards, .catalog` | Grid kartu otomatis; jumlah kolom menyesuaikan lebar layar. |
| `.card` | Kartu putih dengan garis kuning di atas. `flex-direction: column` menyusun isinya atas ke bawah. |
| `.card:hover` | Kartu naik 3px dan bayangannya menebal. |
| `.card p` | `flex-grow: 1` mendorong gambar ke dasar kartu, sehingga gambar sejajar antar kartu. |
| `.card img` | Gambar berperbandingan 4:3 dan dipotong dengan `cover`. |
| `.card li`, `.card li a` | `<li>` di dalam kartu tidak diberi titik; tautan di dalamnya jadi tombol berbingkai. |
| `form`, `.form-group`, `label` | Panel putih berisi formulir kontak, dengan label di atas tiap kolom. |
| `input, textarea` | Kolom berlatar biru muda dengan garis tepi tebal 2px. Saat dipilih, muncul outline kuning dan garis tepi indigo. |
| `form button` | Tombol Kirim berwarna kuning berbentuk pil. |
| `body > aside` | Kotak "Informasi Tambahan" dengan garis kuning di kiri. |
| `body > footer` | Kotak kontak. `footer address { order: 1 }` dan `footer > p { order: 2 }` memindahkan hak cipta ke bagian bawah tanpa mengubah HTML. |
| `@media (max-width: 40rem)` | Di HP, tabel bisa digeser mendatar dan menu dikecilkan. |
