$(window).scroll(function () { // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
    if(scrTop>$('.numbers').offset().top - $(window).height()  ) {
        numAnimate();
    }
});
function numAnimate () {
    var number = 70;
    setInterval(function () {
        number++;
        if (number<=89) { $('.numbers').text(number); };
    }, 100);
};


$(window).scroll(function () { // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
    if(scrTop>$('.numbers1').offset().top - $(window).height()  ) {
        numAnimate1();
    }
});
function numAnimate1 () {
    var number = 44;
    setInterval(function () {
        number++;
        if (number<=64) { $('.numbers1').text(number); };
    }, 100);
};


$(window).scroll(function () { // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
    if(scrTop>$('.numbers2').offset().top - $(window).height()  ) {
        numAnimate2();
    }
});
function numAnimate2 () {
    var number = 50;
    setInterval(function () {
        number++;
        if (number<=76) { $('.numbers2').text(number); };
    }, 70);
};