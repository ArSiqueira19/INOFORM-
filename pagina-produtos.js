const conteudo = document.getElementById('conteudo');

if (conteudo) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const produto = produtos[id];

    if (produto) {
        document.title = produto.nome + ' - INOFORM';
        conteudo.innerHTML = `
            <div class="breadcrumb"><a href="index.html">Início</a> / Produto</div>
            <div class="product">
                <div class="gallery">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="details">
                    <h1>${produto.nome}</h1>
                    <div class="price">${produto.preco}</div>
                    <div class="price-note">${produto.parcelas}</div>
                    <p class="desc-curta">${produto.descricao}</p>
                    <button class="add-cart" type="button">Adicionar ao carrinho</button>
                </div>
            </div>
        `;
    } else {
        conteudo.innerHTML = `
            <div class="nao-encontrado">
                <h1>Produto não encontrado</h1>
                <p>Tente acessar pela lista de sugestões na página inicial.</p>
                <p><a href="index.html">Voltar para a loja</a></p>
            </div>
        `;
    }
}