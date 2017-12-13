# PracticaRedes3enraya
# PROTOCOLO USADO
El protocolo se divide en dos partes: la negociación y la transferencia de datos. Como este coexiste con HTTP, la primera comunicación debe realizarse necesariamente a través de una petición HTTP.

Enviamos los datos en un único mensaje , en el cual por websockect procesamos los datos que se intercanbian cliente y servidor.

Esperamos que se envie el jugador uno y esto se envia al servidor , el servidor recibe que el jugador uno esta registrado y por tanto al darle al play de nuevo pedirá el nombre del jugador dos. Los nombres de los jugadores son pasados de igual forma, así podrá guardar las variables y actualizar correctamente el ranking.

A la hora de comunicar los movimientos, se ejecuta en el método update , en el cual nuestra función recibe una ficha del tablero y mediante websockect le llega al otro jugador; de igual forma que al saber si los puntos ya se han pasado.

Los mensajes se intercambian en formato JSON.

+ Representamos los objetos JSON como un arbol n-binario

  JsonNode node = mapper.readTree(message.getPayload());

+ Obtenemos el valor del atributo a través de su nombre 
Ej:

if(node.get("nj1")!=null)
                  
  nj1=node.get("nj1").asText();
  
+ Creamos un objeto JSON con Jackson

  ObjectNode responseNode = mapper.createObjectNode();
  
+ Añadimos atributos y valores 

  responseNode.put("nj1", nj1);
  
+ Enviamos el mensaje 
  
  s.sendMessage(new TextMessage(responseNode.toString()));
  
 Hacemos esto con los distintos atributos 
 
 {
         nj1:nombrejugador1,
         nj2:nombrejugador2,
         rj1:registradoj1,
         rj2:registradoj2,
         ptos:puntospasados}
         
 
        
        
connection.send(JSON.stringify(o));

Estos datos son enviados y transformados a JSON, nj1 enviara el nombre del jugador 1, por ejemplo "Pepe" , llegará al servidor y el cliente de nuevo recibirá el nombre , en este mismo momento, la variable registradoj1 se pondrá a true, entonces podremos insertar el nombre del jugador dos de la misma forma que el jugador uno, registrando al jugador dos y llegando al servidor, que sera enviado por el cliente y por tanto podrá comenzar la partida.

Las variables rj1 y rj2 contendrán los valores true y los atributos nombre  serán rellenados con el String introducido.

Tras acabar la partida e intercambiar en el metodo update, ya que este se actualiza cada frame, los distintos movimientos.

Para realizar todo este proceso, metemos en distintos atributos las variables del JSON. Por ejemplo si nombrejugador1 vale "Pepe" como hemos dicho, este valor llegará al manejador y será devuelto con este valor , guardándolo asi para los HTMLS
        
                
                   
                



# CÓMO JUGAR
![Pantalla de inicio](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/Pantalla%20de%20inicio.PNG)
+ Abrimos dos pantallas diferentes en nuestro navegador con la url: locahost:8090/TresEnRaya.html

![Jugador1](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/Jugador1.PNG)
+ Le damos a play en una de las pantallas, ingresamos el nombre del jugador 1. Y esperamos a que llegue el jugador 2.

![Jugador2](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/jugador2.PNG)
+ Ingresamos el nombre del jugador 2.Y comienza el juego el juego.

![Poner_X](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/PonerX.PNG)
+ Añadimos una X, y no podemos añadir más fichas hasta que el otro jugador ponga la suya.

![Poner_O](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/PonerO.PNG)
+ Se añade el 0 y esperamos al otro jugador

![Ganador2](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/GanarJugador2.PNG)
+ Una vez terminado el juego aparecerá el mensaje del jugador que ha ganado la partida.

![MejorJugador](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/imagenesFase4/MejoresJugadores2.PNG)
+ Podemos meternos en mejores jugadores para comprobar los puntos que llevan acumulados los jugadores en ambas pantallas y dándole atrás podemos volver a jugar o bien con nuevos jugadores o con los mismos.

# DIAGRAMA
![Diagrama](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/diagramaws.png)
# LINK VIDEO
[![Everything Is AWESOME](https://github.com/MiguelAngelGalazSanchez/PracticaRedes3enraya/blob/fasev4/Sin%20t%C3%ADtulo.png)](https://www.youtube.com/watch?v=f1HxMqZEeeU&feature=youtu.be "Tres en raya con Websocket")


