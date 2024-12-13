let year = document.querySelector("2024");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});

function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
