### Link al deploy de heroku: https://huellaverde.herokuapp.com/
##

## Problemas conocidos

Puede que al enviar/editar/eliminar comentario haya que refrescar la pagina para que se vuelva a solicitar la informacion a la API con los nuevos cambios.

## Usuarios y contraseñas necesarias:

Siguiendo con lo especificado por la API, en esta aplicacion se distinguen 2 tipos de usuario, el usuario "corriente" y el usuario "moderador". Ambos deben autenticarse debidamente a traves de auth0.

### Usuario corriente:

El usuario corriente puede registrarse en la pagina al hacer click en "iniciar sesion" y siguiendo los pasos de registro de auth0
El usuario corriente puede navegar la pagina de la misma forma que el usuario que no inicio sesion, con la diferencia de que el usuario corriente puede <b>publicar comentarios</b> en cada uno de los productos exhibidos en la pagina.
Cada comentario tiene un contenido, que es el mensaje que el usuario corriente envia, y un autor, que es el email con el que se registró en la pagina. (quiza para mas privacidad se deba poder permitir si el usuario quiere mostrar su mail).

Para ingresar a la pagina como usuario corriente se pueden registrar directamente o pueden utilizar las siguientes credenciales:

Usuario: test@testtest.com.ar
Contraseña: Holahola123

(respetar la mayuscula inicial en la contraseña)

### Usuario moderador:

El usuario moderador es un usuario corriente solo que tiene permisos adicionales que <b>solo pueden ser otorgados a traves del dashboard en auth0</b>.
Al igual que el usuario corriente, el moderador puede enviar comentarios en los productos, pero ademas puede editar y eliminar comentarios de otros usuarios con el objetivo de mantener la pagina ordenada.

Para ingresar a la pagina como usuario moderador hay que utilizar las siguientes credenciales:

Usuario: franciscobunes@rocketmail.com
Contraseña: Holahola123





