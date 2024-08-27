const botao = document.getElementById('meuBotao');
const card = document.getElementById('meuCard');

botao.addEventListener('click', () => {
  if (card.style.display === 'none') {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
});