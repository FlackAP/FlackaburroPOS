$(document).ready(function(){

var meat = [
	{
		name: "Salmon",
		price: 12,
		id: 1
	};
	{
		name: "Steak",
		price: 11,
		id: 2
	}
	{
		name: "Chicken",
		price: 9,
		id: 3
	}
];

var side = [
	{
		name: "Spinach",
		price: 4.50,
		id: 1
	}
	{
		name: "Mac n Cheese",
		price: 5,
		id: 2
	}
		{
		name: "Potatoes",
		price: 3,
		id: 3
	}
]

var bev = [
	{
		name: "Beer",
		price: 4.50,
		id: 1
	}
	{
		name: "Soda",
		price: 2.50,
		id: 2
	}
	{
		name: "Milk",
		price: 3.50,
		id: 3
	}
]

var meatButton = $('<div class="btn btn-primary btn-lg ourbutton" id='+ meat.id +'>'+ meat.name + '</div>')

var sideButton = $('<div class="btn btn-primary btn-lg ourbutton" id='+ side.id +'>'+ side.name + '</div>')

var bevButton = $('<div class="btn btn-primary btn-lg ourbutton" id='+ bev.id +'>'+ bev.name + '</div>')

});
	
// 	$('.button1').click(function (list) {
// 		var salmon = new Inventory
// 		salmon.order ([12])
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Salmon<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$12</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});

// 	$('.button2').click(function (list) {
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Steak<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$11</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});

// 	$('.button3').click(function (list) {
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Chicken<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$11</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});

// 	$('.button4').click(function (list) {
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Spinach<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$11</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});


// 	$('.button5').click(function (list) {
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Macaroni & Cheese<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$11</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});


// 	$('.button6').click(function (list) {
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Baked Potatoe<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$11</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});


// 	$('.button7').click(function (list) {
// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Beer<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$4</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});

// 	$('.button8').click(function (list) {

// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Coffee<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$2</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});

// 	$('.button9').click(function (list) {

// 		var ul = $('.food-list')
// 		var ul2 = $('.price-list')
//  		list.forEach(function(user){
//  			var menuItem = '<li>Milk<li>';
//  			ul.append(menuItem);
//  			var menuPrice = '<li>$3.50</li>';
//  			ul2.append(menuPrice);
//  		})
// 	});

// Ticket= function (items) {
// 	this.items= items || [];

// 	this.order = function (item) {  //will push items into array
// 		this.items.push(item)
//   	};
// };


// })

