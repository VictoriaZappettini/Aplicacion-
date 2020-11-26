var layers = [     
        //OPISU 
        /* {
            source: "opisu",
            name: "Renabap_2018_base_csv_shape",
            visibility: false,
            title: "Renabap 2018 base",
            group: "oficiales"
        },*/
      {
            source: "opisu",
            name: "Barrios_Intervencion_OPISU_NOV_2020",
            visibility: false,
            title: "Barrios_Intervencion_OPISU_NOV_2020",
            group: "opisu"
        },
       /* {
            source: "opisu",
            name: "Barrios_RPPVAP_16-4-20_geoTopo",
            visibility: false,
            title: "Barrios_RPPVAP_16-4-20_geoTopo",
            group: "oficiales"
        },*/
	
         {
            source: "opisu",
            name: "Estimacion_Poblacional",
            visibility: false,
            title: "Estimacion Poblacional",
            group: "opisu"
        },
          {
            source: "opisu",
            name: "Nisu",
            visibility: false,
            title: "Nisu",
            group: "opisu"
        },
        //{
            //source: "opisu",
            //name: "barrios_en_evaluacion_julio_2020",
            //visibility: false,
            //title: "Barrios en Evaluacion",
            //group: "opisu"
        //},
       {  // GeoInfra //
            source: "geoinfra",
            name: "acueductos",
            visibility: false,
            title: "Acueductos",
            group: "geoinfra"
        },{
            source: "geoinfra",
            name: "plantas_a",
            visibility: false,
            title: "Platas de tratamiento",
            group: "geoinfra"
        },{
            source: "geoinfra",
            name: "pozosconget",
            visibility: false,
            title: "Pozos de agua",
            group: "geoinfra"
        },
        //ARBA
         {
        source: "arba",
        name: "Circunscripcion",
        visibility: false,
        title: "Circunscripcion",
        group: "arba"
    },{
        source: "arba",
        name: "Chacra",
        visibility: false,
        title: "Chacra",
        group: "arba"
    },{
        source: "arba",
        name: "Departamento",
        visibility: false,
        title: "Departamento",
        group: "arba"
    },{
        source: "arba",
        name: "Fraccion",
        visibility: false,
        title: "Fraccion",
        group: "arba"
    },{
        source: "arba",
        name: "Quinta",
        visibility: false,
        title: "Quinta",
        group: "arba"
    },{
        source: "arba",
        name: "Parcela",
        visibility: false,
        title: "Parcela",
        group: "arba"
    },{
        source: "arba",
        name: "Manzana",
        visibility: false,
        title: "Manzana",
        group: "arba"
    },{
        source: "arba",
        name: "Subparcela",
        visibility: false,
        title: "Subparcela",
        group: "arba"
    },{
        source: "arba",
        name: "Seccion catastral",
        visibility: false,
        title: "Seccion catastral",
        group: "arba"
    },{ 
        source: "arba",
        name: "Grupo IDERA",
        visibility: false,
        title: "Grupo de capas ARBA",
        group: "arba"
    },
         // buffer
       {
        source: "ol",
        name: "buffer",
        visibility: false,
        title: "Buffer",
        args: ["Buffer"],
        type: "OpenLayers.Layer.Vector",
        group: "consulta"
       },

        // IGN //
    {
        source: "ign",
        name: "ign:nivelacion_precision",
        visibility: false,
        title: "Red de NivelaciÃ³n",
        group: "ign"
    },{
        source: "ign",
        name: "ign:lineas_de_geomorfologia_CA010",
        visibility: false,
        title: "Curvas de Nivel",
        group: "ign"
    },
      // INDEC //
    {
        source: "indec",
        name: "sig:v_departamentos",
        visibility: false,
        title: "Departamentos",
        group: "indec"
    },{
        source: "indec",
        name: "sig:v_provincias",
        visibility: false,
        title: "Provincias",
        group: "indec"
    },
    {
        source: "indec",
        name: "sig:vias",
        visibility: false,
        title: "Vias de circulacion-Ejes",
        group: "indec"
    },
     {
        source: "indec",
        name: "sig:cuadras",
        visibility: false,
        title: "cuadras",
        group: "indec"
    },
     {
        source: "indec",
        name: "sig:v_fracciones",
        visibility: false,
        title: "v-fracciones",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:actividad_dpto",
        visibility: false,
        title: "Condición de actividad económica - dpto - Censo 2010 - INDEC",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:hogares_con_desague_cloacal_pcia",
        visibility: false,
        title: "Hogares con desagüe cloacal - pcia - Censo 2010 - INDEC",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:hogares_con_desague_cloacal_dpto",
        visibility: false,
        title: "Hogares con desagüe cloacal - dpto - Censo 2010 - INDEC",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:v_inmat_x_prov",
        visibility: false,
        title: "v_inmat_x_prov",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:inmat_dpto",
        visibility: false,
        title: "Hogares por calidad de los materiales de la vivienda - dpto - Censo 2010 - INDEC",
        group: "indec"
    },
     {
        source: "indec",
        name: "sig:vias",
        visibility: false,
        title: "Vias de circulacion-Ejes",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:hogares_con_red_gas_pcia",
        visibility: false,
        title: "Hogares con gas de red - pcia - Censo 2010 - INDEC",
        group: "indec"
    },
     {
        source: "indec",
        name: "geocenso2010:datos_basicos_localidad",
        visibility: false,
        title: "Poblacion y datos basicos por localidad - Censo2010 - INDEC",
        group: "indec"
    },
    {
        source: "indec",
        name: "geocenso2010:inmat_pcia",
        visibility: false,
        title: "Provincias",
        group: "indec"
    },
    {
        source: "indec",
        name: "sig:v_provincias",
        visibility: false,
        title: "Hogares por calidad de los materiales de la vivienda: INMAT - pcia - Censo 2010 - INDEC",
        group: "indec"
    },
    {
        source: "indec",
        name: "geocenso2010:localidades_codigo",
        visibility: false,
        title: "Localidades - código censal 2010",
        group: "indec"
    },
    {
        source: "indec",
        name: "desarrollo:provincias",
        visibility: false,
        title: "v_provincias",
        group: "indec"
    },
    {
        source: "indec",
        name: "desarrollo:envolventes",
        visibility: false,
        title: "envolventes",
        group: "indec"
    },
    {
        source: "indec",
        name: "desarrollo:vias",
        visibility: false,
        title: "vias",
        group: "indec"
    },
    {
        source: "indec",
        name: "eph:entidades_eph_4326",
        visibility: false,
        title: "entidades_eph_4326",
        group: "indec"
    },
    {
        source: "indec",
        name: "sig:v_provincias",
        visibility: false,
        title: "Provincias",
        group: "indec"
    },
    {
        source: "indec",
        name: " eph:radios_eph",
        visibility: false,
        title: "radios_eph",
        group: "indec"
    },
    {
        source: "indec",
        name: "eph:aglomerados_eph_4326",
        visibility: false,
        title: "aglomerados_eph_4326",
        group: "indec"
    },
    {
        source: "indec",
        name: "eph:aglomerados_eph",
        visibility: false,
        title: "aglomerados_eph",
        group: "indec"
    },
    {
        source: "indec",
        name: "eph:entidades_eph",
        visibility: false,
        title: "entidades_eph",
        group: "indec"
    },
    {
        source: "indec",
        name: "eph:radios_eph_4326",
        visibility: false,
        title: "radios_eph_4326",
        group: "indec"
    },
    
      // IDEHab //
    {
        source: "idehab",
        name: "publico:villas_y_asentamientos_confirmados_rppvap",
        visibility: false,
        title: "Villas y asentamientos",
        group: "idehab"
    },
     // UrbaSIG //   
    {
             source: "urbasig",
             name: "areas_ley_8912",
             visibility: false,
                title: "Areas",
             group: "urbasig"
     },{
             source: "urbasig",
             name: "uso_del_suelo",
             visibility: false,
             
             title: "Zonas",
             group: "urbasig"
     },{                
             source: "urbasig",
             name: "zonificacion",
             visibility: false,
         
             title: "Zonificacion",            
             group: "urbasig"
         },
     // Capas Base
     {
            source: "osm",
            name: "mapnik",
            title: "Open Street Map",
            selected: true,
            group: "background"
        },{
            source: "ol",
            group: "background",
            fixed: true,
            type: "OpenLayers.Layer.XYZ",
            args: ["Hibrido","http://tileproxy.cloud.mapquest.com/tiles/1.0.0/hyb/${z}/${x}/${y}.png",{SphericalMercator: true,visibility: false}]
        },{
            source: "ol",
            group: "background",
            fixed: true,
            type: "OpenLayers.Layer.XYZ",
            args: ["Satelital","http://tileproxy.cloud.mapquest.com/tiles/1.0.0/sat/${z}/${x}/${y}.png",{SphericalMercator: true,visibility: false}]
        },{
            source: "ol",
            group: "background",
            fixed: true,
            type: "OpenLayers.Layer.XYZ",
            args: ["Callejero","http://tileproxy.cloud.mapquest.com/tiles/1.0.0/map/${z}/${x}/${y}.png",{SphericalMercator: true,visibility: false}]
        },{
            source: "ol",
            group: "background",
            fixed: true,
            type: "OpenLayers.Layer",
            args: ["Sin capa base",{visibility: false}]
        },{
            source: "argen",
            group: "background",
            fixed: true,
            type: "gxp_wmscsource",
            args: ["ArgenMap","https://wms.ign.gob.ar/geoserver/capabaseargenmap/gwc/service/wmts?request=GetCapabilities",{visibility: false}]
        }
];
