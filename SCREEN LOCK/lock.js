document.addEventListener("DOMContentLoaded", function() {
    const lockButton = document.getElementById("lock-button");
    const overlay = document.getElementById("overlay");

    lockButton.addEventListener("click", function() {
        // Check if fullscreen is supported
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
                .then(() => {
                    // Fullscreen mode is enabled, show the overlay
                    overlay.classList.remove("hidden");
                })
                .catch((error) => {
                    console.error("Error entering fullscreen mode:", error);
                });
        } else {
            alert("Fullscreen is not supported in this browser.");
        }
    });

    // Handle unlocking the fullscreen
    overlay.addEventListener ("click", function() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
                .then(() => {
                    // Fullscreen mode is exited, hide the overlay
                    overlay.classList.add("hidden");
                })
                .catch((error) => {
                    console.error("Error exiting fullscreen mode:", error);
                });
        }
    });
});