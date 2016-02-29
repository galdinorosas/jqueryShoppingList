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

        var itemHTML = '<div class="itemContainer"> <input type="checkbox" class="itemCheckbox"> <p class="itemText"> Name: <span class="itemName">'+itemObject.name+'</span> Item Cost $: <span class="itemPrice">'+itemObject.price+'</span> Item Count: <span class="itemTotalCount">'+itemObject.count+'</span> </p> <input value="DELETE" type="button" class="deleteButton"> </div>';

        $('.itemList').append(itemHTML);
        console.log(itemArray);

        if(itemArray.length === 5){
    		$('input[type="submit"]').prop('disabled', true);

	    }
	    else{
	    	$('input[type="submit"]').prop('disabled', false);
	    }
		
		$('.itemContainer').on('click','.deleteButton', function(event){
			// $(this).parent().remove();

			// console.log($(this).parent());

            event = event || window.event // cross-browser event
            
            if (event.stopPropagation) {
                // W3C standard variant
                event.stopPropagation()
            } 
            else {
                    // IE variant
                    event.cancelBubble = true
                }
            

			var index = $(event.target).parent().index();
            console.log(index);

            $(event.currentTarget.parentElement).remove();

            itemArray.splice($(event.target.parentElement),1);
            console.log(itemArray);

            console.log('itemList:',$('.itemList').children().length);
		});


    });

	
















});
