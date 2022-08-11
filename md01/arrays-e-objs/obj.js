// Objetos

// Dicionarios

const obj = {
  key: "value",
};

const danielDisconect = {
  user: "danielDisconect",
  seguidores: [{}],
  seguindo: [{}],
};

// Como acessar infos dentro de um OBJ

const endereco = {
  rua: "Rua dos Bobos",
  n: 0,
  CEP: 00000000,
  cidade: "São Paulo",
  UF: "SP",
};

// Dot Notation

// console.log(endereco.rua);

// E quando a gente não sabe o que a gente quer acessar?

const boletim = {
  pt: 6,
  mat: 9,
  hist: 4,
  geo: 7,
  edFis: 3,
  filo: 10,
  isAproved: false,
};

// Dot Notation

boletim.hist; // 4

// Breaket notation

const materia = "pt";

console.log(boletim[materia]); // boletim.pt // 6

const movies = [
  {
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.",
    popularity: 6120.418,
    poster_path: "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    release_date: "2021-12-15",
    title: "Homem-Aranha: Sem Volta Para Casa",
    video: false,
    vote_average: 8.2,
    vote_count: 11355,
  },
  {
    adult: false,
    backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    genre_ids: [28, 878, 35, 10751],
    id: 675353,
    original_language: "en",
    original_title: "Sonic the Hedgehog 2",
    overview:
      "Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.",
    popularity: 6401.627,
    poster_path: "/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg",
    release_date: "2022-03-30",
    title: "Sonic 2: O Filme",
    video: false,
    vote_average: 7.7,
    vote_count: 376,
  },
  {
    adult: false,
    backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
    genre_ids: [16, 10751, 35, 14],
    id: 508947,
    original_language: "en",
    original_title: "Turning Red",
    overview:
      "Mei, de treze anos, está experimentando a estranheza de ser uma adolescente com uma reviravolta – quando ela fica muito animada, ela se transforma em um panda vermelho gigante.",
    popularity: 5475.263,
    poster_path: "/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg",
    release_date: "2022-03-10",
    title: "Red: Crescer é Uma Fera",
    video: false,
    vote_average: 7.5,
    vote_count: 1582,
  },
  {
    adult: false,
    backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
    genre_ids: [28, 12, 878],
    id: 406759,
    original_language: "en",
    original_title: "Moonfall",
    overview:
      "Poucas semanas antes do impacto e com a humanidade à beira da aniquilação, a ex-astronauta da NASA Jo Fowler está convencida de que tem a resposta para salvar o planeta, mas apenas um colega do passado, o astronauta Brian Harper, e o teorista K.C. Houseman, acreditam nela. Os improváveis heróis correm contra o tempo para montar uma missão ao espaço, mas lá descobrem que a Lua não é o que parece.",
    popularity: 4650.633,
    poster_path: "/ACl5NQBHeEvypdVlaaE868bwFs.jpg",
    release_date: "2022-02-03",
    title: "Moonfall: Ameaça Lunar",
    video: false,
    vote_average: 6.5,
    vote_count: 629,
  },
  {
    adult: false,
    backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
    genre_ids: [16, 35, 10751, 14],
    id: 568124,
    original_language: "en",
    original_title: "Encanto",
    overview:
      "Uma garota chamada Mirabel Madrigal cresce como o único membro não mágico de sua família, que vivem escondidos em uma vibrante casa encantada nas montanhas da Colômbia.",
    popularity: 2264.071,
    poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    release_date: "2021-11-24",
    title: "Encanto",
    video: false,
    vote_average: 7.7,
    vote_count: 5980,
  },
  {
    adult: false,
    backdrop_path: "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    genre_ids: [80, 9648, 53],
    id: 414906,
    original_language: "en",
    original_title: "The Batman",
    overview:
      "Bruce Wayne é um jovem bilionário da cidade de Gotham City, Nova Jersey, que também age secretamente como o vigilante noturno Batman após o assassinato dos seus pais.",
    popularity: 2288.853,
    poster_path: "/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
    release_date: "2022-03-01",
    title: "Batman",
    video: false,
    vote_average: 7.9,
    vote_count: 2806,
  },
  {
    adult: false,
    backdrop_path: "/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg",
    genre_ids: [28, 53],
    id: 823625,
    original_language: "en",
    original_title: "Blacklight",
    overview:
      "Confiança, identidade e o perigo do poder sem controle levam um agente secreto ao limite. Travis Block (Liam Neeson) vive e luta nas sombras. Um “consertador” autônomo do governo, Block é um homem perigoso cujas atribuições incluíam extrair agentes de situações ocultas. Quando Block descobre que um programa sombrio chamado Operação Unidade está abatendo cidadãos comuns por razões conhecidas apenas pelo seu supervisor, o chefe do FBI, Robinson (Aidan Quinn), ele pede a ajuda de uma jornalista (Raver-Lampman), mas seu passado e presente colidem quando seu filha e neta são ameaçadas. Agora Block precisa resgatar as pessoas que ama e expor a verdade para uma chance de redenção. Nada nem ninguém está seguro quando os segredos estão escondidos nas sombras.",
    popularity: 1678.647,
    poster_path: "/qgW5iIe6QUn170omG6tdGS4BB9U.jpg",
    release_date: "2022-02-10",
    title: "Agente das Sombras",
    video: false,
    vote_average: 6,
    vote_count: 260,
  },
  {
    adult: false,
    backdrop_path: "/tq3klWQevRK0Or0cGhsw0h3FDWQ.jpg",
    genre_ids: [12, 16, 35, 10751, 14],
    id: 676705,
    original_language: "fr",
    original_title: "Pil",
    overview:
      "Pil vive nas ruas da cidade medieval de Roc-en-Brume, junto com suas três doninhas mansas. Ela sobrevive de comida roubada do castelo do sinistro Regente Tristain. Um dia, para escapar de seus guardas, Pil se disfarça de princesa. Assim, ela embarca em uma aventura louca e delirante, junto com Crobar, um grande guarda desajeitado que pensa que ela é uma nobre, e Rigolin, um jovem bobo maluco. Pil vai ter que salvar Roland, herdeiro legítimo do trono sob a maldição de um feitiço. Esta aventura vai virar todo o reino de cabeça para baixo e ensinar a Pil que a nobreza pode ser encontrada em todos nós.",
    popularity: 1829.619,
    poster_path: "/78JfwRiubwX87BYgPXsdFKBf9P5.jpg",
    release_date: "2021-08-11",
    title: "Pil's Adventures",
    video: false,
    vote_average: 7.1,
    vote_count: 51,
  },
  {
    adult: false,
    backdrop_path: "/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg",
    genre_ids: [28, 12, 35, 878],
    id: 696806,
    original_language: "en",
    original_title: "The Adam Project",
    overview:
      "Depois de viajar no tempo e ir parar em 2022 sem querer, o piloto de combate Adam Reed se une à sua versão de 12 anos de idade para salvar o futuro.",
    popularity: 2018.424,
    poster_path: "/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg",
    release_date: "2022-03-11",
    title: "O Projeto Adam",
    video: false,
    vote_average: 7,
    vote_count: 1709,
  },
  {
    adult: false,
    backdrop_path: "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
    genre_ids: [28, 878, 35, 10751],
    id: 454626,
    original_language: "en",
    original_title: "Sonic the Hedgehog",
    overview:
      "Sonic, o ouriço azul mais veloz do mundo, vive isolado e sem amigos na Terra desde que precisou fugir de seu planeta natal. Todavia, ele recebe a ajuda de um policial quando o Dr. Ivo Robotinik, a mando do governo dos Estados Unidos, começa a persegui-lo.",
    popularity: 1962.523,
    poster_path: "/eOC0FSGqyzcnnx7XFgLazI9nACT.jpg",
    release_date: "2020-02-12",
    title: "Sonic: O Filme",
    video: false,
    vote_average: 7.4,
    vote_count: 7731,
  },
  {
    adult: false,
    backdrop_path: "/An1nKjXahrChfEbZ3MAE8fsiut1.jpg",
    genre_ids: [27],
    id: 661791,
    original_language: "es",
    original_title: "La abuela",
    overview:
      "Uma modelo parisiense deve retornar a Madri, onde sua avó, que a criou, teve um derrame. Mas passar apenas alguns dias com esse parente se transforma em um pesadelo inesperado.",
    popularity: 1632.66,
    poster_path: "/19rA9FjhwI4VEfaCXV7648XUInR.jpg",
    release_date: "2022-01-28",
    title: "La abuela",
    video: false,
    vote_average: 6.2,
    vote_count: 83,
  },
  {
    adult: false,
    backdrop_path: "/j0xO6355h5HfvC425sWDT6tiBZM.jpg",
    genre_ids: [28, 12, 14],
    id: 939243,
    original_language: "en",
    original_title: "Sonic the Hedgehog 3",
    overview: "",
    popularity: 1686.273,
    poster_path: "/aNSBaYTgPz8QEADi3xiD52X4uVF.jpg",
    release_date: "",
    title: "Sonic 3: O Filme",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: "/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg",
    genre_ids: [27, 53],
    id: 833425,
    original_language: "en",
    original_title: "No Exit",
    overview:
      "Darby Thorne é uma mulher que viaja devido a uma emergência familiar, fica presa em nevasca e é forçada a se abrigar numa área de descanso na estrada com um grupo de desconhecidos. Ao topar com uma garota sequestrada numa van, ela encara uma terrível luta de vida ou morte para descobrir quem é o sequestrador.",
    popularity: 1475.405,
    poster_path: "/dvTTuRqwvM6wkDuA0JviE58NSRp.jpg",
    release_date: "2022-02-25",
    title: "Sem Saída",
    video: false,
    vote_average: 6.5,
    vote_count: 330,
  },
  {
    adult: false,
    backdrop_path: "/t7I942V5U1Ggn6OevN75u3sNYH9.jpg",
    genre_ids: [28, 53],
    id: 760868,
    original_language: "sv",
    original_title: "Svart krabba",
    overview:
      "Para acabar com uma guerra apocalíptica e salvar a filha, uma militar embarca em uma missão desesperada: atravessar o mar congelado levando uma carga ultrassecreta.",
    popularity: 1708.003,
    poster_path: "/sw644BbNIxSGRqjwAC50uskDBHg.jpg",
    release_date: "2022-03-18",
    title: "Caranguejo Negro",
    video: false,
    vote_average: 6.2,
    vote_count: 308,
  },
  {
    adult: false,
    backdrop_path: "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
    genre_ids: [16, 35, 12, 10751],
    id: 774825,
    original_language: "en",
    original_title: "The Ice Age Adventures of Buck Wild",
    overview:
      "As peripécias hilárias dos mamíferos pré-históricos favoritos de todo mundo continuam, enquanto os gambás caçadores de emoções Crash e Eddie se juntam ao seu amigo caolho, aventureiro e caçador de dinossauros, a doninha Buck Wild, para enfrentar os dinossauros rebeldes do Mundo Perdido.",
    popularity: 1306.33,
    poster_path: "/1iVjKCGHPVNj7IQVB1DdpL8U7Y8.jpg",
    release_date: "2022-01-28",
    title: "A Era do Gelo: As Aventuras de Buck",
    video: false,
    vote_average: 6.9,
    vote_count: 971,
  },
  {
    adult: false,
    backdrop_path: "/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg",
    genre_ids: [53, 28],
    id: 760926,
    original_language: "en",
    original_title: "Gold",
    overview:
      "Dois estranhos que estão viajando em um deserto e se surpreendem ao encontrar uma grande pepita de ouro. Eles pensam em uma estratégia para explorar e dividir a recompensa do tesouro encontrado. Enquanto um vai procurar equipamentos para dar continuidade no plano, o outro fica responsável por proteger o local e ambos lidam com diversos desafios nessa aventura.",
    popularity: 1126.574,
    poster_path: "/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
    release_date: "2022-01-13",
    title: "Gold",
    video: false,
    vote_average: 6.5,
    vote_count: 176,
  },
  {
    adult: false,
    backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
    genre_ids: [16, 10751, 14, 35, 12],
    id: 585083,
    original_language: "en",
    original_title: "Hotel Transylvania: Transformania",
    overview:
      "Drac e sua turma acabam sendo transformados em humanos após uma invenção de Van Helsing. Agora, eles precisam viajar até a Floresta Amazônica para encontrar o que pode ser a única solução para reverter a transformação, antes que seus poderes se percam para sempre.",
    popularity: 1310.582,
    poster_path: "/9PbtCo5IIkd26WPQfZUpPyn6fTz.jpg",
    release_date: "2022-02-25",
    title: "Hotel Transilvânia: Transformonstrão",
    video: false,
    vote_average: 7.1,
    vote_count: 659,
  },
  {
    adult: false,
    backdrop_path: "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
    genre_ids: [16, 28, 14, 12],
    id: 768744,
    original_language: "ja",
    original_title:
      "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
    overview:
      "My Hero Academia: World Heroes Mission é uma história original que se passa durante o inverno do arco Hero Internship. Um grupo misterioso que está determinado a eliminar todos aqueles com individualidades. Então, para salvar a todos, os Pro-Heroes precisam formar uma equipe mundial de heróis. É nesse momento que Deku, Bakugo, Todoroki e outros estudantes da Academia U.A.  são chamados para combater essa ameaça.",
    popularity: 1231.526,
    poster_path: "/7uVyf7or5KxQfO2h0OrV1ZZ99WK.jpg",
    release_date: "2021-08-06",
    title: "My Hero Academia: Missão Mundial de Heróis",
    video: false,
    vote_average: 7.3,
    vote_count: 137,
  },
  {
    adult: false,
    backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
    genre_ids: [878, 28],
    id: 524434,
    original_language: "en",
    original_title: "Eternals",
    overview:
      'Após os eventos de "Vingadores: Ultimato", os Eternos, uma raça alienígena imortal criada pelos Celestiais que vivem em segredo na Terra há mais de 7000 anos, se reúnem após uma tragédia inesperada para proteger a humanidade de seus colegas malignos: os Deviantes.',
    popularity: 1114.471,
    poster_path: "/mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg",
    release_date: "2021-11-03",
    title: "Eternos",
    video: false,
    vote_average: 7.1,
    vote_count: 5216,
  },
  {
    adult: false,
    backdrop_path: "/eVSa4TpyXbOdk9fXSD6OcORJGtv.jpg",
    genre_ids: [53],
    id: 803114,
    original_language: "en",
    original_title: "The Requin",
    overview:
      "Um casal de férias no Vietnã se encontram presos em mar aberto após uma enorme tempestade tropical levar sua casa à beira-mar. Com o marido machucado e morrendo, a esposa precisa lutar contra os elementos sozinha, enquanto são cercado por tubarões brancos abaixo.",
    popularity: 942.428,
    poster_path: "/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
    release_date: "2022-01-28",
    title: "The Requin",
    video: false,
    vote_average: 4.7,
    vote_count: 93,
  },
];

console.log(movies[0]);

console.log(movies[0].overview);

console.log(movies[0].genre_ids[1]);

// E se eu quiser colocar algo dentro da minha array de IDs de generos?

movies[0].genre_ids.push(78);
