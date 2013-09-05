$(document).ready(function(){
	
	$('.button1').click(function (list) {
		var ul = $('.food-list')
		var ul2 = $('.price-list')
 		list.forEach(function(user){
 			var menuItem = '<li>Salmon<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$12</li>';
 			ul2.append(menuPrice);
 		})
	});

	$('.button2').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Steak<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$11</li>';
 			ul2.append(menuPrice);
 		})
	});

	$('.button3').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Chicken<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$11</li>';
 			ul2.append(menuPrice);
 		})
	});

	$('.button4').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Spinach<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$11</li>';
 			ul2.append(menuPrice);
 		})
	});


	$('.button5').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Macaroni & Cheese<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$11</li>';
 			ul2.append(menuPrice);
 		})
	});


	$('.button6').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Baked Potatoe<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$11</li>';
 			ul2.append(menuPrice);
 		})
	});


	$('.button7').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Beer<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$4</li>';
 			ul2.append(menuPrice);
 		})
	});

	$('.button8').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Coffee<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$2</li>';
 			ul2.append(menuPrice);
 		})
	});

	$('.button9').click(function (list) {
		var ul = $('.checkout1')
		var ul2 = $('.checkout2')
 		list.forEach(function(user){
 			var menuItem = '<li>Milk<li>';
 			ul.append(menuItem);
 			var menuPrice = '<li>$3.50</li>';
 			ul2.append(menuPrice);
 		})
	});

})

