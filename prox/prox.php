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
    $host = "http://visualizador.opisu.gba.gob.ar/ide/";
}
$port = @$parsed['port'];
if(empty($port)){
  $port="80"; 
}

if(isset($_REQUEST['contenttype'])){
  header("Content-type: " . filter_var($_REQUEST['contenttype'],FILTER_SANITIZE_STRING));
}


$contenttype = @$_REQUEST['contenttype'];
if(empty($contenttype)) {
  $contenttype = "text/xml";
  //$contenttype = "application/json";
}


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
  $ch = curl_init($onlineresource);
 
  // fix to allow HTTPS connections with incorrect certificates
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
  curl_setopt($ch, CURLOPT_TIMEOUT, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $file_contents = curl_exec($ch);

  //Habilitamos el debugueo del curl para ver la info
 curl_errno($ch);
  #echo __FILE__.':'.__LINE__.' -> Bypass'.var_dump($file_contents);
  //Obtenemos la info
  $info = curl_getinfo($ch);
    if($info["http_code"]!=200){//si no llega a estar en success la conexión, le ponemos proxy y relanzamos el servicio
      curl_setopt($ch, CURLOPT_PROXY, '10.2.251.25:3128');
      $file_contents = curl_exec($ch);
      
  }

  
  curl_close($ch);

  header("Content-type: text/xml");
  #echo $file_contents;die;
  return $file_contents;
}