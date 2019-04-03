$(document).ready(function($){
	var cartWrapper = $('.cd-cart-container');
	//product id - you don't need a counter in your real project but you can use your real product id
	var productId = 0;

	if( cartWrapper.length > 0 ) {
		//store jQuery objects
		var cartBody = cartWrapper.find('.body')
		var cartList = cartBody.find('ul').eq(0);
		var cartTotal = cartWrapper.find('.checkout').find('span');
		var cartTrigger = cartWrapper.children('.cd-cart-trigger');
		var cartCount = cartTrigger.children('.count')
		var addToCartBtn = $('#btn');
		var undo = cartWrapper.find('.undo');
		var undoTimeoutId;
		var dataname="";
		var dataprice="";
		var datasdate="";
		var dataedate="";
		//add product to cart
		$("#fshotel1").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#fshotel2").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		//flight
		$("#cxflight1").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
			datasdate=($(this).attr("datasdate"));
		})
		$("#cxflight2").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cxflight3").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cxflight4").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cxflight5").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cxflight6").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cxflight7").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cxflight8").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight1").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight2").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight3").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight4").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight5").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight6").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight7").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#feflight8").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#saflight1").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#saflight2").click(function(){
			addToCart($(this));
			dataname=($(this)).attr("data-name");
			dataprice=($(this).attr("data-price"));
		})
		$("#cghotel1").click(function(){
			addToCart($(this));
		})
		$("#cghotel2").click(function(){
			addToCart($(this));
		})
		$("#hphotel2").click(function(){
			addToCart($(this));
		})
		$("#hphotel1").click(function(){
			addToCart($(this));
		})
		$("#mphotel2").click(function(){
			addToCart($(this));
		})
		$("#mphotel1").click(function(){
			addToCart($(this));
		})
		$("#photel2").click(function(){
			addToCart($(this));
		})
		$("#photel1").click(function(){
			addToCart($(this));
		})
		$("#rahotel2").click(function(){
			addToCart($(this));
		})
		$("#rahotel1").click(function(){
			addToCart($(this));
		})
		$("#rchotel2").click(function(){
			addToCart($(this));
		})
		$("#rchotel1").click(function(){
			addToCart($(this));
		})
		$("#uhhotel2").click(function(){
			addToCart($(this));
		})
		$("#uhhotel1").click(function(){
			addToCart($(this));
		})
		$("#nhotel2").click(function(){
			addToCart($(this));
		})
		$("#nhotel1").click(function(){
			addToCart($(this));
		})
		$("#ohotel2").click(function(){
			addToCart($(this));
		})
		$("#ohotel1").click(function(){
			addToCart($(this));
		})
		$("#rhotel2").click(function(){
			addToCart($(this));
		})
		$("#rhotel1").click(function(){
			addToCart($(this));
		})
		$("#thotel2").click(function(){
			addToCart($(this));
		})
		$("#thotel1").click(function(){
			addToCart($(this));
		})
		$("#apahotel2").click(function(){
			addToCart($(this));
		})
		$("#apahotel1").click(function(){
			addToCart($(this));
		})
		$("#gshotel2").click(function(){
			addToCart($(this));
		})
		$("#gshotel1").click(function(){
			addToCart($(this));
		})
		$("#mhotel2").click(function(){
			addToCart($(this));
		})
		$("#mhotel1").click(function(){
			addToCart($(this));
		})
		$("#ghotel2").click(function(){
			addToCart($(this));
		})
		$("#ghotel1").click(function(){
			addToCart($(this));
		})
		$("#whotel2").click(function(){
			addToCart($(this));
		})
		$("#whotel1").click(function(){
			addToCart($(this));
		})
		$("#cart").click(function(){
			// addToCart($(this));
			toggleCart();
		})

		cartWrapper.on('click', function(event){
			if( $(event.target).is($(this)) ) toggleCart(true);
		});

		//delete an item from the cart
		cartList.on('click', '.delete-item', function(event){
			// event.preventDefault();
			removeProduct($(event.target).parents('.product'));
		});

		//update item quantity
		cartList.on('change', 'select', function(event){
			quickUpdateCart();
		});

	}

	function toggleCart(bool) {
		var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;

		if( cartIsOpen ) {
			cartWrapper.removeClass('cart-open');
			cartWrapper.addClass("empty");

		} else {
			cartWrapper.addClass('cart-open');
		}
	}

	function addToCart(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		// addProduct();
		productId = productId + 1;
		var productAdded = $('<li class="product"><div class="product-details"><h5><a href="#">'+trigger.data('name')+'</a></h5><span class="price">$'+trigger.data('price')+'</span><span class="id">'+trigger.data('id')+'</span><br>From <span class="sdate">'+trigger.data('sdate')+'</span> <br>To <span class="edate">'+trigger.data('edate')+'</span><div class="actions"><a href="#" class="delete-item">Delete</a></div></div></li>');
		cartList.prepend(productAdded);
		//update number of items
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		// cartWrapper.removeClass('empty');
		toggleCart();
	}

	function removeProduct(product) {
		clearInterval(undoTimeoutId);
		cartList.find('.deleted').remove();

		var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
			productQuantity = Number(product.find('.quantity').find('select').val()),
			productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;

		product.css('top', topPosition+'px').addClass('deleted');

		//update items count + total price
		updateCartTotal(productTotPrice, false);
		updateCartCount(true, -productQuantity);
		undo.addClass('visible');

		//wait 8sec before completely remove the item
		undoTimeoutId = setTimeout(function(){
			undo.removeClass('visible');
			cartList.find('.deleted').remove();
		}, 8000);
	}

	function quickUpdateCart() {
		var quantity = 0;
		var price = 0;

		cartList.children('li:not(.deleted)').each(function(){
			var singleQuantity = Number($(this).find('select').val());
			quantity = quantity + singleQuantity;
			price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
		});

		cartTotal.text(price.toFixed(2));
		cartCount.find('li').eq(0).text(quantity);
		cartCount.find('li').eq(1).text(quantity+1);
	}

	function updateCartCount(emptyCart, quantity) {
		if( typeof quantity === 'undefined' ) {
			var actual = Number(cartCount.find('li').eq(0).text()) + 1;
			var next = actual + 1;

			if( emptyCart ) {
				cartCount.find('li').eq(0).text(actual);
				cartCount.find('li').eq(1).text(next);
			} else {
				cartCount.addClass('update-count');

				setTimeout(function() {
					cartCount.find('li').eq(0).text(actual);
				}, 150);

				setTimeout(function() {
					cartCount.removeClass('update-count');
				}, 200);

				setTimeout(function() {
					cartCount.find('li').eq(1).text(next);
				}, 230);
			}
		} else {
			var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
			var next = actual + 1;

			cartCount.find('li').eq(0).text(actual);
			cartCount.find('li').eq(1).text(next);
		}
	}

	function updateCartTotal(price, bool) {
		bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
	}
});
