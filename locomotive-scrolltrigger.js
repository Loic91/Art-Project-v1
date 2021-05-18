gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  // el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// chaque fois que Locomotive Scroll se met à jour, dire à ScrollTrigger de se mettre à jour également (positionnement de synchronisation)
locoScroll.on("scroll", ScrollTrigger.update);

// dire à ScrollTrigger d'utiliser ces méthodes proxy pour l'élément ".smooth-scroll" puisque Locomotive Scroll détourne des choses
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // nous n'avons pas besoin de définir un scrollLeft car nous ne faisons défiler que verticalement.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll gère les choses de manière complètement différente sur les appareils mobiles - il ne transforme même pas du tout le conteneur! Donc, pour obtenir le bon comportement et éviter les tracas, nous devons épingler les choses avec la position: fixe sur mobile. Nous le détectons en vérifiant s'il y a une transformation appliquée au conteneur (l'élément contrôlé par LocomotiveScroll).
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
  // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});



ScrollTrigger.create({
  trigger: '.hidden-img',
  scroller: '[data-scroll-container]',
  start: "top 50%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-one',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-one", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})




ScrollTrigger.create({
  trigger: '.hidden-img-2',
  scroller: '[data-scroll-container]',
  start: "top 40%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img-2', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-two',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-two", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})

ScrollTrigger.create({
  trigger: '.hidden-img-3',
  scroller: '[data-scroll-container]',
  start: "top 40%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img-3', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-three',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-three", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})

ScrollTrigger.create({
  trigger: '.hidden-img-4',
  scroller: '[data-scroll-container]',
  start: "top 40%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img-4', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-four',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-four", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})

ScrollTrigger.create({
  trigger: '.hidden-img-5',
  scroller: '[data-scroll-container]',
  start: "top 40%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img-5', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-five',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-five", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})

ScrollTrigger.create({
  trigger: '.hidden-img-6',
  scroller: '[data-scroll-container]',
  start: "top 40%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img-6', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-six',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-six", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})

ScrollTrigger.create({
  trigger: '.hidden-img-7',
  scroller: '[data-scroll-container]',
  start: "top 40%", 
  end: "bottom 50%", 
  animation: gsap.to('.hidden-img-7', 1.2, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

// !!!! TEXTE EFFET "FADE IN"
ScrollTrigger.create({
  trigger: '.bloc-p-seven',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%",
  animation: gsap.from(".bloc-p-seven", {
                y:80, 
                stagger:0.05, 
                opacity:0, 
                duration:1.5, 
                ease:"power3.out"
  })
  // markers: true
})

ScrollTrigger.create({
  trigger: '#tf-1',
  scroller: '[data-scroll-container]',
  start: "top 80%", 
  end: "bottom 20%", 
  animation: gsap.to('#tf-1', 1.5, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})

ScrollTrigger.create({
  trigger: '#tf-2',
  scroller: '[data-scroll-container]',
  start: "top 90%", 
  end: "bottom 20%", 
  animation: gsap.to('#tf-2', 1.5, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})




// chaque fois que la fenêtre est mise à jour, nous devons actualiser ScrollTrigger puis mettre à jour LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// une fois que tout est configuré, refresh() ScrollTrigger et mettez à jour LocomotiveScroll car un remplissage peut avoir été ajouté pour l'épinglage, etc.
ScrollTrigger.refresh();
