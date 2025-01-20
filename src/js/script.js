// let owpTexts = 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.';

let plusMinus = document.querySelectorAll(".plusMinus");
let owpMainBlock = document.querySelectorAll(".owpMainBlock");

for (let i = 0; i < plusMinus.length; i++) {
  plusMinus[i].addEventListener("click", function () {
    owpMainBlock[i].classList.toggle("coloredGreen");

    if (owpMainBlock[i].classList.contains("coloredGreen")) {
      plusMinus[i].innerHTML = "<b>" + "-" + "</b>";
    } else {
      plusMinus[i].innerHTML = "<b>" + "+" + "</b>";
    }
  });
}

let hidBut = document.querySelector(".hidBut button");
let hiddenWorkers = document.querySelectorAll(".hidden");

hidBut.addEventListener("click", function () {
  for (let worker of hiddenWorkers) {
    worker.classList.toggle("hidden");
  }

  if (hidBut.textContent === "See all team") {
    hidBut.textContent = "Collapse team";
  } else {
    hidBut.textContent = "See all team";
  }
});

let leftNavArrow = document.querySelector(".leftArrow");
let rightNavArrow = document.querySelector(".rightArrow");
let navStars = document.querySelectorAll(".star");
let nameAutorCom = document.querySelector(".comentAutor h4");
let profAutorCom = document.querySelector(".comentAutor p");

leftNavArrow.style.color = "grey";

let arrComents = [
  {
    name: "Dean",
    prof: "Student",
  },
  {
    name: "John",
    prof: "Police man",
  },
  {
    name: "Joe",
    prof: "Buhgalter",
  },
  {
    name: "Ben",
    prof: "Designer",
  },
  {
    name: "Marin",
    prof: "Bloger",
  },
];

let indexComents = 0;
nameAutorCom.textContent = arrComents[indexComents]["name"];
profAutorCom.textContent = arrComents[indexComents]["prof"];

function swipeRight() {
  indexComents += 1;

  nameAutorCom.textContent = arrComents[indexComents]["name"];
  profAutorCom.textContent = arrComents[indexComents]["prof"];

  navStars[indexComents].classList.add("selectedStar");

  navStars[indexComents - 1].classList.remove("selectedStar");

  if (indexComents === arrComents.length - 1) {
    rightNavArrow.removeEventListener("click", swipeRight);
    rightNavArrow.style.color = "grey";
  }

  if (indexComents >= 0) {
    leftNavArrow.addEventListener("click", swipeLeft);
    leftNavArrow.style.color = "white";
  }
}

rightNavArrow.addEventListener("click", swipeRight);

function swipeLeft() {
  indexComents -= 1;

  nameAutorCom.textContent = arrComents[indexComents]["name"];
  profAutorCom.textContent = arrComents[indexComents]["prof"];

  navStars[indexComents].classList.add("selectedStar");

  navStars[indexComents + 1].classList.remove("selectedStar");

  if (indexComents === 0) {
    leftNavArrow.removeEventListener("click", swipeLeft);
    leftNavArrow.style.color = "grey";
  }

  if (indexComents < arrComents.length) {
    rightNavArrow.addEventListener("click", swipeRight);
    rightNavArrow.style.color = "white";
  }
}

leftNavArrow.addEventListener("click", swipeLeft);

let headerNav = document.querySelector(".headerNav");
let bxMenu = document.querySelector(".bx-menu");
let main = document.querySelector("main");
headerNavLinks = headerNav.children;

// console.log(headerNavLinks);

bxMenu.addEventListener("click", () => {
  headerNav.classList.toggle("display");
});

main.addEventListener("click", () => {
  headerNav.classList.add("display");
});

// headerNav.addEventListener("click", () => {
//   this.classList.add("display");
// });

for (let link of headerNavLinks) {
  link.addEventListener("click", () => {
    headerNav.classList.add("display");
  });
}
