app.Views.Tweet = Backbone.View.extend({
    tagName: 'li',
    className: 'tweet',
    template: _.template( $( '#tweetTemplate' ).html() ),
    events: {
        "mouseover" : "showBackground",
        "mouseleave" : "hideBackground"
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        this.linkifyUrls();
        this.linkifyHashTags();
        return this;
    },

    linkifyHashTags: function(){
        var hashtag_regexp = /#([a-zA-Z0-9]+)/g;

        function linkHashtags(text) {
            return text.replace(
                hashtag_regexp,
                '<a href="http://twitter.com/#search?q=$1">#$1</a>'
            );
        } 

        this.$el.find('p').each(function() {
            $(this).html(linkHashtags($(this).html()));
        });
    },

    linkifyUrls: function(){
        var url_regexp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        function linkUrl(text) {
            return text.replace(
                url_regexp,
                '<a href="$1">$1</a>'
            );
        } 

        this.$el.find('p').each(function() {
            $(this).html(linkUrl($(this).html()));
        });

    },

    showBackground: function(e){
        this.$el.addClass( "show-bg" );
    },

    hideBackground: function(e){
        this.$el.removeClass( "show-bg" );
    }
});