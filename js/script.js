var moveOnX = 0;
$(document).ready(function() {

    var foregroundWidth = $(".foreground").width() / 2;
    var foregroundHeight = $(".foreground").height() / 2;

    $(".foreground").mousemove(function(event) {
        var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";

        moveOnX = (event.pageX - foregroundWidth) / foregroundWidth;
        moveOnY = (event.pageY - foregroundHeight) / foregroundHeight;

        $(".text").css('transform', 'translateX(' + moveOnX + 'em) rotateY(' + 60 * moveOnX + 'deg) translateY(' + moveOnY + 'em) rotateX(' + -60 * moveOnY / 2 + 'deg)');
        $(".guitar").css('transform', 'translateX(' + moveOnX * 20 + 'px)');

    });

    $('.hamburger-icon').on('click', function(event) {
      event.preventDefault();
      $('.sidenav').toggleClass('active');
      $('.hamburger-icon').toggleClass('active');
    });


});
