const carrossel = document.querySelector('.carrossel');
const barra = document.querySelector('.barra-carrossel');
const progresso = document.getElementById('barra-progresso');

if (carrossel && barra && progresso) {
    let arrastando = false;

    // largura do polegar = proporção do que está visível
    function atualizarLargura() {
        const total = carrossel.scrollWidth;
        const visivel = carrossel.clientWidth;
        const proporcao = total > visivel ? visivel / total : 1;
        progresso.style.width = (proporcao * 100) + '%';
    }

    // posição do polegar a partir do scroll atual do carrossel
    function atualizarPolegar() {
        const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
        const curso = barra.clientWidth - progresso.offsetWidth;
        if (maxScroll <= 0 || curso <= 0) {
            progresso.style.left = '0px';
            return;
        }
        progresso.style.left = (carrossel.scrollLeft / maxScroll) * curso + 'px';
    }

    // move carrossel E polegar conforme o mouse/dedo
    function irPara(clientX) {
        const limites = barra.getBoundingClientRect();
        const larguraPolegar = progresso.offsetWidth;
        const curso = limites.width - larguraPolegar;
        if (curso <= 0) return;

        let x = clientX - limites.left - larguraPolegar / 2;
        x = Math.max(0, Math.min(x, curso));

        const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
        carrossel.scrollLeft = (x / curso) * maxScroll;
        progresso.style.left = x + 'px';   // <- era isso que faltava
    }

    function iniciarArraste() {
        arrastando = true;
        carrossel.style.scrollBehavior = 'auto';   // sem suavização durante o arraste
        progresso.style.transition = 'none';
    }

    function pararArraste() {
        arrastando = false;
        carrossel.style.scrollBehavior = '';
        progresso.style.transition = '';
    }

    // mouse
    barra.addEventListener('mousedown', function(evento) {
        iniciarArraste();
        irPara(evento.clientX);
        evento.preventDefault();
    });
    document.addEventListener('mousemove', function(evento) {
        if (arrastando) irPara(evento.clientX);
    });
    document.addEventListener('mouseup', pararArraste);

    // toque
    barra.addEventListener('touchstart', function(evento) {
        iniciarArraste();
        irPara(evento.touches[0].clientX);
    }, { passive: true });
    barra.addEventListener('touchmove', function(evento) {
        if (arrastando) {
            irPara(evento.touches[0].clientX);
            evento.preventDefault();
        }
    }, { passive: false });
    barra.addEventListener('touchend', pararArraste);

    // rolar o carrossel direto (roda do mouse / dedo) também move o polegar
    carrossel.addEventListener('scroll', atualizarPolegar);

    function recalcular() {
        atualizarLargura();
        atualizarPolegar();
    }

    window.addEventListener('resize', recalcular);
    window.addEventListener('load', recalcular);   // <- recalcula quando as imagens terminam de carregar
    recalcular();
}