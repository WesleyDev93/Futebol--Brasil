var botaoAdicionar = document.querySelector ('#adicionar-jogador');

    botaoAdicionar.addEventListener ('click' ,function (event) {
        event.preventDefault();
        
        var form = document.querySelector ('#form-adiciona');

        var nome = form.nome.value;       
        var vitorias = form.vitorias.value;
        var pontosvitoria = form.pontosvitoria.value;
        var  gols = form.gols.value;
         var pontos = resultado;
         var saldogols = gols;


        var jogadorTr = document.createElement ("tr");

        var nomeTd = document.createElement ("td");
        var vitoriasTd = document.createElement ("td");
        var pontosvitoriaTd = document.createElement ("td");
        var golsTd = document.createElement ("td");
        var pontosTd = document.createElement ("td");
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


    botaoAdicionar.addEventListener ('click' ,function () {
        event.preventDefault();
        console.log ('clicado 456');
    });







    
    