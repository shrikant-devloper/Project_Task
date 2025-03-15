const images = [
   'Images/facebook.png',
   'Images/lenovo.jpeg',
   'Images/user-profile.png',
   'Images/instagram.png',
   'Images/my_pic.jpg',
   'Images/Khatu.jpg'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to update the image displayed
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Initialize the slider with the first image
updateImage();