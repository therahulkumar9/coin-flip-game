const coinElement = document.getElementById("coin");
const headButton = document.getElementById("head");
const tailButton = document.getElementById("tail");
const tossButton = document.getElementById("toss");
const resultDiv = document.getElementById("result");

let userChoice = null;

// Select Head or Tail
headButton.addEventListener("click", () => {
  userChoice = "Head";
  headButton.classList.add("selected");
  tailButton.classList.remove("selected");
  resultDiv.textContent = "";
  coinElement.textContent = "?";
});

tailButton.addEventListener("click", () => {
  userChoice = "Tail";
  tailButton.classList.add("selected");
  headButton.classList.remove("selected");
  resultDiv.textContent = "";
  coinElement.textContent = "?";
});

// Toss Logic
tossButton.addEventListener("click", () => {
  if (!userChoice) {
    alert("Please choose Head or Tail first!");
    return;
  }

  const result = Math.random() < 0.5 ? "Head" : "Tail";
  coinElement.classList.add("flip");

  setTimeout(() => {
    coinElement.textContent = result;
    coinElement.classList.remove("flip");

    if (userChoice === result) {
      resultDiv.textContent = "🎉 You guessed correctly!";
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = "❌ Sorry, you guessed wrong.";
      resultDiv.style.color = "red";
    }
  }, 600);
});



// Modal functionality
const modal = document.getElementById("howToPlayModal")
const link = document.getElementById("howToPlayLink")
const closeBtn = document.querySelector(".close")

link.addEventListener("click", function (e) {
  e.preventDefault()
  modal.style.display = "block"
})

closeBtn.addEventListener("click", function () {
  modal.style.display = "none"
})

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none"
  }
})
