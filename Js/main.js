
const botaoplay = document.querySelector ('.botao__play');


botaoplay.addEventListener ('click',function(){
    var play = document.querySelector ('audio');
    play.play()
})


const botaopause = document.querySelector ('.botao__pause');


botaopause.addEventListener ('click',function(){
    var pause = document.querySelector ('audio');
    pause.pause();
    pause.currentTime = 0;
})