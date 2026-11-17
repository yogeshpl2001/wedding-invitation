
// ===================================
// LUXURY WEDDING WEBSITE
// JavaScript functionality
// ===================================

// ENTER YOUR WEDDING DATE HERE
// Format: YYYY-MM-DDTHH:MM:SS+05:30

const weddingDate = "YYYY-MM-DDTHH:MM:SS+05:30";

function updateCountdown() {

    const timer = document.getElementById("timer");

    if (!timer) return;

    if (weddingDate.startsWith("YYYY")) {
        timer.textContent = "Wedding date will be announced soon";
        return;
    }

    const targetDate = new Date(weddingDate).getTime();
    const now = new Date().getTime();

    if (isNaN(targetDate)) {
        timer.textContent = "Please enter a valid wedding date";
        return;
    }

    const difference = targetDate - now;

    if (difference <= 0) {
        timer.textContent = "Today is the special day! ❤️";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    timer.innerHTML =
        days + " Days | " +
        hours + " Hours | " +
        minutes + " Minutes | " +
        seconds + " Seconds";
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);


// Smooth scrolling for website links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

console.log("Wedding website loaded successfully!");

// ===================================
// LUXURY WEDDING WEBSITE
// JavaScript functionality
// ===================================

// ENTER YOUR WEDDING DATE HERE
// Format: YYYY-MM-DDTHH:MM:SS+05:30

const weddingDate = "YYYY-MM-DDTHH:MM:SS+05:30";

function updateCountdown() {

    const timer = document.getElementById("timer");

    if (!timer) return;

    if (weddingDate.startsWith("YYYY")) {
        timer.textContent = "Wedding date will be announced soon";
        return;
    }

    const targetDate = new Date(weddingDate).getTime();
    const now = new Date().getTime();

    if (isNaN(targetDate)) {
        timer.textContent = "Please enter a valid wedding date";
        return;
    }

    const difference = targetDate - now;

    if (difference <= 0) {
        timer.textContent = "Today is the special day! ❤️";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    timer.innerHTML =
        days + " Days | " +
        hours + " Hours | " +
        minutes + " Minutes | " +
        seconds + " Seconds";
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);


// Smooth scrolling for website links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

console.log("Wedding website loaded successfully!");
