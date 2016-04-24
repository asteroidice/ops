$(document).ready(function() {
	$("#slider").slick({
		autoplay:true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		nextArrow: "",
		prevArrow: "",
	});
	$("#spirit").slick({
		autoplay:true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});
})
