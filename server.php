<?php
    // leggo il contenuto del file json
    $jsonString = file_get_contents('json/songs.json');
    // decodifica stringa JSON in array
    $songsArray = json_decode($jsonString, true);
    // stampo contenuto array con var_dump
    var_dump($songsArray);
?>
