function fade() {
    const sections = document.querySelectorAll('.scroll');

    function scrollAnimado() {
        sections.forEach((section) => {
            const topo = section.getBoundingClientRect().top - 400;
            if (topo < 0) {
                section.classList.add('ativo');
            }
        });
    }
    

    window.addEventListener('scroll', scrollAnimado)
}

fade();