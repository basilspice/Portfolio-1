console.log("im working");

$("#langNav").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $(".langTitle").offset().top,
    },
    2000
  );
};

$("#projectsNav").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $(".projects-title").offset().top,
    },
    2000
  );
};
$("#languages").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $("#languages").offset().top,
    },
    2000
  );
};

$("#contactMe").onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $("#contactMe").offset().bottom,
    },
    2000
  );
};

//Source for nav bar scroll function (http://jsfiddle.net/WxJLx/2/)
//Tutorial for Scroll to click that I used but never worked (http://html-tuts.com/scroll-to-section-jquery/)
// $('.scrollToLanguages').click(function() {
// 	let getElem = $(this).attr('href');
// 	let targetDistance = 20;
// 	if ($(getElem).length) {
// 		let getOffset = $(getElem).offset().top;
// 		$('html,body').animate({
// 			scrollTop: getOffset - targetDistance
// 		}, 500);
// 	}
// 	return false;
// });

// function scrollToLanguages(id) {
// 	if ($(id).length) {
// 		let getOffset = $(id).offset().top;
// 		let targetDistance = 20;
// 		$('html,body').animate({
// 			scrollTop: getOffset - targetDistance
// 		}, 500);
// 	}
// }

// $('.scrollToContact').click(function() {
// 	let getElem = $(this).attr('href');
// 	let targetDistance = 20;
// 	if ($(getElem).length) {
// 		let getOffset = $(getElem).offset().top;
// 		$('html,body').animate({
// 			scrollTop: getOffset - targetDistance
// 		}, 500);
// 	}
// 	return false;
// });

// function scrollToContact(id) {
// 	if ($(id).length) {
// 		let getOffset = $(id).offset().top;
// 		let targetDistance = 20;
// 		$('html,body').animate({
// 			scrollTop: getOffset - targetDistance
// 		}, 500);
// 	}
// }
