document.addEventListener('DOMContentLoaded', function () {
	const swiperText = new Swiper('.swiper', {
		speed: 1400,
		// mousewheel: { },
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},
	})
})


//!--------game----------------
let jsScore = document.querySelector('.items-column__js-score')
const score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	ties: 0,
	losses: 0
}
updateScoreElement()

const buttonRock = document.querySelector('.items-column__rock')
buttonRock.addEventListener('click', function () {
	playerGame('✊')
})

const buttonPaper = document.querySelector('.items-column__paper')
buttonPaper.addEventListener('click', function () {
	playerGame('🖐️')
})

const buttonScissors = document.querySelector('.items-column__scissors')
buttonScissors.addEventListener('click', function () {
	playerGame('✌️')
})


const resetButton = document.querySelector('.items-column__reset-score-bottom')
resetButton.addEventListener('click', function () {
	score.wins = 0
	score.ties = 0
	score.losses = 0
	localStorage.removeItem('score')
	updateScoreElement()
})

function getRandomNumber() {
	return Math.floor(Math.random() * 3) + 1
}

function pickComputerMove() {
	const randomNumber = getRandomNumber()
	let computerMove = ''
	if (randomNumber === 1) {
		computerMove = '✊'
	} else if (randomNumber === 2) {
		computerMove = '🖐️'
	} else if (randomNumber === 3) {
		computerMove = '✌️'
	}
	return computerMove
}

function playerGame(player) {
	const computerMove = pickComputerMove()
	message = ''
	if (player === '✊') {
		if (computerMove === '✊') {
			message = 'Tie.'
		} else if (computerMove === '🖐️') {
			message = 'You lose.'
		} else if (computerMove === '✌️') {
			message = 'You win!'
		}
	}
	if (player === '🖐️') {
		if (computerMove === '🖐️') {
			message = 'Tie.'
		} else if (computerMove === '✊') {
			message = 'You win!'
		} else if (computerMove === '✌️') {
			message = 'You lose.'
		}
	}
	if (player === '✌️') {
		if (computerMove === '✌️') {
			message = 'Tie.'
		} else if (computerMove === '🖐️') {
			message = 'You win!'
		} else if (computerMove === '✊') {
			message = 'You lose.'
		}
	}
	if (message === 'Tie.') {
		score.ties += 1
	} else if (message === 'You lose.') {
		score.losses += 1
	} else if (message === 'You win!') {
		score.wins += 1
	}
	localStorage.setItem('score', JSON.stringify(score))
	updateScoreElement()
	document.querySelector('.items-column__result').innerHTML = message
	document.querySelector('.items-column__js-moves').innerHTML = `You ${player} - ${computerMove} Computer`
}

function updateScoreElement() {
	jsScore.innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`
}
//!----------subscribe------------------

const btnSubscribe = document.querySelector('.btn-subscribe')
btnSubscribe.addEventListener('click', function () {
	if (btnSubscribe.innerHTML === 'Subscribe') {
		btnSubscribe.innerHTML = 'Subscribed'
		btnSubscribe.classList.add('subscribe-btn')
	} else {
		btnSubscribe.innerHTML = 'Subscribe'
		btnSubscribe.classList.remove('subscribe-btn')
	}
})
//!----------calculator shipping------------------
// const btnEl = document.querySelector('.amazon-shipping__btn')
// btnEl.addEventListener('click', function () {
// 	getInputValue()
// })
// function getInputValue(event) {
// 	let resEl = document.querySelector('.amazon-shipping__result')
// 	let inputEl = document.querySelector('.amazon-shipping__input')
// 	let cost = parseFloat(inputEl.value)
// 	if (event.key === 'Enter') {
// 		if (!isNaN(cost)) {
// 			if (cost < 40) {
// 				cost = cost + 10
// 			}
// 			resEl.innerHTML = `$${cost}`
// 			inputEl.value = ''
// 		} else {
// 			resEl.innerHTML = `Invalid input! Please enter a valid number.`
// 			inputEl.value = ''
// 		}
// 	}
// }

const btnEl = document.querySelector('.amazon-shipping__btn')
btnEl.addEventListener('click', function () {
	calculateTotal()
})
function calculateTotal() {
	let inputEl = document.querySelector('.amazon-shipping__input')
	let cost = Number(inputEl.value)
	let resEl = document.querySelector('.amazon-shipping__result')
	if (inputEl.value.trim() === '') {
		resEl.innerHTML = 'Pleas enter a number.'
	} else if (!isNaN(cost)) {
		if (cost < 40) {
			cost += 10
		}
		resEl.innerHTML = `$${cost}`
		inputEl.value = ''
	} else {
		resEl.innerHTML = 'Invalid input! Please enter a valid number.'
		inputEl.value = ''
	}
}
function handleCostKeydown(event) {
	if (event.key === 'Enter') {
		calculateTotal()
	}
}