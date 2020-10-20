

function gms2gd() {
var xg = Ext.getCmp('ir_lon_g').getValue();
var xm = Ext.getCmp('ir_lon_m').getValue();
var xs = Ext.getCmp('ir_lon_s').getValue();
var lalalon = (xg + xm/60 + xs/3600) * -1;
Ext.getCmp('ir_lon').setValue(lalalon.toFixed(7));
var yg = Ext.getCmp('ir_lat_g').getValue();
var ym = Ext.getCmp('ir_lat_m').getValue();
var ys = Ext.getCmp('ir_lat_s').getValue();
var lalalat = (yg + ym/60 + ys/3600 ) * -1;
Ext.getCmp('ir_lat').setValue(lalalat.toFixed(7));
}
function gd2gms() {
var lon = Ext.getCmp('ir_lon').getValue() * -1;
var lat = Ext.getCmp('ir_lat').getValue() * -1;
var gx = parseInt(lon);
var mx = Math.floor( (lon - gx) * 60 );
var sx = parseFloat( (lon - mx/60 - gx) * 3600 );
var gy = parseInt(lat);
var my = Math.floor( (lat - gy) * 60 );
var sy = parseFloat( (lat - my/60 - gy) * 3600 );
Ext.getCmp('ir_lon_g').setValue(gx);
Ext.getCmp('ir_lon_m').setValue(mx);
Ext.getCmp('ir_lon_s').setValue(sx.toFixed(2));
Ext.getCmp('ir_lat_g').setValue(gy);
Ext.getCmp('ir_lat_m').setValue(my);
Ext.getCmp('ir_lat_s').setValue(sy.toFixed(2));
}
var ir_lon = new Ext.form.NumberField({
id:'ir_lon',
fieldLabel: 'Longitud',
height: 20,
width: 150,
readOnly: false,
enableKeyEvents: true,
allowBlank: false,
allowNegative: true,
allowDecimals: true,
decimalPrecision: 7,
listeners: {change: gd2gms},
blankText: 'Ingrese un valor entre -75 y -52',
minValue: -75,
maxValue: -52,
value: -57.9541
});
var ir_lat = new Ext.form.NumberField({
id:'ir_lat',
fieldLabel: 'Latitud',
height: 20,
width: 150,
readOnly: false,
enableKeyEvents: true,
allowBlank: false,
allowNegative: true,
allowDecimals: true,
decimalPrecision: 7,
listeners: {change: gd2gms},
blankText: 'Ingrese un valor entre -57 y -21',
minValue: -57,
maxValue: -21,
value: -34.9196
});
var ir_lon_g = new Ext.form.NumberField({
id:'ir_lon_g',
height: 20,
width: 50,
readOnly: false,
enableKeyEvents: true,
allowBlank: false,
allowNegative: false,
allowDecimals: false,
listeners: {change: gms2gd},
blankText: 'Ingrese un valor entre 0 y 60',
minValue: 52,
maxValue: 75,
value: 58
});
var ir_lon_m = new Ext.form.NumberField({
id:'ir_lon_m',
height: 20,
width: 50,
readOnly: false,
enableKeyEvents: true,
allowBlank: false,
allowNegative: false,
allowDecimals: true,
decimalPrecision: 5,
listeners: {change: gms2gd},
blankText: 'Ingrese un valor entre 0 y 60',
minValue: 0,
maxValue: 60,
value: 40
});
var ir_lon_s = new Ext.form.NumberField({
id:'ir_lon_s',
height: 20,
width: 50,
readOnly: false,
enableKeyEvents: true,
allowBlank: true,
allowDecimals: true,
allowNegative: false,
listeners: {change: gms2gd},
blankText: 'Ingrese un valor entre 0 y 60',
minValue: 0,
maxValue: 60,
value: 9
});
var ir_lat_g = new Ext.form.NumberField({
id:'ir_lat_g',
height: 20,
width: 50,
readOnly: false,
enableKeyEvents: true,
allowBlank: false,
allowNegative: false,
allowDecimals: false,
listeners: {change: gms2gd},
blankText: 'Ingrese un valor entre 0 y 60',
minValue: 21,
maxValue: 56,
value: 34
});
var ir_lat_m = new Ext.form.NumberField({
id:'ir_lat_m',
height: 20,
width: 50,
readOnly: false,
enableKeyEvents: true,
allowBlank: false,
allowNegative: false,
allowDecimals: true,
decimalPrecision: 5,
listeners: {change: gms2gd},
blankText: 'Ingrese un valor entre 0 y 60',
minValue: 0,
maxValue: 60,
value: 36
});
var ir_lat_s = new Ext.form.NumberField({
id:'ir_lat_s',
height: 20,
width: 50,
readOnly: false,
enableKeyEvents: true,
allowBlank: true,
allowDecimals: true,
allowNegative: false,
listeners: {change: gms2gd},
blankText: 'Ingrese un valor entre 0 y 60',
minValue: 0,
maxValue: 60,
value: 29
});

size = new OpenLayers.Size(21,25);
offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
markers = new OpenLayers.Layer.Markers( "Markers" );

var irCoord = new Ext.Button({
id: 'irCoord',
text: 'IR',
handler: function() {
if (elegirEscala.getValue() === '') {
Ext.Msg.alert('', 'Debe elegir una escala.');
} else {

app.mapPanel.map.setCenter(
new OpenLayers.LonLat(ir_lon.getValue(), ir_lat.getValue()).transform(new OpenLayers.Projection('EPSG:4326'), new OpenLayers.Projection('EPSG:900913')),
app.mapPanel.map.getZoomForResolution(OpenLayers.Util.getResolutionFromScale(elegirEscala.getValue(), app.mapPanel.map.getUnits()))
);

app.mapPanel.map.addLayer(markers);


var coordir = new OpenLayers.LonLat(ir_lon.getValue(), ir_lat.getValue()).transform(new OpenLayers.Projection('EPSG:4326'), new OpenLayers.Projection('EPSG:900913'));
var iconir = new OpenLayers.Icon('./theme/gxp/img/silk/marker.png', size, offset);
marquita = new OpenLayers.Marker(coordir, iconir);
markers.removeMarker(marquita);
markers.addMarker(marquita);
marquita.setOpacity(1);
}
}
});

var SalirXY = new Ext.Button({
text : 'Salir',
//icon:'images/Forward.gif',

handler: function()
{
if (typeof marquita === 'undefined') { ventanaXY.hide(); } else { markers.removeMarker(marquita); marquita.setOpacity(0); ventanaXY.hide(); }

}
});
///////////////////////////////////////////////////////////////////////////////////////
var elegirEscala = new Ext.form.ComboBox({
store: new Ext.data.SimpleStore({
fields: ['texto', 'valor'],
data: [
['Cerca', 13542],
['Medio', 108336],
['Lejos', 1733376]
]
}),
id: 'elegirEscala',
mode: 'local',
selectOnFocus: true,
forceSelection: true,
triggerAction: 'all',
labelSeparator: '',
editable:false,
valueField: 'valor',
displayField: 'texto'
});
Ext.getCmp('elegirEscala').setValue('Cerca');

var fomularioXY = new Ext.form.FormPanel({
width: 250,
frame: true,
labelAlign: 'left',
labelWidth: 55,
items: [
{html:'<br><b>Grados decimales</b>'},
ir_lon,
ir_lat,
{html:'<br><b>Grados  minutos  segundos</b>'},
{
layout: 'column',
items: [
{
columnWidth: 0.25,
html: '<span style="font-size:12px">Lon W :</span>'
},
{
columnWidth: 0.25,
items: ir_lon_g
},
{
columnWidth: 0.25,
items: ir_lon_m
},
{
columnWidth: 0.25,
items: ir_lon_s
}
]
},
{
layout: 'column',
items: [
{
columnWidth: 0.25,
html: '<span style="font-size:12px">Lat S :</span>'
},
{
columnWidth: 0.25,
items: ir_lat_g
},
{
columnWidth: 0.25,
items: ir_lat_m
},
{
columnWidth: 0.25,
items: ir_lat_s
}
]
},
{html:'<br><b>Nivel de acercamiento</b>'},
elegirEscala

],
buttons: [ irCoord, SalirXY ]
});

function gotoxy(){

	
ventanaXY = new Ext.Window({
title: 'Ir a coordenadas - WGS84',
width: 260,
height: 270,
layout: 'fit',
closable: false,
resizable: false,
constrain:true,
shadow:true,
closeAction: 'hide',items: [fomularioXY]
});

var gotoxybut =	new Ext.Toolbar.Button({
//icon: 'images/toolbar_latlong.gif',
tooltip: 'Ir a coordenadas',
//handler: function() {
//if (ventanaXY.isVisible()) {ventanaXY.hide();} 
//else
//{
	
//}
//}
});

ventanaXY.show();

//toolbar.add(gotoxybut);

}