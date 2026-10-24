const greetingButton =
 document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
 alert('thanks for press that button');
 console.log('main.js berhasil dijalankan');
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form berhasil dikirim (Data Fiktif)!');
    });
  }
});