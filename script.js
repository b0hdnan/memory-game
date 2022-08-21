// масив карток
const cards = [
	{
		name: "html",
		img:
			"https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
	},
	{
		name: "css",
		img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true"
	},
	{
		name: "JavaScript",
		img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true"
	},
	{
		name: "python",
		img:
			"https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true"
	},
	{
		name: "sass",
		img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true"
	}
];
// додаткові масиви
var choosenCards = [];
var choosenCardsId = [];
var points = 0;


// перебираємо картки
var playCards = document.querySelectorAll("div.box");
for (let i = 0; i < playCards.length; i++) {
	playCards[i].setAttribute("id", i); // встановлюємо id для кожної картки
	playCards[i].addEventListener("click", function () {

		if (choosenCardsId.every(item => item !== this.id) && choosenCards.length < 2) {
			choosenCards.push(shuffleArray[this.id].name) // додаємо ім'я картки в масив вибраних карток
			choosenCardsId.push(this.id)	// додаємо Id картки в масив вибраних карток Id
			this.style.backgroundImage = `url(${shuffleArray[i].img})`; // з'являється зображення
			this.style.backgroundColor = "rgb(126, 196, 56)";
		}
		// якщо в масивах дві картки...

		if (choosenCards.length === 2) {
			setTimeout(function () { // відстрочка виконання функції
				if (choosenCards[0] === choosenCards[1]) {
					// приховуємо картки, захист від неіснуючого елементу
					if (choosenCards[0]) playCards[choosenCardsId[0]].style.visibility = "hidden";
					if (choosenCards[1]) playCards[choosenCardsId[1]].style.visibility = "hidden";
					points++;
				}
				else {
					if (choosenCardsId[0]) playCards[choosenCardsId[0]].style.backgroundImage = "none";
					if (choosenCardsId[1]) playCards[choosenCardsId[1]].style.backgroundImage = "none";
				}
				if (choosenCards[0]) playCards[choosenCardsId[0]].style.backgroundColor = "#eee";
				if (choosenCards[1]) playCards[choosenCardsId[1]].style.backgroundColor = "#eee";
				choosenCards = [];
				choosenCardsId = [];
			}, 1000)
		}
		console.log(choosenCards);
	});
}
// подвоєний масив карток і підготовлений для гри масив shuffleArray
let array = [...cards, ...cards],
	shuffleArray = array.sort(() => 0.5 - Math.random());

// cекундомір
var sec = 0;
function initSec() {
	sec = 0;
	setInterval(tick, 1000);
}

function tick() {
	if (points < 5) sec++;
	let timer = document.getElementById("timer");
	if (points < 5) timer.innerText = sec;
	else
		if (sec % 10 === 1) timer.innerText = sec + " секунда!";
		else if (sec % 10 === 2 && sec % 10 === 3 && sec % 10 === 4) timer.innerText = sec + " секунди!";
		else timer.innerText = sec + " секунд!";
}

initSec();


localStorage.setItem('bgColor', 'green');



