# SkandiaCards

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Desiciones Técnicas 
>Estructura del proyecto: Organización modular con componentes standalone y separación clara de servicios, modelos y vistas.

>Consumo de APIs: Implementado con HttpClient centralizando la lógica en servicios reutilizables.

>Estructura de estilos: Estilos modulares con SCSS, variables CSS y media queries para un diseño responsive.

>Manejo de errores y excepciones: Estrategias con catchError y fallback para mantener la aplicación estable.

>UI con HTML5, CSS y SASS: Interfaz responsiva y funcional con layouts flexibles, tipografía Montserrat y componentes accesibles.