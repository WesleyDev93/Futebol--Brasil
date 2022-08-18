
     // calculo de partidas 

  

     var partidasVencidas = document.querySelectorAll (".jogador");  
     
     
      
     
    for (let index = 0; index < partidasVencidas.length; index++) {
          
        
         var partidas = partidasVencidas[index];



         var dadosPartidas = partidas.querySelector ('#vitorias-info');
         var numeroPartidas = dadosPartidas.textContent;
         
             

         var pontosfixos = partidas.querySelector ('#pontosporvitorias-info');
         var pontosporvitoria = pontosfixos.textContent;

         

         var vitorias = partidas.querySelector ('#somapontos');
         
         
        
         var resultado = (pontosporvitoria * numeroPartidas);
        
           vitorias.textContent = resultado;

             
    


         var golsMarcados = partidas.querySelector (".info-gols");  
         var gols = golsMarcados.textContent;

         var repasseGols = partidas.querySelector ('.info-saldogols');
         repasseGols.textContent = gols;
            
         
        }
 
     





        
        

       

        


        

    
    

    


    
      







