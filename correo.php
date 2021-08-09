<?php
if(isset($_POST['enviar'])) {
  if(!empty($_POST['nombre']) && !empty($_POST['email']) &&!empty($_POST['mensaje'])){
    $destino = "ginofranco2019@gmail.com";
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $msg = $_POST['mensaje'];
    $contenido = "Nombre: " . $name . "\nCorreo: " . $email . "\nMensaje: " . $msg; 
    mail($destino, "Contacto", $contenido);
    header("Location:gracias.html");
  }
}
?>
