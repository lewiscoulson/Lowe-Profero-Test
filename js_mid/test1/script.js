/* YOU 'CLASS' GOES HERE */
var petshop = petshop || {},
	jQuery  = {},
	_       = {};

petshop.Dog = (function( jQ, _ ){
	var DogConstructor = function( name ) {
		this.name = name;
	}

	DogConstructor.prototype.speak = function(){
		return "Woof! My Name is: " + this.name;
	};

	return DogConstructor;

}(  jQuery, _  ));

petshop.Dog.Staff = function(name){
	petshop.Dog.call( this, name );
	this.type = "Staff";
};

petshop.Dog.Staff.prototype.speak = function(){
	return "Woof! My Name is: " + this.name + " and I'm a " + this.type;
};

/* SORT ARRAY */
function sortArray( unsortedArray ){

	 var Sorter = function(){
	 	this.type = "";
	 };

	 Sorter.prototype = {
	 	setType : function( type ){
	 		this.type = types[type];
	 	},
	 	sort : function(){
	 		return this.type.sort( unsortedArray );
	 	}
	 };

	 var types = {
	 	'number' : {
	 		sort : function( unsortedArray ) {
		 		return unsortedArray.sort( function (a, b) {
					return a - b;
				} );
		 	}
	 	},
	 	'string' : {
	 		sort : function( unsortedArray ) {
		 		return unsortedArray.sort(function (a, b) {
				     var A = a.toLowerCase(),
				     	 B = b.toLowerCase();

				     if (A < B){
				        return -1;
				     } else if (A > B){
				       return  1;
				     } else{
				       return 0;
				     }
				});
		 	}
	 	}
	 };

	 var sorter = new Sorter();
	 sorter.setType( typeof unsortedArray[0] );
	 return sorter.sort();
}