// Variables
let btnForm = document.querySelector(".btn");
let inputForm = document.querySelector("#exampleInputEmail1");
let section = document.querySelectorAll("section");
let btn = document.createElement("button");
let carte = document.querySelector(".card");

// Form
/**
 * Le code pour gérer le form ne fonctionne pas sur toutes les pages.
 * C'est assez intriguant, je n'arrive pas à le faire fonctionner sur recettes.html, alors qu'il fonctionne dans index.html.
 * Pourtant le reste du code fonctionne très bien sur toutes les pages.
 */
btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = inputForm.value;
  alert(`Merci d'avoir souscrit à notre Newsletter!
E-Mail souscrit: ${inputValue}`);
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
  const sectionElement = section[i];
  // Doubleclick event
  sectionElement.addEventListener("dblclick", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      card.style.boxShadow = "5px 5px rgb(142, 141, 255)";
    }
    // Create removeBtn
    const cardBody = e.target.closest(".card-body");
    if (cardBody) {
      if (!cardBody.querySelector(".remove-btn")) {
        let removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.style.width = "100px";
        removeBtn.style.height = "50px";
        removeBtn.style.backgroundColor = "red";
        removeBtn.style.color = "white";
        removeBtn.textContent = "REMOVE";
        cardBody.appendChild(removeBtn);
      }
    }
  });
  // Remove BoxShadow
  sectionElement.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      card.style.boxShadow = "0px 0px";
    }
    // Hide RemoveButton
    const cardBody = e.target.closest(".card-body");
    if (cardBody && e.target !== cardBody.querySelector(".remove-btn")) {
      const btn = cardBody.querySelector(".remove-btn");
      if (btn) {
        btn.remove();
      }
    }
    // Remove card on click
    if (e.target.classList.contains("remove-btn")) {
      e.stopPropagation();
      const cardToRemove = e.target.closest(".card");
      if (cardToRemove) {
        cardToRemove.remove();
      }
    }
  });
}
