window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 495)
})

  // Adicione um evento de clique para os itens do menu
  document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', scrollToSection);
});

// Função para rolar suavemente para a seção correspondente
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Seleciona os elementos do HTML
const cards = document.querySelectorAll(".integrante");
const links = document.querySelectorAll(".integrantes a");

// Cria uma função para esconder todos os cards
function hideAllCards() {
  for (let card of cards) {
    card.style.display = "none";
  }
}

// Cria uma função para mostrar o card correspondente ao link clicado
function showCard(index) {
  hideAllCards();
  cards[index].style.display = "flex";
}

// Adiciona um evento de clique a cada link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    showCard(i);
  });
}

// Mostra apenas o primeiro card quando a página for carregada
window.addEventListener("load", function () {
  showCard(0);
});
