$(document).ready(function(){
	TroubleNametext();
	TroubleBoxTransform();
});
// more box text
$('.more').mouseover(function(){$(this).text('Більше');});

function TroubleNametext(){
	$('.first-trouble >  .more').mouseout(function(){$(this).text('Викиди відходів в океан')});
	$('.second-trouble > .more').mouseout(function(){$(this).text('Викиди відходів у атмосфкри')});
	$('.third-trouble >  .more').mouseout(function(){$(this).text('Вирубка лісів')});

}

// trouble-box transform
function TroubleBoxTransform(){
	$('.first-trouble > .more').click(function(){
		TroubleToDefault();
		TroubleToMore($('.first-trouble'));	
		$('.first-trouble').append("<p class='trouble-text font-text'>Забруднення світових океанів пластиком щорічно обходиться суспільству в мільярди доларів в якості збитків та втрати ресурсів. <br><br> Діяльність людини не торкнулася лише 13% Світового океану.</p> <br> <ul class='trouble-text font-text'>Наслідки: <li class='trouble-text font-text'>кислотні дощі</li> <li class='trouble-text font-text'>знищення морських організмів</li></ul>")
	});

	$('.second-trouble > .more').click(function(){
		TroubleToDefault();
		TroubleToMore($('.second-trouble'));
		$('.second-trouble').append("<p class='trouble-text font-text'>Полягає у викиді в атмосферу хімічних речовин, твердих частинок і біологічних матеріалів, здатних викликати шкоду для людини та інших живих організмів. <br> <br> Часто ефект забруднення проявляється лише через тривалий час, наприклад, певні речовини здатні зменшувати товщину озонового шару.</p>")
	});
	$('.third-trouble > .more').click(function(){
		TroubleToDefault();
		TroubleToMore($('.third-trouble'));
		$('.third-trouble').append("<p class='trouble-text font-text'>Масове вирубування дерев може спричинити раптові зміни температури, знесення родючого шару ґрунту. <br> <br> Як результат, на місці вирубаних лісів утворюються пустелі. <br> <br> Раніше на цілинах Північного Причорномор'я росли буйні трави, букові, дубові гаї й ліси, а тепер залишився тільки голий степ.</p>")
	});
}
function TroubleToDefault(){
	$('.trouble-section > div').addClass('trouble-box');
	$('.trouble-section > div').removeClass('trouble-box-more');
	$('.trouble-section > div').empty();
	$('.trouble-section > div').append("<img class='trouble-img' />");
	$('.first-trouble').append("<div class='more font-text'>Викиди відходів у океан</div>")
	$('.second-trouble').append("<div class='more font-text'>Викиди відходів у атмосферу</div>")
	$('.third-trouble').append("<div class='more font-text'>Вирубка лісів</div>");
	$('.more').mouseover(function(){$(this).text('Більше');});
	TroubleBoxTransform();
	TroubleNametext();
}
function TroubleToMore(obj){
	obj.addClass('trouble-box-more');
	obj.removeClass('trouble-box');
	obj.empty();
	obj.append("<img class='cross' />");
	$('.cross').click(function(){
			TroubleToDefault();
	});
	
}
$('#tab1').click(function(){
		$('.tab').css('background', '#169e39')
		$('.tab-title').text("В первісному суспільстві");
		$('.tab-text').text("Первісна людина поводилася в природному середовищі, як і всі інші представники тваринного світу.  Людство пристосовувалась до особливостей довкілля. Великі зміни відбулися з початком агрокультурного періоду.  Коли з'явився вплив на ґрунт, ліс, поверхневі води. У вказаний період почалася зміна в психології людини по відношенню до природного середовища. Тепер довкілля поступово ставало не тільки джерелом засобів існування людини.");
		$('.select').css('margin-top', '0px')
		$(this).css('background', 'transparent')
	}
);
$('#tab2').click(function(){
		$('.tab').css('background', '#169e39')
		$('.tab-title').text("В індустральному суспільстві");
		$('.tab-text').text("Комп'ютерні технології та інші досягнення науково-технічного прогресу збільшили фізичні можливості людей в тисячі разів. Ці можливості були використані для задоволення людських потреб за рахунок природних ресурсів. Взаємозв'язки в системі значно ускладнилися.");
		$('.select').css('margin-top', '132px')
		$(this).css('background', 'transparent')
	}
);
$('#tab3').click(function(){
		$('.tab').css('background', '#169e39')
		$('.tab-title').text("В інформаційному суспільстві");
		$('.tab-text').text("Суспільство вже розуміє що є невід'ємною частиною природи. В процесі виробничо-господарської діяльності людини частина природи вилучається, змінюючи свої форми. Одночасно відбуваються зміни в самій природі, часто негативні. В розвинутих країнах вже давно б'ють на сполох з проводу екологічної кризи, що дедалі загострюється, причому не лише в окремій країні, але і в межах всієї планети, тому починається розвиток природоохоронних об’єктів.");
		$('.select').css('margin-top', '264px')
		$(this).css('background', 'transparent')
	}
);