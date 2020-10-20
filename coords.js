function getCoords(){

var Clicker = OpenLayers.Class(OpenLayers.Control, {                

    defaults: {
        pixelTolerance: 1,
        stopSingle: true
    },

    initialize: function(options) {
        this.handlerOptions = OpenLayers.Util.extend(
            {}, this.defaults
        );
        OpenLayers.Control.prototype.initialize.apply(this, arguments); 
        this.handler = new OpenLayers.Handler.Click(
            this, {click: this.trigger}, this.handlerOptions
        );
    }, 

    trigger: function(event) {
         
         openPopup(this.map.getLonLatFromPixel(event.xy));
        
    }

});


var popup;
function openPopup(location) {

    if (!location) {
        location = app.mapPanel.map.getCenter();
    }
    if (popup && popup.anc) {
        popup.close();
    }
    
    var epsg4326 = new OpenLayers.Projection('EPSG:4326');
    var epsgWebMercator = new OpenLayers.Projection('EPSG:3857');
    var pt_latLong=new OpenLayers.Geometry.Point(location.lon, location.lat);
    var pt_epsg4326= pt_latLong.transform(epsgWebMercator, epsg4326);
    alert("Coordenadas tomadas del centro de vista grafica (Lon - Lat) \n \n" + pt_epsg4326);
}

openPopup();

 }