window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

function mostrarConteudo(id) {
    const paragrafos = document.querySelectorAll('p');
    const imagens = document.querySelectorAll('img, #1');

    // Esconde todos os parágrafos e imagens
    paragrafos.forEach(p => p.style.display = 'none');
    imagens.forEach(img => img.style.display = 'none');

    // Exibe o parágrafo e imagem correspondentes
    document.getElementById(id).style.display = 'block';
    document.getElementById('imagem' + id.slice(9)).style.display = 'block';
}

// Exibe apenas o primeiro parágrafo e a primeira imagem inicialmente
mostrarConteudo('paragrafo1');