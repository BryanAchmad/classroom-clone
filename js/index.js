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

function closeModal() {
	var modal = document.getElementById("myModal");
	if (modal) {
		modal.style.display = "none";
	} else {
		console.error("Modal element not found!");
	}
}

function openSmallModal() {
	document.getElementById("smallModal").style.display = "flex";
}

function closeSmallModal() {
	document.getElementById("smallModal").style.display = "none";
}

window.onclick = function (event) {
	var modal = document.getElementById("myModal");
	if (modal && event.target === modal) {
		closeModal();
	}

	if (event.target === document.getElementById("smallModal")) {
		closeSmallModal();
	}
};

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
