// Get the slider container and images
const slider = document.querySelector(".slider-container");
const content = document.querySelectorAll(".slider-content");

// Get the previous and next buttons
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Set the initial image index
let currentImageIndex = 0;

// Function to slide the images
function slideImages() {
  // Hide all images
  content.forEach((content) => {
    content.style.display = "none";
  });

  // Show the current content
  content[currentImageIndex].style.display = "block";
}

console.log(prevButton);

// Add event listeners to the buttons
prevButton.addEventListener("click", () => {
  console.log("previous works");
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = content.length - 1;
  }
  slideImages();
});

nextButton.addEventListener("click", () => {
  console.log("next works");
  currentImageIndex++;
  if (currentImageIndex >= content.length) {
    currentImageIndex = 0;
  }
  slideImages();
});

// Show the initial image
slideImages();
