// Mostrar informações de tecnologias
const tecnologias = document.querySelectorAll('.tecnologia');
const infoFixa = document.getElementById('info-fixa');
tecnologias.forEach(tec => {
    tec.addEventListener('click', () => {
        const info = tec.getAttribute('data-info');
        infoFixa.innerHTML = `<p>${info}</p>`;
    });
});

// Formulário com mensagem de sucesso
const formulario = document.querySelector('.formulario');
const msgSucesso = document.getElementById('mensagem-sucesso');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    msgSucesso.style.display = 'block';
    formulario.reset();
});

// Botão para voltar ao topo
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});




