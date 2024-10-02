import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { PeliculasService, Pelicula } from '../peliculas.service';

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  imports: [NgFor, JsonPipe],
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss'],
})
export class NuevoComponenteComponent {
  nombre = 'Gabriela De Freitas';

  // Declarar el array con el tipo explícito Pelicula[]
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {
    this.peliculas = this.peliculasService.getPeliculas(); // Obtener películas al construir el componente
  }

  getProfesion() {
    return 'Front-end'; // Corregido 'Fron end'
  }
}
