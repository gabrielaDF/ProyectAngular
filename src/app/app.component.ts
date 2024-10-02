import { Component } from '@angular/core';
import { HolaMundoComponent } from './hola-mundo.component'; // Asegúrate de que la ruta sea correcta
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoTestComponent } from './nuevo-test/nuevo-test.component';


@Component({
  selector: 'app-root',
  template: `
    <h2>Bienvenido a mi aplicación!</h2>
    <app-hola-mundo></app-hola-mundo>
    <app-nuevo-componente> </app-nuevo-componente>
    <app-nuevo-test></app-nuevo-test>
  `,
  standalone: true, // Marca el componente como independiente
  imports: [HolaMundoComponent, NuevoComponenteComponent, NuevoTestComponent], // Importa el componente aquí
})
export class AppComponent {}
