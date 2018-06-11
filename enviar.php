<?php
header("content-type: text/html;charset='utf-8'");
if($_POST['email'])
{
    $nombre = htmlentities($_POST['nombres']);
    $email = htmlentities($_POST['email']);
    $telefono = htmlentities($_POST['telefono']);
    $textomensaje = htmlentities($_POST['textomensaje']);
    $direccion_ip = $_SERVER['REMOTE_ADDR'];
    
    $header = 'From: '.$email." \n";
    $header.= "X-Mailer: PHP/".phpversion()." \n";
    $header.= "content-type: text/plain";
    $mensaje = "Este mensaje fue enviado por: " .$nombre." \n";
    $mensaje .= "Su email es: ".$email." \n";
    $mensaje .= "Su mensaje es: ".$textomensaje." \n";
    $mensaje .= "La direccion IP del Remitente es: " .$direccion_ip ." \n";
    $para = "anjca@hotmail.com";
    $asunto = "Mensaje Enviado desde el Consultorio de Especialistas de:".$email;
    if(mail($para,$asunto,utf8_decode($mensaje),$header))
    {
    	echo "<h1>Mensaje Enviado</h1><br><a href='javascript:history.back(1)'>Volver Atras</a>";
    }
    else{
    	echo "<h1>Informacion No valida, Verifique los datos de Origen</h1><br><a href='javascript:history.back(1)'>Volver Atras</a>";
    }
}else
echo ("<h1>Informacion No valida, Verifique los datos de Origen</h1><br><a href='javascript:history.back(1)'>Volver Atras</a>");
?>