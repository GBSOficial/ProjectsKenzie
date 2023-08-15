const productsArray = [
    // Produto 1
    {
      image: "./assets/img/paintings/quadro-c3po.jpg",
      name: "Robot",
      price: "R$250,00",
      type: "Paintings",
    },
    // Produto 2
    {
      image: "./assets/img/actions/dragonball-action-figure.jpg",
      name: "Goku Super Saiyajin",
      price: "R$500,00",
      type: "Action Figures",
    },
    // Produto 3 (adicione os produtos restantes abaixo)
    {
      image: "./assets/img/paintings/quadro-controle.jpg",
      name: "Controle Playstation",
      price: "R$99,00",
      type: "Paintings",
    },
      // Produto 4
    {
      image: "./assets/img/paintings/quadro-mario.jpg",
      name: "Mario",
      price: "R$275,00",
      type: "Paintings",
    },
    // Produto 5
    {
      image: "./assets/img/paintings/quadro-pacman.jpg",
      name: "Pacman",
      price: "R$160,00",
      type: "Paintings",
    },
      // Produto 6
    {
      image: "./assets/img/paintings/quadro-relogio.jpg",
      name: "Smart Watch",
      price: "R$120,00",
      type: "Paintings",
    },
    // Produto 7
    {
      image: "./assets/img/actions/godzilla-action-figure.jpg",
      name: "Godzilla",
      price: "R$700,00",
      type: "Action Figures",
    },
    // Produto 8
    {
      image: "./assets/img/actions/groot-action-figure.jpg",
      name: "Groot",
      price: "R$950,00",
      type: "Action Figures",
    },
    // Produto 9
    {
      image: "./assets/img/actions/ironman-action-figure.jpg",
      name: "Homem de Ferro",
      price: "R$1030,00",
      type: "Action Figures",
    },
    // Produto 10
    {
      image: "./assets/img/actions/starwars-action-figure.jpg",
      name: "Sr Yoda",
      price: "R$870,00",
      type: "Action Figures",
    },
    // Produto 11
    {
      image: "./assets/img/actions/wolverine-action-figure.jpg",
      name: "Wolverine",
      price: "R$510,00",
      type: "Action Figures",
    },
  ];
  
  // Função para criar um card de produto
  function createProductCard(product) {
    // Criar o elemento li
    const li = document.createElement('li');
    li.classList.add('product-card');
  
    // Criar a imagem do produto
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    li.appendChild(img);
  
    // Criar o nome do produto
    const name = document.createElement('h3');
    name.textContent = product.name;
    li.appendChild(name);
  
    // Criar o preço do produto
    const price = document.createElement('p');
    price.textContent = product.price;
    li.appendChild(price);
  
    return li;
  }
  
  // Função para separar os produtos em arrays de action figures e quadros
  function separateItems(products) {
    const actionFiguresArray = [];
    const paintingsArray = [];
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.type === 'Action Figures') {
        actionFiguresArray.push(product);
      } else if (product.type === 'Paintings') {
        paintingsArray.push(product);
      }
    }
  
    return { actionFiguresArray, paintingsArray };
  }
  
  // Selecionar as listas de action figures e quadros
  const actionFiguresList = document.getElementById('action-figures-list');
  const paintingsList = document.getElementById('paintings-list');
  
  // Chamar a função para separar os produtos
  const { actionFiguresArray, paintingsArray } = separateItems(productsArray);
  
  // Preencher a lista de action figures
  for (let i = 0; i < actionFiguresArray.length; i++) {
    const actionFigureCard = createProductCard(actionFiguresArray[i]);
    actionFiguresList.appendChild(actionFigureCard);
  }
  
  // Preencher a lista de quadros (paintings)
  for (let i = 0; i < paintingsArray.length; i++) {
    const paintingCard = createProductCard(paintingsArray[i]);
    paintingsList.appendChild(paintingCard);
  }