--perubahan yang dilakukan
=Pada branch fitur-petunjuk, ditambahkan petunjuk format pada form di daftar.html (misalnya format nomor HP atau email) agar pengguna lebih mudah mengisi form dengan benar.
~Hasil
=Perubahan petunjuk form tercatat pada branch fitur-petunjuk, sedangkan branch utama tetap tidak berubah. Hal ini dapat dibuktikan dengan berpindah branch (git switch master) dan melihat bahwa petunjuk tersebut tidak ada di branch utama.
#Fungsi

Repository dibuat dengan `git init`, lalu commit awal dibuat di branch utama
sebagai versi dasar proyek. Branch `fitur-petunjuk` dibuat sebagai cabang
terpisah untuk mengerjakan fitur baru (petunjuk format pada form pendaftaran)
tanpa mengganggu kode di branch utama. Jika hasilnya baik, branch fitur
digabungkan (merge) ke branch utama. Jika terjadi kesalahan, branch utama
tetap aman.

#Perintah yang digunakan

| Perintah | Fungsi |
|---|---|
| `git init` | Membuat repository Git baru di folder proyek |
| `git status` | Melihat kondisi repository dan file yang berubah |
| `git branch` | Melihat daftar branch dan branch yang aktif |
| `git switch -c fitur-petunjuk` | Membuat branch baru dan langsung berpindah ke sana |
| `git diff` | Melihat perubahan file sebelum di-commit |
| `git add` | Menandai file yang akan masuk commit |
| `git commit -m "..."` | Menyimpan perubahan sebagai riwayat |
| `git log --oneline` | Melihat riwayat commit secara ringkas |
| `git switch main` | Kembali ke branch utama |
| `git merge fitur-petunjuk` | Menggabungkan perubahan fitur ke branch utama |

////Laporan
_aku mengmbl gambar pada html ku dari web
_aku mengmbil materi atau arahan agar aku tau unutk melakukan perintah git pada program ku dengan bantuan Ai
_aku memakai bantuan internet saat web ku rusak
_untuk laporan hasil ku buktikan di folder Bukti dengan Screenshoot
