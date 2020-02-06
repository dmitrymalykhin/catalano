//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
})

function closeBurger () {
	document.body.classList.remove('hamburger-active');
}

function openBurger () {
	document.body.classList.add('hamburger-active');
}
//End burger

$(document).ready(function(){
	$(".dropbtn").click(function(){
		$(".dropdown-content").toggleClass("show"); return false;
	});
});

$('#owl-one').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	navText: ["<img src='image/left.png'>", "<img src='image/right.png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});
$('#owl-two').owlCarousel({
	loop:true,
	nav:false,
	dots:true,
	margin:30,
	autoHeight:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
})

