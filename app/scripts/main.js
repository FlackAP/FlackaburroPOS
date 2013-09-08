// the array of stuff for our menu
var menu = [
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
 
// the array of things that have been ordered
order = []
 
// renders buttons and adds a click event to each
// `list` - expects an array of items,
// `foodType` - a type 'string' for filtering only one type of items
// `parentElem` - a jQuery object in which to add the rendered buttons
 
function renderList(list, foodType, parentElem) {
 
  // get an array of only one type of food (based on type argument)
  var filteredList = _.where(list, {type: foodType})
 
  // loop through array of filtered foods
  filteredList.forEach(function(item){
 
    // the template for creating a button
    var elem = $('<div class="btn btn-succes' + foodType + '" id="'+ item.id +'">' + item.name +'</div>')
    
    // click event for this button
    elem.click(function(){
      addToOrder(this)
    })
 
    // add the button to its parent element
    parentElem.append(elem)
  })
 
}
 
// example of an addToOrder thing
function addToOrder(item) {
 
  itemObject = _.findWhere(menu, {id: $(item).attr(id) })
 
  order.push(itemObject)
 
  adjustPrice()
 
}
 
//  on document ready
$(document).ready(function(){
  
  renderList(menu, 'meat', $('.meat-column'))
  renderList(menu, 'side', $('.side-column'))
  renderList(menu, 'bev', $('.drink-column'))
 
})
	
