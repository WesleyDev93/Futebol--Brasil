# Futebol--Brasil
Projeto foi desenvolvido para uma pagina de noticias de futebol , referentes a Copa do Mundo 2022, preparado
dentro da Mentoria " conquiste sua vaga " projeto desenvolvido para melhorar praticas de flexbox e position , 
estilização em CSS com desafio de implementações grandes em JS.


Projeto possuiu 2 paginas HTMl - uma para planilha de jogos e a principal com botoes que mudam o estilo da pagina em JS



Pedaço do codigo em HTMl 

<title>Futebol agora</title>
</head>
<header>
 <section class="logo"></section>

      <div class="titulo__logo" >
          <h1 class="titulo__cabecalho">Futebol Brasil</h1>
      </div>

    <section class="menu">
        <ul class="menu__lista">
            <li class="menu__item" id="noticias"><a href="#">Notícias</a></li>
            <li class="menu__item" id="placares"><a href="#">Placares</a></li>
            <li class="menu__item" id="copadomundo"><a href="#">Copa do Mundo</a></li>
            <li class="menu__item" id="selecoes"><a href="#">Seleções</a></li>
        </ul>
    </section>
        
</header>

<body class="body">
    <main class="principal">
      

         <Section class="trilha">
           <audio src="./trilha/Shakira_-_Waka_Waka_This_Time_For_Africa_.mp3" type="mp3"></audio>
         </Section> 


        <section class="botao">
        <button class="botao__play"></button>
        <button class="botao__pause"></button>
        </section>


        <section class="principal__conteudo">
              
            <h2 class="principal__titulo">Receba atualizações de futebol</h2>
             
            <h3 class="principal__titulo02"> Análise grupo a grupo para o Catar 2022</h3>

        </section>
           
        <section class="noticias">
             
            <ul class="noticias__menu">
                <li class="noticias__itens"><a href="#"><img src="./img/Noticias/Frame 11.png" alt=""></a></li>
                <li class="noticias__itens"><a href="#"><img src="./img/Noticias/Frame 12.png" alt=""></a></li>
                <li class="noticias__itens"><a href="#"><img src="./img/Noticias/Frame 13.png" alt=""></a></li>
                <li class="noticias__itens"><a href="#"><img src="./img/Noticias/Frame 14.png" alt=""></a></li>
            </ul>
            
            
            
            
        Um pouco do codigo de JS principal :
        
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
        
        
        
        
    Projeto foi desenvolvido e entregue com sucesso dentro do prazo estipulado.
    
    
    Resultado 
    
    
   ![image](https://user-images.githubusercontent.com/108889735/185969359-fa607aff-b9da-4694-9351-78f8be876e18.png)

         
         
         
         




![image](https://user-images.githubusercontent.com/108889735/185968924-8e3f1662-c089-4e30-bc15-86538a255674.png)
