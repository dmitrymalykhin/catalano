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


function showDropdownContent(id) {
	$(`#${id}`).toggleClass('show')
}
function switcher(){
	[].forEach.call(document.body.querySelectorAll("[data-switcher]"),(a)=>{
		let b = a.querySelectorAll("[data-switcher-name]"),
			c = a.querySelectorAll("[data-switcher-show]");
		[].forEach.call(c,(d)=>{
			if (d.dataset.switcherSelected != undefined) {
				d.classList.add("selected");
				[].filter.call(b,(a)=>a.dataset.switcherName==d.dataset.switcherShow?a.classList.add("selected"):"");
			}
			d.addEventListener("click",()=>{
				[].forEach.call(c,(a)=>a!=d?a.classList.remove("selected"):a.classList.add("selected"));
				[].forEach.call(b,(a)=>a.dataset.switcherName!=d.dataset.switcherShow?a.classList.remove("selected"):a.classList.add("selected"));
			},true);
		});
	});
}
window.onload = function() {
	switcher();
};

var firstSel = $('#city1'),
    secondSel = $('#city'),
    opt = $('option',secondSel),
    cnt = opt.length;
firstSel.on('change', function(){
    var indx = $(':selected',this).index();
    secondSel.prop('selectedIndex',indx);
    opt.hide().slice(indx, cnt).show();
});
secondSel.on('change', function(){
    var indx = $(':selected',this).index();
    firstSel.prop('selectedIndex',indx);
    opt.hide().slice(indx, cnt).show();
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
})
$('#owl-two').owlCarousel({
	loop:true,
	nav:false,
	dots:true,
	margin:30,
	autoHeight:true,
	autoplay: true,
	autoplaySpeed: 2000,
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
$('#owl-where').owlCarousel({
	loop:true,
	nav:true,
	dots:true,
	margin:30,
	navText: ["<img src='image/right-arrow(23).png'>", "<img src='image/left-arrow(23).png'>"],
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
$('#owl-four').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	margin:30,
	navText: ["<img src='image/left-arrow-black(23).png'>","<img src='image/right-arrow-black(23).png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:3
		}
	}
})

var $range = $("#price-range");
var $mrange = $("#m-price-range");
var $inputFrom = $("#Min");
var $inputTo = $("#Max");
var instance;
var min = 0;
var max = 30000;
var from = 0;
var to = 30000;

$range.ionRangeSlider({
	type: "double",
	grid: false,
	min: min,
	max: max,
	from: 0,
	to: 30000,
	onStart: updateInputs,
	onChange: updateInputs,
	onFinish: updateInputs,
	hide_min_max: true,    // show/hide MIN and MAX labels
  hide_from_to: true,    // show/hide FROM and TO labels
});
instance = $range.data("ionRangeSlider");

$mrange.ionRangeSlider({
	type: "double",
	grid: false,
	min: min,
	max: max,
	from: 0,
	to: 30000,
	onStart: updateInputs,
	onChange: updateInputs,
	onFinish: updateInputs,
	hide_min_max: true,    // show/hide MIN and MAX labels
  hide_from_to: true,    // show/hide FROM and TO labels
});
instance = $mrange.data("ionRangeSlider");
function updateInputs (data) {
	from = data.from;
	to = data.to;

	$inputFrom.prop("value", from);
	$inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
	var val = $(this).prop("value");

        // validate
        if (val < min) {
        	val = min;
        } else if (val > to) {
        	val = to;
        }

        instance.update({
        	from: val
        });

        $(this).prop("value", val);

      });

$inputTo.on("change", function () {
	var val = $(this).prop("value");

        // validate
        if (val < from) {
        	val = from;
        } else if (val > max) {
        	val = max;
        }

        instance.update({
        	to: val
        });

        $(this).prop("value", val);
      });
$(document).ready(function(){
	$("#calc_l_m_range").on("input", function(){
		$("#calc_l_meters").val(this.value);
	});
});
