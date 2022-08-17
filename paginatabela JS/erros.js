
//erros de valores

 var partidasEhValida = true;
 var golsEhValido = true;
 



 
 function erros() {
       
 
if (partidas <= -0 || gols <= -0) {
        golsMarcados.textContent = 'valor invalido';
        partidasVencidas.textContent = 'valor invalido';
        golsMarcados.style.color = 'red';
        partidasVencidas.style.color = 'red';
        partidasEhValida =false;
        golsEhValido =false;
 }



 if (partidas >= 1000 || gols >= 1000) {
    golsMarcados.textContent = 'valor invalido';
    partidasVencidas.textContent = 'valor invalido';
    golsMarcados.style.color = 'red';
    partidasVencidas.style.color = 'red';
    partidasEhValida =false;
    golsEhValido =false;
}
 };



