const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game_over');
const jumpSong = document.querySelector('.jump_song');
const texto = document.querySelector('.text');
const restart = document.querySelector('.restart');
let pontuacao = document.querySelector('.pontuacao');
let pipePosition = pipe.offsetLeft;
let placar = document.querySelector('.placar');
let i = 0;

const aumentoPlacar = setInterval(() => 
  placar.innerHTML = i++
, 100)

const  growPipe = setInterval(() => {
  let aleatorio = Math.floor(Math.random() * 130 + 20);
    pipe.style.height = `${aleatorio}px`

}, 1500)



texto.style.display = 'none';

const jump = ({key}) => {
  if(key === ' ') {
    mario.classList.add('jump');
    jumpSong.play();
    setTimeout(() => {
    mario.classList.remove('jump');
    }, 500);

  }
}

document.addEventListener('keydown', jump);



const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') 

  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';


    texto.style.display = 'block';
    gameOver.play();

    

    clearInterval(loop);
    clearInterval(growPipe)
    clearInterval(aumentoPlacar)
    
    let placar2 = +placar.innerHTML;

    pontuacao.innerHTML = `Pontuação: ${placar2}`;

  }
}, 10)







