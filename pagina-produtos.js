const conteudo = document.getElementById('conteudo');

if (conteudo) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const catalogo = window.INOFORM_PRODUTOS || {};
    const produto = catalogo[id];

    if (produto) {
        const categorias = {
            masculino: 'Masculino',
            feminino: 'Feminino',
            infantil: 'Infantil',
            acessorios: 'Acessórios',
            basquete: 'Basquete',
            volei: 'Vôlei',
            boxe: 'Boxe'
        };
        const nomeCategoria = categorias[produto.categoria] || 'Esportes';
        document.title = produto.nome + ' - INOFORM';
        conteudo.innerHTML = `
            <div class="breadcrumb"><a href="index.html">Início</a><span aria-hidden="true">/</span><span>${nomeCategoria}</span></div>
            <div class="product">
                <div class="gallery" aria-label="Imagem do produto">
                    <span class="gallery-label">${nomeCategoria}</span>
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="details">
                    <span class="product-category">${nomeCategoria}</span>
                    <h1>${produto.nome}</h1>
                    <div class="price">${window.INOFORM_CART ? window.INOFORM_CART.formatMoney(produto.preco) : 'R$ ' + Number(produto.preco).toFixed(2).replace('.', ',')}</div>
                    <div class="price-note">Até 10x sem juros</div>
                    <p class="desc-curta">${produto.descricao}</p>
                    <label class="quantity-control" for="quantidade-produto">
                        <span>Quantidade</span>
                        <input id="quantidade-produto" type="number" min="1" max="99" step="1" value="1" inputmode="numeric">
                    </label>
                    <button class="add-cart" type="button">Adicionar ao carrinho</button>
                </div>
            </div>
        `;

        const botao = document.querySelector('.add-cart');
        const campoQuantidade = document.getElementById('quantidade-produto');
        if (botao) {
            botao.addEventListener('click', function () {
            const quantidade = Math.min(99, Math.max(1, Number.parseInt(campoQuantidade.value, 10) || 1));
            campoQuantidade.value = quantidade;
            const ok = window.INOFORM_CART && window.INOFORM_CART.addToCart(id, quantidade);
                if (ok) {
                    botao.textContent = 'Adicionado ao carrinho';
                    botao.disabled = true;
                    setTimeout(function () {
                        botao.textContent = 'Adicionar ao carrinho';
                        botao.disabled = false;
                    }, 1200);
                }
            });
        }
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