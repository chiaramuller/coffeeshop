
/* Responsive design Hamburger Menu */
$(".hamburger-button").click(function(){
	$(".mobile-menu").slideToggle();
	$(this).toggleClass("active");
});

/* Onscroll adaptations of the header*/
$(window).scroll(function () {
    var $heightScrolled = $(window).scrollTop();
    var $defaultHeight = 10;

    if ($heightScrolled < $defaultHeight) {
        $('header').removeClass("onscroll");
		$('#logo').removeClass("onscroll");
		$('.hamburger-button').removeClass("onscroll");
 	}
    else {
        $('header').addClass("onscroll");
		$('#logo').addClass("onscroll");
		$('.hamburger-button').addClass("onscroll");
    }

});