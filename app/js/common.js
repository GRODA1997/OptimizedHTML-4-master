
$(document).ready(function(){
	var btn = $('.menu-btn');
	var btn_active = $('.menu-btn_active');
	var info = $('.info');

	btn.click(function(){
		btn.toggleClass('menu-btn_active');
	});
	btn_active.click(function(){
		btn.removeClass('menu-btn_active');
	});
});
$('.menu-btn').on('click', function(e){
	e.preventDefault();
	$('.menu').toggleClass('menu_touch');
});
$('.menu a').on('click', function(){
	$('.menu').removeClass('menu_touch');
	$('.menu-btn').removeClass('menu-btn_active');
});
$('.hinfo').on('click', function(){
	$('.info').toggleClass('_active');
	// $('.info').removeClass('_active');
	});
// $('.menu-btn').removeClass('_scroll');
// 	$(window).scroll(function(){
// 		if($(this).scrolltop()> 250)	{
// 			$('.menu-btn').addClass('_scroll').fadein('fast');
// 		}else{
// 			$('.menu-btn').removeClass('_scroll').fadein('fast');
// 		};
// 	});


