# JavaScript // Mid Weight Developer // Test 2 #

Outline of approach for test 2

I decided to use the Backbone.js library to create this data driven app. Although the requirements for test may not have been too complex. I felt that the requirements could become more involved down the line and therefore benefit from being built using a mv* library.

I first created a Backbone model for each Tweet setting a default placeholder image in the absence of an image being provided. I then created a Backbone collection setting the model type to a 'Tweet'.

I then created a Backbone view for an individual 'Tweet'. I used the underscore templating utility to take care of the Tweet template. I added some hover effects and custom functions to take care of linkifying the hashtags and urls contained in the tweet text.

After this I created a Backbone view for the list of tweets. This took care of initialising the collection of tweets with the mock data. It also took care of rendering the complete list of tweets.

I used the jquery getJSON method to load in the dummy data and once loaded created a new Tweets view passing in the dummy data.

I used Grunt.js to take care of concactinating and minifing the javascript. Grunt was also used for compiling sass into the site.css file.