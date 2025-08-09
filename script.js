const funnyResponses = [
  "404 Brain Not Found! 🤖",
  "You've been selected for a free imaginary pizza! 🍕",
  "Why did you ask? Even I don't know. 🙃",
  "Please insert more coins to continue... 🪙",
  "That's classified by alien intelligence. 👽",
  "Yes. Definitely. Maybe. Not sure. 🤔",
  "Your answer is... potato. 🥔",
  "Shh... I'm sleeping right now. 😴",
  "Oops! I accidentally deleted the answer. 🧹",
  "You've won a trip to your bathroom. Congratulations! 🚽",
  "Response currently stuck in traffic. 🚗💨",
  "If I had a dollar for every dumb question... oh wait. 💸"
];

const memeImages = [
  "https://i.imgur.com/xyz123.jpg", // Replace with actual image URLs
  "https://i.imgur.com/abc456.jpg",
  "https://i.imgur.com/def789.jpg",
  "https://i.imgur.com/ghi012.jpg"
];

let lastTextIndex = -1;
let lastImageIndex = -1;

function getRandomIndex(length, lastIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (length > 1 && newIndex === lastIndex);
  return newIndex;
}

function giveFunnyResponse() {
  const userInput = document.getElementById("userInput").value;
  const responseText = document.getElementById("responseText");
  const funnyImage = document.getElementById("funnyImage");
  
  if (userInput.trim() === "") {
    responseText.textContent = "You said nothing. I give you... silence. 🤫";
    funnyImage.style.display = "block";
    return;
  }
  
  if (userInput.trim().length > 100) {
    responseText.textContent = "That's too much uselessness for me to handle!";
    funnyImage.style.display = "none";
    return;
  }
  
  lastTextIndex = getRandomIndex(funnyResponses.length, lastTextIndex);
  lastImageIndex = getRandomIndex(memeImages.length, lastImageIndex);
  
  responseText.textContent = funnyResponses[lastTextIndex];
  funnyImage.style.display = "none";
  
  funnyImage.onload = function() {
    this.style.display = "block";
  };
  
  funnyImage.onerror = function() {
    responseText.textContent += "\n(Image failed to load - too funny for the internet!)";
  };
  
  funnyImage.src = memeImages[lastImageIndex];
  
  if (!document.body.classList.contains("dark-mode")) {
    document.body.style.background = getRandomColor();
  }
  
  document.getElementById("userInput").value = "";
}

function getRandomColor() {
  const colors = ["#f0f0f0", "#ffe4e1", "#d1ffd6", "#e0ffff", "#fffacd", "#f5f5dc"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (!document.body.classList.contains("dark-mode")) {
    document.body.style.background = "#f0f0f0";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      giveFunnyResponse();
    }
  });
});