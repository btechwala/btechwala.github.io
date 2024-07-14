document.getElementById("downloadButton").addEventListener("click", function() {
    // Advertisement link
    const adLink = "https://woopsale.net/4/7729267";
    // Actual download link
    const downloadLink = "https://btechwala.github.io";

    // Open the ad link in a new window
    const adWindow = window.open(adLink, "_blank");

    // Generate a random delay between 3000 and 6000 milliseconds (3 to 6 seconds)
    const randomDelay = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;

    // Wait for the random delay and then close the ad window
    setTimeout(function() {
        adWindow.close();
        // Redirect to the actual download link
        window.location.href = downloadLink;
    }, randomDelay);
});
