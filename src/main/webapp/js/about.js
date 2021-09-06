console.log('hello');
backgroundDelete = () => {
	const rainbow = document.getElementById("rainbow");
	console.log(rainbow);
	console.log(rainbow.firstChild);
	const criterion = document.querySelector(".criterion")
	while ( rainbow.hasChildNodes()) {
		rainbow.removeChild( rainbow.firstChild );
	}
	while (criterion.hasChildNodes()) {
		criterion.removeChild(criterion.firstChild);
	}
}

const rainbow = document.getElementById("rainbow");
console.log(rainbow);


setTimeout(backgroundDelete,7000);

	const activeMenu = document.querySelector("#about");
	activeMenu.setAttribute("class","active");
	const homeMenu = document.querySelector("#home");
	console.log(homeMenu.classList);
	homeMenu.classList.remove("active");


