var nullToHundred = function(objectWidth) {
	var width = objectWidth;
	var animation = setInterval(function(){
			if (width < 151) {
				$('#button').css('width', width + 'px');
				width = width + 2.5;
			}
		}

	, 1);
};

// scroll
window.onscroll = function () {
	$(document).scroll(function(){
		var currentScroll = $(this).scrollTop();
		if (currentScroll > 121) {
			$('.header-link').addClass('hidden');
			$('.header-content').css('justify-content', 'center');
		} else{
			$('.header-link').removeClass('hidden');
			$('.header-content').css('justify-content', 'space-between');
		}
	}

	);
}
// logo, menu transform
$('#logo').mouseover( function(){
	setTimeout(function(){
		$('.header-link').removeClass('hidden');
		$('.header-content').css('justify-content', 'space-between');
	}, 1000);
});
//ai
$('#ai').click(function(event){
	var rec = new webkitSpeechRecognition();
	rec.lang = 'ru-Ru';
	rec.start();
	var result = event.results[event.resultIndex];
	var finalRes = result[0].transcipt;
	if (result.isFinal) {
		alert(finalRes);
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}
		if (finalRes == '') {}

	}
});