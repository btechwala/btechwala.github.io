const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


// Function to show an alert message
function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "alert-box"; // Assigning a class for easier identification
    alertBox.innerHTML = `
      <div style="background-color: #ffffff; color: #000000; border: 2px solid #007bff; padding: 20px; border-radius: 10px; text-align: center;">
        <p>${message}</p>
        <button style="background-color: #007bff; color: #ffffff; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px;" onclick="closeAlert()">OK</button>
      </div>
    `;
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.zIndex = "9999";
  
    document.body.appendChild(alertBox);
  }
  
  // Function to close the alert
  function closeAlert() {
    const alertBox = document.querySelector(".alert-box");
    if (alertBox) {
      alertBox.parentNode.removeChild(alertBox);
    }
  }
  
  // Show the alert when the HTML document has finished loading
  document.addEventListener("DOMContentLoaded", function() {
    showAlert("After clicking the download button, the advertisement will automatically close. You will then be redirected to download the file within 10 seconds");
  });
      

menuBtn.onclick = () => {
  menu.classList.add("active");
  menu.classList.add("block");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
var theme;
var dmode = document.getElementById("dmode");
dmode.onclick = function () {
  document.body.classList.toggle("darkmode");
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
  if (document.body.classList.contains("darkmode")) {
    dmode.textContent = "Light Mode";
    console.log("dmode");
    theme = "d";
  } else {
    dmode.textContent = "Dark Mode";
    console.log("lmode");
    theme = "l";
  }
  localStorage.setItem("pagetheme", JSON.stringify(theme));
}
let Gettheme = JSON.parse(localStorage.getItem("pagetheme"));
console.log(Gettheme);

if (Gettheme === "d") {
  document.body.classList = "darkmode";
  dmode.textContent = "Light Mode";
}
var linkElement = document.getElementById('howtodownload');
linkElement.href = 'https://www.youtube.com/shorts/PQ_Qf6K-nl8';

function createCircularButton() {
  var button = document.createElement('a');
  button.href = 'https://t.me/btechwala6';
  button.target = '_blank';
  button.className = 'telegram';

  var buttonImage = document.createElement('img');
  var imagePaths = [
    { path: 'pic/tele.png', alt: '../pic/tele.png' },
    { path: 'pic/feed.png', alt: '../pic/feed.png' }
  ];

  var currentImageIndex = 0;

  function updateButtonImage() {
    buttonImage.src = imagePaths[currentImageIndex].path;
    buttonImage.alt = imagePaths[currentImageIndex].alt;
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  }

  updateButtonImage();

  setInterval(updateButtonImage, 1000);
  button.appendChild(buttonImage);
  document.body.appendChild(button);
}
createCircularButton();

// Adding the functionality for the ad link and download link redirection
document.querySelectorAll(".dlbtn").forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();

    // Advertisement link
    const adLink = "https://woopsale.net/4/7729267";
    // Actual download link
    const downloadLink = event.target.closest("a").href;

    // Open the ad link in a new window
    const adWindow = window.open(adLink, "_blank");

    // Generate a random delay between 4500 and 7500 milliseconds (4.5 to 7.5 seconds)
    const randomDelay = Math.floor(Math.random() * (11500 - 7500 + 1)) + 7500;

    // Wait for the random delay and then close the ad window
    setTimeout(function() {
        adWindow.close();
        // Redirect to the actual download link
        window.location.href = downloadLink;
    }, randomDelay);
  });
});
