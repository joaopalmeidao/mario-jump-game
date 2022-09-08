const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 125 && pipePosition >0 && marioPosition < 100) {

        pipe.getElementsByClassName.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/assets/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        alert('Você Perdeu!!\nYou Loose!!');

        document.location.reload(true);

    }

}, 10)


document.addEventListener('keydown', jump);
document.addEventListener('click', jump);