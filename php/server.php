<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $user = new SplFixedArray(4);
    $user[0] = $_POST['email'];
    $user[1] = $_POST['pass'];
    $user[2] = $_POST['addr'];
    $user[3] = $_POST['mob'];

    header("Content-Disposition: attachment, filename=\"$filename\"");
    header("Content-Type: application/vnd.ms-excel");

    $flag = false;

    function filterData(&$str) {
        $str = preg_replace("/\t/", "\\t", $str); 
        $str = preg_replace("/\r?\n/", "\\n", $str); 
        if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"'; 
    }

    foreach ($data as $row) {
        if (!$flag) {
            echo implode("\t", array_keys($row)) . "\n";
            $flag = true;
        }
        array_walk($row, 'filterData');
        echo implode("\t", array_values($row)) . "\n";
    }

    $filename = "user_data.xls";

?>