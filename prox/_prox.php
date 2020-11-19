<?php
/*
License: LGPL as per: http://www.gnu.org/copyleft/lesser.html
$Id: proxy.php 3650 2007-11-28 00:26:06Z rdewit $
$Name$
*/

////////////////////////////////////////////////////////////////////////////////
// Description:
// Script to redirect the request http://host/proxy.php?url=http://someUrl
// to http://someUrl .
//
// This script can be used to circumvent javascript's security requirements
// which prevent a URL from an external web site being called.
//
// Author: Nedjo Rogers
////////////////////////////////////////////////////////////////////////////////

// read in the variables

if(array_key_exists('HTTP_SERVERURL', $_SERVER)){
  $onlineresource=$_SERVER['HTTP_SERVERURL'];
}else{
  $onlineresource=$_REQUEST['url'];  
}

$parsed = parse_url($onlineresource);
$host = @$parsed["host"];
$path = @$parsed["path"] . "?" . @$parsed["query"];
if(empty($host)) {    
  //$host = "mapa-runbo.presi.unlp.edu.ar";
    $host = "visualizador.opisu.gba.gob.ar";
}
$port = @$parsed['port'];
if(empty($port)){
  $port="80"; 
}

#array(4) { ["scheme"]=> string(4) "http" ["host"]=> string(15) "geo.arba.gov.ar" ["path"]=> string(20) "/geoserver/idera/wms" ["query"]=> string(60) "SERVICE=WMS&REQUEST=GetCapabilities&TILED=true&VERSION=1.1.1" }
#echo var_dump($parsed);die;

$contenttype = @$_REQUEST['contenttype'];
if(empty($contenttype)) {
  $contenttype = "text/xml";
  //$contenttype = "application/json";
}
$data = @$_SERVER["HTTP_RAW_POST_DATA"];

#$data = array($parsed['query']);
// define content type
header("Content-type: " . $contenttype);

if(empty($data)) {
  $result = send_request();
}
else {
  // post XML
  $posting = new HTTP_Client($host, $port, $data);
  $posting->set_path($path);
  $result = $posting->send_request();
}

// strip leading text from result and output result
$len=strlen($result);
$pos = strpos($result, "<");
if($pos > 1) {
  $result = substr($result, $pos, $len);
}
//$result = str_replace("xlink:","",$result);
echo $result;

// define class with functions to open socket and post XML
// from http://www.phpbuilder.com/annotate/message.php3?id=1013274 by
//Richard Hundt

class HTTP_Client {
  var $host;
  var $path;
  var $port;
  var $data;
  var $socket;
  var $errno;
  var $errstr;
  var $timeout;
  var $buf;
  var $result;
  var $agent_name = "MyAgent";
  //Constructor, timeout 30s
  function HTTP_Client($host, $port, $data, $timeout = 30) {
    $this->host = $host;
    $this->port = $port;
    $this->data = $data;
    $this->timeout = $timeout;
  }

  //Opens a connection
  function connect() {
    $this->socket = fsockopen($this->host,
      $this->port,
      $this->errno,
      $this->errstr,
      $this->timeout
      );
    if(!$this->socket)
      return false;
    else
      return true;
  }

  //Set the path
  function set_path($path) {
    $this->path = $path;
  }

  //Send request and clean up
  function send_request() {
    if(!$this->connect()) {
      return false;
    }
    else {
      $this->result = $this->request($this->data);
      return $this->result;
    }
  }

  function request($data) {
    $this->buf = "";
    fwrite($this->socket,
      "POST $this->path HTTP/1.0\r\n".
      "Host:$this->host\r\n".
      "User-Agent: $this->agent_name\r\n".
      "Content-Type: application/xml\r\n".
      "Content-Length: ".strlen($data).
      "\r\n".
      "\r\n".$data.
      "\r\n"
    );

    while(!feof($this->socket))
      $this->buf .= fgets($this->socket, 2048);
      $this->close();
      return $this->buf;
  }


  function close() {
    fclose($this->socket);
  }
}



function send_request() {
  global $onlineresource;
  $ch = curl_init();
  $timeout = 5; // set to zero for no timeout

  // fix to allow HTTPS connections with incorrect certificates
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

  curl_setopt ($ch, CURLOPT_URL,$onlineresource);
  curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);

  curl_setopt ($ch, CURLOPT_PROXY, "10.2.251.62");
  curl_setopt ($ch, CURLOPT_PROXYPORT, 3128);

  curl_setopt ($ch, CURLOPT_ENCODING , "gzip, deflate");  

  $file_contents = curl_exec($ch);
  curl_close($ch);
  $lines = array();
  $lines = explode("\n", $file_contents);
  if(!($response = $lines)) {
    echo "Unable to retrieve file ";
  }
  $response = implode("",$response);  
  return $response;
}