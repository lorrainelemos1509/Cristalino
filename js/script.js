const produtos = [
{imagem:"img/dupla.aurora.jpg",nome:"Dupla Aurora",descricao:"Conjunto de dois pingentes com cristais de ametista.<br>Apresenta tonalidades arroxeadas e variações de cor.<br>A ametista é tradicionalmente associada à serenidade,<br>tranquilidade, equilíbrio e introspecção.",categoria:"serenidade",preco:89.90},

{imagem:"img/guardiao.noturno.jpg",nome:"Guardião Noturno",descricao:"Pingente escuro e alongado, confeccionado em alpaca,<br>com uma pedra de turmalina negra em destaque.<br>A turmalina negra é tradicionalmente associada à<br>proteção, estabilidade, aterramento e equilíbrio.",categoria:"proteção",preco:69.90},

{imagem:"img/chama.prismatica.jpg",nome:"Chama Prismática",descricao:"Pingente artesanal com uma pedra de fluorita,<br>apresentando diferentes tonalidades e transparências.<br>A fluorita é tradicionalmente associada à clareza,<br>concentração, equilíbrio e organização.",categoria:"clareza",preco:74.90},

{imagem:"img/olhar.dourado.jpg",nome:"Olhar Dourado",descricao:"Pingente wire-wrapped com pedra de olho de tigre,<br>apresentando tons dourados e castanhos.<br>O olho de tigre é tradicionalmente associado à<br>confiança, proteção, força pessoal e estabilidade.",categoria:"confiança",preco:79.90},

{imagem:"img/raio.sol.jpg",nome:"Raio de Sol",descricao:"Pingente delicado com uma pedra de citrino,<br>apresentando uma tonalidade amarelo-dourada.<br>O citrino é tradicionalmente associado à vitalidade,<br>criatividade, otimismo, energia e equilíbrio.",categoria:"vitalidade",preco:84.90},

{imagem:"img/estrela.terrena.jpg",nome:"Estrela Terrena",descricao:"Pingente formado por uma estrutura de aragonita,<br>com formato semelhante a um pequeno aglomerado estrelado.<br>A aragonita é tradicionalmente associada à estabilidade,<br>equilíbrio e organização.",categoria:"estabilidade",preco:64.90},

{imagem:"img/espiral.infinita.jpg",nome:"Espiral Infinita",descricao:"Peça artesanal formada por fios metálicos em espirais,<br>curvas e movimentos contínuos, sem cristal identificável.<br>O desenho pode ser associado simbolicamente ao equilíbrio,<br>continuidade, movimento e harmonia.",categoria:"equilíbrio",preco:44.90},

{imagem:"img/petala.serena.jpg",nome:"Pétala Serena",descricao:"Pingente com uma pedra oval de quartzo rosa,<br>apresentando superfície lisa e tonalidade rosada.<br>O quartzo rosa é tradicionalmente associado à serenidade,<br>harmonia, equilíbrio e acolhimento.",categoria:"serenidade",preco:57.90},

{imagem:"img/jardim.afeto.jpg",nome:"Jardim de Afeto",descricao:"Pingente ornamental com uma pedra oval de quartzo rosa,<br>envolvida por detalhes metálicos de aparência floral.<br>O quartzo rosa é tradicionalmente associado à harmonia,<br>serenidade e acolhimento.",categoria:"harmonia",preco:72.90},

{imagem:"img/verde.renovacao.jpg",nome:"Verde Renovação",descricao:"Pingente com uma pedra de aventurina verde,<br>apresentando coloração verde e aparência polida.<br>A aventurina verde é tradicionalmente associada à renovação,<br>equilíbrio, tranquilidade e harmonia.",categoria:"renovação",preco:52.90},

{imagem:"img/brasa.rubra.jpg",nome:"Brasa Rubra",descricao:"Pingente com uma pedra de ágata vermelha,<br>apresentando coloração avermelhada e aspecto translúcido.<br>A ágata vermelha é tradicionalmente associada à estabilidade,<br>equilíbrio, vitalidade e força.",categoria:"estabilidade",preco:56.90},

{imagem:"img/luz.cristalina.jpg",nome:"Luz Cristalina",descricao:"Pingente minimalista com uma pedra de quartzo transparente,<br>apresentando aparência clara e translúcida.<br>O quartzo transparente é tradicionalmente associado à clareza,<br>equilíbrio, organização e harmonia.",categoria:"clareza",preco:49.90},

{imagem:"img/terra.ardente.jpg",nome:"Terra Ardente",descricao:"Pingente artesanal com uma pedra de jaspe vermelho,<br>apresentando tons avermelhados e terrosos.<br>O jaspe vermelho é tradicionalmente associado à estabilidade,<br>vitalidade, determinação e equilíbrio.",categoria:"vitalidade",preco:63.90},

{imagem:"img/noite.violeta.jpg",nome:"Noite Violeta",descricao:"Pingente com uma pedra bruta de ametista,<br>apresentando coloração roxa e formação natural.<br>A ametista é tradicionalmente associada à serenidade,<br>tranquilidade, introspecção e equilíbrio.",categoria:"serenidade",preco:67.90},

{imagem:"img/fogo.oculto.jpg",nome:"Fogo Oculto",descricao:"Pingente com uma pedra de ágata de fogo,<br>apresentando tons de vermelho, laranja e marrom.<br>A ágata de fogo é tradicionalmente associada à vitalidade,<br>estabilidade e energia.",categoria:"vitalidade",preco:76.90},

{imagem:"img/ceu.profundo.jpg",nome:"Céu Profundo",descricao:"Pingente artesanal em prata com uma pedra de lápis-lazúli,<br>apresentando uma tonalidade azul-escura.<br>O lápis-lazúli é tradicionalmente associado à comunicação,<br>clareza, expressão e equilíbrio.",categoria:"comunicação",preco:94.90},

{imagem:"img/mare.encantada.jpg",nome:"Maré Encantada",descricao:"Pingente wire-wrapped com uma pedra azul-esverdeada,<br>apresentando formação natural e aparência irregular.<br>Visualmente, a pedra parece ser crisocola, tradicionalmente<br>associada à comunicação, tranquilidade e expressão.",categoria:"comunicação",preco:82.90},

{imagem:"img/vassoura.sombria.jpg",nome:"Vassoura Sombria",descricao:"Pingente wire-wrapped com uma formação alongada e escura,<br>conhecida como Vassoura de Bruxa, formada por cianita negra.<br>A cianita negra é tradicionalmente associada à proteção,<br>aterramento e estabilidade.",categoria:"proteção",preco:89.90}
];

// Deixa o JS mexer nos elementos do HTML:
 const caixaProdutos = document.getElementById("caixaProdutos");
 const busca = document.getElementById("busca");
 
 function mostrarProdutos(lista){

   caixaProdutos.innerHTML = "";

    lista.forEach(produto => {

// Cria os cards:
const card = document.createElement("div");
card.classList.add("card");

// Coloca HTML dentro do card:
card.innerHTML =`
<img src ="${produto.imagem}">
<h2>${produto.nome}</h2>
<p>${produto.descricao}</p>
<span>${produto.categoria}</span>
<strong>R$ ${produto.preco.toFixed(2)}</strong>
`;

caixaProdutos.appendChild(card); // Coloca os cards dentro da div principal

    });
  }
  
 mostrarProdutos(produtos);

 // Faz a barra de pesquisa funcionar
 busca.addEventListener("input", () => {

 const texto = busca.value.toLowerCase(); // "toLowerCase()" deixa tudo em minúsculo
 const produtosFiltrados = produtos.filter(produto => {

    return produto.nome.toLowerCase().includes(texto) ||
           produto.descricao.toLowerCase().includes(texto) ||
           produto.categoria.toLowerCase().includes(texto);

 });
 
 mostrarProdutos(produtosFiltrados);

 });
