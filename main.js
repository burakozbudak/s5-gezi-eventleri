/*
CHALLENGE 1:
Tüm <img> etiketlerine mouseenter ve mouseleave eventleri ekleyin.
- Mouse üzerine geldiğinde (mouseenter): ilgili resme "grayscale" class'ı ekleyin.
- Mouse çıktığında (mouseleave): "grayscale" class'ını kaldırın.
*/

/*
CHALLENGE 2:
Sayfa aktifken (herhangi bir yere tıklandığında), klavye dinlemeye başlasın.
- Klavyeden "1" tuşuna basılırsa <body> elementine "theme1" class'ı eklensin
- "2" → "theme2", "3" → "theme3" olarak eklensin
- "Escape" (Esc) tuşuna basılırsa body'deki tüm bu class'lar kaldırılsın
NOT: Klavye eventlerini document yerine **window** nesnesine ekleyin.
*/

/*
CHALLENGE 3:
<input id="full_name"> alanına yazı yazıldıkça:
- Girilen metni otomatik olarak BÜYÜK HARFE çevirin
- Metin 5 karakterden UZUNSA <button> elementini "enabled" yapın
- Aksi halde (5 veya daha az karakter) buton "disabled" olmalı
*/

/*
CHALLENGE 4:
Form submit edildiğinde (Kaydet butonuna basıldığında):
- Input alanındaki metni alıp, <p id="submitResult"> içerisine şu metni yazın:
  "{inputa_yazılan_metin} başarı ile kaydedildi."
- Input alanını temizleyin
- <button> tekrar disabled hale gelsin
*/
const images = document.querySelectorAll('img');
images.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('grayscale');
  });
  img.addEventListener('mouseleave', () => {
    img.classList.remove('grayscale');
  });
});
window.addEventListener('keydown', (event) => {
  const body = document.body;
  switch (event.key) {
    case '1':
      body.classList.remove('theme1', 'theme2', 'theme3');
      body.classList.add('theme1');
      break;
    case '2':
      body.classList.remove('theme1', 'theme2', 'theme3');
      body.classList.add('theme2');
      break;
    case '3':
      body.classList.remove('theme1', 'theme2', 'theme3');
      body.classList.add('theme3');
      break;
    case 'Escape':
      body.classList.remove('theme1', 'theme2', 'theme3');
      break;
  }
});
const fullNameInput = document.getElementById('full_name');
const submitButton = document.querySelector('button');
const submitResult = document.getElementById('submitResult');
