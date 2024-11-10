let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function showImage(index) {
    const offset = -index * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function goToImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

// Initialize the carousel
showImage(currentIndex);

