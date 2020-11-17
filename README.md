# Prueba-Logistica
Pagina web con busquedas y filtros JS 

Para la solución de la prueba se implementó una landing page donde se puede escoger si se desea buscar dentro de la base de datos o administrar la misma, esta se encuentra en el fichero index.html.

el fichero "buscar.html" presenta filtros para la busqueda dentro de la base de datos de elefantes, se pueden seleccionar por sexo, especie o nombre y se va actualizando de manera asíncrona el resultado en la pantalla.


el fichero "administrar.html" permite agregar un elefante nuevo a la base de datos ubicada en el servidor.

Se adjunto el archivo elephants.json que contiene la base de datos utilizada, la cual se puede cargar en el servidor json-server de npm que permite crear un servidor fake de API para pruebas, si se desea usar otro servidor, debe cambiarse la url en los scripts "main.js" y "agregar.js"

Los archivos HTML y CSS están comprimidos con minify y uglify de npm.
