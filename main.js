const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

/*const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const msjInput = document.getElementById("msjInput");
*/
const formContact = document.getElementById("formContact");

formContact.addEventListener("submit", (e) => {
  console.log(document.getElementById("sendBtn"));
  var nameV = document.getElementById("nameInput").value;
  var emailV = document.getElementById("emailInput").value;
  var msjInput = document.getElementById("msjInput").value;
  if (nameV == "" || emailV == "" || msjInput == "") {
    alert(
      "Something is wrong! Check out that you didn't left any blank fields"
    );
    return false;
  } else {
    alert("Great! Your message has been sent");
    return true;
  }
});
