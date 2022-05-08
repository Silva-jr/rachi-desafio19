$('.header a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 180
    }, 500);
});

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeigth = window.innerHeight;
        var reavealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (reavealTop < windowHeigth - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}