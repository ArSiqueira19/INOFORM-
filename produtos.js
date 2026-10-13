const produtos = {
  'munhequeira-nike-jordan': {
    id: 'munhequeira-nike-jordan',
    nome: 'Munhequeira Nike Jordan Jumpman Com 02 Unidades Preta e Branca',
    descricao: 'Par com duas munhequeiras Jumpman, uma preta e outra branca. Um acessório esportivo para completar o visual dentro e fora dos treinos.',
    preco: 199.9,
    imagem: '../imagens/Carrosel/C1.png',
    categoria: 'acessorios'
  },
  'chuteira-copa-league': {
    id: 'chuteira-copa-league',
    nome: 'Chuteira Adulta de Futebol Society Copa League Adidas Preta',
    descricao: 'Chuteira adulta preta para partidas de futebol society. O modelo Copa League da Adidas combina visual discreto com perfil esportivo para os jogos.',
    preco: 664.99,
    imagem: '../imagens/Carrosel/C2.png',
    categoria: 'masculino',
    esporte: 'futebol'
  },
  'tabela-basquete': {
    id: 'tabela-basquete',
    nome: 'Tabela de Basquete Regulável 2,20m a 3,05m Tarmak Preto',
    descricao: 'Tabela de basquete com altura regulável entre 2,20 m e 3,05 m. Ajuste a altura para diferentes espaços e formas de jogar.',
    preco: 1424.99,
    imagem: '../imagens/Carrosel/C3.png',
    categoria: 'basquete',
    esporte: 'basquete'
  },
  'caramanhola-squeeze': {
    id: 'caramanhola-squeeze',
    nome: 'Caramanhola Squeeze Térmica 680ml Garrafa Agua Ciclismo Tsw Cor Cinza',
    descricao: 'Caramanhola térmica cinza com capacidade de 680 ml, pensada para acompanhar pedais e manter a bebida à mão durante o percurso.',
    preco: 68.21,
    imagem: '../imagens/Carrosel/C4.png',
    categoria: 'acessorios',
    esporte: 'ciclismo'
  },
  '5': {
    id: '5',
    nome: "Men's San Antonio Spurs Victor Wembanyama Fanatics Black Fast Break Replica Jersey",
    descricao: 'Camisa réplica preta do San Antonio Spurs com o nome e o número de Victor Wembanyama. Uma peça para torcer pelo time ou compor um visual esportivo.',
    preco: 79.9,
    imagem: '../imagens/Carrosel/C5.png',
    categoria: 'masculino',
    esporte: 'basquete'
  },
  'asics-nimbus': {
    id: 'asics-nimbus',
    nome: 'Tênis ASICS Gel-Nimbus 27 Masculino',
    descricao: 'Tênis masculino da linha Gel-Nimbus 27, desenvolvido para corrida. O perfil acolchoado da linha prioriza uma passada confortável em percursos longos.',
    preco: 799.9,
    imagem: '../imagens/OutrosItens/Oit1.png',
    categoria: 'infantil',
    esporte: 'corrida'
  },
  'bola-de-basquete': {
    id: 'bola-de-basquete',
    nome: 'Bola de Basquete BT500 Tarmak Marrom',
    descricao: 'Bola BT500 da Tarmak na cor marrom, feita para partidas e treinos de basquete. Uma opção para praticar arremessos e controlar a bola em quadra.',
    preco: 134.99,
    imagem: '../imagens/OutrosItens/Oit2.png',
    categoria: 'basquete',
    esporte: 'basquete'
  },
  'bola-de-volei': {
    id: 'bola-de-volei',
    nome: 'Bola de Vôlei de Quadra Mikasa V200W Oficial',
    descricao: 'Bola Mikasa V200W para vôlei de quadra, modelo oficial. Indicada para quem procura uma bola de referência para partidas e prática da modalidade.',
    preco: 789.9,
    imagem: '../imagens/OutrosItens/Oit3.png',
    categoria: 'volei',
    esporte: 'volei'
  },
  'aparador-maximum': {
    id: 'aparador-maximum',
    nome: 'Aparador de Chute e Soco Maximum Alvo Branco - Tam U - Par',
    descricao: 'Par de aparadores Maximum, tamanho U, para treinar golpes de chute e soco. O acabamento branco facilita a visualização do alvo durante os exercícios.',
    preco: 481.9,
    imagem: '../imagens/OutrosItens/Oit4.png',
    categoria: 'boxe',
    esporte: 'boxe'
  },
  'meia-preta-cano-alto': {
    id: 'meia-preta-cano-alto',
    nome: 'Meia preta cano alto - 2 pares',
    descricao: 'Kit com dois pares de meias pretas de cano alto. Uma escolha versátil para combinar com roupas esportivas e usar nos treinos ou no dia a dia.',
    preco: 29.9,
    imagem: '../imagens/OutrosItens/Oit5.png',
    categoria: 'acessorios'
  },
  'bandagem-one-sport': {
    id: 'bandagem-one-sport',
    nome: 'One Sport Bandagem Atadura Elástica Muay Thai Boxe',
    descricao: 'Bandagem elástica One Sport para envolver as mãos antes dos treinos de Muay Thai e boxe. A oferta inclui uma opção prática para sua rotina de luta.',
    preco: 19.9,
    imagem: '../imagens/Ofertas/Of2.png',
    categoria: 'acessorios',
    esporte: 'boxe'
  },
  'kit-venum-boxe': {
    id: 'kit-venum-boxe',
    nome: 'Kit Venum Boxe Muay Thai Kickboxing Luva Bandagem Bucal',
    descricao: 'Kit Venum para modalidades de combate, com luvas, bandagem e protetor bucal. Reúne itens essenciais para se preparar para os treinos de boxe, Muay Thai ou kickboxing.',
    preco: 249.99,
    imagem: '../imagens/Ofertas/Of3.png',
    categoria: 'acessorios',
    esporte: 'boxe'
  },
  'camisa-alemanha-oferta': {
    id: 'camisa-alemanha-oferta',
    nome: 'Camisa Masculina de Futebol Torcedor Alemanha II Away 26/27 Adidas Azul',
    descricao: 'Camisa masculina Adidas da seleção da Alemanha, versão Away 26/27 em azul. Uma peça de torcedor com desconto para vestir nos dias de jogo.',
    preco: 199.9,
    imagem: '../imagens/Ofertas/Of1.png',
    categoria: 'feminino',
    esporte: 'futebol'
  }
};

window.INOFORM_PRODUTOS = produtos;

(function () {
  const STORAGE_KEY = 'inoform-cart';

  function safeParse(value) {
    try {
      return value ? JSON.parse(value) : [];
    } catch (error) {
      return [];
    }
  }

  function getCart() {
    const cart = safeParse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(cart) ? cart : [];
  }

  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
  }

  function formatMoney(value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  function addToCart(productId, quantity) {
    const produto = produtos[productId];
    if (!produto) return false;

    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    const qtd = Number(quantity) > 0 ? Number(quantity) : 1;

    if (existing) {
      existing.quantidade = (Number(existing.quantidade) || 0) + qtd;
    } else {
      cart.push({
        id: produto.id,
        nome: produto.nome,
        preco: Number(produto.preco),
        imagem: produto.imagem,
        quantidade: qtd
      });
    }

    saveCart(cart);
    return true;
  }

  function removeFromCart(productId) {
    const cart = getCart().filter(item => item.id !== productId);
    saveCart(cart);
    return cart;
  }

  function changeQuantity(productId, delta) {
    const cart = getCart();
    const item = cart.find(entry => entry.id === productId);
    if (!item) return cart;

    item.quantidade = (Number(item.quantidade) || 0) + Number(delta);
    if (item.quantidade <= 0) {
      return removeFromCart(productId);
    }

    saveCart(cart);
    return cart;
  }

  function getCartTotalItems() {
    return getCart().reduce((total, item) => total + (Number(item.quantidade) || 0), 0);
  }

  function updateCartBadges() {
    const total = getCartTotalItems();
    document.querySelectorAll('[data-cart-badge]').forEach(function (badge) {
      badge.textContent = total;
      badge.style.display = total > 0 ? 'flex' : 'none';
    });
  }

  window.INOFORM_CART = {
    getCart,
    saveCart,
    addToCart,
    removeFromCart,
    changeQuantity,
    formatMoney,
    getCartTotalItems,
    updateCartBadges
  };

  document.addEventListener('DOMContentLoaded', updateCartBadges);
  window.addEventListener('storage', updateCartBadges);
})();
