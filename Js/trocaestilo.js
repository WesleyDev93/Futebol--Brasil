// botoes

var botaoFranca = document.querySelector ('.franca');

var botaoPortugual = document.querySelector ('.portugual');


var botaoBrasil = document.querySelector ('.brasil');

// pagina

var html = document.querySelector ('body');



// estilos de imagem

var mbappé = document.querySelector ('.alterarEstilo');

var neymar = document.querySelector ('.principal__imagem');

var cr7 = document.querySelector ('.alterarEstilo02');

// frança



   


botaoFranca.addEventListener ('click' ,function franca () {

   html.classList.add ('body3');
 
   mbappé.style.display = 'block';
   cr7.style.display = 'none';

   neymar.style.display = 'none';

    //titulo
   var tituloLogo = document.querySelector ('.titulo__cabecalho');
     tituloLogo.textContent = 'Football Français';


     //menu
     var noticias = document.querySelector ('#noticias');
     noticias.textContent = 'Nouvelles';

     var placares = document.querySelector ('#placares');
     placares.textContent = 'Tableaux de bord';

     var copaDoMundo = document.querySelector ('#copadomundo');
     copaDoMundo.textContent = 'Coupe du monde';

     var selecoes = document.querySelector ('#selecoes');
     selecoes.textContent = 'Sélections';
     
    //Sub Titulos

    var subTitulo = document.querySelector ('.principal__titulo');
    subTitulo.textContent = 'Recevez des mises à jour sur le football';

    var subTitulo02 = document.querySelector ('.principal__titulo02');
     subTitulo02.textContent = 'Analyse groupe par groupe pour Qatar 2022';

     //botoes

     var inscrevase = document.querySelector ('.botao__subscribe');
     inscrevase.textContent = 'Sinscrire';

     var subTitulo02 = document.querySelector ('#redireciona');
     subTitulo02.textContent = 'créez votre tableau';


    
});
   

//portugual

botaoPortugual.addEventListener ('click' ,function portugual () {

    html.classList.add ('body2');
  
    cr7.style.display = 'block';
 
 
    neymar.style.display = 'none';
    mbappé.style.display = 'none';
    
    
 });

// brasil

 botaoBrasil.addEventListener ('click' ,function brasil () {

    html.classList.add ('body1');

 
    neymar.style.display = 'block';
    mbappé.style.display = 'none';
    cr7.style.display = 'none';
   
  
    
 });