// Seleciona os elementos
const uploadInput = document.getElementById('upload');
const canvas = document.getElementById('preview-canvas');
const ctx = canvas.getContext('2d');

// Configura o canvas
canvas.width = 600;
canvas.height = 150;

// Evento para upload de imagem
uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      // Limpa o canvas e desenha a imagem
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }
});