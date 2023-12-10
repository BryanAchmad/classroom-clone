let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	console.log("menu");
	nav.classList.toggle("navclose");
});

function openModal() {
	var modal = document.getElementById("myModal");
	if (modal) {
		modal.style.display = "flex";
	} else {
		console.error("Modal element not found!");
	}
}
function openModal2() {
	var modal = document.getElementById("myModal2");
	if (modal) {
		modal.style.display = "flex";
	} else {
		console.error("Modal element not found!");
	}
}

function closeModal() {
	var modal = document.getElementById("myModal");
	if (modal) {
		modal.style.display = "none";
	} else {
		console.error("Modal element not found!");
	}
}
function closeModal2() {
	var modal = document.getElementById("myModal2");
	if (modal) {
		modal.style.display = "none";
	} else {
		console.error("Modal element not found!");
	}
}

window.onclick = function (event) {
	var modal = document.getElementById("myModal");
	if (modal && event.target === modal) {
		closeModal();
	}

	var modal2 = document.getElementById("myModal2");
	if (modal2 && event.target === modal2) {
		closeModal2();
	}
};
// window.onclick = function (event) {

// };

function toggleDropdown() {
	var dropdown = document.getElementById("dropdown");
	dropdown.style.display =
		dropdown.style.display === "block" ? "none" : "block";
}

function toggleDropdownAccount() {
	var dropdown = document.getElementById("dropdown-account");
	dropdown.style.display =
		dropdown.style.display === "block" ? "none" : "block";
}
