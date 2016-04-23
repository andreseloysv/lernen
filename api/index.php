<?php

$_SESSION["verbenId"]=null;
include_once '../model/word.php';
$function = (string)filter_input(INPUT_POST, 'function');
$parameter = (integer)filter_input(INPUT_POST, 'parameter');
$word= new word();
echo json_encode($word->$function($parameter));
