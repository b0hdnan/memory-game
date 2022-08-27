if (localStorage.getItem("winners") == null) {
	localStorage.setItem("winners","unknown");
	localStorage.setItem("records","50");
}

var savedNames = localStorage.getItem("winners");
var savedRecords = localStorage.getItem("records");
var userNames = localStorage.getItem("winners").split(",");
var userRecords = localStorage.getItem("records").split(",");
var userRecordsNumbers = [];
var userName = "";
var userRecord = "";
var recordsText = document.getElementById("records");
userRecords.forEach(element =>{
	userRecordsNumbers.push(parseInt(element, 10));
});

for(let i = 0; i<userNames.length; i++){
recordsText.innerHTML += "<br>";
recordsText.innerHTML += userNames[i] + " " + userRecords[i];
}

var sound1 = new Audio();
var sound2 = new Audio();
var sound3 = new Audio();
sound1.src = "music/game.mp3";
sound2.src = "music/lose.mp3";
sound3.src = "music/win.mp3";
sound1.play();
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
			this.style.backgroundColor = "#eee";
		}
		// якщо в масивах дві картки...

		if (choosenCards.length === 2) {
			setTimeout(function () { // відстрочка виконання функції
				if (choosenCards[0] === choosenCards[1] && choosenCards[0] != undefined && choosenCards[1] != undefined) {
					console.log(choosenCards[0],choosenCards[0])
					// приховуємо картки, захист від неіснуючого елементу
					if (choosenCards[0]) playCards[choosenCardsId[0]].style.visibility = "hidden";
					if (choosenCards[1]) playCards[choosenCardsId[1]].style.visibility = "hidden";
					points++; console.log(points);
					sound3.play();
				}
				else {
					if (choosenCardsId[0]) playCards[choosenCardsId[0]].style.backgroundImage = "none";
					if (choosenCardsId[1]) playCards[choosenCardsId[1]].style.backgroundImage = "none";
					sound2.play();
				}
				if (choosenCards[0]) playCards[choosenCardsId[0]].style.backgroundColor = "#eee";
				if (choosenCards[1]) playCards[choosenCardsId[1]].style.backgroundColor = "#eee";
				choosenCards = [];
				choosenCardsId = [];
			}, 800)
		}
		console.log(choosenCards);
	});
}
// подвоєний масив карток і підготовлений для гри масив shuffleArray
let array = [...cards, ...cards],
	shuffleArray = array.sort(() => 0.5 - Math.random());

var timerId = 0;
// cекундомір
var sec = 0;
function initSec() {
	sec = 0;
	timerId = setInterval(tick, 1000);
}

function tick() {
	let timer = document.getElementById("timer");
	if (points < 5){
		sec++;
	if (points < 5) timer.innerText = sec;
}
	else { // кінець гри
		console.log(userRecordsNumbers);
		clearInterval(timerId) // вимкнули секундомір
		timer.innerText = sec + " seconds";
		if (userRecordsNumbers.every(element => element > sec)){
    userName = prompt();
		userRecord = sec;

		savedRecords += "," + userRecord;
		savedNames += "," + userName;

		console.log(savedRecords);
		console.log(savedNames);

			localStorage.setItem("records", savedRecords); // записали результат гравця
      localStorage.setItem("winners", savedNames);

			userNames = localStorage.getItem("winners").split(",");
			userRecords = localStorage.getItem("records").split(",");

			userRecordsNumbers = [];

      userRecords.forEach(element =>{
	    userRecordsNumbers.push(parseInt(element, 10));
		}
			);

			recordsText.innerHTML = "NEW RECORDS";

			for(let i = 0; i < userNames.length; i++){
				recordsText.innerHTML += "<br>";
				recordsText.innerHTML += userNames[i] + " " + userRecords[i];
			}
}

	}
} // кінець гри


initSec();




