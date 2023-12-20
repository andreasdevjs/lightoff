document.addEventListener("DOMContentLoaded", function () {
    var lightSwitch = document.getElementById("switch");
    var body = document.body;
    var video = document.getElementById("scary-video");
    var overlay = document.getElementById("overlay");
    var label = document.querySelector(".panel label");

    function openFullscreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            video.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            video.msRequestFullscreen();
        }
    }

    lightSwitch.addEventListener("change", function () {
        if (!lightSwitch.checked) {
            // Fade to black
            body.style.backgroundColor = "black";

            setTimeout(function () {
                label.classList.add("label-off-hidden"); // Hide the 'OFF' text
            }, 200);

            // Wait for 2 seconds (2000 milliseconds) before starting the video
            setTimeout(function () {
                video.style.display = "block";
                video.style.opacity = 1;
                video.play();
                video.volume = 1.0;
                overlay.style.display = "none"; // Hide the overlay
                // openFullscreen();
            }, 1000); // Delay for video to start after the screen dims
        } else {
            // Resetting when the switch is turned back on
            label.classList.remove("label-off-hidden"); // Show the 'OFF' text
            video.style.opacity = 0;
        }
    });

    video.addEventListener("ended", function () {
        video.style.opacity = 0;

        setTimeout(function () {
            body.style.backgroundColor = "white"; // Revert background color
            body.classList.remove("dark-mode");
            video.style.display = "none";
            video.currentTime = 0;
            lightSwitch.checked = true;
            overlay.style.display = "block";
            label.classList.remove("label-off-hidden"); // Show the 'OFF' text
        }, 2000);
    });
});
