// GSAP !!!!!!!!!!!!!!!!!!!!!!!!!
// OVERLAY ================
TweenMax.to(".second", 2.4, {
    delay: 0.7,
    top: "100%",
    ease: Expo.easeInOut
});

gsap.to('.hidden-img', 2.5, {
    x: '100%',
    delay: 3
})

gsap.to('.container-button', 2.5, {
    y: '-100%',
    delay: 3
})

// ===============================

// !!!!! FAIRE BOUGER UN CONTAINER AU MOUVEMENT DE LA SOURIS

let button = document.getElementsByClassName('button');

//quand on bouge la souris on veut qu'il y est une fonction qui parte 
document.onmousemove = function() {

    //"client" suivit de X ou Y correspond à la position de la souris de l'utilisateur 
    // 50 correspond à la puissance du mouvement
    let x = event.clientX * 30 / window.innerWidth + "%";
    let y = event.clientY * 30 / window.innerHeight + "%";

    for (let i = 0; i < 1; i++) {
        button[i].style.left = x;
        button[i].style.top = y;
        button[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }

    console.log("x =" + x);
    console.log("y =" + y);
}
// ======================================================================



// !!!!! SVG
const path = document.querySelector('path');
        console.log(path.getTotalLength());

