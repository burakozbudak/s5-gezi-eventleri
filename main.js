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

if (fullNameInput && submitButton && submitResult) {
  fullNameInput.addEventListener('input', () => {
    const inputValue = fullNameInput.value.toUpperCase();
    fullNameInput.value = inputValue;
    if (inputValue.length > 5) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Formun submit edilmesini engelle
    const inputValue = fullNameInput.value;
    submitResult.textContent = `${inputValue} başarı ile kaydedildi.`;
    fullNameInput.value = ''; // Input alanını temizle
    submitButton.disabled = true; // Butonu tekrar disabled yap
  });
} else {
  console.error('Gerekli elementler bulunamadı!');
}
// CSS sınıflarını ekleyin
const style = document.createElement('style');
style.textContent = `
  .grayscale {
    filter: grayscale(100%);  
  }
  .theme1 {
    background-color: lightblue;  
    color: darkblue;
  }
  .theme2 {
    background-color: lightgreen;
    color: darkgreen;
  }
  .theme3 {
    background-color: lightcoral;
    color: darkred;
  }
`;
document.head.appendChild(style);
// HTML elementlerini kontrol edin
if (
  !document.getElementById('full_name') ||
  !document.querySelector('button') ||
  !document.getElementById('submitResult')
) {
  console.error('HTML elementleri eksik veya yanlış tanımlanmış!');
}
// HTML elementlerini kontrol edin
if (!document.querySelector('img')) {
  console.error('HTML içerisinde <img> etiketleri bulunamadı!');
}
// HTML elementlerini kontrol edin
if (!document.querySelector('button')) {
  console.error('HTML içerisinde <button> etiketi bulunamadı!');
}
// HTML elementlerini kontrol edin
if (!document.getElementById('submitResult')) {
  console.error('HTML içerisinde <p id="submitResult"> etiketi bulunamadı!');
}

submitButton.disabled = true; // Başlangıçta buton disabled olsun
fullNameInput.value = ''; // Input alanını temizle
submitResult.textContent = ''; // Submit sonucu alanını temizle

button.addEventListener('click', function (event) {
  event.preventDefault();

  const inputValue = input.value;
  const submitResult = document.getElementById('submitResult');

  if (submitResult) {
    submitResult.textContent = `${inputValue} başarı ile kaydedildi.`;
    submitResult.style.cssText = `
                font-weight: bold;
                margin-top: 15px;
                padding: 10px;
                background: #d4edda;
                border: 1px solid #c3e6cb;
                border-radius: 8px;
                color: #155724;
            `;
  }

  // Input alanını temizle
  input.value = '';
  input.style.borderColor = '#e0e0e0';

  // Button'u tekrar disabled yap
  button.disabled = true;
  updateButtonState();
});
