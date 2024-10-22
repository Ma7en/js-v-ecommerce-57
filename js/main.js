

/*
===============================================
===============================================
*/

/* start header  */

let  menuitem = document.querySelector(".header #menuitem");
menuitem.style.maxHeight = "0px";

function menutoggle() {
    if (menuitem.style.maxHeight == '0px') {
        menuitem.style.maxHeight = "400px"
    } else {
        menuitem.style.maxHeight = "0px"
    }
}


/* end header */

/*
===============================================
===============================================
*/

/* start home */

const slide = document.querySelector("#home .slider").children;
const prev = document.querySelector("#home .prev");
const next = document.querySelector("#home .next");

let index = 0;

prev.addEventListener("click", function () {
    prevslide()

})

next.addEventListener("click", function () {
    nextslide()

})

function prevslide() {
    if (index == 0) {
        index = slide.length - 1;
    } else {
        index--;
    }
    changeSlide();
}

function nextslide() {
    if (index == slide.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("active");
    }
    slide[index].classList.add("active");
}

function autoPlay() {
    nextslide();
}
let timer = setInterval(autoPlay, 4000);



/* end home */

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/