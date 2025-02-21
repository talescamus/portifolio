// Adiciona a classe 'active' ao link clicado
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});