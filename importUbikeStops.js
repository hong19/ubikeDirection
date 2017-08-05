import $ from 'jquery';

var modules = {
    ubikeStops: {},
    importUbikeStops: function importUbikeStops() {
        let that = this;
        $.getJSON('YouBikeTP.json',function(data){
            //console.log(data.retVal);
            that.ubikeStops = data.retVal;
        }).fail(function(){
            console.log('import ubike stations error');
        });
    }
};

export default modules;
