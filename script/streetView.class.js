function streetView() {
    function c(a) {
        a || (a = app.mapPanel.map.getCenter());
        b && b.anc && b.close();
        b = new GeoExt.Popup({
            title: "Street View",
            location: a,
            width: 700,
            height: 700,
            collapsible: !0,
            map: app.mapPanel,
            items: [new gxp.GoogleStreetViewPanel]
        });
        b.show()
    }
    OpenLayers.Class(OpenLayers.Control, {
        defaults: {
            pixelTolerance: 1,
            stopSingle: !0
        },
        initialize: function(a) {
            this.handlerOptions = OpenLayers.Util.extend({}, this.defaults);
            OpenLayers.Control.prototype.initialize.apply(this, arguments);
            this.handler = new OpenLayers.Handler.Click(this,{
                click: this.trigger
            },this.handlerOptions)
        },
        trigger: function(a) {
            c(this.map.getLonLatFromViewPortPx(a.xy))
        }
    });
    var b;
    c()
}
;