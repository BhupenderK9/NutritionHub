/* On hovering of product it will show a drop down using jqery  function
by adding the class show using the class add method of Jquery and remove the class when hover is removed. It also uses find method to get to the child
*/

$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    },
        function () {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        });
});