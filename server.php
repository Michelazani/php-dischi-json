<?php
    // leggo il contenuto del file json
    $jsonString = file_get_contents('./json/songs.json');
    // avviso il browser che sta ricevendo un json e me lo fa visualizzare in modo diverso
    header('Content-Type: application/json'); 
    echo $jsonString;
?>
