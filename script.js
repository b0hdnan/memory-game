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
var  choosenCards = [];
var  choosenCardsId = [];



// перебираємо картки
var playCards = document.querySelectorAll("div.box");
for (let i = 0; i < playCards.length; i++) {
	playCards[i].setAttribute("id", i); // встановлюємо id для кожної картки
	playCards[i].addEventListener("click", function () {
	this.style.backgroundImage = `url(${shuffleArray[i].img})`; // з'являється зображення
	choosenCards.push(shuffleArray[this.id].name) // додаємо ім'я картки в масив вибраних карток
  choosenCardsId.push(this.id)	// додаємо Id картки в масив вибраних карток Id
console.log(choosenCards);
	// якщо в масивах дві картки...
  if (choosenCards.length === 2) {
		setTimeout(function (){ // відстрочка виконання функції
			if (choosenCards[0] === choosenCards[1]){
				// приховуємо картки
				playCards[choosenCardsId[0]].style.visibility = "hidden";
				playCards[choosenCardsId[1]].style.visibility = "hidden";
			}
			else{
				playCards[choosenCardsId[0]].style.backgroundImage = "none";
				playCards[choosenCardsId[1]].style.backgroundImage = "none";
			}
			choosenCards = [];
			choosenCardsId = [];
		}, 500)
	}

	});
}
// подвоєний масив карток і підготовлений для гри масив shuffleArray
let array = [...cards, ...cards],
	shuffleArray = array.sort(() => 0.5 - Math.random());








