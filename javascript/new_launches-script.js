let currentSlide = 0; //this variable keep tracks of the current slide

function showSlide(index) {
    const slides = document.querySelectorAll('.items'); //select all imgs and store in 'slides' 
    if (index >= slides.length) { //if there's no more img
        currentSlide = 0; // Loop back to first image
    } else if (index < 0) { //if user tries to move back from the first slide
        currentSlide = slides.length - 1; // Go to last image
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // calc how much to move horizontally(each slides holds 100% width)
    // inserting offset formula to move the entire image container using translateX 
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`; 
}

function moveSlide(direction) { //when user clicks next (dir=1) , previous (dir=-1)
    showSlide(currentSlide + direction); // added value will update the index parameter
}

// Initialize the first slide
showSlide(currentSlide);
