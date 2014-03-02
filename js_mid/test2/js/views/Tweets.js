app.Views.Tweets = Backbone.View.extend({
    el: '.tweets',

    initialize: function( data ) {
        this.collection = new app.Collections.Tweets( data );
        this.render();
    },

    render: function() {
        this.$el.html("");

        this.collection.each(function( item ) {
            this.renderTweet( item );
        }, this );
    },

    renderTweet: function( item ) {
        var tweetView = new app.Views.Tweet({
            model: item
        });
        this.$el.append( tweetView.render().el );
    }
});