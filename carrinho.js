
  const $ = id => document.getElementById(id);

  function aviso(txt) {
    const a = $('aviso');
    if (!a) return;
    a.textContent = txt;
    a.classList.add('visivel');
    clearTimeout(aviso.t);
    aviso.t = setTimeout(() => a.classList.remove('visivel'), 2500);
  }

  function getCart() {
    try {
      const data = JSON.parse(localStorage.getItem('inoform-cart') || '[]');
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  }

  function setCart(cart) {
    localStorage.setItem('inoform-cart', JSON.stringify(cart));
    if (window.INOFORM_CART && typeof window.INOFORM_CART.updateCartBadges === 'function') {
      window.INOFORM_CART.updateCartBadges();
    }
  }

  function formatMoney(value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  function renderCart() {
    const container = $('cart-content');
    if (!container) return;

    window.INOFORM_CART?.updateCartBadges();
    const cart = getCart();

    if (!cart.length) {
      container.innerHTML = `
        <svg viewBox="40 30 640 560" role="img" aria-label="Carrinho vazio" fill="none" stroke="#6b6b6b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M148 183H205Q213 183 215 195L222 253"/>
          <path d="M222 253H525Q529 253 528 262L500 450H245Z"/>
          <circle cx="263" cy="536" r="18"/><circle cx="482" cy="536" r="18"/>
          <path d="M108 563H632M55 563H90M655 563H665"/>
          <circle cx="539" cy="60" r="11" stroke-width="3"/>
          <path d="M428 122l16 16M444 122l-16 16" stroke-width="3"/>
          <path d="M348 178l8 8M356 178l-8 8" stroke-width="3"/>
          <circle cx="280" cy="73" r="1.5"/>
        </svg>
        <h1>SEU CARRINHO ESTÁ VAZIO</h1>
        <p>Adicione produtos e eles aparecerão aqui.</p>
        <a href="index.html" class="btn primario">VOLTAR PARA A LOJA</a>
      `;
      return;
    }

    const subtotal = cart.reduce((total, item) => total + Number(item.preco) * Number(item.quantidade), 0);
    const frete = subtotal > 0 ? 25 : 0;
    const total = subtotal + frete;
    const produtos = window.INOFORM_PRODUTOS || {};

    container.innerHTML = `
      <div class="cart-header">
        <h1>Meu carrinho</h1>
        <a href="index.html" class="continuar">Continuar comprando</a>
      </div>
      <div class="cart-layout">
        <div class="itens">
          ${cart.map(item => {
            const imagem = produtos[item.id]?.imagem || item.imagem || '';
            return `
              <article class="item-cart" data-id="${item.id}">
                <img src="${imagem}" alt="${item.nome}">
                <div class="info-item">
                  <h2>${item.nome}</h2>
                  <p>${formatMoney(item.preco)}</p>
                  <div class="acoes-item">
                    <div class="quantidade">
                      <button type="button" class="qty-btn" data-action="minus" data-id="${item.id}">-</button>
                      <span>${item.quantidade}</span>
                      <button type="button" class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
                    </div>
                    <button type="button" class="remover" data-id="${item.id}">Remover</button>
                  </div>
                </div>
                <strong>${formatMoney(Number(item.preco) * Number(item.quantidade))}</strong>
              </article>
            `;
          }).join('')}
        </div>

        <aside class="resumo">
          <h3>Resumo do pedido</h3>
          <div class="linha"><span>Subtotal</span><strong>${formatMoney(subtotal)}</strong></div>
          <div class="linha"><span>Frete</span><strong>${formatMoney(frete)}</strong></div>
          <div class="linha total"><span>Total</span><strong>${formatMoney(total)}</strong></div>
          <button type="button" class="btn primario" id="finalizarCompra">FINALIZAR COMPRA</button>
        </aside>
      </div>
    `;

    document.getElementById('finalizarCompra')?.addEventListener('click', function () {
      aviso('Pedido finalizado com sucesso!');
      setCart([]);
      renderCart();
    });

    document.querySelectorAll('.qty-btn').forEach(button => {
      button.addEventListener('click', function () {
        const id = this.dataset.id;
        const action = this.dataset.action;
        const cartAtual = getCart();
        const item = cartAtual.find(entry => entry.id === id);

        if (!item) return;

        if (action === 'plus') {
          item.quantidade = (Number(item.quantidade) || 0) + 1;
        } else {
          item.quantidade = (Number(item.quantidade) || 0) - 1;
          if (item.quantidade <= 0) {
            const novaLista = cartAtual.filter(entry => entry.id !== id);
            setCart(novaLista);
            renderCart();
            return;
          }
        }

        setCart(cartAtual);
        renderCart();
      });
    });

    document.querySelectorAll('.remover').forEach(button => {
      button.addEventListener('click', function () {
        const id = this.dataset.id;
        setCart(getCart().filter(item => item.id !== id));
        renderCart();
        aviso('Produto removido do carrinho');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', renderCart);
  window.addEventListener('storage', renderCart);
