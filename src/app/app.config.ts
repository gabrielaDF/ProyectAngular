import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HolaMundoComponent } from './hola-mundo.component'; // Asegúrate de que la ruta sea correcta

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proporciona las rutas
    // Aquí puedes añadir otros proveedores si los necesitas
  ],
};
