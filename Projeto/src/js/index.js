//Selecionando li de cada persona
const personagens = document.querySelectorAll('.personagem');
//Adicionar a classe selecionado quando passar o mouse sobre
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        removerSelecaoPersonagem();
        personagem.classList.add('selecionado');
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})
function alterarDescricaoPersonagemSelecionado(personagem) {
    const descPersonagem = document.getElementById('descricao-personagem');
    descPersonagem.innerHTML = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //Alterar imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/image/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    //verificar se ja existe um personagem selecionado e limpar o resto
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

