<?php
#error_reporting(E_ALL);

#$url="http://geo.arba.gob.ar/geoserver/idera/wms?SERVICE=WMS&REQUEST=GetCapabilities&TILED=true&VERSION=1.1.1";
$url=$_GET['url'];
$proxy = '10.2.251.25:3128';
// create curl resource
$ch = curl_init();
header("Content-type: text/xml");
// set options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_PROXY, $proxy);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
$output = curl_exec($ch);


$contenttype = @$_REQUEST['contenttype'];
if(empty($contenttype)) {
  $contenttype = "text/xml";
  //$contenttype = "application/json";
}


curl_close($ch); 