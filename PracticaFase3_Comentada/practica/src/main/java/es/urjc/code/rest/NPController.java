package es.urjc.code.rest;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NPController {

    private ArrayList<NuevaPuntuacion> listapuntuaciones = new ArrayList<NuevaPuntuacion>();
    private Map<Long, NuevaPuntuacion> anuncios = new ConcurrentHashMap<>();
    int numeropuntuaciones = 0;
    String direcion = "D:/Uni/archivo.txt";

    NPController() throws IOException { //constructor del controlador para inicializarlo con el txt
        leerfichero(direcion);
    }

    @GetMapping("/MejoresJugadores/")
    public String puntos() throws IOException { 

        ordenar(listapuntuaciones); //ordena la puntuacion 
        condicionvictoria(listapuntuaciones);
        //Table hace referencia a la tabla como conjunto.
        //td hace referencia a cada fila de dicha tabla
        String estilo = "<style>"
                + "body {\n" + "background-image: url(/FONDO.png);\n" + "}\n"
                
                + "Table, td {\n"
                + "margin-top: 5%; \n"
                + "margin-left: 35%; \n"
                + "border-collapse: separate;\n"
                + "}\n"
                
                + "td {\n"
                + "font-family: Showcard Gothic;"
                + "width= 30%;\n"
                + "text-shadow:2px 1px 2px white;\n"
                + "text-align: left;\n"
                + "padding: 5px 6px;\n"
                + "border-radius:15px; \n"
                + "background: -webkit-linear-gradient(white, purple);\n"
                + "font-size: 25px; \n"
                +" box-shadow: 5px 5px 2px black;"
                + "}\n"
                
                + "table {\n"
                + "width: 25%;\n"
                + "border-collapse: separate;\n"
                + "}\n"
                
                + "h1 {\n"
                + "font-size: 60px; \n"
                + "font-family: Showcard Gothic;\n"
                + "-webkit-text-stroke: 3px black;"
                + "text-align: center;\n"
                + "margin-top: 15%; \n"
                + "color: white;\n"
                + "text-shadow:5px 5px 3px black;\n"
                + "</style>\n";

        String tabla = "";
        String cabecera = "<html><head>" + estilo + "<h1>Puntuaciones de los jugadores</h1></head>";
        String cuerpo1 = "<body><Table>";
        for (int k = 0; k < listapuntuaciones.size(); k++) {
            tabla += "<tr><td>" + listapuntuaciones.get(k).getNombre() + "</td><td>" + String.valueOf(listapuntuaciones.get(k).getptos()) + "</td></tr>";
        }
        String cuerpo2 = "</Table></body></html>";
        return cabecera + cuerpo1 + tabla + cuerpo2; //pintamos la lista a traves del txt en el html

    }

    public void leerfichero(String archivo) throws FileNotFoundException, IOException {

        File arc = null;
        String nombre = " ";
        int puntos = 0;
        try {
            arc = new File(archivo);
            FileReader f = new FileReader(arc);
            BufferedReader b = new BufferedReader(f);

            String cadena;

            while ((cadena = b.readLine()) != null) {
                String[] c2 = cadena.split(" ");//Me guarda todos los valores como strngs en un array que estén separados por espacios
                nombre = c2[0];
                puntos = Integer.parseInt(c2[1]);
                //Comprueba si los num son negativos y si lo es, coge el valor absoluto para meterlos en la tarea.

                //Si inicio y fin no son logicos, no los mete.
                NuevaPuntuacion nueva = new NuevaPuntuacion(nombre, puntos);

                listapuntuaciones.add(nueva);

            }
            b.close();

        } catch (FileNotFoundException e) {
            System.out.println("Directorio incorrecto");
        }
    }

    public ArrayList<NuevaPuntuacion> condicionvictoria(ArrayList<NuevaPuntuacion> l) { //si cualquier elemento de la lista llega a 10 puntos se vacia la lista y se borra el fichero.
        for (int i = 0; i < l.size(); i++) {
            if (l.get(i).getptos() == 10) {
                l.clear();
                File fichero = new File(direcion);
                if (fichero.delete()) {
                    System.out.println("El fichero ha sido borrado satisfactoriamente");
                } else {
                    System.out.println("El fichero no puede ser borrado");
                }

            } else {

                File fichero = new File(direcion);
                if (fichero.delete()) {
                    System.out.println("El fichero ha sido borrado satisfactoriamente");
                } else {
                    System.out.println("El fichero no puede ser borrado");
                }

                //Limpia el archivo txt
                //Escribe en el archivo los valores de la lista
                FileWriter fw = null;
                PrintWriter pw = null;
                try {
                    fw = new FileWriter(direcion);
                    pw = new PrintWriter(fw);

                    for (int j = 0; j < listapuntuaciones.size(); j++) {
                        pw.println(listapuntuaciones.get(j).getNombre() + " " + listapuntuaciones.get(j).getptos()); //si no llega a 10 escribes el nuevo jugador y sus puntos
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    try {
                        // Nuevamente aprovechamos el finally para 
                        // asegurarnos que se cierra el fichero.
                        if (null != fw) {
                            fw.close();
                        }
                    } catch (Exception e2) {
                        e2.printStackTrace();
                    }
                }

            }

        }
        return l;
    }

    public static void ordenar(ArrayList<NuevaPuntuacion> l) {

        Collections.sort(l, new Comparator<NuevaPuntuacion>() {
            @Override
            public int compare(NuevaPuntuacion p1, NuevaPuntuacion p2) {
                return new Integer(p2.getptos()).compareTo(new Integer(p1.getptos()));
            }
        });

    }

    @PostMapping("/MejoresJugadores/")
    @ResponseStatus(HttpStatus.CREATED) //hace un metodo post para cada lista
    public NuevaPuntuacion puntuacion(@RequestBody NuevaPuntuacion orgpuntuacion) throws FileNotFoundException, IOException {

        for (int i = 0; i < listapuntuaciones.size(); i++) {

            if ((listapuntuaciones.get(i).getNombre()) == null ? (orgpuntuacion.getNombre()) == null : (listapuntuaciones.get(i).getNombre()).equals(orgpuntuacion.getNombre())) {

                orgpuntuacion.setpuntos(listapuntuaciones.get(i).getptos() + 1); //modifica los puntos si el nombre ya esta en la lista 
                listapuntuaciones.remove(i); //Juan 1 Juan 2 elimino Juan 1

            } else {

                numeropuntuaciones++; //si es la primera vez q entra se añade
            }

        }

        listapuntuaciones.add(orgpuntuacion); //añado el jugador

        return orgpuntuacion;
    }

    
}
