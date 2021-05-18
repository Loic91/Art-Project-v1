// GSAP !!!!!!!!!!!!!!!!!!!!!!!!!
// OVERLAY ================
TweenMax.to(".first", 2.4, {
    delay: 3.4,
    top: "-100%",
    ease: Expo.easeInOut
});

gsap.to('#title-art', 1.5, {
    y: '-100%',
    delay: 0.5,
});


// !!!!! SVG
const path = document.querySelector('path');
        console.log(path.getTotalLength());
