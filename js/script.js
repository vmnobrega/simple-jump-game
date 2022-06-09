const personagem = document.querySelector('.personagem');
const fogo = document.querySelector('.fogo');
const buildings = document.querySelector('.buildings');
const pontuaçao = document.querySelector('#pontos')



const jump = () => {
    personagem.classList.add('jump');

    setTimeout(() => {

        personagem.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const fogoPosiçao = fogo.offsetLeft;
    const personagemPosiçao = +window.getComputedStyle(personagem).bottom.replace('px', '')
    
    if (fogoPosiçao == -120) {
        pontuaçao.value += 1

    }
    if (fogoPosiçao <= 120 && fogoPosiçao > 0 && personagemPosiçao < 50) {

        fogo.style.animation = 'none';
        fogo.style.left = `${fogoPosiçao}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosiçao}px`;

        personagem.src = './sprites/game-over.png';

        buildings.style.animationPlayState = 'paused'
        
        clearInterval(loop);
       
    }

}, 10);

document.addEventListener('keydown', jump);

