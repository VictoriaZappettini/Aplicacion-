var sources = {
    opisu: {
	    url: "https://geoserver.opisu.gba.gob.ar/geoserver/IDEOPISU/ows?service",        
        title: "opisu",
        ptype: "gxp_wmscsource"
        },
   /* oficiales: {
	    url: "http://geoserver.opisu.gba.gob.ar/geoserver/IDEOPISU/ows?service",  
        title: "opisu",
        ptype: "gxp_wmscsource"
        },*/
    arba: {
         url: "http://geo.arba.gov.ar/geoserver/idera/wms?",
         title: "Buenos Aires - ARBA",
         ptype: "gxp_wmscsource"
        },
    idehab: {
         url: "http://geo.arba.gov.ar/geoserver/idera/wms?",
         title: "ideHab",
         ptype: "gxp_wmscsource"
        },
    urbasig: {
        url: "http://www.urbasig.gob.gba.gob.ar/geoserver/urbasig/wms",        
        title: "Buenos Aires - URBASIG",
        ptype: "gxp_wmscsource"
        },
    dipsoh: {
        url: "http://www.mosp.gba.gov.ar/sig_hidraulica/ms/geoserver/dipsoh/wms",        
        title: "Hidraulica",
        ptype: "gxp_wmscsource"
        },
    geoinfra: {
        url: "http://www.geoinfra.minfra.gba.gov.ar/geoserver/Geoinfra/wms",        
        title: "GeoInfra",
        ptype: "gxp_wmscsource"
        },
    
    ign: {
        url: "https://wms.ign.gob.ar/geoserver/ows?",        
        title: "IGN",
        ptype: "gxp_wmscsource"
        },
    indec: {
        url: "https://geoservicios.indec.gob.ar/geoserver/wms?service",        
        title: "INDEC",
        ptype: "gxp_wmscsource"
        },
    argen: {
        url: "http://wms.ign.gob.ar/geoserver/capabaseargenmap/gwc/service/wmts?request=GetCapabilities",        
        title: "argen",
        ptype: "gxp_olsource"
        },
   
    ol: {
        ptype: "gxp_olsource"
    },
    osm:{
        ptype: "gxp_osmsource"
     }

}



