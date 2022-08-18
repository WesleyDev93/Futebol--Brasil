var botaoAdicionar = document.querySelector ('#adicionar-jogador');

    botaoAdicionar.addEventListener ('click' ,function (event) {
        event.preventDefault();
        
        var form = document.querySelector ('#form-adiciona');

        var nome = form.nome.value;       
        var vitorias = form.vitorias.value;
        var pontosvitoria = form.pontosvitoria.value;
        var  gols = form.gols.value;
        var pontos =  (vitorias * pontosvitoria);
        var saldogols = gols;


        var jogadorTr = document.createElement ("tr");

        var nomeTd = document.createElement ("td");
        var vitoriasTd = document.createElement ("td");
           vitorias.id = 'vitorias-info';
        var pontosvitoriaTd = document.createElement ("td");
          pontosvitoriaTd.id = 'pontosporvitorias-info';
        var golsTd = document.createElement ("td");
        var pontosTd = document.createElement ("td");
         pontosTd.id = 'somapontos';
        var saldogolsTd = document.createElement ("td");


        nomeTd.textContent = nome;
        vitoriasTd.textContent = vitorias;
        pontosvitoriaTd.textContent = pontosvitoria;
        golsTd.textContent = gols;
        pontosTd.textContent = pontos;
        saldogolsTd.textContent = saldogols;





        jogadorTr.appendChild (nomeTd);
        jogadorTr.appendChild (vitoriasTd);
        jogadorTr.appendChild (pontosvitoriaTd);
        jogadorTr.appendChild (golsTd);


        jogadorTr.appendChild (pontosTd);
        jogadorTr.appendChild (saldogolsTd);


        var tabelaTBody = document.querySelector ('.tabela-jogador');

        tabelaTBody.appendChild (jogadorTr);
    });

    

    var botaoAdicionar = document.querySelector ('#apagar-jogador');


    

        //var jogador = document.querySelectorAll ('.jogador');

       // jogador.forEach (function (jogador) {
              // jogador.addEventListener ('dblclick', function () {
               //         this.remove();
             //  })
      //  });
    



      var jogador = document.querySelectorAll ('.jogador');
      var tabela = document.querySelector ('table');
      

      tabela.addEventListener ('dblclick', function (event) {
        event.target.remove();
      });





    
    