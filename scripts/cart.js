$(document).ready(function () {
    // Doing the event delegation here as the product are loaded from ajax it didn't have the latest product which were added later
    let globalProductCount = { "count": 0 };
    $(".product-list").on("click", ".add-to-cart", function () {
        // $(this).hide();
        $(this).find(".plus-minus").show();
    }).on("click", ".plus", function () {
        let className = $(this).parent().parent().find('li input').attr('class');
        $(this).parent().parent().find('li ' + '.' + className).val(parseInt($('.' + className).val()) + 1);
        globalProductCount["count"] += 1;
    }).on("click", ".minus", function () {
        let className = $(this).parent().parent().find('li input').attr('class');
        if ($(this).parent().parent().find('li ' + '.' + className).val() != 0) {
            $(this).parent().parent().find('li ' + '.' + className).val(parseInt($('.' + className).val()) - 1);
            globalProductCount["count"] -= 1;
        }
    });
});