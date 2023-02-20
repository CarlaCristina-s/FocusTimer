let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonIncreaseTime = document.querySelector('.increaseTime')
let buttonDecreaseTime = document.querySelector('.decreaseTime')
let timeout
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function pause() { }

function startCountdown() {
  timeout = setTimeout(updateTimer, 1000)
}

function updateTimer() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)

  secondsDisplay.textContent = "00"

  if (minutes <= 0) {
    resetControls()
    return
  }

  if (seconds <= 0) {
    seconds = 60

    minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
  }

  secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

  startCountdown()
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  startCountdown()
})

buttonPause.addEventListener('click', function () {
  clearTimeout(timeout)

  resetControls()
})

buttonStop.addEventListener('click', function () {
  clearTimeout(timeout)
  resetControls()

  minutesDisplay.textContent = 25
  secondsDisplay.textContent = "00"
})

buttonIncreaseTime.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)

  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonDecreaseTime.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)

  if (minutes - 5 <= 0) {
    minutesDisplay.textContent = "00"
  } else {
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
  }
})

const cardFlorest = document.querySelector(".florest")
const florestSong = new Audio('Floresta.wav')

cardFlorest.addEventListener('click', playFlorestSong)

function playFlorestSong() {
  if (cardFlorest.style.backgroundColor == '') {
    florestSong.play()
    cardFlorest.style.backgroundColor = "#02799D"
  } else {
    florestSong.pause()
    cardFlorest.style.backgroundColor = ''
  }
}

const cardRain = document.querySelector(".rain")
const rainSong = new Audio('Chuva.wav')

cardRain.addEventListener('click', playRainSong)

function playRainSong() {
  if (cardRain.style.backgroundColor == '') {
   rainSong.play()
   cardRain.style.backgroundColor = "#02799D"
  } else {
    rainSong.pause()
    cardRain.style.backgroundColor = ''
  }
}

const cardCoffee = document.querySelector(".coffee")
const coffeeSong = new Audio('Cafeteria.wav')

cardCoffee.addEventListener('click', playCoffeeSong)

function playCoffeeSong() {
  if (cardCoffee.style.backgroundColor == '') {
    coffeeSong.play()
    cardCoffee.style.backgroundColor = "#02799D"
  } else {
    coffeeSong.pause()
    cardCoffee.style.backgroundColor = ''
  }
}

const cardFireplace = document.querySelector(".fireplace")
const fireplaceSong = new Audio('Lareira.wav')

cardFireplace.addEventListener('click', playFireplaceSong)

function playFireplaceSong() {
  if (cardFireplace.style.backgroundColor == '') {
    fireplaceSong.play()
    cardFireplace.style.backgroundColor = "#02799D"
  } else {
    fireplaceSong.pause()
    cardFireplace.style.backgroundColor = ''
  }
}