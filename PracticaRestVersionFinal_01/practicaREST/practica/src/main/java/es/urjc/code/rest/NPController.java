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
    //String direcion = "D:/Uni/archivo.txt";
    String direcion = "C:/Users/losme/archivo.txt";
    NPController() throws IOException {
        leerfichero(direcion);
    }

    @GetMapping("/MejoresJugadores/")
    public ArrayList<NuevaPuntuacion> puntos() throws IOException {

        ordenar(listapuntuaciones);
        condicionvictoria(listapuntuaciones);
       
       return listapuntuaciones;
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

    public ArrayList<NuevaPuntuacion> condicionvictoria(ArrayList<NuevaPuntuacion> l) {
        for (int i = 0; i < l.size(); i++) {
            if (l.get(i).getpuntos() == 10) {
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
                        pw.println(listapuntuaciones.get(j).getNombre() + " " + listapuntuaciones.get(j).getpuntos());
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
                return new Integer(p2.getpuntos()).compareTo(new Integer(p1.getpuntos()));
            }
        });

    }

    @PostMapping("/MejoresJugadores/")
    @ResponseStatus(HttpStatus.CREATED)
    public NuevaPuntuacion puntuacion(@RequestBody NuevaPuntuacion orgpuntuacion) throws FileNotFoundException, IOException {

        for (int i = 0; i < listapuntuaciones.size(); i++) {

            if ((listapuntuaciones.get(i).getNombre()) == null ? (orgpuntuacion.getNombre()) == null : (listapuntuaciones.get(i).getNombre()).equals(orgpuntuacion.getNombre())) {

                orgpuntuacion.setpuntos(listapuntuaciones.get(i).getpuntos() + 1);
                listapuntuaciones.remove(i);

            } else {

                numeropuntuaciones++;
            }

        }

        listapuntuaciones.add(orgpuntuacion);

        return orgpuntuacion;
    }

    

}
