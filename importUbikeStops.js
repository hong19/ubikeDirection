var app = app || {};

$(function(){
    $.getJSON('YouBikeTP.json',function(data){
        console.log('success');
        console.log(data.retVal);
        app.ubikeStops = data.retVal;
    }).error(function(){
        console.log('error');
    });
});
