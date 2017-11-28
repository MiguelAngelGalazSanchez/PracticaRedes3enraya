package es.urjc.code.rest;

public class NuevaPuntuacion {

    private String nombre;
    private int puntos;

    public NuevaPuntuacion() {

    }

    public NuevaPuntuacion(String nombre, int puntos) {
        super();
        this.nombre = nombre;
        this.puntos = puntos;

    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getpuntos() {
        return puntos;
    }

    public void setpuntos(int puntos) {
        this.puntos = puntos;
    }

    @Override
    public String toString() {
        return " Nombre= " + nombre + ", puntos= " + puntos;
    }

}
