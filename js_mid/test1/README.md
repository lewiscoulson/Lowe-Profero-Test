# JavaScript // Mid Weight Developer // Test 1 #

Outline of approach for test 1

javascript Class

To create the Javascript class outlined in the brief I first started off by creating a global object 'petshop'. I then augmented this object with a new member called 'Dog'. The value of this member was an
immediately invoked function expression (IIFE) which returned a constructor function. The IIFE accepted two arguments which represent potential dependencies for the module. The constructor function set a 'name' property and augmented it's prototype with a 'speak' method. I then extended this class by creating a 'Staff' constructor. This class has an additional 'type' member and overides the 'speak' function.

Algorithms

To implement the 'sortArray' function I opted to use the strategy pattern as this was perfect for using different sorting algorithims ( integer sort, string sort ) using a unified interface. I created a simple constructor function with one property 'type'. I then augmented it's prototype with two methods 'setType' and 'sort'. I created a 'types' object which contained the different array value types with a unique implementation of the sort method. I set an instance of the constructor to the variable 'sort' and then used it's 'setType' method passing in the type of the unsortedArrays first item as it's argument. The result of this call selected the correct algorithim to use when the 'sort' method is called. I then returned the result of calling the 'sort' method.