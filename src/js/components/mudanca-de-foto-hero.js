export function mudarBackground() {

document.addEventListener('DOMContentLoaded', function() {
    const bg = document.getElementById('hero-bg');
    const fotos = [
        "../../src/imagens/interestelar2.png",
        "../../src/imagens/interestelar-hero.png",
        "../../src/imagens/interestelar3.png"
    ];
    let i = 0;

    setInterval(() => {
        bg.style.opacity = 0;

        setTimeout(() => {
            i = (i + 1) % fotos.length; // Lógica de contador inteligente
            bg.style.backgroundImage = `url(${fotos[i]})`;
            
            bg.style.opacity = 1;
        }, 1500); 

    }, 5000); 
});
}