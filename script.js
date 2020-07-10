let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	"use strict";

	window.addEventListener("load", function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName("needs-validation");

		// Loop over them and prevent submission
		Array.prototype.filter.call(forms, function (form) {
			form.addEventListener("submit", function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			}, false);
		});
	}, false);
}());



//check if dark enabled
//if enables, turn it off
//if disable, turn it on

const enableDarkMode = () => {
	//1. add darkmode class to body
	document.body.classList.add("darkmode");
	//2. update darkmode in localstorage
	localStorage.setItem("darkMode", "enabled");
	
};

const disableDarkMode = () => {
	//1. add darkmode class to body
	document.body.classList.remove("darkmode");
	//2. update darkmode in localstorage
	localStorage.setItem("darkMode", null);
	
};

if(darkMode === "enabled"){
	enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if(darkMode != "enabled"){
		enableDarkMode();
	}else{
		disableDarkMode();
	}
});
