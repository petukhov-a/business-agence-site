// Navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
}); 
// End of Navber

//Section 2 Video
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
    if (video.paused) {
        btn.className = 'far fa-pause-circle';
        video.play();
        video.style.opacity = '0.7';
    } else { 
        btn.className = 'far fa-play-circle';
        video.pause();
        video.style.opacity = '0.3';
    }
}

btn.addEventListener('click', () => {
    playPause();
});

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`;
    if (video.ended) {
        btn.className = 'far fa-play-circle';
        video.style.opacity = '0.3';
    }
})
//End of Section 2 Video 

// Section 3 Pricing Cards
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
// End of Section 3 Pricing Cards