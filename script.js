const coinElement = document.getElementById("coin")
const headButton = document.getElementById("head")
const tailButton = document.getElementById("tail")

function flipCoin() {
  const result = Math.random() < 0.5 ? "Head" : "Tail"
  coinElement.classList.add("flip")
  setTimeout(() => {
    coinElement.textContent = result
    coinElement.classList.remove("flip")
  }, 300)
  return result
}

headButton.addEventListener("click", () => {
  const result = flipCoin()
  setTimeout(() => {
    alert(
      result === "Head"
        ? "🎉 You guessed correctly!"
        : "❌ Sorry, you guessed wrong."
    )
  }, 350)
})

tailButton.addEventListener("click", () => {
  const result = flipCoin()
  setTimeout(() => {
    alert(
      result === "Tail"
        ? "🎉 You guessed correctly!"
        : "❌ Sorry, you guessed wrong."
    )
  }, 350)
})
