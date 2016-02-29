$(document).ready(function() {

    $("form").submit(function(e) {
        e.preventDefault();
    });

    var itemArray = [];

    $("form").submit(function() {

        var itemName = $('.itemNameInput').val();
        var itemCount = $('.itemCountInput').val();
        var itemPrice = $('.itemPriceInput').val();
        $('.itemNameInput').val("");
    	$('.itemCountInput').val("");
    	$('.itemPriceInput').val("");

        var itemObject = {
            name: itemName,
            count: itemCount,
            price: itemPrice
        };

        itemArray.push(itemObject);

        var itemHTML = '<div class="itemContainer"> <input type="checkbox" class="itemCheckbox"> <p class="itemText"> Name: <span class="itemName">'+itemObject.name+'</span> Total Cost $: <span class="itemTotalCost">'+itemObject.price+'</span> Item Count: <span class="itemTotalCount">'+itemObject.count+'</span> </p> <input value="DELETE" type="button" class="deleteButton"> </div>';

        $('.itemList').append(itemHTML);
        console.log(itemArray);

        


    });















});
