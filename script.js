const menuFunctionOpen = () => {
	const mobileMenu = document.getElementById("mobile-menu");
	const overlay = document.getElementById("overlay");
	mobileMenu.style.display = "flex";
	overlay.style.display = "block";
};

const menuFunctionClose = () => {
	const mobileMenu = document.getElementById("mobile-menu");
	const overlay = document.getElementById("overlay");
	mobileMenu.style.display = "none";
	overlay.style.display = "none";
};
