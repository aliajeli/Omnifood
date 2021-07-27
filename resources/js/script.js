const nav = document.getElementsByTagName("nav").item(0);

// Sticky navigation
const waypoint1 = new Waypoint({
	element: document.querySelector("#features"),
	handler: function (direction) {
		direction == "down" ? nav.classList.add("sticky") : nav.classList.remove("sticky");
	},
	offset: "60px",
});

// Animation on scroll
const features = document.querySelector("#wp-1");
const featuresWaypoint = new Waypoint({
	element: features,
	handler: function (direction) {
		features.classList.add("animate__fadeIn", "animate__animated");
	},
	offset: "50%",
});
const image = document.querySelector("#wp-2");
const imageWaypoint = new Waypoint({
	element: image,
	handler: function (direction) {
		image.classList.add("animate__fadeInUp", "animate__animated");
	},
	offset: "50%",
});
const cities = document.querySelector("#wp-3");
const citiesWaypoint = new Waypoint({
	element: cities,
	handler: function (direction) {
		cities.classList.add("animate__fadeIn", "animate__animated");
	},
	offset: "50%",
});
const plans = document.querySelector("#wp-4");
const plansWaypoint = new Waypoint({
	element: plans,
	handler: function (direction) {
		plans.classList.add("animate__pulse", "animate__animated");
	},
	offset: "50%",
});

// Animation on scroll
const btnNav = document.querySelector(".mobile-nav-icon");
let toggle = 0;
btnNav.addEventListener("click", () => {
	const nav = document.querySelector("#header-nav");
	const icon = document.querySelector("#nav-icon");
	icon.classList.toggle("ion-close-round");
	icon.classList.toggle("ion-navicon-round");
	console.log(nav.style.display);
	nav.style.display = nav.style.display === "block" ? "none" : "block";
	console.log(nav.style.display);
	// nav.classList.toggle("main-nav-hide");

	// console.log(nav);
	// if (!toggle) {
	// 	// nav.style.marginTop = "35px";
	// 	// nav.classList.toggle("")
	// 	nav.classList.add("main-nav-hide");
	// 	toggle = !toggle;
	// } else {
	// 	// nav.style.marginTop = "-200px";
	// 	nav.classList.remove("main-nav-hide");
	// 	toggle = !toggle;
	// }
});
