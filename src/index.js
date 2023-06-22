const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      card.classList.toggle("turned");

      if (memoryGame.pickedCards.length === 0) {
        memoryGame.pickedCards.push(card);
      } else if (memoryGame.pickedCards.length === 1) {
        const previousCard = memoryGame.pickedCards[0];
        const previousCardName = previousCard.getAttribute("data-card-name");
        const newCardName = card.getAttribute("data-card-name");
        const isAMatch = memoryGame.checkIfPair(previousCardName, newCardName);
        if (isAMatch) {
          previousCard.classList.toggle("blocked");
          card.classList.toggle("blocked");
          if (memoryGame.checkIfFinished()) {
            gameIsOver();
          }
        } else {
          setTimeout(() => {
            previousCard.classList.toggle("turned");
            card.classList.toggle("turned");
          }, 1500);
        }
        memoryGame.pickedCards = [];
      }

      // console.log("Card clicked: ", card);
      // console.log(`Card clicked: ${card}`);
    });
  });
});

function gameIsOver() {
  const newDiv = document.createElement("div");
  // and give it some content
  const newContent = document.createTextNode("Congratulations! You Won!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newDiv.style.backgroundColor = "blue";
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("memory-board");
  document.body.insertBefore(newDiv, currentDiv);
}
