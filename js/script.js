const produtos = [
{imagem:"img/dupla.aurora.jpg",nome:"Dupla Aurora",descricao:"Conjunto de dois pingentes com cristais de ametista em tonalidades arroxeadas e variações de cor. A ametista é tradicionalmente associada à serenidade, tranquilidade e equilíbrio.",categoria:"serenidade",preco:89.90},
{imagem:"img/guardiao.noturno.jpg",nome:"Guardião Noturno",descricao:"Pingente de aparência escura e alongada, confeccionado em alpaca, com uma pedra de turmalina negra. A turmalina negra é tradicionalmente associada à proteção, estabilidade e aterramento.",categoria:"proteção",preco:69.90},
{imagem:"img/chama.prismatica.jpg",nome:"Chama Prismática",descricao:"Pingente artesanal com uma pedra de fluorita apresentando diferentes tonalidades e transparências. A fluorita é tradicionalmente associada à clareza, concentração e equilíbrio.",categoria:"clareza",preco:74.90},
{imagem:"img/olhar.dourado.jpg",nome:"Olhar Dourado",descricao:"Pingente wire-wrapped com uma pedra facetada de olho de tigre, apresentando tons dourados e castanhos. O olho de tigre é tradicionalmente associado à confiança, proteção e força pessoal.",categoria:"confiança",preco:79.90},
{imagem:"img/raio.sol.jpg",nome:"Raio de Sol",descricao:"Pingente delicado com uma pedra de citrino em tom amarelo-dourado. O citrino é tradicionalmente associado à vitalidade, criatividade, otimismo e energia.",categoria:"vitalidade",preco:84.90},
{imagem:"img/estrela.terrena.jpg",nome:"Estrela Terrena",descricao:"Pingente formado por uma estrutura cristalina radial de aragonita, conhecida pelo formato semelhante a um pequeno aglomerado estrelado. A aragonita é tradicionalmente associada à estabilidade, equilíbrio e organização.",categoria:"estabilidade",preco:64.90},
{imagem:"img/rosa.selvagem.jpg",nome:"Rosa Selvagem",descricao:"Pingente artesanal com uma pedra bruta de quartzo rosa, de tonalidade rosada e aparência natural. O quartzo rosa é tradicionalmente associado à serenidade, harmonia e acolhimento.",categoria:"harmonia",preco:59.90},
{imagem:"img/sombra.lunar.jpg",nome:"Sombra Lunar",descricao:"Pingente com uma pedra de quartzo fumê, de coloração marrom-acinzentada e aparência translúcida. O quartzo fumê é tradicionalmente associado ao aterramento, estabilidade e tranquilidade.",categoria:"aterramento",preco:54.90},
{imagem:"img/espiral.infinita.jpg",nome:"Espiral Infinita",descricao:"Peça artesanal formada por fios metálicos em espirais e curvas, sem um cristal claramente identificável na imagem. O desenho pode ser associado simbolicamente ao equilíbrio, continuidade e movimento.",categoria:"equilíbrio",preco:44.90},
{imagem:"img/prisma.encantado.jpg",nome:"Prisma Encantado",descricao:"Pingente com uma pedra ornamental multicolorida, apresentando diferentes tonalidades na mesma peça. O cristal específico não está claramente identificado, então a associação é feita de forma geral com criatividade e diversidade.",categoria:"criatividade",preco:69.90},
{imagem:"img/petala.serena.jpg",nome:"Pétala Serena",descricao:"Pingente com uma pedra oval de quartzo rosa, de superfície lisa e tonalidade rosada. O quartzo rosa é tradicionalmente associado à serenidade, harmonia e equilíbrio.",categoria:"serenidade",preco:57.90},
{imagem:"img/jardim.afeto.jpg",nome:"Jardim de Afeto",descricao:"Pingente ornamental com uma pedra oval de quartzo rosa, envolvida por detalhes metálicos que lembram elementos florais. O quartzo rosa é tradicionalmente associado à harmonia, serenidade e acolhimento.",categoria:"harmonia",preco:72.90},
{imagem:"img/verde.renovacao.jpg",nome:"Verde Renovação",descricao:"Pingente com uma pedra de aventurina verde, de coloração verde e aparência polida. A aventurina verde é tradicionalmente associada à renovação, equilíbrio e tranquilidade.",categoria:"renovação",preco:52.90},
{imagem:"img/brasa.rubra.jpg",nome:"Brasa Rubra",descricao:"Pingente com uma pedra de ágata vermelha, apresentando coloração avermelhada e aspecto translúcido. A ágata vermelha é tradicionalmente associada à estabilidade, equilíbrio e vitalidade.",categoria:"estabilidade",preco:56.90},
{imagem:"img/luz.cristalina.jpg",nome:"Luz Cristalina",descricao:"Pingente minimalista com uma pedra de quartzo transparente, de aparência clara e translúcida. O quartzo transparente é tradicionalmente associado à clareza, equilíbrio e organização.",categoria:"clareza",preco:49.90},
{imagem:"img/veu.violeta.jpg",nome:"Véu Violeta",descricao:"Pingente com uma pedra de ágata roxa, apresentando tonalidade violeta e padrões naturais característicos. A ágata é tradicionalmente associada ao equilíbrio, estabilidade e tranquilidade.",categoria:"equilíbrio",preco:58.90},
{imagem:"img/eclipse.negro.jpg",nome:"Eclipse Negro",descricao:"Pingente com uma pedra de obsidiana negra, de coloração preta e superfície naturalmente brilhante. A obsidiana negra é tradicionalmente associada à proteção, estabilidade e aterramento.",categoria:"proteção",preco:61.90},
{imagem:"img/terra.ardente.jpg",nome:"Terra Ardente",descricao:"Pingente artesanal com uma pedra de jaspe vermelho em tons avermelhados e terrosos. O jaspe vermelho é tradicionalmente associado à estabilidade, vitalidade e determinação.",categoria:"vitalidade",preco:63.90},
{imagem:"img/noite.violeta.jpg",nome:"Noite Violeta",descricao:"Pingente com uma pedra bruta de ametista, de coloração roxa e formação natural. A ametista é tradicionalmente associada à serenidade, tranquilidade e introspecção.",categoria:"serenidade",preco:67.90},
{imagem:"img/fogo.oculto.jpg",nome:"Fogo Oculto",descricao:"Pingente com uma pedra de ágata de fogo, apresentando tons quentes de vermelho, laranja e marrom e padrões internos característicos. A ágata de fogo é tradicionalmente associada à vitalidade, estabilidade e energia.",categoria:"vitalidade",preco:76.90},
{imagem:"img/ceu.profundo.jpg",nome:"Céu Profundo",descricao:"Pingente artesanal em prata com uma pedra de lápis-lazúli em tonalidade azul-escura. O lápis-lazúli é tradicionalmente associado à comunicação, clareza e expressão.",categoria:"comunicação",preco:94.90},
{imagem:"img/mare.encantada.jpg",nome:"Maré Encantada",descricao:"Pingente wire-wrapped com uma pedra de aparência azul-esverdeada e formação natural. Visualmente, a pedra parece ser crisocola. A crisocola é tradicionalmente associada à comunicação, tranquilidade e expressão.",categoria:"comunicação",preco:82.90},
{imagem:"img/vassoura.sombria.jpg",nome:"Vassoura Sombria",descricao:"Pingente wire-wrapped com uma formação alongada e escura conhecida como Vassoura de Bruxa, formada por cianita negra. A cianita negra é tradicionalmente associada à proteção, aterramento e estabilidade.",categoria:"proteção",preco:89.90}
];

 const caixaProdutos = document.getElementById("caixaProdutos");
 const busca = document.getElementById("busca");

 function mostrarProdutos(lista){

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
  
   console.log(produtos);
 mostrarProdutos(produtos);

 busca.addEventListener("input", () => {

 });
