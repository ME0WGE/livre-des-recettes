let btnForm = document.querySelector(".btn");
let inputForm = document.querySelector(".email");
let section = document.querySelectorAll("section");
// var card = document.querySelector(".card");

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
});

for (let i = 0; i < section.length; i++) {
  const card = section[i].children;
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", () => {
      card[i].style.boxShadow = "5px 5px";
    });
    card[i].addEventListener("mouseout", () => {
      card[i].style.boxShadow = "0px 0px";
    });
  }
}
