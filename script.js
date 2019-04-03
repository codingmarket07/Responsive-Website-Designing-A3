var times = document.querySelector(".hamburger .fa-times");
var bars = document.querySelector(".hamburger .fa-bars");
var navbar = document.querySelector(".navbar");

times.style.display = "none";

bars.addEventListener("click", function(){
	this.style.display = "none";
	times.style.display = "block";
	navbar.style.display = "block";
});

times.addEventListener("click", function(){
	this.style.display = "none";
	bars.style.display = "block";
	navbar.style.display = "none";
});