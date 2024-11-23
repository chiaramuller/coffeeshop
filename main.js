/* Dropdown Languages Menu */
$(".dropdown-arrow-lang").click(function(){
    var $elements = $(".fa-chevron-down");
    $($elements[0]).toggleClass("active");
    $("#nav-languages").toggleClass("active");
}); 

/* Responsive design Hamburger Menu */
$(".hamburger-button").click(function(){
	$(".mobile-menu").slideToggle();
	$(this).toggleClass("active");
});


$("#dd-menu").click(function(){
	$(".mobile-menu").slideToggle();
	$(".hamburger-button").toggleClass("active");
    window.location.hash = '#menu';
});
$("#dd-team").click(function(){
	$(".mobile-menu").slideToggle();
	$(".hamburger-button").toggleClass("active");
    window.location.hash = '#section-team';
});
$("#dd-contact").click(function(){
	$(".mobile-menu").slideToggle();
	$(".hamburger-button").toggleClass("active");
    window.location.hash = '#footer';
});


/* Onscroll adaptations of the header*/
$(window).scroll(function () {
    var $heightScrolled = $(window).scrollTop();
    var $defaultHeight = 10;

    if ($heightScrolled < $defaultHeight) {
        $('header').removeClass("onscroll");
		$('#logo').removeClass("onscroll");
        $('#logo-heading').removeClass("onscroll");
		$('.hamburger-button').removeClass("onscroll");
 	}
    else {
        $('header').addClass("onscroll");
		$('#logo').addClass("onscroll");
        $('#logo-heading').addClass("onscroll");
		$('.hamburger-button').addClass("onscroll");
    }

});


AOS.init();

//Typed.js code 
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 5,
    loop: true,
    backDelay: 4000,
    smartBackspace: true,
    loopCount: Infinity,
    showCursor: false,
  });
var typed = new Typed('#typed-2', {
    stringsElement: '#typed-strings-2',
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 10,
    loop: true,
    backDelay: 4000,
    loopCount: Infinity,
    showCursor: false,
});
  
var typed = new Typed('#typed-3', {
    stringsElement: '#typed-strings-3',
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 10,
    loop: true,
    backDelay: 4000,
    loopCount: Infinity,
    showCursor: false,
});
var typed = new Typed('#typed-4', {
    stringsElement: '#typed-strings-4',
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 10,
    loop: true,
    backDelay: 4000,
    loopCount: Infinity,
    showCursor: false,
});
  

var typed = new Typed('#typed-5', {
    stringsElement: '#typed-strings-5',
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 10,
    loop: true,
    backDelay: 4000,
    loopCount: Infinity,
    showCursor: false,
});