// Variables
let btnForm = document.querySelector(".btn");
let inputForm = document.querySelector(".email");
let section = document.querySelectorAll("section");

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
});

// Dark card on hover
for (let i = 0; i < section.length; i++) {
  const card = section[i].children;
  for (let i = 0; i < card.length; i++) {
    for (let i = 0; i < card.length; i++) {
      const element = card[i].children;
      element[1].addEventListener("mouseover", () => {
        element[1].classList.remove("bg-light");
        element[1].style.backgroundColor = "grey";
      });
      card[1].addEventListener("mouseout", () => {
        element[1].style.backgroundColor = "";
      });
    }
  }
}

// BoxShadow
for (let i = 0; i < section.length; i++) {
  const card = section[i].children;
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("dblclick", () => {
      card[i].style.boxShadow = "5px 5px";
    });
    card[i].addEventListener("click", () => {
      card[i].style.boxShadow = "0px 0px";
    });
  }
}
