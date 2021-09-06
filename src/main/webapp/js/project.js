const video = document.querySelectorAll("video");

video.forEach(value => {
	value.addEventListener('mouseover',function () {
		value.style.opacity = "1";
		value.play();
	});
	value.addEventListener('mouseout',function () {
		value.style.opacity ="0.6";
		value.pause();
	});
});
const homeMenu = document.querySelector("#home");
homeMenu.classList.remove("active");
const activeMenu = document.querySelector("#project");
activeMenu.setAttribute("class","active");

