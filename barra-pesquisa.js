// ===================== BARRA DE PESQUISA =====================
const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisa = document.getElementById('botao-pesquisa');
const listaResultados = document.getElementById('resultados-pesquisa');
const formularioPesquisa = campoPesquisa && campoPesquisa.closest('form');

if (campoPesquisa && botaoPesquisa && listaResultados) {

    // ignora maiúsculas e acentos: "tenis" acha "Tênis"
    function normalizar(texto) {
        return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function buscar(termo) {
        const palavras = normalizar(termo).split(/\s+/).filter(Boolean);
        if (palavras.length === 0) return [];

        const produtosDisponiveis = window.INOFORM_PRODUTOS || {};
        return Object.entries(produtosDisponiveis).filter(function (item) {
            const p = item[1];
            const texto = normalizar((p.nome || '') + ' ' + (p.descricao || ''));
            return palavras.every(function (palavra) {
                return texto.includes(palavra);
            });
        });
    }

    function fecharLista() {
        listaResultados.classList.remove('aberta');
        listaResultados.innerHTML = '';
    }

    function mostrarResultados() {
        const termo = campoPesquisa.value;
        if (!termo.trim()) { fecharLista(); return; }

        const achados = buscar(termo);

        if (achados.length === 0) {
            listaResultados.innerHTML = '<li class="sem-resultado">Nenhum produto encontrado</li>';
        } else {
            listaResultados.innerHTML = achados.slice(0, 6).map(function (item) {
                const id = item[0];
                const p = item[1];
                const foto = p.imagem ? '<img src="' + p.imagem + '" alt="">' : '';
                  const preco = Number(p.preco).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                  });
                return '<li><a href="produto.html?id=' + id + '">' + foto +
                      '<span><strong>' + p.nome + '</strong><small>' + preco + '</small></span></a></li>';
            }).join('');
        }
        listaResultados.classList.add('aberta');
    }

    // Enter ou botão: abre o primeiro resultado
    function pesquisar() {
        const achados = buscar(campoPesquisa.value);
        if (achados.length > 0) {
            window.location.href = 'produto.html?id=' + achados[0][0];
        } else {
            mostrarResultados();
        }
    }

    campoPesquisa.addEventListener('input', mostrarResultados);
    campoPesquisa.addEventListener('focus', mostrarResultados);
    formularioPesquisa?.addEventListener('submit', function (e) {
        e.preventDefault();
        pesquisar();
    });
    campoPesquisa.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') fecharLista();
    });
    if (!formularioPesquisa) botaoPesquisa.addEventListener('click', pesquisar);

    // clicar fora fecha a lista
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.barra-pesquisa')) fecharLista();
    });
}