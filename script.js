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
var playCards = document.querySelectorAll("div.el");
for (let i = 0; i < playCards.length; i++) {
	playCards[i].addEventListener("click", function () {
		this.style.display = "none";
	});
}

let array = [...cards, ...cards],
	shuffleArray = array.sort(() => 0.5 - Math.random());

console.log(array[1]);






