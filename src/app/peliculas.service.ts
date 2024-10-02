import { Injectable } from '@angular/core';

// Definir la interfaz para las películas
export interface Pelicula {
  nombre: string;
  puntuacion: number;
}

@Injectable({
  providedIn: 'root', // Esto permite que el servicio esté disponible en toda la aplicación
})
export class PeliculasService {
  getPeliculas(): Pelicula[] {
    //llamada a la API correspondiente
    return [
      {
        nombre: 'Harry Potter',
        puntuacion: 10,
      },
      {
        nombre: 'Un Amor para Recordar',
        puntuacion: 10,
      },
      {
        nombre: 'Rápido y Furioso',
        puntuacion: 9,
      },
    ];
  }
}
