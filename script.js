

document.addEventListener("click", function() {
    const audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play().catch(error => console.log("Autoplay bloqueado:", error));
    }
}, { once: true }); // Solo se ejecuta una vez


document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");

    envelope.addEventListener("mouseenter", () => {
        envelope.classList.add("open");
    });

    envelope.addEventListener("mouseleave", () => {
        envelope.classList.remove("open");
    });

    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open");
    });

    // Función para generar corazones al mover el mouse
    document.addEventListener("mousemove", (event) => {
        createHeart(event.pageX, event.pageY);
    });

    function createHeart(x, y) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.innerText = Math.random() > 0.5 ? "❤️" : "💖";

        document.body.appendChild(heart);

        // Eliminar el corazón después de 1 segundo
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});
