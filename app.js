var app, posicioname, nomenclatura_par, nomenclatura, buffer, distritos, Sesion, permalink;
 src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5iIaA35nGeaWxVm4_us48stppFxjPXVA&callback=initMap&libraries=&v=weekly"

//var nomenclatura = new Nomenclatura(),
//partido_partida = new PartidoPartida();
//var streetView = new streetView();
Ext.onReady(function() {
    GeoExt.Lang.set("es");
    //OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
    app = new gxp.Viewer({
         proxy: "./prox/prox.php?url=",
        portalConfig: {
            layout: "border",
            items: [{
                id: "northpanel",
                xtype: "container",
                region: "north",
                border: !0,
                height: 100,
                html: '<img src="img/IDE1.png"  width="1400" height="100"/>'
                //items: [{
                //   
               // }]
            }, {
                id: "centerpanel",
                xtype: "tabpanel",
                region: "center",
                border: !1,
                activeTab: 0,
                items: ["mymap", 
   

                 {
                    title: "Datos e informes",
                    autoScroll: !0,
                    html: "<iframe  width='100%' height='100%' src='registros.html'>"
                }, {
                    title: "Barrios",
                    html: "<iframe  width='100%' height='100%' src='barrios.html'>"
                },
                {
                    title: "Google Street",
                    html: "<iframe  width='100%' height='100%' src='street.html'>"
                }, {
                    title: "Ayuda",
                    html: "<iframe  width='100%' height='100%' src='help.html'>"
                },
                {
                    title: "Acerca de",
                    html: "<iframe  width='100%' height='100%' src='about.html'>"
                },
                {
                    title: "Institucional",
                    html: "<iframe  width='100%' height='100%' src='institucional.html'>"
                },
                {
                    title: "Indice NISU",
                    html: "<iframe  width='100%' height='100%' src='indicenisu.html'>"
                },
                 {
                    title: "Solicitud de Información",
                    html: "<iframe  width='100%' height='100%' src='solicitud.html'>"
                },
                 {
                    title: "Estimación IA",
                    autoScroll: !0,
                    html: "<iframe  width='100%' height='100%' src='estimacion.html'>"
                },
                 {
                    title: "MARRC",
                    autoScroll: !0,
                    html: "<iframe  width='100%' height='100%' src='casos.html'>"
                },
                 {
                    title: "Participación Ciudadana",
                    html: "<iframe  width='100%' height='100%' src='participacion.html'>"
                },
                {
                    title: "Servicios WMS/WFS",
                    html: "<iframe  width='100%' height='100%' src='wms.html'>"
                }]
            }, {
                region: "west",
                xtype: "tabpanel",
                activeTab: 0,
                id: "westcontainer",
                title: "Capas de Informaci\u00f3n",
                border: !0,
                split: !0,
                collapsible: !0,
                collapseMode: "mini",
                collapsed: !1,
                width: 300,
                items: [{
                    title: "Capas de Informaci\u00f3n",
                    id: "layers_tree",
                    autoScroll: !0,
                    flex: 1
                }, {
                    title: "Referencia",
                    autoScroll: !0,
                    id: "legend",
                    flex: 1,
                    height: 1200
                }],
                bbar: {
                    title: "Posici\u00f3n",
                    contentEl: "coords",
                    height: 18
                }
            }]
        },
        tools: [{
            ptype: "gxp_loadingindicator"
        }, {
            ptype: "gxp_layertree",
            groups: grupos_capas,
            outputConfig: {
                id: "tree",
                useArrows: !0,
                autoScroll: !0,
                animate: !0,
                tbar: []
            },
            outputTarget: "layers_tree"
        }, {
            ptype: "gxp_addlayers",
            actionTarget: "tree.tbar"
        }, {
            ptype: "gxp_removelayer",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_zoomtolayerextent",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_layerproperties",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_navigation",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_zoomtoextent",
            actionTarget: "map.tbar",
            extent: new OpenLayers.Bounds(-7056953.7, -5017120.4, -6308031.4, -3929585.5)
        }, {
            ptype: "gxp_zoom",
            showZoomBoxAction: !0,
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_navigationhistory",
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_wmsgetfeatureinfo",
            outputConfig: {
                width: 400,
                draggable: !0
            },
            actionTarget: "map.tbar",
            loadingMask: !0,
            toggleGroup: "navegacion"
        },{
            ptype: "gxp_print",
            printService: "http://www.urbasig.gob.gba.gob.ar/geoserver/pdf/",
            actionTarget: "map.tbar",
            showButtonText: !0
        }, {
            ptype: "gxp_measure",
            id: "tool_measure",
            outputConfig: {
                width: 400,
                height: "auto"
            },
            controlOptions: {
                geodesic: !1
            },
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            xtype: "tbbutton",
            actionTarget: "map.tbar",
            actions: [{
                text: "Buffer",
                iconCls: "bt-buffer",
                handler: function() {
                    buffer.mostrar()
                }
            }]
        }, {
            ptype: "gxp_legend",
            outputTarget: "legend"
        }, {
            ptype: "gxp_googlegeocoder",
            outputTarget: "map.tbar",
            outputConfig: {
                emptyText: "Calle n\u00ba  partido | localidad partido",
                width: 300
            }
        }, {
            xtype: "tbbutton",
            actions: [{
                xtype: "tbbutton",
                text: "Busqueda x Nomenclatura",
                iconCls: "gxp-icon-find",
                menu: {
                    items: [/*{
                        text: "Por Partido-Partida",
                        iconCls: "gxp-icon-find",
                        handler: function(a, b) {
                            nomenclatura_par.mostrar()
                        }
                    }, {
                        text: "Por Nomenclatura",
                        iconCls: "gxp-icon-findPartido",
                        handler: function() {
                            nomenclatura.mostrar()
                        }
                    }, {
                        text: "Por Registro Urb. Cerradas",
                        iconCls: "gxp-icon-find",
                        handler: function() {
                            registrourbacerradas.mostrar()
                        }
                    }*/]
                }
            }]
        }, {
            xtype: "tbbutton",
            actionTarget: "map.tbar",
            actions: [{
                text: "Street View",
                iconCls: "gxp-streetview",
                handler: function() {
                    street_view().show;
                }
            }]
        },
         {
            xtype: "tbbutton",
            actionTarget: "map.tbar",
            actions: [{
                text: "Coords",
                iconCls: "bt-coords",
                handler: function() {
                    getCoords().show;
                }
            }]
        },
        {
            xtype: "tbbutton",
            actionTarget: "map.tbar",
            actions: [{
                text: "Localizacion",
                iconCls: 'bt-localizacion',
                handler: function(event) {
                     posicioname().show();
                }
            }]
        }

        ],
        defaultSourceType: "gxp_wmssource",
        sources: sources,
        map: {
            id: "mymap",
            title: "Mapa",
            projection: "EPSG:900913",
            displayProjection: "EPSG:900913",
            units: "m",
            restrictedExtent: [-7056953.7, -5017120.4, -6308031.4,
                -3929585.5
            ],
            center: [-6768040.2, -4401345.9],
            zoom: 7,
            numZoomLevels: 19,
            maxResolution: "156543.0339",
            stateId: "map",
            prettyStateKeys: !0,
            eventListeners: {
                zoomend: function(a) {
                    Ext.getCmp("map-bottom").update("Scale: " + this.getScale())
                }
            },
            layers: layers,
            items: [{
                xtype: "gx_zoomslider",
                vertical: !0,
                height: 100
            }, {
                xtype: "gxp_scaleoverlay"
            }]
        }
    });
    app.mapPanel.map.addControl(new OpenLayers.Control.MousePosition({
        numDigits: 4,
        separator: "&nbsp;&nbsp;",
        displayProjection: new OpenLayers.Projection("EPSG:900913"),
        formatOutput: function(a) {
            var b =
                "Lat:" + OpenLayers.Number.format(a.lat, 4, ".", ",");
            return b += "  Lon:" + OpenLayers.Number.format(a.lon, 4, ".", ",")
        },
        div: document.getElementById("coords")
    }));
    try {
    nomenclatura = new Nomenclatura(this);
    nomenclatura_par = new Nomenclatura_par(this);    
    }catch(err) {
        console.log(err);
    }
    buffer = new Buffer(this)
});

