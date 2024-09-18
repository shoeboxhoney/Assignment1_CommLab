function showFrame(frameId) {
    // Hide the menu
    document.getElementById('menu').style.display = 'none';
    
    // Show the specific frame that was clicked
    document.getElementById(frameId).style.display = 'block';
}


// Function to go back to the menu from any frame
function backToMenu() {
    const videoMaterialFrame = document.getElementById('video-material');
    if (videoMaterialFrame) {
        videoMaterialFrame.style.display = 'none';
        
        // Pause and reset the video if it's present and playing
        const video = videoMaterialFrame.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
    // Hide all frames and show the menu
    const frames = ['about', 'contacts', 'gallery', 'video-material'];
    frames.forEach(frame => document.getElementById(frame).style.display = 'none');
    document.getElementById('menu').style.display = 'flex'; // Show the menu again
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

