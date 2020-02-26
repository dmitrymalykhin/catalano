//filter-burger
const btnFilter = document.getElementById('m-filter');

btnFilter.addEventListener('click', function() {
	if (document.body.classList.contains("filter-active")) {
		closeFilter ();
	} else {
		openFilter ();
	}
})

function closeFilter () {
	document.body.classList.remove('filter-active');
}

function openFilter () {
	document.body.classList.add('filter-active');
}
//End filter-burger

//sort-burger
const btnSort = document.getElementById('m-sort');

btnSort.addEventListener('click', function() {
	if (document.body.classList.contains("sort-active")) {
		closeSort ();
	} else {
		openSort ();
	}
})

function closeSort () {
	document.body.classList.remove('sort-active');
}

function openSort () {
	document.body.classList.add('sort-active');
}
//End sort-burger