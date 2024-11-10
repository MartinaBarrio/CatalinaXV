function countdown() {
    // Configura la fecha del evento (13 de diciembre de 2024 a las 21:30)
    const eventDate = new Date("December 13, 2024 21:30:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    } else {
        // Cuando el tiempo se acabe, muestra un mensaje en lugar del contador
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}

// Llama a la función inmediatamente y luego cada segundo
countdown();
setInterval(countdown, 1000);

