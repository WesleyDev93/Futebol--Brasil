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