/*
An ajax call to local json object would give us the list to append each product to product list class 
which creates a col span using bootstrap to make the card
*/
$(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '../json/products.json',
        success: function (result) {
            console.log("Result from ajax call", result);
            $.each(result, function (index, item) {
                $(".product-list").append("<div class='col - 3'><div class= 'card' id = " +item.id+ " style = 'width: 18rem;'><div class= 'card-option'><ul class = 'plus-minus' id = 'plus-minus'><li><button class = 'form-button btn-plus-minus plus'>+</button></li><li id = 'product-count'><input type='number' value='0' class = 'count" + `${index}`+"'"+"readonly></li><li><button class = 'form-button btn-plus-minus  minus'>-</button></li></ul><a class='btn form-button add-to-cart' id = 'add-to-cart'>Add to cart</a></div> <img src= /images/products/"
                    + item.fileName + " class='card-img-top img-fluid' alt='On Whey'><div class='card-body'><h5 class='card-title'>" + item.title + "</h5>" +
                    "<p class='card-text'>" + item.description + "</p>" + "<p class='priceText'>" + item.price + "</p>"+
                    "</div></div>");
            });
        }
    });
});