// GSAP !!!!!!!!!!!!!!!!!!!!!!!!!
// OVERLAY ================
TweenMax.to(".first", 2.4, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut
});
// ===================================


// !!!! TEXTE EFFET "FADE IN"
gsap.from("nav", {
  y:80, 
  stagger:0.05, 
  opacity:0, 
  delay: 3,
  duration:3.5, 
  ease:"power3.out"
})
// ====================================


