# Portal de Normativas DGCyE

Portal web dinámico para centralizar la búsqueda, consulta y visualización de normativas, resoluciones, disposiciones, circulares y planes de estudio de la Dirección General de Cultura y Educación (DGCyE) de la Provincia de Buenos Aires.

Proyecto correspondiente a las Actividades 18 y 19 de la materia Proyecto de Implementación de Sitios Web Dinámicos (PWD) - EEST N.º 1 "Eduardo Ader", 7.º año de Programación.

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
- **Gestión de anexos**: Visualización y acceso a documentos PDF y planillas Excel (.xlsx) de demostración.
- **Sección de Planes de Estudio**: Acceso a consulta de planes de estudio y sus grillas curriculares.
- **Estado de resultados**: Contador de resultados, mensaje cuando no hay coincidencias, opción para limpiar filtros.
- **Diseño responsive**: Adaptable a computadoras de escritorio, notebooks, tablets y celulares.
- **Procesamiento en memoria**: Filtrado del lado del cliente con JavaScript Vanilla, usando `Array.prototype.filter()`, `String.prototype.includes()` y `String.prototype.toLowerCase()`.

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, diseño responsive y animaciones
- **JavaScript Vanilla** - Lógica, filtrado dinámico y renderizado en tiempo real
- **Métodos JavaScript**: `filter()`, `includes()`, `toLowerCase()`, `map()`, `join()`, `find()`

## Estructura del Proyecto

```
proyecto-dgce/
│
├── index.html          # Prototipo funcional integrado (HTML, CSS y JS)
│
├── docs/
│   ├── requerimientos.md                # Requerimientos funcionales y no funcionales (Actividad 18)
│   ├── Actividad 18 grupal dwd.pdf      # Documentación de la Actividad 18
│   └── Mockup.png                      # Mockup visual de referencia
│
├── README.md
└── Licencia.md
```

## Cómo Ejecutar el Prototipo

1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3. No requiere servidor web ni instalación de dependencias.

## Datos de Ejemplo

El prototipo incluye 4 normativas de demostración unificadas de las Actividades 18 y 19:

- **Resolución N.º 651/26** - Licitación Pública para talleres de EEST (Octubre 2026)
- **Disposición N.º 420/25** - Actualización de planes de estudio ciclo superior 7mo año Técnico en Programación (Marzo 2025)
- **Circular N.º 128/26** - Pautas para ferias de ciencia distritales y regionales ACTE GBA (Mayo 2026)
- **Resolución N.º 969/25** - Estructura curricular para el ciclo lectivo 2026 en Escuelas de Educación Técnica (Diciembre 2025)

*Los archivos anexos y datos son ficticios, utilizados únicamente con fines demostrativos.*

## Entregables

### Actividad 18
- Documentación de requerimientos, minuta de entrevista y mockup visual.

### Actividad 19
- **A. Código fuente**: Prototipo funcional integrado en `index.html` con HTML, CSS y JavaScript Vanilla.
- **B. Demostración funcional**: Búsqueda dinámica, filtrado combinado, visualización de detalles y anexos, diseño responsive.

## Autores

- Linares Zoe 
- Romero Alina 
- Wagner Valentin
- Thiago Salaberry

## Licencia

Este proyecto se distribuye bajo licencia MIT. Ver archivo `Licencia.md` para más detalles.
