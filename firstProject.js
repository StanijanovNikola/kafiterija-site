const burgerMenu = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");

burgerMenu.addEventListener("click", () =>
    navbar.classList.toggle("navbar-active")
);


const dropdownMenuOnHover = document.querySelector(".dropdownMenuOnHover");
const dropdownMenuParent = document.querySelector(".dropdownMenuParent");


dropdownMenuParent.addEventListener("mouseover", function() {
    dropdownMenuParent.classList.add("dropdownMenuActive")
    dropdownMenuOnHover.classList.add("menuScaleOnHover")
})
dropdownMenuParent.addEventListener("mouseout", function() {
    dropdownMenuParent.classList.remove("dropdownMenuActive")
    dropdownMenuOnHover.classList.remove("menuScaleOnHover")
})

dropdownMenuOnHover.addEventListener("mouseover", function() {
    dropdownMenuParent.classList.add("dropdownMenuActive")
    dropdownMenuOnHover.classList.add("menuScaleOnHover")
})
dropdownMenuOnHover.addEventListener("mouseout", function() {
    dropdownMenuParent.classList.remove("dropdownMenuActive")
    dropdownMenuOnHover.classList.remove("menuScaleOnHover")
})

function smallScreens() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        dropdownMenuOnHover.addEventListener("click", () =>{
           dropdownMenuParent.classList.toggle("dropdownMenuParenttActive");
           
        })
    } 
}

smallScreens();


class Carousel {
    constructor(carouselItems, leftAndRightArrow) {
        this.carouselItems = carouselItems;
        this.leftAndRightArrow = leftAndRightArrow
        this.carouselItemsArray = Array.from(carouselItems)
        this.counter = 0;
        this.swipeLeft = function() {
            this.counter -= 1;
            if (this.counter < 0) {
                this.counter = this.carouselItemsArray.length - 1;
            }
            this.carouselItemsArray.forEach((slide) => {
                slide.style.transform = `translateX(-${this.counter * 100}%)`;
            });
        }

        this.swipeRight = function() {
            this.counter = (this.counter + 1) % this.carouselItemsArray.length;
            carouselItemsArray.forEach((slide) => {
                slide.style.transform = `translateX(-${this.counter * 100}%)`;
            });
        }

    }

}




const carouselItems = document.querySelectorAll(".webpageSectionParent");
const leftAndRightArrow = document.querySelectorAll(".arrows");
const carouselItemsArray = Array.from(carouselItems)
let counter = 0;


//funkcija loopa pomeranja slajdova
function swipeSlidesLoop() {
    if (counter === carouselItemsArray.length) {
        counter = 0; 
    } else if (counter < 0) {
        counter = carouselItemsArray.length - 1;
    }
   
    // Pomeranje slajdova
    carouselItemsArray.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

//promenljiva koja drzi vrednost pomeranja slajdova
let slideInterval = setInterval(() => {
    counter++;
    swipeSlidesLoop();
}, 5000);


leftAndRightArrow.forEach(arrows => {
    arrows.addEventListener('click', (e) => {

        clearInterval(slideInterval);
        // carousel.swipeLeft();

        if(e.target.classList.contains("fa-arrow-left")) {
            counter--;
            // carousel.swipeLeft();
        } else if(e.target.classList.contains("fa-arrow-right")) {
            counter++;
            // carousel.swipeRight();
        }
        swipeSlidesLoop();

        slideInterval = setInterval(() => {
            counter++; 
            
            swipeSlidesLoop();
        }, 6000);
        
    })
});

let swipeSlides = function() {
    if(counter === carouselItemsArray.length) {
        counter = 0;
    }
    if(counter < 0) {
        counter = carouselItemsArray.length -1;
    }
    carouselItemsArray.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}


////////////////////////


  


const slideShowCards = document.querySelector(".slideShowCards");
let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    slideShowCards.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = slideShowCards.scrollLeft;
}

const dragging = (element) => {
    if(!isDragging) return;
    element.preventDefault();
    slideShowCards.scrollLeft = startScrollLeft - (element.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    slideShowCards.classList.remove("dragging");
}

slideShowCards.addEventListener("mousedown", dragStart);
slideShowCards.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


//contact form//

const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset poruke
      nameError.style.display = "none";
      emailError.style.display = "none";
      messageError.style.display = "none";
      successMessage.style.display = "none";

      let valid = true;

      if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        valid = false;
      }

      if (!validateEmail(emailInput.value.trim())) {
        emailError.style.display = "block";
        valid = false;
      }

      if (messageInput.value.trim() === "") {
        messageError.style.display = "block";
        valid = false;
      }

      if (valid) {
        // Ovde bi išlo slanje na server (PHP, backend itd.)
        // Za demo, samo prikazujemo poruku
        successMessage.style.display = "block";
        form.reset();
      }
    });