 ### Requerimientos del sistema

###  Requerimientos funcionales

| Código | Requerimiento | Descripción |

| RF-01 | Búsqueda dinámica | El sistema debe permitir ingresar palabras clave, temas o números de normativa en una barra de búsqueda y mostrar resultados coincidentes sin recargar la página. |
| RF-02 | Filtro por año | El usuario debe poder seleccionar un año para consultar las normativas publicadas durante ese período. |
| RF-03 | Filtro por mes y calendario | El sistema debe permitir seleccionar un mes o una fecha mediante un calendario histórico para localizar documentos. |
| RF-04 | Filtro por tipo de norma | El usuario debe poder filtrar los resultados por Resolución, Disposición o Circular. |
| RF-05 | Listado de resultados | El sistema debe mostrar los documentos encontrados con información como número, tipo, fecha y descripción. |
| RF-06 | Visualización de documentos | El usuario debe poder acceder al documento seleccionado y consultar la información y los anexos asociados. |
| RF-07 | Descarga de archivos | El sistema debe ofrecer enlaces para descargar los documentos PDF y los archivos anexos disponibles, como planillas. |
| RF-08 | Consulta de planes de estudio | El portal debe permitir localizar y consultar los planes de estudio y sus grillas asociadas. |

### Requerimientos no funcionales

| Código | Requerimiento | Descripción |

| RNF-01 | Rendimiento | El filtrado de datos debe ejecutarse del lado del cliente, utilizando JavaScript en memoria, en un tiempo menor a 100 ms, según lo establecido en la consigna. |
| RNF-02 | Compatibilidad y responsividad | La interfaz debe adaptarse a dispositivos móviles y a computadoras de escritorio institucionales, incluyendo pantallas de 1080p. |
| RNF-03 | Usabilidad | La información debe presentarse de manera clara y organizada para que docentes, inspectores y directores puedan encontrar documentos fácilmente. |
| RNF-04 | Actualización sin recarga | Las búsquedas y los filtros deben actualizar los resultados sin necesidad de recargar la página. |
| RNF-05 | Seguridad y despliegue | El proyecto debe contemplar su despliegue en la nube, por ejemplo en Vercel, Render o servicios similares. |
| RNF-06 | Integración continua | El repositorio GitHub debe poder conectarse con un proceso de integración y despliegue continuo (CI/CD). |

## 3. Modelo de datos inicial

Para las primeras pruebas se utilizará un arreglo de objetos en JavaScript. Cada objeto representa una normativa y contiene su identificador, número, tipo, año, mes y descripción.

```javascript
// BASE DE DATOS LOCAL DE NORMATIVAS (DGCyE - GBA)

const normativasDGCyE = [
    {
        id: 1,
        nro: "651/26",
        tipo: "Resolución",
        anio: 2026,
        mes: "Octubre",
        desc: "Aprueba pliegos y autoriza llamada a Licitación Pública para talleres de EEST."
    },
    {
        id: 2,
        nro: "420/25",
        tipo: "Disposición",
        anio: 2025,
        mes: "Marzo",
        desc: "Actualización de planes de estudio ciclo superior 7mo año Técnico en Programación."
    },
    {
        id: 3,
        nro: "128/26",
        tipo: "Circular",
        anio: 2026,
        mes: "Mayo",
        desc: "Pautas organizativas para ferias de ciencia distritales y regionales ACTE GBA."
    }
];

// Cantidad total de normativas cargadas
console.log("Listado total de normativas cargadas:", normativasDGCyE.length);

// Filtrado de normativas por año
const normativas2026 = normativasDGCyE.filter(
    normativa => normativa.anio === 2026
);

console.log("Normativas del año 2026:", normativas2026);
```

###  Descripción de los campos

| Campo | Tipo de dato | Función |
|---|---|---|
| `id` | Number | Identificador único de la normativa dentro del arreglo. |
| `nro` | String | Número o identificación de la norma. |
| `tipo` | String | Categoría: Resolución, Disposición o Circular. |
| `anio` | Number | Año de publicación. |
| `mes` | String | Mes de publicación. |
| `desc` | String | Descripción breve del contenido. |

## 4. Mockup o boceto inicial

El boceto representa la pantalla principal propuesta para el portal. Se organiza en un menú lateral de navegación, un área central de búsqueda y resultados, y un panel lateral con calendario histórico, tipos de norma y documentos destacados.

La interfaz incluye los elementos necesarios para representar los requerimientos funcionales: buscador por palabras clave, filtros por año, mes y tipo de norma, listado de resultados, acceso a detalles y descarga de anexos.

**Archivo:** `mockup.png`

> Los nombres, cantidades y documentos visibles en el mockup son ilustrativos y se utilizan únicamente para representar el diseño. No constituyen información oficial verificada.

## 5. Organización de los archivos

proyecto-dgce/
├── docs/
│   ├── requerimientos.md
│   ├── actividad 18 grupal dwd.pdf
│   └── mockup.png
└── README.md
