console.log('im working')

//Tutorial for Scroll to click that I used (http://html-tuts.com/scroll-to-section-jquery/)
$('.scrollTo').click(function() {
	let getElem = $(this).attr('href');
	let targetDistance = 20;
	if ($(getElem).length) {
		let getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});

function scrollTo(id) {
	if ($(id).length) {
		let getOffset = $(id).offset().top;
		let targetDistance = 20;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
}