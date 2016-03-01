$(document).ready(function() {

    $("form").submit(function(e) {
        e.preventDefault();
    });

    function maxItemsButtonDisable(){
        if(itemsArray.length === 5){
            $('input[type="submit"]').prop('disabled', true).css("display","none");
            $('.maxItemMessage').css('display','block');

        }
        else{
            $('.maxItemMessage').css('display','none');

            $('input[type="submit"]').prop('disabled', false).css("display","block");
        }
    }


    var itemsArray = [];

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
            price: itemPrice,
            checkbox: false
        };

        itemsArray.push(itemObject);

        var itemHTML = '<div class="itemContainer"> <input type="checkbox" class="itemCheckbox"> <p class="itemText"> Name: <span class="itemName">'+itemObject.name+'</span> Item Cost $: <span class="itemPrice">'+itemObject.price+'</span> Item Count: <span class="itemTotalCount">'+itemObject.count+'</span> </p> <input value="DELETE" type="button" class="deleteButton"> </div>';

        $('.itemList').append(itemHTML);
        console.log(itemsArray);

        maxItemsButtonDisable();

       

    });

    


    $('.itemList').on('click','.deleteButton',function(event){

        var index = $(event.target).parent().index();
        console.log('index',index);

        $(event.target).parent().remove();
        itemsArray.splice(index,1);
        console.log('itemsarray', itemsArray);

        console.log('itemList:',$('.itemList').children().length);

        maxItemsButtonDisable();

    });

    $('.itemList').on('change','.itemCheckbox', function(event){
        
        if($('.itemCheckbox').is(':checked')){
            console.log('checked!!!');
        }
        else{
            console.log('not checked!!!');
        }
        var index = $(event.target).parent().index();
        var toggle = !itemsArray[index].checkbox;
            
        itemsArray[index].checkbox = toggle;
        console.log(itemsArray);

    });

    $('.checkoutButton').on('click', function(){
        var totalItemNumber = $('.itemList').children().length;
        console.log('totalItemNumber',totalItemNumber);
        console.log('test',$('.itemContainer:nth-child(0)'));

        $('.itemInput, .itemList').css('display','none');
        $('.receipt').css('display','block');
        $('.checkoutButton').css('display','none');
        $('.restartButton').css('display','block');
        var subtotal = 0;
        var total = 0;
        for(var i = 0; i < itemsArray.length; i++){

            
            if(itemsArray[i].checkbox){

                var itemName = itemsArray[i].name;
                var itemPrice = itemsArray[i].price;
                var itemCount = itemsArray[i].count;
                total += (1+0.0925)*(itemPrice*itemCount);
                subtotal+= itemPrice*itemCount;

                var itemReceiptHTML = '<tr><td><span>'+itemName+'</span></td><td><span>'+itemCount+'</span></td><td><span>'+itemPrice+'</span></td></tr>';

                $('.receiptBody').append(itemReceiptHTML);

            }
            else{
                continue;
            }
        }

        $('.receiptSubtotal').text(subtotal.toFixed(2));
        $('.receiptTotalAmount').text(total.toFixed(2));



        


    });

    $('.restartButton').on('click', function(){

        itemsArray = [];
        $('.itemList').empty();
        $('.receipt').css('display','none');
        $('.restartButton').css('display','none');
        $('.itemInput, .itemList').css('display','block');
        $('.checkoutButton').css('display','block');
        
    });



	
















});
