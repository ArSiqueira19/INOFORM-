
  const $ = id => document.getElementById(id);
  const modal = $('modal');
  let modoCadastro = false;

  function aviso(txt){
    const a = $('aviso');
    a.textContent = txt;
    a.classList.add('visivel');
    clearTimeout(aviso.t);
    aviso.t = setTimeout(() => a.classList.remove('visivel'), 2500);
  }

  function abrirModal(cadastro){
    modoCadastro = cadastro;
    $('tituloModal').textContent = cadastro ? 'Cadastrar-se' : 'Entrar';
    $('nome').style.display = cadastro ? 'block' : 'none';
    $('nome').required = cadastro;
    $('enviar').textContent = cadastro ? 'CADASTRAR' : 'ENTRAR';
    $('troca').textContent = cadastro ? 'Já tem conta? Entrar' : 'Não tem conta? Cadastre-se';
    modal.classList.add('aberto');
  }
  function fecharModal(){ modal.classList.remove('aberto'); }

  $('btnCadastro').onclick = () => abrirModal(true);
  $('btnUsuario').onclick = () => abrirModal(false);
  $('troca').onclick = () => abrirModal(!modoCadastro);
  $('fechar').onclick = fecharModal;
  modal.addEventListener('click', e => { if(e.target === modal) fecharModal(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') fecharModal(); });

  $('formLogin').addEventListener('submit', e => {
    e.preventDefault();
    fecharModal();
    aviso(modoCadastro ? 'Cadastro realizado com sucesso!' : 'Login realizado com sucesso!');
    e.target.reset();
  });

  $('formBusca').addEventListener('submit', e => {
    e.preventDefault();
    const t = $('campoBusca').value.trim();
    aviso(t ? 'Nenhum produto encontrado para "' + t + '"' : 'Digite algo para pesquisar');
  });

  $('btnComprar').onclick = () => aviso('Ainda não há produtos cadastrados');
  $('btnCarrinho').onclick = () => aviso('Seu carrinho está vazio');

  document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    aviso('Categoria ' + a.dataset.cat + ' em breve');
  }));
