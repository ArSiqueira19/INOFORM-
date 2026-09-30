
const banners = document.querySelectorAll(".banner-slide");
const pontos = document.querySelectorAll(".ponto");

if (banners.length > 0) {
    const TEMPO = 4000; // tempo de cada banner em ms
    let bannerAtual = 0;
    let timer;

    document.documentElement.style.setProperty('--tempo-banner', TEMPO + 'ms');

    function agendarProximo() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            mostrarBanner((bannerAtual + 1) % banners.length);
        }, TEMPO);
    }

    function mostrarBanner(numero) {
        banners.forEach(b => b.classList.remove("ativo"));
        pontos.forEach(p => p.classList.remove("ativo"));

        void document.body.offsetWidth; // força reiniciar a animação do ponto

        banners[numero].classList.add("ativo");
        if (pontos[numero]) pontos[numero].classList.add("ativo");

        bannerAtual = numero;
        agendarProximo();
    }

    window.irParaBanner = mostrarBanner;

    agendarProximo();
}
