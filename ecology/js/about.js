var W = 800,
	H = 450,
	clickCount = 0;

for (var i = 0; i <=8; i++) {
	var xOff = Math.random()*W/2;
	var yOff = Math.random()*H/2.5;
	var rott = Math.random()*360;
	var obj = document.getElementsByClassName('el')[i];
	$(obj).css('top', yOff + "px");
	$(obj).css('left', xOff + "px");
	$(obj).css('transform', "rotate(" + rott + 'deg)');
	$('.el').click(function() {
		$(this).removeClass('el');	
	});	
}
$('.el').click(function() {
	clickCount = clickCount + 1;
	$(this).css('z-index', '-5')
	$(this).css('position', 'static');
	$(this).css('top', '0px');
	$(this).css('left', '0px');
	$(this).css('transform', 'rotate(0deg)');
	if(clickCount == 8){
		setTimeout(() => {
			$('.game-section > h1').css('opacity', '1');
			$('.game-section > div').css('opacity', '0.5');
			setTimeout(() => {
				$('.game-section').empty();
				$('.game-section').addClass('after'); 
			}, 4500);
		}, 700);	 
	}
});
