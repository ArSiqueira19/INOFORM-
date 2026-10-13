
    var $ = function (id) { return document.getElementById(id); };
    var senha = $('senha'), confirmar = $('confirmar');

    function erroCampo(input, msgId, msg) {
      $(msgId).textContent = msg || '';
      if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    }

    // Mostrar/ocultar senha
    document.querySelectorAll('.olho').forEach(function (b) {
      b.addEventListener('click', function () {
        var campo = $(b.dataset.alvo);
        var mostrar = campo.type === 'password';
        campo.type = mostrar ? 'text' : 'password';
        b.setAttribute('aria-pressed', mostrar);
        b.setAttribute('aria-label', mostrar ? 'Ocultar senha' : 'Mostrar senha');
      });
    });

    // Força da senha
    var nomes = ['', 'Fraca', 'Média', 'Boa', 'Forte'];
    senha.addEventListener('input', function () {
      var v = senha.value, n = 0;
      if (v.length >= 6) n++;
      if (v.length >= 10) n++;
      if (/[A-Z]/.test(v) && /[a-z]/.test(v)) n++;
      if (/\d/.test(v) && /[^A-Za-z0-9]/.test(v)) n++;
      if (!v) n = 0;
      $('forca').dataset.n = n;
      $('forca-texto').textContent = nomes[n];
      if (confirmar.value) checarIgual();
    });

    function checarIgual() {
      var ok = senha.value === confirmar.value;
      return erroCampo(confirmar, 'erro', ok ? '' : 'As senhas não são iguais.');
    }
    confirmar.addEventListener('input', checarIgual);

    // Validação no envio
    $('form').addEventListener('submit', function (e) {
      var nome = $('nome'), email = $('email');
      var ok = true;
      var sucesso = $('sucesso');
      ok = erroCampo(nome, 'erro-nome', nome.value.trim() ? '' : 'Digite um nome de usuário.') && ok;
      ok = erroCampo(email, 'erro-email', email.checkValidity() && email.value ? '' : 'Digite um e-mail válido.') && ok;
      ok = erroCampo(senha, 'erro-senha', senha.value.length >= 6 ? '' : 'A senha precisa ter ao menos 6 caracteres.') && ok;
      ok = checarIgual() && ok;
      ok = erroCampo(null, 'erro-termos', $('termos').checked ? '' : 'Aceite os termos para continuar.') && ok;

      if (!ok) {
        e.preventDefault();
        sucesso.textContent = '';
        var primeiro = document.querySelector('[aria-invalid="true"]');
        if (primeiro) primeiro.focus();
        return;
      }

      e.preventDefault();
      sucesso.textContent = 'Conta criada com sucesso! Redirecionando para o login...';
      document.getElementById('erro').textContent = '';
      setTimeout(function () {
        window.location.href = 'login.html';
      }, 1200);
    });
