// Script for Jquery timer plugin
$(document).ready(function () {
    $('#clock').countdown('2022/12/12', function (event) {
        //$(this).html(event.strftime('%D days %H:%M:%S'));
        $('#days').html(event.strftime('%D'));
        $('#hours').html(event.strftime('%H'));
        $('#minutes').html(event.strftime('%M'));
        $('#seconds').html(event.strftime('%S'));
    });
});
