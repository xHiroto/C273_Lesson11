$(document).ready(function () {
    var myreviews = JSON.parse(localStorage.getItem("myreviews"));
    
    if (myreviews === null){
        myreviews = [];
    }
    
    var message = "";
    for(var i = 0; i < myreviews.length; i++){
        var movie = myreviews[i];
        message += '<div class="card"><div class="card-header">' + movie.Title + '</div>';
        message += '<div class="card-body">' + movie.Plot + '</div></div><br/>';
    }
    $("#contents").append(message);
});
