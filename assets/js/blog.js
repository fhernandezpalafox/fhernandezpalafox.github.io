$(document).ready(function() {
	
$('.navbar-nav li').on('click', function(){
	$('ul.navbar-nav li').each(function (i) {
		$('ul.navbar-nav li.active').removeClass('active');
	});
	$(this).addClass('active');
});
	 
});