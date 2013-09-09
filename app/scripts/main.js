// the array of stuff for our menu
menu = [
  {
    type: 'meat',
    name: 'Salmon',
    price: 12,
    id: 1
  },
  {
    type: 'meat',
    name: 'Steak',
    price: 10,
    id: 2
  },
  {
    type: 'meat',
    name: 'Chicken',
    price: 9,
    id: 3
  },
  {
  	type: "side",
  	name: "Spinach",
  	price: 4,
  	id: 4
  },
  {
  	type: "side",
  	name: "Mac n Cheese",
  	price: 3,
  	id: 5
  },
  {
  	type: "side",
  	name: "Potatoes",
  	price: 3,
  	id: 6
  },
  {
  	type: "bev",
  	name: "Beer",
  	price: 4,
  	id: 7
  },
  {
  	type: "bev",
  	name: "Soda",
  	price: 2,
  	id: 8
  },
  {
  	type: "bev",
  	name: "Milk",
  	price: 3,
  	id: 9
  }
]

order = []
 
function renderButtons(list, foodType, parentElem) {
  var filteredList = _.where(list, {type: foodType})
  filteredList.forEach(function(item){
    var elem = $('<div class="btn btn-primary button ourbutton' + foodType + '" id="'+ item.id +'">' + item.name +'</div>')
    elem.click(function(item){
      addToOrder(item);
    });

    parentElem.append(elem)
  });
};	

function addToOrder(item) {
 
  var itemObject = _.findWhere(menu, {id:$(item).attr('id')});
  order.push(itemObject);

};
 
$(document).ready(function(){
  renderButtons(menu, 'meat', $('.meat-column'));
  renderButtons(menu, 'side', $('.sides-column'));
  renderButtons(menu, 'bev', $('.drink-column')) 
})
	
