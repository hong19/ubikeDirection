$(function(){
    $.getJSON('YouBikeTP.json',function(data){
        console.log('success');
        console.log(data.retVal);
        $.each(data.retVal,function(i,stop){
            $('#ubike-list').append('<li>'+ stop.ar + stop.lat + stop.lng + '</li>');
        });
    }).error(function(){
        console.log('error');
    });
});
