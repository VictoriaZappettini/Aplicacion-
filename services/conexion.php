<?php 
	 $db = pg_connect("host=localhost dbname=Idera user=postgres password=40768666") or die ("Error de conexion".pg_last_error());


        $sql = "SELECT * FROM barrios ORDER BY partido";
     if (!$db) {
        echo "error";
    } else {
    $result = pg_query($db, $sql);
    $rows = array();
    $totaldata = pg_num_rows($result);
    while($r = pg_fetch_assoc($result)) {
        $rows[] = $r;
    }
    //echo json_encode($rows);
    //echo json_encode(array('country' => $rows));
    echo '({"total":"'.$totaldata.'","data":'.json_encode($rows).'})';
    }
   
?>