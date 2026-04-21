document.addEventListener("DOMContentLoaded", function() {
    const videoElements = [
        document.getElementById("video1"),
        document.getElementById("video2"),
        document.getElementById("video3")
    ];

    const overallProgressBar = document.getElementById("overall-progress-bar");

    let totalDuration = 0;
    let totalWatchedTime = 0;

    // Flags to track when notifications are shown
    let notified33 = false;
    let notified66 = false;
    let notified100 = false;

    // Calculate the total duration once all metadata is loaded
    videoElements.forEach(video => {
        video.addEventListener("loadedmetadata", () => {
            totalDuration += video.duration;
        });

        // Update total watched time and progress bar on each video's timeupdate
        video.addEventListener("timeupdate", () => {
            let watchedTime = 0;
            videoElements.forEach(v => watchedTime += v.currentTime);
            totalWatchedTime = watchedTime;

            // Update overall progress bar
            const progressPercentage = (totalWatchedTime / totalDuration) * 100;
            overallProgressBar.style.width = progressPercentage + "%";

            // Notify the user at specific progress points
            if (progressPercentage >= 33 && !notified33) {
                alert("1st Trainer Meeting: Time to meet your trainer to review your workout plan.");
                notified33 = true;
            }
            if (progressPercentage >= 66 && !notified66) {
                alert("2nd Trainer Meeting: Schedule a check-in with your trainer.");
                notified66 = true;
            }
            if (progressPercentage >= 100 && !notified100) {
                alert("Final Trainer Meeting: Great job! It's time for your last meeting with the trainer.");
                notified100 = true;
            }
        });
    });
});
