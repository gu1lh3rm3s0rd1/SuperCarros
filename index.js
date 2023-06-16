//variavel de objetos
let listaCarros = [
  {
    nome: "Audi R8",
    img: "img/audi.webp",
    descricao:
      "Carro em estado de 0km, apenas 3.000km, com PPF frontal, escapamento esportivo, acessórios em carbono, totalmente exclusivo.",
  },

  {
    nome: "Mercedes AMG",
    img: "img/mercedes.webp",
    descricao:
      "Cor Cinza MAGNO, PPF FULL MOTOR 4.0 V8 Biturbo com 585 CV, 0 a 100 KM/H em 3,6s, VELOCIDADE MÁXIMA: 318 KM/H",
  },

  {
    nome: "Porsche 911 GT3",
    img: "img/porsche.webp",
    descricao:
      "Cor Cinza ÁGATA METÁLICO, Garantia Porsche até NOV/23, MOTOR 4.0 Aspirador com 510 CV, CÂMBIO PDK DE 7 Velocidades com Paddle Shift,  0 a 100 KM/H em 3,4s, VELOCIDADE MÁXIMA: 318 KM/H",
  },

  {
    nome: "McLaren 600LT",
    img: "img/mclaren.webp",
    descricao:
      "Motor 3.8 V8 Biturbo com 600 CV, Aceleração de 0 a 100 KM/H em 2,9s, VELOCIDADE MÁXIMA 328 KM/H, CÂMBIO DE 7 Velocidades com Paddle Shift, Monocoque em Fibra de Carbono, Lift SYSTEM, Escapes Posicionados Acima dp Propulsor",
  },

  {
    nome: "Ferrari SF90",
    img: "img/ferrari.webp",
    descricao:
      "Cor Rosso Corsa com Interna Nero, MOTOR 4.0 V8 Biturbo de 780 CV + 3 motores elétricos (DOIS DIANTEIROS E UM TRASEIRO): POTÊNCIA TOTAL COMBINADA: 1.000 CV, Tração Integral Sob Demanda, CÂMBIO DE 8 Velocidades com Modo Sequencial Dupla Ebragem a Seco e Paddle Shift, Sistema de Som e Câmera 360°",
  },

  {
    nome: "Lamborghini HURACAN",
    img: "img/lamborghini.webp",
    descricao:
      "-5.2 V10 640 CV, Tração Traseira, Transmissão Automatizada 7, Freios em Carbono e Ceramica, Velocidade Máxima 310 km/h",
  },
];

//laço de repeticao para percorrer a lista criada
listaCarros.map((carro, posicao) => {
  let cardCarro = document.getElementById("cards");
  //esse 'mais'(+) antes do igual inidca para o JS percorrer a lista interia ao inves de so o primeiro objt
  cardCarro.innerHTML += `
          <div class="col-md-4">
            <div class="card m-2">
              <img src="${carro.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <a href="#" class="btn btn-primary" onClick="zoomImg(${posicao})"><i class="bi bi-zoom-in"></i></a>
              </div>
            </div>
          </div>
        `;

  //console.log(carro.nome)
  //console.log(carro.descricao)
  //console.log(carro.img)
  //console.log(posicao)
});

//funcao modal - ira abrir a imagem ampliada com  clique
function zoomImg(posicao) {
  let carroSelecionado = listaCarros[posicao];

  document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
  document.getElementById("descricaoCarro").innerHTML =
    carroSelecionado.descricao;
  // .src para carregar a foto da posicao selecionada/encontrada pelo JS
  document.getElementById("imgModal").src = carroSelecionado.img;

  //acionando o modal
  new bootstrap.Modal("#zoomImg").show();
}

//alterar tema site/cor
function alterarTema() {
  //background do body/html
  let tema = document.querySelector("html").getAttribute("data-bs-theme");

  //altera icone de claro/escuro
  if (tema === "light") {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector(
      "#alterarTema"
    ).innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
  } else {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector(
      "#alterarTema"
    ).innerHTML = `<i class="bi bi-moon-fill"></i>`;
  }
}
