<?php
header("content-type: text/html;charset='utf-8'")
$nombre = htmlentities($_POST['nombres']);
$email = htmlentities($_POST['email']);
$telefono = htmlentities($_POST['telefono']);
$textomensaje = htmlentities($_POST['textomensaje']);
$direccion_ip = $_SERVER['REMOTE_ADDR'];

$header = 'From: '.$email." \n";
$header.= "X-Mailer: PHP/".phpversion()." \n";
$header.= "content-type: text/plain";
$mensaje = "Este mensaje fue enviado" .$nombre." \n";
$mensaje .= "Su email es".$email." \n";
$mensaje .= "Su mensaje es".$textomensaje." \n";
$mensaje .= "La direccion IP del Mensaje es:" .$direccion_ip ." \n";
$para = "anjca@hotmail.com";
$asunto = "Mensaje Enviado atraves del Formulario de la Pagina Consultorio de Especialistas";
if(mail($para,$asunto,utf8_decode($mensaje),$header))
{
	echo "Mensaje enviado Gracias";
}
else{
	echo "Mensaje No enviado, Verifique el Formulario";
}
?>