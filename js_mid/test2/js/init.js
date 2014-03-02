$.getJSON("../mock.json", function( data ){
    new app.Views.Tweets( data.statuses ); 
});