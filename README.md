# Portal de Normativas DGCyE

Portal web dinámico para centralizar la búsqueda, consulta y visualización de normativas, resoluciones, disposiciones, circulares y planes de estudio de la Dirección General de Cultura y Educación (DGCyE) de la Provincia de Buenos Aires.

Proyecto correspondiente a las Actividades 18, 19 y 20 de la materia Proyecto de Implementación de Sitios Web Dinámicos (PWD) - EEST N.º 1 "Eduardo Ader", 7.º año de Programación.

## Descripción

El Portal de Normativas DGCyE facilita la búsqueda y consulta de documentación institucional educativa, permitiendo a inspectores, directores de escuelas técnicas y docentes encontrar normativas sin tener que revisar manualmente numerosos archivos PDF. 

## Funcionalidades Implementadas (Actividad 19)

- **Buscador dinámico en tiempo real**: Búsqueda por número de normativa, palabras clave o descripción mientras el usuario escribe (evento `input`), sin recargar la página.
- **Filtrado por tipo de normativa**: Filtrado por Resolución, Disposición, Circular o todas las normativas.
- **Filtrado por año**: Selector de años con los períodos presentes en los datos.
- **Filtrado por mes**: Selector de meses para localizar normativas según su período de publicación.
- **Calendario histórico**: Panel lateral con calendario representativo del período.
- **Renderizado dinámico**: Generación de tarjetas de resultados con JavaScript usando `Array.prototype.map()` y `join()`.
- **Filtrado combinado**: Todos los filtros funcionan en conjunto con el buscador.
- **Visualización de detalles**: Modal con información completa de cada normativa, categoría, fecha de publicación y anexos asociados.
- **Gestión de anexos**: Los anexos muestran avisos de demostración; no descargan archivos reales.
- **Sección de Planes de Estudio**: Sección de demostración, pendiente de contenido completo.
- **Estado de resultados**: Contador de resultados, mensaje cuando no hay coincidencias, opción para limpiar filtros.
- **Diseño responsive**: Adaptable a computadoras de escritorio, notebooks, tablets y celulares.
- **Procesamiento en memoria**: Filtrado del lado del cliente con JavaScript Vanilla, usando `Array.prototype.filter()`, `String.prototype.includes()` y `String.prototype.toLowerCase()`.

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, diseño responsive y animaciones
- **JavaScript Vanilla** - Lógica, filtrado dinámico y renderizado en tiempo real
- **Font Awesome** - Iconos cargados desde un CDN (requieren conexión a Internet).
- **Métodos JavaScript**: `filter()`, `includes()`, `toLowerCase()`, `map()`, `join()`, `find()`

## Estructura del Proyecto

```
proyecto-dgce/
│
├── index.html          # Estructura del portal
├── css/styles.css      # Estilos
├── js/app.js           # Datos y funcionamiento del portal
├── docs/
│   ├── actividad-18/       # Requerimientos, informe y mockup
│   └── actividad-20/       # Investigación, guía, pitch y QR
│

├── README.md
└── Licencia.md
```

## Cómo Ejecutar el Prototipo

1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3. No requiere servidor web ni instalación de dependencias. Los iconos de Font Awesome requieren conexión a Internet.

## Datos de Ejemplo

El prototipo incluye 4 normativas de demostración unificadas de las Actividades 18, 19 y 20:

- **Resolución N.º 651/26** - Licitación Pública para talleres de EEST (Octubre 2026)
- **Disposición N.º 420/25** - Actualización de planes de estudio ciclo superior 7mo año Técnico en Programación (Marzo 2025)
- **Circular N.º 128/26** - Pautas para ferias de ciencia distritales y regionales ACTE GBA (Mayo 2026)
- **Resolución N.º 969/25** - Estructura curricular para el ciclo lectivo 2026 en Escuelas de Educación Técnica (Diciembre 2025)

*Los archivos anexos y datos son ficticios, utilizados únicamente con fines demostrativos.*

## Entregables

### Actividad 20
- [Informe de investigación en PDF](docs/actividad-20/Actividad%2020%20-%20Investigacion%20Hugging%20Face.pdf).
- [Investigación sobre Hugging Face y propuesta de asistente](docs/actividad-20/actividad-20-ia.md). El asistente es una propuesta y todavía no está integrado.
- [Guía de publicación y entrega](docs/actividad-20/actividad-20-entrega.md).
- [Guion para el pitch final](docs/actividad-20/actividad-20-pitch.md).
- [Portal publicado](https://proyecto-dgce.vercel.app/).
- [Código QR del portal](docs/actividad-20/qr-portal.svg): escanear para comprobar el acceso.

### Actividad 18
- Documentación de requerimientos, minuta de entrevista y mockup visual.

### Actividad 19
- **A. Código fuente**: Prototipo funcional con HTML, CSS y JavaScript Vanilla en archivos separados.
- **B. Demostración funcional**: Búsqueda dinámica, filtrado combinado, visualización de detalles y anexos, diseño responsive.

## Autores

- Linares Zoe 
- Romero Alina 
- Wagner Valentin
- Thiago Salaberry

## Licencia

Este proyecto se distribuye bajo licencia MIT. Ver archivo `Licencia.md` para más detalles.
