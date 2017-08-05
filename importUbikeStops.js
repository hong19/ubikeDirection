import $ from 'jquery';

var modules = {
    ubikeStops: {},
    importUbikeStops: function importUbikeStops() {
        $.getJSON('YouBikeTP.json',function(data){
            //console.log(data.retVal);
            this.ubikeStops = data.retVal;
        }).fail(function(){
            console.log('import ubike stations error');
        });
    }
};

export default modules;
