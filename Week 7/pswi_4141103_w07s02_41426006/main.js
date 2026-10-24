// Memastikan DOM telah dimuat sepenuhnya sebelum skrip dijalankan
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const messageInput = document.getElementById('message');

            // Validasi sederhana untuk memastikan data tidak kosong
            if (nameInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Harap isi semua kolom sebelum mengirimkan formulir.');
                return;
            }

            console.log('Formulir berhasil disubmit:', {
                name: nameInput.value,
                message: messageInput.value
            });

            alert('Terima kasih, pesan Anda berhasil diproses!');
            contactForm.reset();
        });
    }
});