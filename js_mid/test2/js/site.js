var app={Collections:{},Models:{},Views:{}};app.Models.Tweet=Backbone.Model.extend({defaults:{user:{profile_image_url:"../img/placeholder.gif"}}}),app.Collections.Tweets=Backbone.Collection.extend({model:app.Models.Tweet}),app.Views.Tweet=Backbone.View.extend({tagName:"li",className:"tweet",template:_.template($("#tweetTemplate").html()),events:{mouseover:"showBackground",mouseleave:"hideBackground"},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.linkifyUrls(),this.linkifyHashTags(),this},linkifyHashTags:function(){function a(a){return a.replace(b,'<a href="http://twitter.com/#search?q=$1">#$1</a>')}var b=/#([a-zA-Z0-9]+)/g;this.$el.find("p").each(function(){$(this).html(a($(this).html()))})},linkifyUrls:function(){function a(a){return a.replace(b,'<a href="$1">$1</a>')}var b=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;this.$el.find("p").each(function(){$(this).html(a($(this).html()))})},showBackground:function(){this.$el.addClass("show-bg")},hideBackground:function(){this.$el.removeClass("show-bg")}}),app.Views.Tweets=Backbone.View.extend({el:".tweets",initialize:function(a){this.collection=new app.Collections.Tweets(a),this.render()},render:function(){this.$el.html(""),this.collection.each(function(a){this.renderTweet(a)},this)},renderTweet:function(a){var b=new app.Views.Tweet({model:a});this.$el.append(b.render().el)}}),$.getJSON("../mock.json",function(a){new app.Views.Tweets(a.statuses)});