/*global describe, it */
'use strict';
(function () {
    
    describe('menu buttons', function () {
		it('should add name of item to item list when clicked', function() {
			('.Button .1').click();
		expect('.food-list').to.contain("Salmon");
		});

		it('should add price of item to item list when clicked', function() {
		expect('.price-list').to.contain("$12");	
		});
	});


})();
