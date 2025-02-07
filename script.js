document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("modal");
	const openModalButton = document.getElementById("openModal");
	const closeButton = document.querySelector(".closebutton");

	openModalButton.addEventListener('click', function () {
		modal.style.display = "flex";
	});

	closeButton.addEventListener('click', function () {
		modal.style.display = "none";
	});

	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});

});
