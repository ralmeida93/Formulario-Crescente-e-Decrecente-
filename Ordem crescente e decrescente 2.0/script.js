let box = document.querySelector(".box-container");
let titulo = document.querySelector(".titulo-name");
let buttonNome = document.querySelector(".btn-name");
let buttonValor = document.querySelector(".btn-value");

let itemNome = " ";
let itemValores = " ";
let orderValores = true;
let orderNome = true;

let dados = [
  { nome: "pedro", valores: 5 },
  { nome: "ana", valores: 10.9 },
  { nome: "marta", valores: 2.36 },
  { nome: "zilda", valores: 48 },
  { nome: "orásio", valores: 12.75 },
  { nome: "junior", valores: 1 },
  { nome: "bento", valores: 88 },
];

//Ordenar Nomes
function orderNomes() {
  itemNome = ` `;
  box.children[1].innerHTML = itemNome;
 
  if (orderNome) {
    buttonNome.setAttribute("src", "img/ordem-crescente.png");
    orderNome = false;
    itemNome = "";
    dados.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    dados.forEach((element) => {
      itemNome += `<tr><td>${element.nome}</td><td>${element.valores}</td></tr>`;
    });
    titulo.insertAdjacentHTML("afterend", itemNome);
  } else {
    buttonNome.setAttribute("src", "img/ordem-decrescente.png");
    orderNome = true;
    dados.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
    dados.reverse();
    dados.forEach((element) => {
      itemNome += `<tr><td>${element.nome}</td><td>${element.valores}</td></tr>`;
    });
    titulo.insertAdjacentHTML("afterend", itemNome);
  }
  if (box.children.length > 2) {
    box.children[2].remove()
  }
}
buttonNome.addEventListener("click", orderNomes);

//Ordenar Valores
function orderNumbers() {
  itemValores = ``;
  box.children[1].innerHTML = itemValores;
  console.log(box.children.length);

  if (orderValores) {
    buttonValor.setAttribute("src", "img/ordem-crescente.png");
    orderValores = false;
    dados.sort(function (a, b) {
      return a.valores < b.valores ? -1 : a.valores > b.valores ? 1 : 0;
    });
    dados.forEach((element) => {
      itemValores += `<tr><td>${element.nome}</td><td>${element.valores}</td></tr>`;
    });
    titulo.insertAdjacentHTML("afterend", itemValores);
  } else {
    buttonValor.setAttribute("src", "img/ordem-decrescente.png");
    orderValores = true;
    dados.sort(function (a, b) {
      return a.valores < b.valores ? -1 : a.valores > b.valores ? 1 : 0;
    });
    dados.reverse((a, b) => a - b);
    dados.forEach((element) => {
      itemValores += `<tr><td>${element.nome}</td><td>${element.valores}</td></tr>`;
    });
    titulo.insertAdjacentHTML("afterend", itemValores);
  }
  if (box.children.length > 2) {
    box.children[2].remove()
  }
}
buttonValor.addEventListener("click", orderNumbers);

function popularNome() {
  dados.forEach((element) => {
    itemNome += `<tr><td>${element.nome}</td><td>${element.valores}</td></tr>`;
  });

  titulo.insertAdjacentHTML("afterend", itemNome);
}

popularNome();
