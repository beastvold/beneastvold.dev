let bgImageArray = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-lonely.jpg",
    "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=2000",
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=2000",
    "https://cdn.getyourguide.com/img/location/54b55235785db.jpeg/88.jpg"
]

let imgIndex = 0;
let carousel = document.querySelector(".carousel");
carousel.style.backgroundImage = `url(${bgImageArray[imgIndex]})`;

// Event listener for our next button
let carouselNextBtn = document.querySelector(".btn-next");
carouselNextBtn.addEventListener("click", function () {
    // If we are at the last image, rotate through to the first
    if (imgIndex === bgImageArray.length - 1) {
        imgIndex = 0;
    }
    // Otherwise, increment to the next image
    else {
        imgIndex++;
    }
    
    // Set the new background image
    carousel.style.backgroundImage = `url(${bgImageArray[imgIndex]})`;
});

// Event listener for our previous button
let carouselPrevBtn = document.querySelector(".btn-prev");
carouselPrevBtn.addEventListener("click", function () {
    // If we are at the first image, rotate through to the last
    if (imgIndex === 0) {
        imgIndex = bgImageArray.length - 1;
    }
    // Otherwise, increment to the next image
    else {
        imgIndex--;
    }
    
    // Set the new background image
    carousel.style.backgroundImage = `url(${bgImageArray[imgIndex]})`;
});