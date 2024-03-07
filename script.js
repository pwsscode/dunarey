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

class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();

var modal = document.getElementById("myModal");
var btn = document.getElementById("contato");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}