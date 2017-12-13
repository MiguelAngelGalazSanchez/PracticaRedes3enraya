# PracticaRedes3enraya
# PROTOCOLO USADO
El protocolo se divide en dos partes: la negociación y la transferencia de datos. Como este coexiste con HTTP, la primera comunicación debe realizarse necesariamente a través de una petición HTTP.

Enviamos los datos en un único mensaje , en el cual por websockect enviamos los datos que se intercanbian cliente y servidor.

Esperamos que se envie el jugador uno y esto se envia al servidor , el servidor recibe que el jugador uno esta registrado y por tanto al darle al play de nuevo pedirá el nombre del jugador dos. Los nombres de los jugadores son pasados de igual forma, así podrá guardar las variables y actualizar correctamente el ranking.

A la hora de comunicar los movimientos, se ejecuta en el método update , en el cual nuestra función recibe una ficha del tablero y mediante websockect le llega al otro jugador; de igual forma que al saber si los puntos ya se han pasado.

Los mensajes se intercambian en formato JSON.



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


