document.addEventListener('DOMContentLoaded', () => {
    const nsfwSection = document.getElementById('nsfw-section');

    if (!nsfwSection) return;

    // Detecta cuando el usuario está viendo la sección NSFW
    const observerOptions = {
        root: null,
        threshold: 0.25 // Se activa cuando el 25% de la tarjeta es visible en pantalla
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cambia toda la web a un ambiente sombrío y rojo
                document.body.classList.add('nsfw-active');
            } else {
                // Vuelve al tema oscuro elegante normal al salir de la sección
                document.body.classList.remove('nsfw-active');
            }
        });
    }, observerOptions);

    observer.observe(nsfwSection);
});
